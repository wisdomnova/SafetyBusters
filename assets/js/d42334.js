!function(){
    var printInit = document.querySelector('#app-dashboard-print'),
    printPage = document.querySelector('#app-print-page-view'),
    printSection = document.querySelector('#app-dashboard-printer'),
    printFormatDiv = document.querySelector('#app-dashboard-print-format-tab'),
    printFormatDivInp = printFormatDiv.querySelectorAll('input[type="radio"]'),
    printDimensionDiv = document.querySelector('#app-dashboard-dimension-format-tab'),
    printDimensionDivInp = printDimensionDiv.querySelectorAll('input[type="radio"]'),
    printCancelBtn = document.querySelector('#app-print-cancel'),
    printSaveBtn = document.querySelector('#app-print-apply');
    printInit.addEventListener('click', showPrintSection);
    printCancelBtn.addEventListener('click', hidePrintSection);
    printSaveBtn.addEventListener('click', dashboardFilter);
    function showPrintSection(){
        printSection.style.display = "flex";
    };
    function hidePrintSection(){
        printSection.style.display = "none";
    };
    function printFormatFunc(){
        var formats = "", dimensions = "";
        for(var printformatitem of printFormatDivInp){
            if(printformatitem.checked){
                formats = (printformatitem.value);
            }
        };
        for(var printdimensionitem of printDimensionDivInp){
            if(printdimensionitem.checked){
                dimensions = (printdimensionitem.value);
            }
        };
        return({
            "formats" : formats,
            "dimensions" : dimensions
        });
    };
    function dashboardFilter(){
        var residue = printFormatFunc(),
        resForm = residue.formats,
        resDime = residue.dimensions;
        if(resForm && resDime !== ""){
            PrintFilter(resForm,resDime);
        }
    };
    function PrintFilter(a,b){
        if(b == "3x4"){
            dashboardPrint3x4(a);
        }else{
            dashboardPrint2x5(a);
        }
    };
    function printType(res){
        var response = "";
        if(res == "png"){
            response = '<script src="../assets/js/prints/printpng.js"></script>';
        }else{
            response = '<script src="../assets/js/prints/printpdf.js"></script>';
        }
        return response;
    }; 
    function dashboardPrint3x4(a){
        if(a !== "print"){
            var types = printType(a);
            var appContents = document.querySelector('#app-dashboard-preview-cover').innerHTML;
            var appWindow = window.open('', 'Print Label', 'height=500, width=500');
            appWindow.document.write('<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Print Template</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"><link rel="stylesheet" href="../assets/css/user-text.css" type="text/css"><link rel="stylesheet" href="../assets/css/user-print.css" type="text/css"><link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.11.0/build/cssnormalize/cssnormalize-min.css"/></head><body id="app-print-page-view"><div class="app-print-layout"><div class="app-print-row-34"><div class="app-print-col"><div class="app-print-col-child-50">'+appContents+'</div></div><div class="app-print-col"><div class="app-print-col-child-50">'+appContents+'</div></div></div><div class="app-print-row-34"><div class="app-print-col"><div class="app-print-col-child-50">'+appContents+'</div></div><div class="app-print-col"><div class="app-print-col-child-50">'+appContents+'</div></div></div><div class="app-print-row-34"><div class="app-print-col"><div class="app-print-col-child-50">'+appContents+'</div></div><div class="app-print-col"><div class="app-print-col-child-50">'+appContents+'</div></div></div></div>'+types+'</body></html>');
            appWindow.document.close();
        }else{
            var appContents = document.querySelector('#app-dashboard-preview-cover').innerHTML;
            var appWindow = window.open('', 'Print Label', 'height=500, width=500');
            appWindow.document.write('<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Print Template</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"><link rel="stylesheet" href="../assets/css/user-text.css" type="text/css"><link rel="stylesheet" href="../assets/css/user-print.css" type="text/css"><link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.11.0/build/cssnormalize/cssnormalize-min.css"/></head><body id="app-print-page-view"><div class="app-print-layout"><div class="app-print-row-34"><div class="app-print-col"><div class="app-print-col-child">'+appContents+'</div></div><div class="app-print-col"><div class="app-print-col-child">'+appContents+'</div></div></div><div class="app-print-row-34"><div class="app-print-col"><div class="app-print-col-child">'+appContents+'</div></div><div class="app-print-col"><div class="app-print-col-child">'+appContents+'</div></div></div><div class="app-print-row-34"><div class="app-print-col"><div class="app-print-col-child">'+appContents+'</div></div><div class="app-print-col"><div class="app-print-col-child">'+appContents+'</div></div></div></div></body></html>');
            appWindow.document.close();         
            appWindow.window.addEventListener('afterprint',()=>{appWindow.window.close();});
            setTimeout(()=>{appWindow.print();},3000);
        }
    };
    function dashboardPrint2x5(a){ 
        if(a !== "print"){
            var types = printType(a);
            var appContents = document.querySelector('#app-dashboard-preview-cover').innerHTML;
            var appWindow = window.open('', 'Print Label', 'height=500, width=500');
            appWindow.document.write('<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Print Template</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"><link rel="stylesheet" href="../assets/css/user-text.css" type="text/css"><link rel="stylesheet" href="../assets/css/user-print.css" type="text/css"><link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.11.0/build/cssnormalize/cssnormalize-min.css"/></head><body id="app-print-page-view"><div class="app-print-layout"><div class="app-print-row-25"><div class="app-print-col"><div class="app-print-col-child-50">'+appContents+'</div></div><div class="app-print-col"><div class="app-print-col-child-50">'+appContents+'</div></div></div><div class="app-print-row-25"><div class="app-print-col"><div class="app-print-col-child-50">'+appContents+'</div></div><div class="app-print-col"><div class="app-print-col-child-50">'+appContents+'</div></div></div></div>'+types+'</body></html>');
            appWindow.document.close();
        }else{
            var appContents = document.querySelector('#app-dashboard-preview-cover').innerHTML;
            var appWindow = window.open('', 'Print Label', 'height=500, width=500');
            appWindow.document.write('<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Print Template</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"><link rel="stylesheet" href="../assets/css/user-text.css" type="text/css"><link rel="stylesheet" href="../assets/css/user-print.css" type="text/css"><link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.11.0/build/cssnormalize/cssnormalize-min.css"/></head><body id="app-print-page-view"><div class="app-print-layout"><div class="app-print-row-25"><div class="app-print-col"><div class="app-print-col-child">'+appContents+'</div></div><div class="app-print-col"><div class="app-print-col-child">'+appContents+'</div></div></div><div class="app-print-row-25"><div class="app-print-col"><div class="app-print-col-child">'+appContents+'</div></div><div class="app-print-col"><div class="app-print-col-child">'+appContents+'</div></div></div></div></body></html>');
            appWindow.document.close();
            appWindow.window.addEventListener('afterprint',()=>{appWindow.window.close();});
            setTimeout(()=>{appWindow.print();},3000);
        }
    }
}();