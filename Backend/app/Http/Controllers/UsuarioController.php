<?php

namespace App\Http\Controllers;

//llamar los modelos q voy a ocupar
use App\Models\Usuario;
use App\Models\Docente;
use App\Models\Estudiante;
//permite traer la data del apirest
use Illuminate\Http\Request;
//template para correo
use App\Traits\TemplateCorreo;

class UsuarioController extends Controller
{
    //Registrar Usuario
    //correo de le emplesa
    use TemplateCorreo;

    public function RegistrarUsuario(Request $request){
        //code...
        if($request->json()){
            //obtengo todos los datos y lo guardo en la variable datos
            $datos=$request->json()->all();
            //creamos un objeto de tipo usuario para enviar los datos
            try {
                // ========= VALIDACION DEL USUARIO ANTES DE INICIAR EL LOGIN ====
                //existe el usuario
                $ObjUsuario=new Usuario();
                $ObjUsuario->correo=$datos["correo"];
                $usuario=Usuario::where("correo",$datos['correo'])
                ->first();
                if($usuario){
                    return response()->json(["mensaje"=>"Ya existe un usuario con el mismo correo","Siglas"=>"ONE",400]);
                }
                //Encriptar Password
                $opciones=array('cost'=>12);
                $passwordCliente=$datos["password"];
                $password_hashed=password_hash($passwordCliente,PASSWORD_BCRYPT,$opciones);
                $ObjUsuario->password=$password_hashed;
                $ObjUsuario->tipoUsuario=$datos["tipoUsuario"];
                $ObjUsuario->estado=$datos["estado"];
                $ObjUsuario->external_us="UuA".Utilidades\UUID::v4();
                $ObjUsuario->save();
                //respuesta exitoso o no en la inserrccion
                return response()->json(["mensaje"=>$ObjUsuario,"Siglas"=>"OE",200,]);
            } catch (\Throwable $th) {
                return response()->json(["mensaje"=>$th->getMessage(),"Siglas"=>"ONE","error"=>$th->getMessage()]);
            }
        }else{
            return response()->json(["mensaje"=>"Los datos no tienene el formato deseado","Siglas"=>"DNF",400]);
        }

    }
    public function actualizarPassword(Request $request){

        if($request->json()){
            $ObjUsuario=nuLL;
            $correo=null;
            try {
                //consultar si existe ese usuario
                $datos=$request->json()->all();
                //verificar si existe el usuario
                if (filter_var($datos['correo'], FILTER_VALIDATE_EMAIL)) {
                    $correo=Usuario::where("correo",$datos['correo'])->first();
                }
                if($correo){

                   //actualizar el nuevo password
                   $opciones=array('cost'=>12);
                   $password_hashed=password_hash($datos['password'],PASSWORD_BCRYPT,$opciones);
                   $updatePasword=Usuario::where("correo",$datos['correo'])
                   ->update(array(
                       "password"=>$password_hashed
                    ));
                    return response()->json(["mensaje"=>"Contrase??a actualizada con ??xito",
                                                "correoUsuario"=>$datos['correo'],
                                                "contrase??aActualizada"=>$updatePasword,
                                                "Siglas"=>"OE",200]);
                }else{
                    return response()->json(["mensaje"=>"Usuario no encontrado",
                                            "Siglas"=>"ONE",400]);
                }

            } catch (\Throwable $th) {
                return response()->json(["mensaje"=>$ObjUsuario,
                                            "error"=>$th->getMessage(),
                                            "Siglas"=>"DNF",400]);
            }

        }else{
            return response()->json(["mensaje"=>"La data no tiene formato deseado","Siglas"=>"DNF",400]);
        }
    }
    public function recuperarPassword(Request $request){

        if($request->json()){
            $ObjUsuario=nuLL;
            $correo=null;
            try {
                //consultar si existe ese usuario
                $datos=$request->json()->all();
                //verificar si existe el usuario
                if (!(filter_var($datos['correo'], FILTER_VALIDATE_EMAIL))) {
                    return response()->json(["mensaje"=>"El formato del correo : ".$datos['correo']." no es v??lido","Siglas"=>"CNV",400]);
                }
                $correo=Usuario::where("correo",$datos['correo'])->first();
                if(!$correo){
                    return response()->json(["mensaje"=>"Usuario no encontrado","Siglas"=>"UNE",400]);
                }
                //generamos el nuevo password
                $nuevoPassword="";
                $patron="1234567890abcdefghijklmnopqrstuvwxyz";
                $max=strlen($patron)-1;
                for ($i=0; $i < 10; $i++) {
                    $nuevoPassword.=$patron[mt_rand(0,$max)];
                }
                //actualizar el nuevo password
                $opciones=array('cost'=>12);
                $password_hashed=password_hash($nuevoPassword,PASSWORD_BCRYPT,$opciones);
                $updatePasword=Usuario::where("correo",$datos['correo'])
                ->update(array(
                    "password"=>$password_hashed
                ));
                //enviamos al correo el password
                $parrafo="Su nueva contrase??a es: <b>".$nuevoPassword."</b>";
                $templateHtmlCorreo= $this->templateHtmlCorreo($datos['correo'],$parrafo);
                $enviarCorreoBolean=
                        $this->enviarCorreo($templateHtmlCorreo,$datos['correo'],
                                            getenv("TITULO_RECUPERAR_PASSWORD")
                                            );
                return response()->json(["mensaje"=>"Contrase??a actualizada con ??xito",
                                                "correoUsuario"=>$datos['correo'],
                                                "Siglas"=>"OE",200]);

            } catch (\Throwable $th) {
                return response()->json(["mensaje"=>$th->getMessage(),
                                            "Siglas"=>"DNF",400]);
            }

        }else{
            return response()->json(["mensaje"=>"La data no tiene formato deseado","Siglas"=>"DNF",400]);
        }

    }
    public function RegistrarEstudiante(Request $request,$external_id){
        if($request->json()){
            // $handle = fopen("logRegistroPostulante.txt", "a");
            $datos=$request->json()->all();
            try {
                $ObjUsuario=Usuario::where("external_us",$external_id)
                ->where("tipoUsuario",2)
                ->first();
                //validar si el usuario existe
                if(!$ObjUsuario){
                    return response()->json(["mensaje"=>"El usuario ".$external_id." no tiene creada a??n una cuenta ","Siglas"=>"UNE",200,]);
                }
                $existeEstudiante=Estudiante::where('fk_usuario',$ObjUsuario->id)->first();
                //si tiene una cuenta creada entonces no podra registrarse dos veces
                if($existeEstudiante){
                    return response()->json(["mensaje"=>"Usted ya est?? registrado","Siglas"=>"UEE",200,]);
                }
                //creacion de  un objeto para guardar el estudiante
                // $texto="";
                $ObjEstudiante=null;
                //code...
                $ObjEstudiante=new Estudiante();
                $ObjEstudiante->fk_usuario=$ObjUsuario->id;
                $ObjEstudiante->nombre=$datos["nombre"];
                $ObjEstudiante->apellido=$datos["apellido"];
                $ObjEstudiante->cedula=$datos["cedula"];
                $ObjEstudiante->telefono=$datos["telefono"];
                $ObjEstudiante->genero=$datos["genero"];
                $ObjEstudiante->fecha_nacimiento=$datos["fecha_nacimiento"];
                $ObjEstudiante->direccion_domicilio=$datos["direccion_domicilio"];
                $ObjEstudiante->observaciones=$datos["observaciones"];
                $ObjEstudiante->external_es="Es".Utilidades\UUID::v4();
                $ObjEstudiante->estado=$datos["estado"];
                $ObjEstudiante->save();

                //enviamos registro de postulante a la secretaria a la secretaria
                $usuarioSecrataria=Docente::join("usuario","usuario.id","=","docente.fk_usuario")
                ->select("docente.*","usuario.*")
                ->where("usuario.estado",1)
                ->where("usuario.tipoUsuario",3)
                ->get();

                //recorremo todoss los usuario que sean secretaria
                $arrayEncargado=null;
                $parrafo="Se ha registrado el nuevo postulante ".$datos["nombre"]." ".$datos["apellido"].". Con correo: ". $ObjUsuario->correo;
                foreach ($usuarioSecrataria as $key => $value) {
                    //tengo q redactar el menaje a la secretaria
                    $plantillaCorreo=$this->templateHtmlCorreo(
                                            $value["nombre"]." ".$value["apellido"],
                                            $parrafo
                                        );

                    $enviarCorreoBolean=
                            $this->enviarCorreo(
                                $plantillaCorreo,
                                $value['correo'],
                                getenv("TITULO_CORREO_POSTULANTE")
                                );
                    $arrayEncargado[$key]=array("nombre"=>$value['nombre'],
                                                "apellido"=>$value['apellido'],
                                                "estadoEnvioCorreo"=>$enviarCorreoBolean,
                                                "correo"=>$value['correo'],
                                                );

                }
                return response()->json(["mensaje"=>$ObjEstudiante,
                                        "estadoCorreoEnviado"=>$arrayEncargado,
                                        "Siglas"=>"OE"]);
            } catch (\Throwable $th) {

                return response()->json(["mensaje"=>$th->getMessage(),
                                        "request"=>$request->json()->all(),
                                        "Siglas"=>"ONE","error"=>$th->getMessage()]);
            }

        }else{
            return response()->json(["mensaje"=>"La data no tiene formato deseado","Siglas"=>"DNF",400]);
        }
    }
    //REGISTRO DE LOGIN
    public function login(Request $request){

        if($request->json()){
            // ========= VALIDACION DEL USUARIO ANTES DE INICIAR EL LOGIN ====
            //existe el usuario
            $usuario=null;
            try {
                $datos=$request->json()->all();
                $usuario=Usuario::where("correo",$datos['correo'])
                ->where("estado",1)
                ->first();
                if($usuario){
                    if(password_verify($datos['password'],$usuario['password'])){
                        // preguntamos que tipo de usuario es
                        try {
                            return response()->json(["mensaje"=>$usuario,"Siglas"=>"OE",200]);

                        } catch (\Throwable $th) {
                            //throw $th;
                            return response()->json(["mensaje"=>$th->getMessage(),"Siglas"=>"TUNE",400,"error"=>$th->getMessage()]);
                        }
                    }else{
                        return response()->json(["mensaje"=>"Contrase??a Incorrecta","Siglas"=>"PI",400]);
                    }

                } // usuario no encontrado
                else{
                    return response()->json(["mensaje"=>"El usuario no existe","Siglas"=>"UNE",400]);
                }
            } catch (\Throwable $th) {
                return response()->json(["mensaje"=>$th->getMessage(),"Siglas"=>"ONE","error"=>$th->getMessage(),400]);
            }

        }else{
            return response()->json(["mensaje"=>"La data no tiene formato deseado","Siglas"=>"DNF",400]);
        }
    }

}
