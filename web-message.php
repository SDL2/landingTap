<?php


if ($_POST) {
    
    echo "Succes!";

    //$destino = "salvadordeleon2@gmail.com";

    $motivoC = "NUEVO MENSAJE WEB - Commerce App - SALVADOR DE LEON";
    $nombreP = $_POST["nombre"];
    $emailP = $_POST["mail"];
    $telefonoP = $_POST["telefono"];
    $mensajeP = $_POST["mensaje"];

    $destino = $_POST["mail"];

    $mensaje = "Nuevo mensaje desde Commerce App de: \nNombre: " . $nombreP . " "
    . "\nTelefono: " . $telefonoP . "\nCorreo electronico: " . $emailP .
    "\nCon Comentarios: " . $mensajeP;

    mail($destino, $motivoC, $mensaje);


    header("Location: index.html");
    //header("Location: https://salvadordeleon.dev/");


}else{
    echo "estas haciendo algo mal";
    
}






?>