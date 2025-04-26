!function(){
    var printableArea = document.body;
    var htmlscript = document.createElement("script");
    htmlscript.type = "text/javascript";
    htmlscript.src = "https://html2canvas.hertzen.com/dist/html2canvas.js";
    if(printableArea.appendChild(htmlscript)){
        setTimeout(printPage,3000);
    }
    function printPage() {
        html2canvas(printableArea).then(function(canvas) {
            var link = document.createElement("a");
            link.download = "Document.png";
            link.href = canvas.toDataURL("img/png", 1.0);
            document.body.appendChild(link);
            link.click();
        });
    };
}();