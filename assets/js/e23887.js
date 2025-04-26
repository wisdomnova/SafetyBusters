!function(a,b){
    let passwordinp = document.querySelector('#app-pass-inp'),
    passwordicon = document.querySelector('#app-show-icon');
    passwordicon.addEventListener('click', function(){
        if(passwordinp.type == "text"){
            passwordicon.name = "eye-outline";
            passwordinp.type = "password";
        }else{
            passwordicon.name = "eye-off-outline"
            passwordinp.type = "text";
        }
    });
}(window,document);