// js tooltipList
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// //js popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

//JS para modales usar cuando sea input

// const myModal = document.getElementById('myModal');
// const myInput = document.getElementById('myInput');

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// });

$(document).ready(function() {
    
    $("#envio1").click(function(){
        alert("El correo fue enviado correctamente ")
    });

    $( "#clickocul" ).on( "click", function() {
        $( "#ocultar" ).toggle( "slow", function() {
        });
    });

    $('.avion').dblclick(function(){
        $(this).css({ 
            "color": "red" 
            // "font-size": "2em"
        }) ;
     } ) ;
 
 } ) ;