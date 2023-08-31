<?php
/*TODO: Requerimientos */
require_once("../config/cors.php");
require_once("../models/Materias.models.php");
error_reporting(0);

$Materias = new Materias;
switch ($_GET["op"]) {
        /*TODO: Procedimiento para listar todos los registros */
    case 'todos':
        $datos = array();
        $datos = $Materias->todos();
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;
        /*TODO: Procedimiento para sacar un registro */
    case 'uno':
        $materia_id = $_POST["materia_id"];
        $datos = array();
        $datos = $Materias->uno($materia_id);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode($res);
        break;
        /*TODO: Procedimiento para insertar */
    case 'insertar':
        
        $nombre_materia = $_POST["nombre_materia"];
        $credito = $_POST["credito"];
        $sala = $_POST["sala"];
        $horario = $_POST["horario"];

        $datos = array();
        $datos = $Materias->Insertar( $nombre_materia, $credito, $sala, $horario);
        echo json_encode($datos);
        break;
        /*TODO: Procedimiento para actualizar */
    case 'actualizar':
        $materia_id = $_POST["materia_id"];
        $nombre_materia = $_POST["nombre_materia"];
        $credito = $_POST["credito"];
        $sala = $_POST["sala"];
        $horario = $_POST["horario"];
        $datos = array();
        $datos = $Materias->Actualizar($materia_id, $nombre_materia, $credito, $sala, $horario);
        echo json_encode($datos);
        break;
        /*TODO: Procedimiento para eliminar */
    case 'eliminar':
        $materia_id = $_POST["materia_id"];
        $datos = array();
        $datos = $Materias->Eliminar($materia_id);
        echo json_encode($datos);
        break;
}
