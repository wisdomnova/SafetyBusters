!function(){
    var hamBtn = document.querySelector('#app-dashboard-nav-ham'),
    hamInp = document.querySelector("#app-dashboard-tab-ham-cover-base-inp"),
    hamTab = document.querySelector('#app-dashboard-nav-item'),
    gensId = localStorage.getItem("__SafetyBusterId");
    hamBtn.addEventListener('click', showNavBar);
    if(gensId === null){
        setTimeout(()=>{
            window.location.href = 'http://localhost/safetybusters/screens/login.html';
        },2000);
    };
    function showNavBar(){
        var sel = hamInp.checked;
        if(sel){
            hamTab.style.display = "flex";
        }else{
            hamTab.style.display = "none";
        }
    };
}();