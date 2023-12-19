document.addEventListener('DOMContentLoaded', function() {
    var logoutLink = document.querySelector('#logout-link');
    var confirmModal = document.getElementById('confirm-modal');
    var closeModal = document.querySelector('.close');
    var confirmYes = document.querySelector('.confirm-yes');
    var confirmNo = document.querySelector('.confirm-no');
   
    logoutLink.addEventListener('click', function() {
       confirmModal.style.display = 'block';
    });
   
    closeModal.addEventListener('click', function() {
       confirmModal.style.display = 'none';
    });
   
    confirmYes.addEventListener('click', function() {
       window.location.href = 'logout.html';
    });
   
    confirmNo.addEventListener('click', function() {
       confirmModal.style.display = 'none';
    });
   
    window.onclick = function(event) {
       if (event.target == confirmModal) {
         confirmModal.style.display = 'none';
       }
    };
   });