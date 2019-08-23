
//alert("Bienvenid@ esta es una version didactica de \nhttps://www.taptheapp.tech \nEsta intenta replicar las mayoria de funciones responsivas de la originalen en sus multiples secciones. \nAdemas de ciertas funcionalidades con Javascript como las respuestas desplegables de la seccion FAQ'S, el togle de la amburguesa y las validaciones del formulario de contacto y por ultimo el envio de un correo electronico por medio de PHP al correo ingresado en el formulario para validar su funcionamiento. \n(si no se tiene correctamente configurado el envio de mail en su php no funcionara, yo lo probe en mi host real con exito)");

//toggle de la burger 
document.getElementById('nav-toggle').onclick = function(){
    var $togflex = document.getElementById('ulflex');
    $togflex.classList.toggle('flex');

    document.getElementById("nav-content").classList.toggle("hidden");
};





$('#formc').submit(function(f){

    
    alert('entramos form function');
    
        var mensaje = $('#mens').val();
        var mail = $('#mail').val();
        $('#mail').val(mail.replace(/ /g, ''));
    
        var telefono = $('#tel').val();
        var nombre = $('#nomb').val();
    
        if (nombre.length < 3){
            f.preventDefault();
            $('#l-nomb').removeClass('hidden');
            errorM = 1;
        } else {
            $('#l-nomb').addClass('hidden');
        }


        if (mensaje.length < 15 || mensaje.indexOf(' ') == -1) {
            f.preventDefault();
            $('#l-mens').removeClass('hidden');
            errorM = 1;
            alert('entramos if');
        } else {
            $('#l-mens').addClass('hidden');
        }


        if (telefono.length < 8){
            f.preventDefault();
            $('#l-tel').removeClass('hidden');
            errorM = 1;
        } else {
            $('#l-tel').addClass('hidden');
        }


        if (mail.indexOf('@', 1) == -1 || mail.indexOf('.', 4) == -1){
            f.preventDefault();
            $('#l-mail').removeClass('hidden');
            errorM = 1;
        } else {
            $('#l-mail').addClass('hidden');
        }
    
    
    
    });

    



        ////* LO SIENTO POR EL EXCESO DE REPETICIONES,, cuando sepa mas lo mejoro =D *////

//toggle de hiden e icono boton 1
var $check1 = 'mas';
document.getElementById('b1').onclick = function(){
            //mostrando texto
    var $togHidden = document.getElementById('bl1');
    $togHidden.classList.toggle('hidden');
    
            //cambiando icono
    if ($check1 === 'mas' ) {
        document.getElementById('b1').firstElementChild.className = "fas fa-minus txt-section4 pr-3";
        $check1 = 'menos';
    } else {
        document.getElementById('b1').firstElementChild.className = "fas fa-plus txt-section4 pr-3";
        $check1 = 'mas';
    }
};

//toggle de hiden e icono boton 2
var $check2 = 'mas';
document.getElementById('b2').onclick = function(){
            //mostrando texto
    var $togHidden = document.getElementById('bl2');
    $togHidden.classList.toggle('hidden');
    
            //cambiando icono
    if ($check2 === 'mas' ) {
        document.getElementById('b2').firstElementChild.className = "fas fa-minus txt-section4 pr-3";
        $check2 = 'menos';
    } else {
        document.getElementById('b2').firstElementChild.className = "fas fa-plus txt-section4 pr-3";
        $check2 = 'mas';
    }
};

//toggle de hiden e icono boton 3
var $check3 = 'mas';
document.getElementById('b3').onclick = function(){
            //mostrando texto
    var $togHidden = document.getElementById('bl3');
    $togHidden.classList.toggle('hidden');
    
            //cambiando icono
    if ($check3 === 'mas' ) {
        document.getElementById('b3').firstElementChild.className = "fas fa-minus txt-section4 pr-3";
        $check3 = 'menos';
    } else {
        document.getElementById('b3').firstElementChild.className = "fas fa-plus txt-section4 pr-3";
        $check3 = 'mas';
    }
};

//toggle de hiden e icono boton 4
var $check4 = 'mas';
document.getElementById('b4').onclick = function(){
            //mostrando texto
    var $togHidden = document.getElementById('bl4');
    $togHidden.classList.toggle('hidden');
    
            //cambiando icono
    if ($check4 === 'mas' ) {
        document.getElementById('b4').firstElementChild.className = "fas fa-minus txt-section4 pr-3";
        $check4 = 'menos';
    } else {
        document.getElementById('b4').firstElementChild.className = "fas fa-plus txt-section4 pr-3";
        $check4 = 'mas';
    }
};

//toggle de hiden e icono boton 5
var $check5 = 'mas';
document.getElementById('b5').onclick = function(){
            //mostrando texto
    var $togHidden = document.getElementById('bl5');
    $togHidden.classList.toggle('hidden');
    
            //cambiando icono
    if ($check5 === 'mas' ) {
        document.getElementById('b5').firstElementChild.className = "fas fa-minus txt-section4 pr-3";
        $check5 = 'menos';
    } else {
        document.getElementById('b5').firstElementChild.className = "fas fa-plus txt-section4 pr-3";
        $check5 = 'mas';
    }
};

//toggle de hiden e icono boton 6
var $check6 = 'mas';
document.getElementById('b6').onclick = function(){
            //mostrando texto
    var $togHidden = document.getElementById('bl6');
    $togHidden.classList.toggle('hidden');
    
            //cambiando icono
    if ($check6 === 'mas' ) {
        document.getElementById('b6').firstElementChild.className = "fas fa-minus txt-section4 pr-3";
        $check6 = 'menos';
    } else {
        document.getElementById('b6').firstElementChild.className = "fas fa-plus txt-section4 pr-3";
        $check6 = 'mas';
    }
};

//toggle de hiden e icono boton 7
var $check7 = 'mas';
document.getElementById('b7').onclick = function(){
            //mostrando texto
    var $togHidden = document.getElementById('bl7');
    $togHidden.classList.toggle('hidden');
    
            //cambiando icono
    if ($check7 === 'mas' ) {
        document.getElementById('b7').firstElementChild.className = "fas fa-minus txt-section4 pr-3";
        $check7 = 'menos';
    } else {
        document.getElementById('b7').firstElementChild.className = "fas fa-plus txt-section4 pr-3";
        $check7 = 'mas';
    }
};

//toggle de hiden e icono boton 8
var $check8 = 'mas';
document.getElementById('b8').onclick = function(){
            //mostrando texto
    var $togHidden = document.getElementById('bl8');
    $togHidden.classList.toggle('hidden');
    
            //cambiando icono
    if ($check8 === 'mas' ) {
        document.getElementById('b8').firstElementChild.className = "fas fa-minus txt-section4 pr-3";
        $check8 = 'menos';
    } else {
        document.getElementById('b8').firstElementChild.className = "fas fa-plus txt-section4 pr-3";
        $check8 = 'mas';
    }
};

//toggle de hiden e icono boton 9
var $check9 = 'mas';
document.getElementById('b9').onclick = function(){
            //mostrando texto
    var $togHidden = document.getElementById('bl9');
    $togHidden.classList.toggle('hidden');
    
            //cambiando icono
    if ($check9 === 'mas' ) {
        document.getElementById('b9').firstElementChild.className = "fas fa-minus txt-section4 pr-3";
        $check9 = 'menos';
    } else {
        document.getElementById('b9').firstElementChild.className = "fas fa-plus txt-section4 pr-3";
        $check9 = 'mas';
    }
};




