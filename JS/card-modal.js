//Seleccionamos el modal y los 2 botones de abrir y cerrar
const modal = document.getElementById('modal');
const openModalBtn = document.querySelectorAll('.open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');

//ACA LE DECIMOS LO QUE VA A HACER CADA BOTON
// Recorremos todos los botones "Ver mas" y les agregamos un evento de click para abrir el modal
openModalBtn.forEach(function(btn) {
  btn.addEventListener('click',function(){
  modal.style.display = 'flex';
});
});
// BOTON PARA CERRAR EL MODAL
closeModalBtn.addEventListener('click',function(){
  modal.style.display = 'none';
});

//ACA LE DECIMOS QUE SI HACEMOS CLICK FUERA DEL CONTENIDO DEL MODAL, SE CIERRE
window.addEventListener('click',function(event){
  if(event.target === modal){
    modal.style.display = 'none';
  }
});




