var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');


formulario.addEventListener('submit',function(e){
    e.preventDefault();

    var datos = new FormData(formulario); /* le pasamos el formulario variable */

    fetch('email.php',{
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data === 'error'){
            respuesta.innerHTML = `
            <div class="alert alert-danger p-3 wow fadeIn" role="alert">
               Debe llenar todos los campos requeridos.
            </div>
            `
            setTimeout(function(){ 
                respuesta.innerHTML=""; 
            }, 5000);
        } else {
            respuesta.innerHTML = `
            <div class="alert alert-success p-3 wow fadeIn" role="alert">
                Tu mensaje se ha enviado correctamente.
            </div>
            `
            var nombre = document.getElementById('nombre');
            var email = document.getElementById('email');
            var telefono = document.getElementById('telefono');
            var direccion = document.getElementById('direccion');
            var amenities = document.getElementById('amenities');
            var unidades = document.getElementById('unidades');
            var metros = document.getElementById('metros');
            var edad = document.getElementById('edad');
            var mensaje = document.getElementById('mensaje');

            nombre.value = "";
            email.value = "";
            telefono.value = "";
            direccion.value = "";
            unidades.value = "";
            amenities.value = "";
            metros.value = "";
            edad.value = "";
            mensaje.value = "";

            setTimeout(function(){ 
                respuesta.innerHTML=""; 
            }, 5000);
        }
    })
})
