document.getElementById('login-submit').addEventListener('click',function(){
    let mail = document.getElementById('user-email');
    let mailValue = mail.value;

    let pass = document.getElementById('user-password');
    let passValue = pass.value;


    if(mailValue == 'abir@eshu' && passValue == 'abireshu'){
       window.location.href = 'banking.html';
    }
})