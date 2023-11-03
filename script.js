document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.querySelector('.box-login');
   
    form.addEventListener('submit', function (e) {
        
        
        e.preventDefault();
      

        const name = document.getElementById('name').value;
       
        const password = document.getElementById('password').value;
        
       alert("Bem vindo John")
       
    });
});
