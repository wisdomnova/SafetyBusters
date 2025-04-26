!function(){
    var printableArea = document.body;
    var htmlimg = document.createElement("script");
    var htmlscript = document.createElement("script");
    htmlscript.type = "text/javascript";
    htmlimg.type = "text/javascript";
    htmlscript.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.debug.js";
    htmlimg.src = "https://html2canvas.hertzen.com/dist/html2canvas.js";
    if(printableArea.appendChild(htmlscript) && printableArea.appendChild(htmlimg)){
        setTimeout(printPage, 3000);
    };
    function printPage() {
        html2canvas(printableArea).then(function(canvas) {
            var imgData = canvas.toDataURL("img/jpeg", 1.0);
            var doc = new jsPDF({
                orientation: 'landscape',
                unit: "pt",
                format: [canvas.width, canvas.height]
            });
            doc.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
            doc.save("Document.pdf");
        });
    };
}();