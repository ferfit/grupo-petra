<?php   

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$direccion = $_POST['direccion'];
$unidades = $_POST['unidades'];
$amenities = $_POST['amenities'];
$metros = $_POST['metros'];
$edad = $_POST['edad'];
$mensaje = $_POST['mensaje'];


$destinatario = 'administracion@grupopetra.com.ar';
$from = 'administracion@grupopetra.com.ar';



$contenido = "Nueva consulta de la página de Grupo Petra"."\n\nNombre: " . $nombre .  "\nEmail: " . $email . "\nTelefono: " . $telefono. "\nDirección: " . $direccion. "\nUnidades: " . $unidades. "\nAmenities: " . $amenities. "\nMetros: " . $metros. "\nEdad: " . $edad. "\nMensaje: " . $mensaje;


$asunto = "Nuevo mensaje - formulario Grupo Petra.";

$headers = "From: ".$from; 

if($email && $nombre &&  $telefono && !empty($email) && !empty($nombre) && !empty($telefono)  ){
	mail($destinatario, $asunto, $contenido, $headers);
	echo  json_encode('Correcto:'.$email.'ok');
	
} else {
	echo json_encode('error');
}


/* 
if (isset($email)) {
	mail($destinatario, $asunto, $contenido, $headers);
	echo "Tu email se ha enviado correctamente.";
} */