 !function(){
    var printableArea = document.body;
    var htmlimg = document.createElement("script");
    var htmlscript = document.createElement("script"),
    incidentStorage = JSON.parse(localStorage.getItem('__SafetyBusterIncidentImage')),
    incidentTarget = document.querySelector('.inci-rep-form-tab-main-img-tab');
    htmlscript.type = "text/javascript";
    htmlimg.type = "text/javascript";
    htmlscript.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.debug.js";
    htmlimg.src = "https://html2canvas.hertzen.com/dist/html2canvas.js";
    if(incidentStorage !== null){
        for(var i=0;i<incidentStorage.length;i++){
            incidentTarget.innerHTML += '<img src="'+incidentStorage[i]+'" class="inci-rep-form-tab-main-img"/>';
        };
    }
    if(printableArea.appendChild(htmlscript) && printableArea.appendChild(htmlimg)){
        setTimeout(printPage, 8000);
    };
    function scrollBack(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    function printPage() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        html2canvas(printableArea).then(function(canvas) {
            var imgData = canvas.toDataURL("img/jpeg", 1.0);
            var doc = new jsPDF({
                orientation: 'portrait',
                unit: "pt",
                format: [canvas.width, canvas.height]
            });
            doc.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
            doc.save("Incident Report.pdf");
        });
    };
    window.addEventListener("scroll", scrollBack);
}();