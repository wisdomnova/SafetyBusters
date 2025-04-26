!function(){
    var a = document.querySelector('#app-item-first'), 
    b = document.querySelector('#app-item-second'), 
    c = document.querySelector('#app-dashboard-flex-first'),
    d = document.querySelector('#app-dashboard-flex-second'),
    e = document.querySelector('#app-dashboard-hazard-code'),
    f = document.querySelector('#app-dashboard-pre-code'),
    chemforward = document.querySelector('#app-chem-btn-cont'),
    statebackward = document.querySelector('#app-state-btn-back'),
    stateforward = document.querySelector('#app-state-btn-cont'),
    appPopupHazard = document.querySelector('#app-dashboard-hazard'), 
    appPopupPrec = document.querySelector('#app-dashboard-precautionary'),
    appPopupHazardInp = appPopupHazard.querySelectorAll('input[type="checkbox"]'),
    appPopupPrecInp = appPopupPrec.querySelectorAll('input[type="checkbox"]'),
    subNameVal = document.querySelector('#substance-name-inp'),
    subName = document.querySelector('#substance-name'),
    casNumVal = document.querySelector('#cas-number-inp'),
    casNum = document.querySelector('#cas-number'),
    signalBlock = document.querySelector('#app-dashboard-inp-single-check-bar');
    signalVal = signalBlock.querySelectorAll('input[type="radio"]'),
    signal = document.querySelector('#signal'),
    chemLotInfoVal = document.querySelector('#chemical-lot-inp'),
    chemLotInfo = document.querySelector('#chemical-lot'),
    companyInfoVal = document.querySelector('#company-info-inp'),
    companyInfo = document.querySelector('#company-info'),
    ghsPictogramVal = document.querySelectorAll('#ghs-pictogram-val'),
    ghsPictogram = document.querySelector('#ghsPictogram'),
    hazCancel = document.querySelector('#app-haz-cancel'),
    hazApply = document.querySelector('#app-haz-apply'),
    precCancel = document.querySelector('#app-prec-cancel'),
    precApply = document.querySelector('#app-prec-apply'),
    hazardText = document.querySelector('#hazard-text'),
    precText = document.querySelector('#prec-text');
    chemforward.addEventListener('click', secondnavigation);
    statebackward.addEventListener('click', firstnavigation);
    // stateforward.addEventListener('click', firstnavigation);
    a.addEventListener('click', firstnavigation);
    b.addEventListener('click', secondnavigation);
    function firstnavigation(){
        a.className = "app-dashboard-item-current";
        b.className = "app-dashboard-item-incurrent"
        c.style.display = "flex";
        d.style.display = "none";
    };
    function secondnavigation(){
        b.className = "app-dashboard-item-current";
        a.className = "app-dashboard-item-incurrent"; 
        c.style.display = "none";
        d.style.display = "flex";
    };
    e.addEventListener('click', function(){
        appPopupHazard.style.display = "flex";
    });
    f.addEventListener('click', function(){
        appPopupPrec.style.display = "flex";
    });
    subNameVal.addEventListener('input', function(){
        subName.innerHTML = this.value;
    });
    casNumVal.addEventListener('input', function(){
        casNum.innerHTML = "CAS RN: "+this.value;
    });
    for(var checkbox of signalVal){
        checkbox.addEventListener('input', function(){
            signal.innerHTML = this.value;
        });
    };
    chemLotInfoVal.addEventListener('input', function(){
        chemLotInfo.innerHTML = "Lot Info: "+this.value;
    });
    companyInfoVal.addEventListener('input', function(){
        companyInfo.innerHTML = this.value;
    });
    for(var ghsItem of ghsPictogramVal){
        ghsItem.addEventListener('click', function(){
            var isnoted = this.getAttribute('noted');
            if(isnoted == "false"){
                ghsPictogram.innerHTML += '<img src="'+this.src+'" alt="" class="app-dashboard-preview-tab-full-image" id="'+this.alt+'"></img>';
                this.setAttribute("noted","true");
            }else{
                ghsPictogram.querySelector('#'+this.alt+'').remove();
                this.setAttribute("noted","false"); 
            }
        });
    };
    precCancel.addEventListener('click', function(){
        appPopupPrec.style.display = "none";
    });
    precApply.addEventListener('click', function(){
        appPopupPrec.style.display = "none";
        applyPrec();
    });
    hazCancel.addEventListener('click', function(){
        appPopupHazard.style.display = "none";
    });
    hazApply.addEventListener('click', function(){
        appPopupHazard.style.display = "none";
        applyHaz();
    });
    function applyPrec(){
        precText.innerHTML = "";
        for(var precitem of appPopupPrecInp){
            if(precitem.checked){
                precText.innerHTML += precitem.value+"<br>";
            }
        }
    };
    function applyHaz(){
        hazardText.innerHTML = "";
        for(var hazitem of appPopupHazardInp){
            if(hazitem.checked){
                hazardText.innerHTML += hazitem.value+"<br>";
            }
        }
    };
}();