<?php

namespace App\Http\Controllers;

//llamar los modelos q voy a ocupar

use App\Models\Docente;
use App\Models\Empleador;
use App\Models\OfertasLaborales;
use App\Models\Estudiante;
use App\Models\OfertaLaboralEstudiante;
use App\Models\Usuario;
//template para correo
use App\Traits\TemplateCorreo;
//permite traer la data del apirest
use Illuminate\Http\Request;

class OfertaLaboralEstudianteController extends Controller
{
    //reutilizando el codigo con los correos
    use TemplateCorreo;

    //el estudiante postula a una oferta laboral//
    public function listarTodasOfertaEstudianteExternal_us($external_id){
        $ObjOfertaEstudiante=null;
        try {
            $ObjEstudiante=$this->buscarEstudiante($external_id);
            $ObjOfertaEstudiante=
            OfertaLaboralEstudiante::join('oferta_laboral','oferta_laboral.id','ofertalaboral_estudiante.fk_oferta_laboral')
            ->select('oferta_laboral.puesto',
                    'oferta_laboral.external_of',
                    'oferta_laboral.estado as estadoOfLab',
                'ofertalaboral_estudiante.*')
            ->where('ofertalaboral_estudiante.fk_estudiante',$ObjEstudiante['id'])->get();
            return response()->json(["mensaje"=>$ObjOfertaEstudiante,"Siglas"=>"OE",200]);

        } catch (\Throwable $th) {
            return response()->json(["mensaje"=>$th->getMessage(),
                                        "Siglas"=>"ONE","error"=>$th->getMessage()]);
        }
    }
    public function PostularOfertaLaboral(Request $request,$external_id){
        if($request->json()){
            $datos=$request->json()->all();

            //comprobar el usuario es un estudiante
            try {

                $existeUsuarioPostulante=Usuario::where('external_us',$external_id)->where('tipoUsuario',2)->first();
                if(!$existeUsuarioPostulante){
                    return response()->json(["mensaje"=>"El usuario postulante con el identificador ".$external_id." no es un postulante ","Siglas"=>"UNE"]);
                }

                $estudianteValidado=Estudiante::where('fk_usuario',$existeUsuarioPostulante->id)->where('estado',1)->first();
                if(!$estudianteValidado){
                    return response()->json(["mensaje"=>"No puede postular a está oferta por el momento, no ha sido  aprobado su formulario de registro","Siglas"=>"UNE"]);
                }
                //validar si existe la oferta laboral
                $existeOferta=OfertasLaborales::where('external_of',$datos['external_of'])->first();
                if(!$existeOferta){
                    return response()->json(["mensaje"=>"La oferta laboral con el identificador ".$datos['external_of']." no existe","Siglas"=>"OFNE"]);
                }

                //verificamos si el estudiante no posutle dos veces a la misma oferta
                $estudianteOferta=OfertaLaboralEstudiante::where('fk_estudiante',$estudianteValidado->id)->where('fk_oferta_laboral', $existeOferta->id)->first();
                if($estudianteOferta){
                    return response()->json(["mensaje"=>"Usted ya está postulando a esta oferta","Siglas"=>"OR"]);
                }

                // si pasa todo bien todas las validaciones entonces puede el estudiante postular
                $ObjOfertaLaboralEstudiante=new OfertaLaboralEstudiante();
                $ObjOfertaLaboralEstudiante->fk_estudiante=$estudianteValidado->id;
                $ObjOfertaLaboralEstudiante->fk_oferta_laboral=$existeOferta->id;
                $ObjOfertaLaboralEstudiante->estado=$request['estado'];
                $ObjOfertaLaboralEstudiante->observaciones=$request['observaciones'];
                $ObjOfertaLaboralEstudiante->external_of_est="OfEst".Utilidades\UUID::v4();
                $ObjOfertaLaboralEstudiante->save();

                //buscamos el dueño de esa oferta para notificar al empleador el nuevo postulante en la oferta laboral
                $empleador=Empleador::join('usuario','usuario.id','empleador.fk_usuario')->where('empleador.id',$existeOferta->fk_empleador)->first();
                // se envia esta data para poder realizar la impresion del correo
                $datosOfertaEstudiante=array(
                    "nom_representante_legal"=>$empleador->nom_representante_legal,
                    "razon_empresa"=>$empleador->razon_empresa,
                    "puesto"=>$existeOferta->puesto,
                    "correo"=>$empleador->correo
                );
                //enviamos el correo
                $notificarEmpeladorListaInteresados=$this->notificarAplicarOferta($datosOfertaEstudiante);

                return response()->json(["mensaje"=>"Operación Exitosa",
                                            "Siglas"=>"OE",
                                            "notificarEmpleadorListaInteresados"=>$notificarEmpeladorListaInteresados,
                                            "OferEstudiante"=>$ObjOfertaLaboralEstudiante,
                                        200]);
            } catch (\Throwable $th) {
                return response()->json(["mensaje"=>$th->getMessage(),
                                        "Siglas"=>"ONE",
                                        "request"=>$request->json()->all()]);
            }
        }else{
            return response()->json(["mensaje"=>"Los datos no tienene el formato deseado",
                                    "Siglas"=>"DNF",
                                    "reques"=>$request->json()->all(),400]);
        }

    }
    // Listar todos los titulos estado cero y no cero//con sus datos de formulario
    public function listarOfertasLaboralesExternal_us( $external_id){
        //obtener todos los usuarios que sean postulante
        try {
            //buscar si existe el usuario que realiza la peticion
            $ObjUsuario=Usuario::where("external_us",$external_id)->first();
            //busco si ese usuario es un estudiante
            $ObjEmpleador=Empleador::where("fk_usuario","=",$ObjUsuario->id)->first();
            //4 estado //0== eliminado,1==activo,2==aprobado,3==rechazado
            $ObjOfertaLaboral=OfertasLaborales::where("fk_empleador","=",$ObjEmpleador->id)->where("estado","!=","0")->orderBy('id', 'DESC')->get();
            return response()->json(["mensaje"=>$ObjOfertaLaboral,
                                     "Siglas"=>"OE","fechaCreacion"=>($ObjEmpleador->updated_at)->format('Y-m-d'),200]);
        } catch (\Throwable $th) {
            return response()->json(["mensaje"=>$th->getMessage(),
                                     "Siglas"=>"ONE","error"=>$th->getMessage(),400]);
        }
    }
    public function resumenOfertaEstudiantesFinalizada_external_of($external_id){
         //obtener todos los usuarios que sean postulante
         $EstudiantePostulanOfertaExternal_of=null;
         try {
             //buscamos la oferta laboral el id , de la oferta laboral
             $ObjOfertaLaboral=$this->buscarOfertaLaboral($external_id);
             $EstudiantePostulanOfertaExternal_of=OfertaLaboralEstudiante::join("estudiante","estudiante.id","=","ofertalaboral_estudiante.fk_estudiante")
             ->join("usuario","usuario.id","=","estudiante.fk_usuario")
             ->select("estudiante.nombre",
             "estudiante.external_es",
             "estudiante.genero",
             "estudiante.fecha_nacimiento",
             "estudiante.direccion_domicilio",
             "estudiante.cedula",
             "estudiante.telefono",
             "estudiante.apellido",
             "ofertalaboral_estudiante.*",
             "usuario.external_us",
             "usuario.correo")
             ->where("ofertalaboral_estudiante.fk_oferta_laboral", "=", $ObjOfertaLaboral->id)->get();
            return response()->json(["mensaje"=>$EstudiantePostulanOfertaExternal_of,"Siglas"=>"OE",200]);
         } catch (\Throwable $th) {
             return response()->json(["mensaje"=>$th->getMessage(),"Siglas"=>"ONE","error"=>$th,400]);
         }
    }
    // listamos todos los estudiante que han postulado a una oferta xxx
    public function listTodasEstudiantePostulanOfertaExternal_of_encargado($external_id){
        //obtener todos los usuarios que sean postulante
        $EstudiantePostulanOfertaExternal_of=null;
        try {
            //buscamos la oferta laboral el id , de la oferta laboral
            $ObjOfertaLaboral=$this->buscarOfertaLaboral($external_id);
            $EstudiantePostulanOfertaExternal_of=
            OfertaLaboralEstudiante::join("estudiante","estudiante.id","=","ofertalaboral_estudiante.fk_estudiante")
            ->join("usuario","usuario.id","=","estudiante.fk_usuario")
            ->select("estudiante.nombre",
            "estudiante.external_es",
            "estudiante.genero",
            "estudiante.fecha_nacimiento",
            "estudiante.direccion_domicilio",
            "estudiante.cedula",
            "estudiante.telefono",
            "estudiante.apellido",
            "ofertalaboral_estudiante.*",
            "usuario.external_us",
            "usuario.correo")
            ->where("ofertalaboral_estudiante.estado",">=",0)
            ->where("ofertalaboral_estudiante.estado","<=",1)
            ->where("ofertalaboral_estudiante.fk_oferta_laboral", "=", $ObjOfertaLaboral->id)->get();
           return response()->json(["mensaje"=>$EstudiantePostulanOfertaExternal_of,"Siglas"=>"OE",200]);
        } catch (\Throwable $th) {
            return response()->json(["mensaje"=>$th->getMessage(),"Siglas"=>"ONE","error"=>$th->getMessage(),400]);
        }
    }
     // listamos todos los estudiante que han postulado a una oferta xxx
     public function listTodasEstudiantePostulanOfertaExternal_of_empleador($external_id){
        //obtener todos los usuarios que sean postulante
        $EstudiantePostulanOfertaExternal_of=null;
        try {
            //buscamos la oferta laboral el id , de la oferta laboral
            $ObjOfertaLaboral=$this->buscarOfertaLaboral($external_id);
            $EstudiantePostulanOfertaExternal_of=OfertaLaboralEstudiante::join("estudiante","estudiante.id","=","ofertalaboral_estudiante.fk_estudiante")
            ->join("usuario","usuario.id","=","estudiante.fk_usuario")
            ->select("estudiante.nombre",
            "estudiante.external_es",
            "estudiante.genero",
            "estudiante.fecha_nacimiento",
            "estudiante.direccion_domicilio",
            "estudiante.cedula",
            "estudiante.telefono",
            "estudiante.apellido",
            "ofertalaboral_estudiante.*",
            "usuario.external_us",
            "usuario.correo")
            ->where("ofertalaboral_estudiante.estado",">=",1)
            ->where("ofertalaboral_estudiante.estado","<=",2)
            ->where("ofertalaboral_estudiante.fk_oferta_laboral", "=", $ObjOfertaLaboral->id)->get();
           return response()->json(["mensaje"=>$EstudiantePostulanOfertaExternal_of,"Siglas"=>"OE",200]);
        } catch (\Throwable $th) {
            return response()->json(["mensaje"=>$th->getMessage(),"Siglas"=>"ONE","error"=>$th,400]);
        }
    }
    // Listar todos los titulos estado cero y no cero//con sus datos de formulario
    public function listarOfertasLaboralesValidadasEncargado(){
        //obtener todos los usuarios que sean postulante
        try {
            //obtenemos las que ya estan aprobado usario ==2 y las que se tienen que publicar ==3
            $ObjOfertasLaborales=OfertaLaboralEstudiante::get();
            return response()->json(["mensaje"=>$ObjOfertasLaborales,"Siglas"=>"OE",200]);
        } catch (\Throwable $th) {
            return response()->json(["mensaje"=>$th->getMessage(),"Siglas"=>"ONE","error"=>$th->getMessage(),400]);
        }
    }
    public function actulizarOfertaLaboral(Request $request,$external_id){
        if($request->json()){

            try {
                $ObjOfertaLaboral=OfertasLaborales::where("external_of","=", $external_id)->update(
                    array(
                        'puesto'=>$request['puesto'],
                        'descripcion'=>$request['descripcion'],
                        'estado'=>$request['estado'],
                        'lugar'=>$request['lugar'],
                        'obervaciones'=>$request['obervaciones'],
                        'requisitos'=>$request['requisitos']
                    ));

                return response()->json(["mensaje"=>"Operación Exitosa",
                                         "Objeto"=>$ObjOfertaLaboral,
                                         "resques"=>$request->json()->all(),
                                         "respuesta"=>$ObjOfertaLaboral,
                                         "Siglas"=>"OE",200]);
                //respuesta exitoso o no en la inserrccion
            } catch (\Throwable $th) {
                return response()->json(["mensaje"=>$th->getMessage(),
                                        "resques"=>$request->json()->all(),
                                        "Siglas"=>"ONE","error"=>$th->getMessage()]);
            }
        }else{
            return response()->json(["mensaje"=>"Los datos no tienene el formato deseado","Siglas"=>"DNF",400]);
        }
    }
    //reporte de las ofertas//cuando se contraton//cuando desvinculados//cuandots no cotratado
    public function reporteOfertaEstudiante(){
        try {
            $arrayReporte=array();
            $objOfertaLaboral=OfertasLaborales::where("estado",">",0)
            ->get();
            foreach ($objOfertaLaboral as $key => $value) {
                $empleador=Empleador::join("usuario","usuario.id","empleador.fk_usuario")
                ->select("empleador.razon_empresa",
                "empleador.id",
                "usuario.correo")
                ->where("empleador.id",$value['fk_empleador'])->first();
                $arrayReporte[$key]=array(
                    "updatedAtOferta"=>$value['updated_at'],
                    "puesto"=>$value['puesto'],
                    "idOferta"=>$value['id'],
                    "empleador"=>$empleador->razon_empresa,
                    "correo"=>$empleador->correo,
                    "external_of"=>$value['external_of'],
                    "requisitos"=>$value['requisitos'],
                    "fk_empleador"=>$empleador->id,
                    "estadoValidacionOferta"=>$value['estado'],
                    "obervaciones"=>$value['obervaciones'],
                    "descripcion"=>$value['descripcion'],
                    "numeroPostulantes"=>OfertaLaboralEstudiante::where("fk_oferta_laboral",$value['id'])->count(),
                    "desvinculados"=>OfertaLaboralEstudiante::where("estado",0)->where("fk_oferta_laboral",$value['id'])->count(),
                    "noContratados"=>OfertaLaboralEstudiante::where("estado",1)->where("fk_oferta_laboral",$value['id'])->count(),
                    "contratados"=>OfertaLaboralEstudiante::where("estado",2)->where("fk_oferta_laboral",$value['id'])->count()
                );
            }
            return  response()->json(["mensaje"=>$arrayReporte,"Siglas"=>"OE",200]);
        } catch (\Throwable $th) {
            return  response()->json(["mensaje"=>$th,"Siglas"=>"ONE","error"=>$th,400]);
        }
    }
    // el empleador le da finalizar la publicacion de la oferta laboral y los postulantes son actualizados
    //para revisar si existe contratados o no
    public function finalizarOfertaLaboralEstudiante(Request $request,$external_us){
        $OfertaLaboralPostulanteBorrar=null;
        $arrayRespuesta=array();
        if($request->json()){
           try {
                $existeUsuario=Usuario::where('tipoUsuario',6)->where('external_us',$external_us)->first();
                if(!$existeUsuario){
                    return response()->json(["mensaje"=>"El usuario  con el identificador ".$external_us." no existe ","Siglas"=>"UNE"]);
                }
                $tienPermisos=Empleador::where('fk_usuario',$existeUsuario->id)->where('estado',1)->first();
                if(!$tienPermisos){
                    return response()->json(["mensaje"=>"El empleador con el identificador ".$external_us." no tiene permisos para realizar esta acción ","Siglas"=>"NTP"]);
                }
               $fk_oferta_labora=null;
               $existeContratado=false;
               foreach ($request->json() as $key => $value) {
                   //buscar que usuario fueron seleccionado
                   $OfertaLaboralPostulanteBorrar=
                   OfertaLaboralEstudiante::join("estudiante","estudiante.id","ofertalaboral_estudiante.fk_estudiante")
                   ->join("oferta_laboral","oferta_laboral.id","ofertalaboral_estudiante.fk_oferta_laboral")
                   ->where("ofertalaboral_estudiante.external_of_est",$value['external_of_est'])
                   ->update(array('ofertalaboral_estudiante.estado'=>$value['estado']));

                   $arrayRespuesta[$key]=array(
                       "estudiante"=>$value['external_of_est'],
                       "estado"=> $OfertaLaboralPostulanteBorrar
                   );

                   $fk_oferta_labora=$value['fk_oferta_laboral'];
                   //revisar si existe contratado o no
                   if($value['estado']==2){
                    $existeContratado=true;
                   }
               }
               //buscamos la oferta laboral que tenga ese id
               $ofertaLaboralTemporal=OfertasLaborales::where("id",$fk_oferta_labora)->first();
               //hacemos una consulta mas avanzada
               $buscarOferta=$this->buscarOfertaLaboral($ofertaLaboralTemporal->external_of);
               //para enviar el correo a los postulantes

               $datosOfertaEstudiante=array(
                   "nom_representante_legal"=>$buscarOferta['nom_representante_legal'],
                   "razon_empresa"=>$buscarOferta['razon_empresa'],
                   "puesto"=>$buscarOferta['puesto'],
                   "correo"=>$buscarOferta['correo'],
                   "existeContrados"=> $existeContratado,
                   "listaEstudiantes"=>$request->json()->all()
               );
               //contratar o no controtar postulantes por parte del empleador
               $notificarContratado=$this->nofiticarFinalizacionOfertaEncargadoLaboralPostulante($datosOfertaEstudiante);
               return  response()->json(["mensaje"=>$arrayRespuesta,"Siglas"=>"OE",
                                       "notificarContratacionPostulante"=>$notificarContratado,
                                       "respuesta"=>$OfertaLaboralPostulanteBorrar,200]);
           } catch (\Throwable $th) {
               return response()->json(["mensaje"=>$th->getMessage(),
                                        "respuesta"=>$OfertaLaboralPostulanteBorrar,
                                        "Siglas"=>"ONE"]);
           }

       }else{
           return response()->json(["mensaje"=>"Los datos no tienene el formato deseado","Siglas"=>"DNF",400]);
       }
    }
    public function eliminarPostulanteOfertaLaboral(Request $request,$external_us){
         $OfertaLaboralPostulanteBorrar=null;
         $arrayRespuesta=array();
         if($request->json()){
            try {
                $existeUsuario=Usuario::where('external_us',$external_us)->where('estado',1)->where('tipoUsuario',5)->first();

                //verificamos si el usuarioe existe//verificar si el encargado
                if(!$existeUsuario){
                    return response()->json(["mensaje"=>"El empleador con el identificador ".$external_us." no tiene permisos para realizar esta acción","Siglas"=>"NTP",400]);
                }
                //si pasa todas las validaciones entonces se ejecuta este comando
                $fk_oferta_labora=null;
                foreach ($request->json() as $key => $value) {
                    $OfertaLaboralPostulanteBorrar=
                    OfertaLaboralEstudiante::join("estudiante","estudiante.id","ofertalaboral_estudiante.fk_estudiante")
                    ->join("oferta_laboral","oferta_laboral.id","ofertalaboral_estudiante.fk_oferta_laboral")
                    ->where("ofertalaboral_estudiante.external_of_est",$value['external_of_est'])
                    ->update(array('ofertalaboral_estudiante.estado'=>$value['estado']));
                    $arrayRespuesta[$key]=array(
                        "estudiante"=>$value['external_of_est'],
                        "estado"=> $OfertaLaboralPostulanteBorrar
                    );
                    $fk_oferta_labora=$value['fk_oferta_laboral'];
                }
                //buscamos la oferta laboral que tenga ese id
                $ofertaLaboralTemporal=OfertasLaborales::where("id",$fk_oferta_labora)->first();
                //hacemos una consulta mas avanzada
                $buscarOferta=$this->buscarOfertaLaboral($ofertaLaboralTemporal->external_of);
                $datosOfertaEstudiante=array(
                    "nom_representante_legal"=>$buscarOferta['nom_representante_legal'],
                    "razon_empresa"=>$buscarOferta['razon_empresa'],
                    "puesto"=>$buscarOferta['puesto'],
                    "correo"=>$buscarOferta['correo']
                );

                $notificarEmpeladorListaInteresados=$this->notificarAplicarOferta($datosOfertaEstudiante);
                return  response()->json(["mensaje"=>$arrayRespuesta,
                                        "Siglas"=>"OE",
                                        "notificarEmpeladorListaInteresados"=>$notificarEmpeladorListaInteresados,
                                        "respuesta"=>$OfertaLaboralPostulanteBorrar,200]);

            } catch (\Throwable $th) {
                return response()->json(["mensaje"=>$th->getMessage(),
                                        "resquest"=>$request->json()->all(),
                                        "respuesta"=>$OfertaLaboralPostulanteBorrar,
                                        "Siglas"=>"ONE"]);
            }

        }else{
            return response()->json(["mensaje"=>"Los datos no tienene el formato deseado","Siglas"=>"DNF",400]);
        }
    }

    public function contrarPostulantes(Request $request){
        $OfertaLaboralPostulanteBorrar=null;
        $arrayRespuesta=array();
        if($request->json()){
        try {
            foreach ($request->json() as $key => $value) {
                $OfertaLaboralPostulanteBorrar=
                OfertaLaboralEstudiante::join("estudiante","estudiante.id","ofertalaboral_estudiante.fk_estudiante")
                ->join("oferta_laboral","oferta_laboral.id","ofertalaboral_estudiante.fk_oferta_laboral")
                ->where("ofertalaboral_estudiante.external_of_est",$value['external_of_est'])
                ->update(array('ofertalaboral_estudiante.estado'=>$value['estado']));
                $arrayRespuesta[$key]=array(
                    "estudiante"=>$value['external_of_est'],
                    "estado"=> $OfertaLaboralPostulanteBorrar
                );
            }
            return  response()->json(["mensaje"=>$arrayRespuesta,"Siglas"=>"OE",
                                    "respuesta"=>$OfertaLaboralPostulanteBorrar,200]);
        } catch (\Throwable $th) {
            return response()->json(["mensaje"=>$th->getMessage(),
                                    "resquest"=>$request->json()->all(),
                                    "respuesta"=>$OfertaLaboralPostulanteBorrar,
                                    "Siglas"=>"ONE",
                                    "error"=>$th->getMessage()]);
        }

    }else{
        return response()->json(["mensaje"=>"Los datos no tienene el formato deseado","Siglas"=>"DNF",400]);
    }
}

    //================ FUNCIONES RECURSIVAS =======================//
    //bucar estudiante
    private function  buscarEstudiante($external_us){
        try {
            //code...
            $ObjUsuario=Usuario::where("external_us",$external_us)->first();
            $ObjEstudiante=Estudiante::where("fk_usuario",$ObjUsuario->id)->first();
            if($ObjEstudiante){
                return $ObjEstudiante;
            }else{
                //ONE
                return "ONE";
            }
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
    //bucamos la oferta laboral
    private function  buscarOfertaLaboral($external_of){
        try {
            $ObjOfertaLaboral=OfertasLaborales::join("empleador","empleador.id","oferta_laboral.fk_empleador")
            ->join("usuario","usuario.id","empleador.fk_usuario")
            ->select("empleador.razon_empresa",
            "usuario.correo",
            "empleador.nom_representante_legal",
            "oferta_laboral.*")
            ->where("oferta_laboral.external_of",$external_of)->first();
            if($ObjOfertaLaboral){
                return $ObjOfertaLaboral;
            }else{
                return "ONE";
            }
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
    // validar que el estudainte no postule dos veces a la misma oferta
    private function validarEstNoPostuleNVecesMismaOfert($fk_estudiante,$fk_ofertaLoral){
        try {
            //code...
            $ObjOfertaLaboralEstudiante=OfertaLaboralEstudiante::where ('fk_estudiante',$fk_estudiante)->where('fk_oferta_laboral',$fk_ofertaLoral)->first();
            if($ObjOfertaLaboralEstudiante){
                // si exiet el usuarui entonces reggresa mensaje
                //si encontro
                return true;
            }else{
                //no esta postulando a la misma oferta
                return false;
            }
            return $ObjOfertaLaboralEstudiante;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    // ======================= FUNCIONES PRIVADAS ================
    private function notificarAplicarOferta($arrayData){

       try {
           $parrafo="Se ha generado nuevos cambios en tu lista de postulantes de la oferta denominada <b>".
                     $arrayData['puesto'].
                     "</b> puede que existan nuevos postulantes en tu oferta o que se hayan retirado de la misma, para más detalles revise su cuenta";

           $temmplateHmtlAplicarOferta=
                    $this->templateHtmlCorreo(
                                        $arrayData['nom_representante_legal'],
                                        $parrafo);
            $enviarCorreoBooleanEmpleador=
                    $this->enviarCorreo($temmplateHmtlAplicarOferta,
                                        $arrayData['correo'],
                                        getenv('TITULO_CORREO_APLICAR_OFERTA')
                                        );

            $arrayAplicarOferta=array(
                    "estadoCorreoBooleanEmpleador"=>$enviarCorreoBooleanEmpleador,
                    "correoEmpleador"=>$arrayData['correo'],
                    );

           return $arrayAplicarOferta;
       } catch (\Throwable $th) {
            return $arrayAplicarOferta=array("error"=>$th->getMessage());
       }

    }
    private function notificarEncargado($parrafoNotificarEncargado,$existeContratados,$tipoNotificacion){
        $encargado=Docente::join("usuario","usuario.id","docente.fk_usuario")
        ->select("usuario.estado",
        "usuario.correo",
        "docente.*")
        ->where("usuario.estado",1)
        ->where("usuario.tipoUsuario",5)
        ->get();
        foreach ($encargado as $key => $value) {
            //preparo el template
            $temmplateHmtlAplicarOferta=
                        $this->templateHtmlCorreo(
                                            $value['nombre']." ".$value["apellido"],
                                            $parrafoNotificarEncargado);
            $enviarCorreoBooleanEmpleador=
                    $this->enviarCorreo($temmplateHmtlAplicarOferta,
                                        $value['correo'],
                                        getenv('TITULO_CORREO_APLICAR_OFERTA')
                                        );
            return $texto="[".date("Y-m-d H:i:s")."]"
            ." APLICAR OFERTA LABORAL -> NOTIFICAR AL ENCARGADO  ".$tipoNotificacion." :
            ::Existen postulantes contratados boolean : ".($existeContratados? 'true' : 'false').
            "::: El Correo del encargado  es: ".$value['correo']." ] ";
        }
    }


    private function notificarPostulante($listaPostulantes,$puesto){

        $parrafoPostulanteSISSEG="Muchas gracias por participar en la oferta laboral <b>".$puesto."</b>,
                                    sírvase por favor de llenar la siguiente encuesta ".
                                    "<a href=".getenv('SISSEG_POSTULANTE').">".
                                    getenv('SISSEG_POSTULANTE') ."</a> de ante mano se le agradece su colaboración ";

        foreach ($listaPostulantes as $key => $value) {
            //obtengo el correo y el nombre del posutlante para enviar el correo al mismo
            $postulante=Estudiante::join("usuario","usuario.id","estudiante.fk_usuario")
           ->select("usuario.correo",
           "estudiante.*")
           ->where("estudiante.external_es",$value['external_es'])->first();
           // si su estado es 2// entonces fue contratado
           $texto="";
           if($value['estado']==2){
            $parrafoPostulante="Felicitaciones usted ha sido aceptado en la oferta <b>".$puesto."</b>";
            $temmplateHmtlAplicarOferta=
                                $this->templateHtmlCorreo(
                                                            $postulante->nombre." ".$postulante->apellido,
                                                            $parrafoPostulante);
            $estadEnviarCorreoPostualante=
                                $this->enviarCorreo($temmplateHmtlAplicarOferta,
                                $postulante->correo,
                                getenv("TITULO_CORREO_APLICAR_OFERTA"));

           //una vez finalizada la oferta hacer que llene el formulario del SISSEG AL POSTULANTE
            $templateCorreoHmtlPostulante=
                                    $this->templateHtmlCorreo( $postulante->nombre." ".$postulante->apellido,
                                                                $parrafoPostulanteSISSEG
                                                            );

            $enviarFormSISSEGPostulante=
                                    $this->enviarCorreo($templateCorreoHmtlPostulante,
                                                        $postulante->correo,
                                                        getenv('TITULO_CORREO_APLICAR_OFERTA'));
            $texto++;

           }else{
               $parrafoPostulante="La oferta laboral <b>".$puesto.
                                   "</b> le informa que usted no ha sido aceptado en esta oferta laboral,
                                   gracias por participar en este proceso, este pendiente de las nuevas publicaciones de oferta laborales en la plataforma ";
               $temmplateHmtlAplicarOferta=
                                   $this->templateHtmlCorreo(
                                   $postulante->nombre." ".$postulante->apellido,
                                   $parrafoPostulante);

                $estadEnviarCorreoPostualante=
                                    $this->enviarCorreo($temmplateHmtlAplicarOferta,
                                    $postulante->correo,
                                    getenv("TITULO_CORREO_APLICAR_OFERTA"));
                //una vez finalizada la oferta hacer que llene el formulario del SISSEG AL POSTULANTE
                $templateCorreoHmtlPostulante=
                            $this->templateHtmlCorreo( $postulante->nombre." ".$postulante->apellido,
                                                        $parrafoPostulanteSISSEG
                                                    );

                $enviarFormSISSEGPostulante=
                            $this->enviarCorreo($templateCorreoHmtlPostulante,
                                                $postulante->correo,
                                                getenv('TITULO_CORREO_APLICAR_OFERTA'));

                $texto++;
           }
           //tabulo por cada interaccion que exista
        }
        return $texto;
    }
    private function nofiticarFinalizacionOfertaEncargadoLaboralPostulante($arrayData){


        $arrayRespuesta=array();
        try {
            // SI SE CONTRATA , NOTIFICAMMOS AL ENCARGADO Y ESTUDIANTE
            // SI SE CONTRATA , NOTIFICAMMOS AL ENCARGADO Y ESTUDIANTE
            if($arrayData['existeContrados']==true){

                $parrafoNotificarEncargado="Se le comunica que ha finalizado la oferta laboral denominada <b>".
                        $arrayData["puesto"]. "</b>,  existen postulantes contratados";
                $notificarEncargado=$this->notificarEncargado($parrafoNotificarEncargado,$arrayData['existeContrados'],"SI SE CONTRARARON POSTULANTES");
                //1.notificar al encargado de la contracion de postulanes

            }
            // SI NO SE CONTRATA SOLO SE NOTIFICA AL ENCARGADO
            // SI NO SE CONTRATA SOLO SE NOTIFICA AL ENCARGADO
            if($arrayData['existeContrados']==false){
                $parrafoPostulanteNoContratados="Ha finalizado la oferta laboral denominada <b>".
                                                 $arrayData["puesto"]. "</b>, por ende esta oferta laboral no ha contrato ningún postulante";
                //2.notificar al encargado de la no contracion de postulanes
                $notificarEncargado=$this->notificarEncargado($parrafoPostulanteNoContratados,$arrayData['existeContrados'],"NO SE  CONTRARARON POSTULANTES");
                //2.Notifcamos a los postulantes si han sido o no contratados
                $notificarPostulantes=$this->notificarPostulante($arrayData['listaEstudiantes'],$arrayData['puesto']);
                $arrayRespuesta=array("existeContratado"=>$arrayData['existeContrados']);
                $arrayRespuesta=array("existeContratado"=>$arrayData['existeContrados']);
            }
            return $arrayRespuesta;
        } catch (\Throwable $th) {

            echo $th->getMessage();
            return $arrayRespuesta=array("error"=>$th->getMessage());
        }


    }
}
