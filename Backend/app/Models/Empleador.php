<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Empleador extends Model
{

    //nombre de la tabla
    protected $table="empleador";
    //para saber si en la tabla usamos created_at y update_at
    public $timestamp=true;
    //lista blanca campos publicos
    protected $fillable=[
        "fk_usuario",
        "fk_ciudad",
        "fk_provincia",
        "razon_empresa",
        "tipo_empresa",
        "actividad_ruc",
        "num_ruc",
        "cedula",
        "nom_representante_legal",
        "telefono",
        "estado",
        "direccion",
        "observaciones",
        "external_em",
        "created_at",
        "updated_at"
    ];
     public function usuario(){
         //esta tabla pertenece a usuario
         //relaciona al modelo con cual pertenece
         return $this->belongsTo('App\Models\Usuario','fk_usuario');
     }
     public function OfertaLaboralEstudiante(){
        return $this->hasMany('App\Models\CalificarEmpleador','fk_empleador');
    }

}
