<?php
//TODO: Requerimientos 
require_once('../config/conexion.php');
class Estudiantes
{
    /*TODO: Procedimiento para sacar todos los registros*/
    public function todos()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "select * from Estudiantes";
        $datos = mysqli_query($con, $cadena);
        return $datos;
    }
    /*TODO: Procedimiento para sacar un registro*/
    public function uno($estudiante_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT  * FROM Estudiantes WHERE estudiante_id = $estudiante_id";
        $datos = mysqli_query($con, $cadena);
        return $datos;
    }
    /*TODO: Procedimiento para insertar */
    public function Insertar($nombre, $apellido, $fecha_ingreso, $carrera, $materia_favorita_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "INSERT into Estudiantes(nombre,apellido,fecha_ingreso,carrera,materia_favorita_id) values ( '$nombre', '$apellido', '$fecha_ingreso', '$carrera', $materia_favorita_id)";
        if (mysqli_query($con, $cadena)) {
            return "ok";
        } else {
            return 'Error al insertar en la base de datos';
        }
    }
    /*TODO: Procedimiento para actualizar */
    public function Actualizar($estudiante_id, $nombre, $apellido, $fecha_ingreso, $carrera, $materia_favorita_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "update Estudiantes set nombre='$nombre',apellido='$apellido',fecha_ingreso='$fecha_ingreso',carrera='$carrera',materia_favorita_id=$materia_favorita_id where estudiante_id= $estudiante_id";
        if (mysqli_query($con, $cadena)) {
            return "ok";
        } else {
            return 'error al actualizar el registro';
        }
    }
    /*TODO: Procedimiento para Eliminar */
    public function Eliminar($estudiante_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "delete from Estudiantes where estudiante_id = $estudiante_id";
        if (mysqli_query($con, $cadena)) {
            return true;
        } else {
            return false;
        }
    }
}
