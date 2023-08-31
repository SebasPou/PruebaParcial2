<?php
/*TODO: Requerimientos */
require_once("../config/cors.php");
require_once("../models/Estudiantes.models.php");
error_reporting(0);

$Estudiantes = new Estudiantes;
switch ($_GET["op"]) {
        /*TODO: Procedimiento para listar todos los registros */
    case 'todos':
        $datos = array();
        $datos = $Estudiantes->todos();
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;
        /*TODO: Procedimiento para sacar un registro */
    case 'uno':
        $estudiante_id = $_POST["estudiante_id"];
        $datos = array();
        $datos = $Estudiantes->uno($estudiante_id);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode($res);
        break;
        /*TODO: Procedimiento para insertar */
    case 'insertar':
        $estudiante_id = $_POST["estudiante_id"];
        $nombre = $_POST["nombre"];
        $apellido = $_POST["apellido"];
        $fecha_ingreso = $_POST["fecha_ingreso"];
        $carrera = $_POST["carrera"];
        $materia_favorita_id = $_POST["materia_favorita_id"];

        $datos = array();
        $datos = $Estudiantes->Insertar( $nombre, $apellido, $fecha_ingreso, $carrera, $materia_favorita_id);
        echo json_encode($datos);
        break;
        /*TODO: Procedimiento para actualizar */
    case 'actualizar':
        $estudiante_id = $_POST["estudiante_id"];
        $nombre = $_POST["nombre"];
        $apellido = $_POST["apellido"];
        $fecha_ingreso = $_POST["fecha_ingreso"];
        $carrera = $_POST["carrera"];
        $materia_favorita_id = $_POST["materia_favorita_id"];
        $datos = array();
        $datos = $Estudiantes->Actualizar($estudiante_id, $nombre, $apellido, $fecha_ingreso, $carrera, $materia_favorita_id);
        echo json_encode($datos);
        break;
        /*TODO: Procedimiento para eliminar */
    case 'eliminar':
        $estudiante_id = $_POST["estudiante_id"];
        $datos = array();
        $datos = $Estudiantes->Eliminar($estudiante_id);
        echo json_encode($datos);
        break;
}
