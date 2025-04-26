!function(){
    let subbtn = document.querySelector('#app-sub-btn'),
    emailinp = document.querySelector('#app-mail-inp'),
    pswrdinp = document.querySelector('#app-pass-inp'),
    divinp = document.querySelectorAll('#app-sub-inp-div'),
    inp = document.querySelectorAll('input'),
    texterrtab = document.querySelectorAll('#app-sub-err-tab'),
    divberrtap = document.querySelector('#app-top-err-tab'),
    genId = window.randomiser(),
    substance = false;
    subbtn.addEventListener('click', checknull);
    function checknull(){
        for(var i=0;i<inp.length;i++){
            if(inp[i].value.length<1){
                texterrtab[i].style.display = "flex";
                divinp[i].classList.add('app-sub-inp-err');
                substance = false;
            }else{
                texterrtab[i].style.display = "none";
                divinp[i].classList.remove('app-sub-inp-err');
                substance = true;
            }
        }
        if(substance){
            emailinp.disabled = true;
            pswrdinp.disabled = true;
            subbtn.style.pointerEvents = 'none';
            subbtn.innerHTML = '<ion-icon name="bowling-ball-outline" class="app-loader-icon"></ion-icon>';
            pinch();
        }
    };
    function pinch(){
        axios.post('http://localhost/safetybusters/assets/php/signup.php',{
            userid : genId,
            email : emailinp.value.toLowerCase(),
            pswrd : pswrdinp.value,
        }).then(function(res){
            parse(res.data);
        }).catch(function(res){ 
            parse(res.data);
        });
    };
    function parse(data){
        if(!data[0].State){
            emailinp.disabled = false;
            pswrdinp.disabled = false;
            subbtn.style.pointerEvents = 'all';
            subbtn.innerHTML = "Continue";
            divberrtap.style.display = "flex";
        }else{
            storeId();
            emailinp.disabled = true;
            pswrdinp.disabled = true;
            subbtn.style.pointerEvents = 'none';
            divberrtap.style.display = "none";
        }
    };
    function storeId(){ 
        var gensId = localStorage.setItem("__SafetyBusterId", genId);
        if(gensId !== null){
            setTimeout(()=>{
                window.location.href = 'http://localhost/safetybusters/screens/chemicallabelling.html';
            },2000);
        }
    };
}();