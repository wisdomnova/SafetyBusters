!function(){
    var incidentId = window.incidentid(),
    initialNextBtn = document.querySelector('#inci-initial-next-btn'),
    finalBackBtn = document.querySelector('#inci-final-back-btn'),
    finalNextBtn = document.querySelector('#inci-final-next-btn'),
    initialTabView = document.querySelector('#inci-report-initial'),
    finalTabView = document.querySelector('#inci-report-final'),
    photoInput = document.querySelector('#inci-upload-inp'),
    photoInputLen = document.querySelector('#inci-upload-inp-len'),
    intialViewInp = initialTabView.querySelectorAll("input:not([type='radio']):not([type='checkbox'])"),
    intialViewRadioView = initialTabView.querySelectorAll("#inci-inp-val-radio"),
    finalViewInp = finalTabView.querySelectorAll("input:not([type='radio']):not([type='checkbox']):not([type='file'])"),
    finalViewArea = finalTabView.querySelectorAll("textarea"),
    finalViewSelect = finalTabView.querySelectorAll("select"),
    finalViewRadioView = finalTabView.querySelectorAll("#inci-inp-val-radio"),
    photoView = document.querySelector('#app-dashboard-photo-item'),
    photoViewBase = document.querySelector('#inci-dashboard-photo-view'),
    photoPopupBtn = document.querySelector('#inci-photos-view-btn'),
    photoCloseBtn = document.querySelector('#inci-photos-close-btn'),
    formResults = [], triggerValuesResult = {}, triggerValuesBlob = {}, photoResults = [], photoResultsLen = 0;
    function showNext(){
        var showNextTrigger = validateInitial();
        if(showNextTrigger){
            initialTabView.classList.replace("inci-report-main-visible","inci-report-main-hidden");
            finalTabView.className = "inci-report-main inci-report-main-visible inci-report-main-fade-in";
        }
    };
    function showPrev(){
        finalTabView.classList.replace("inci-report-main-visible","inci-report-main-hidden");
        initialTabView.className = "inci-report-main inci-report-main-visible inci-report-main-fade-in";
    };
    function finalVisible(){
        finalTabView.classList.remove("inci-report-main-fade-in");
    };
    function initialVisible(){
        initialTabView.classList.remove("inci-report-main-fade-in");
    };
    function validateInitial(){
        var validState = true;
        for(var i=0;i<intialViewInp.length;i++){
            var allInputs = intialViewInp[i],
            allInputsRequired = allInputs.getAttribute('data-required');
            if(allInputsRequired === "true"){
                if(allInputs.value.length){
                    allInputs.classList.replace("inci-tab-inp-col-box-invalid","inci-tab-inp-col-box-valid");
                }else{
                    validState = false;
                    allInputs.classList.replace("inci-tab-inp-col-box-valid","inci-tab-inp-col-box-invalid");
                }
            }
        };
        for(var j=0;j<intialViewRadioView.length;j++){
            var allRadioViews = intialViewRadioView[j],
            intialViewRadioChecked = allRadioViews.querySelectorAll("input[type=radio]:checked"),
            intialViewRadioUnchecked = allRadioViews.querySelectorAll("input:not([type=radio]:checked)");
            if(intialViewRadioChecked.length >0 && intialViewRadioUnchecked.length >0){
                allRadioViews.classList.replace("inci-tab-inp-row-invalid","inci-tab-inp-row-valid");
            }else{
                validState = false;
                allRadioViews.classList.replace("inci-tab-inp-row-valid","inci-tab-inp-row-invalid");
            }
        };
        if(validState){
            for(var k=0;k<intialViewInp.length;k++){
                var knownInputs = intialViewInp[k];
                formResults.push(knownInputs.value);
            };
            for(var l=0;l<intialViewRadioView.length;l++){
                var knownRadioViews = intialViewRadioView[l],
                knownViewRadioChecked = knownRadioViews.querySelector("input[type=radio]:checked");
                formResults.push(knownViewRadioChecked.value);
            };
        };
        return validState;
    };
    function validateFinal(){
        var validState = true;
        for(var i=0;i<finalViewInp.length;i++){
            var allInputs = finalViewInp[i];
            allInputsRequired = allInputs.getAttribute('data-required');
            if(allInputsRequired === "true"){
                if(allInputs.value.length){
                    allInputs.classList.replace("inci-tab-inp-col-box-invalid","inci-tab-inp-col-box-valid");
                }else{
                    validState = false;
                    allInputs.classList.replace("inci-tab-inp-col-box-valid","inci-tab-inp-col-box-invalid");
                }
            }
        };
        for(var j=0;j<finalViewArea.length;j++){
            var allAreas = finalViewArea[j];
            allAreasRequired = allAreas.getAttribute('data-required');
            if(allAreasRequired === "true"){
                if(allAreas.value.length){
                    allAreas.classList.replace("inci-tab-inp-col-box-invalid","inci-tab-inp-col-box-valid");
                }else{
                    validState = false;
                    allAreas.classList.replace("inci-tab-inp-col-box-valid","inci-tab-inp-col-box-invalid");
                }
            };
        };
        for(var k=0;k<finalViewSelect.length;k++){
            var allSelects = finalViewSelect[k];
            allSelectsRequired = allSelects.getAttribute('data-required');
            if(allSelectsRequired === "true"){
                if(allSelects.value.length){
                    allSelects.classList.replace("inci-tab-inp-col-box-invalid","inci-tab-inp-col-box-valid");
                }else{
                    validState = false;
                    allSelects.classList.replace("inci-tab-inp-col-box-valid","inci-tab-inp-col-box-invalid");
                }
            };
        };
        for(var l=0;l<finalViewRadioView.length;l++){
            var allRadioViews = finalViewRadioView[l],
            finalViewRadioChecked = allRadioViews.querySelectorAll("input[type=radio]:checked"),
            finalViewRadioUnchecked = allRadioViews.querySelectorAll("input:not([type=radio]:checked)");
            if(finalViewRadioChecked.length >0 && finalViewRadioUnchecked.length >0){
                allRadioViews.classList.replace("inci-tab-inp-row-invalid","inci-tab-inp-row-valid");
            }else{
                validState = false;
                allRadioViews.classList.replace("inci-tab-inp-row-valid","inci-tab-inp-row-invalid");
            }
        };
        if(validState){
            for(var m=0;m<finalViewInp.length;m++){
                var knownInputs = finalViewInp[m];
                formResults.push(knownInputs.value);
            };
            for(var n=0;n<finalViewArea.length;n++){
                var knownAreas = finalViewArea[n];
                formResults.push(knownAreas.value);
            };
            for(var o=0;o<finalViewSelect.length;o++){
                var knownSelects = finalViewSelect[o];
                formResults.push(knownSelects.value);
            };
            for(var p=0;p<intialViewRadioView.length;p++){
                var knownRadioViews = finalViewRadioView[p],
                knownViewRadioChecked = knownRadioViews.querySelector("input[type=radio]:checked");
                formResults.push(knownViewRadioChecked.value);
            };
        };
        return validState;
    };
    function submitReport(){
        var submitReportTrigger = validateFinal();
        if(submitReportTrigger){
            var usersId = localStorage.getItem('__SafetyBusterId');
            var triggerValues = [
                "Employee_Name","Supervisor_Name","Street_Address","City","State","Zip_Code","Date_Hired","Years_In_Company","Physician_Name",
                "Facility","Facility_Street","Facility_City","Facility_Zip_Code","Gender","Employee_Emergency","Employee_Hospitalized",
                "Event_Location","OSHA_Log","Date_of_Injury","Time_of_Work","Time_of_Event","Years_of_Experience","Equipment_Used",
                "Substance_that_Harmed","Treatment_Received","Witness_Name","Date_of_Death","Reason_For_No_Procedure","Equipment_Type",
                "Employee_Activity_Before_Incident","Accident_Description","Action_to_Prevent_Reoccurence","Injured_Body_Part","Nature_of_Injury",
                "OSHA_Recordable","JSA_Training","PPE_Procedures",
            ];
            if(usersId !== null){
                Object.assign(triggerValuesResult, {"Users_Id" : usersId});
            }
            if(incidentId !== null){
                Object.assign(triggerValuesResult, {"Reference" : incidentId});
            }
            if(photoResults !== undefined){
                Object.assign(triggerValuesBlob, {"Photo_Blob" : photoResults});
            }else{
                Object.assign(triggerValuesBlob, {"Photo_Blob" : []});
            }
            for(var i=0;i<triggerValues.length;i++){
                var triggerValuesKeys = triggerValues[i],
                triggerValuesCords = formResults[i];
                Object.assign(triggerValuesResult, {[triggerValuesKeys] : triggerValuesCords});
            };
            sendReport();
        };
    };
    function sendReport(){
        var triggerValuesObj = {
            "Trigger" : triggerValuesResult,
            "Blob" : triggerValuesBlob
        };
        finalNextBtn.style.pointerEvents = 'none';
        finalNextBtn.innerHTML = '<ion-icon name="bowling-ball-outline" class="app-loader-icon"></ion-icon>';
        axios.post('http://localhost/safetybusters/assets/php/incidentreport.php',
        triggerValuesObj
        ).then(function(res){
            parseResponse(res.data,triggerValuesObj);
        }).catch(function(res){
            resetResponse();
        });
    };
    function resetResponse(){
        alert("Something Went Wrong");
        finalNextBtn.style.pointerEvents = 'all';
        finalNextBtn.innerHTML = 'Submit';
    };
    function parseResponse(data,prev){
        if(!data[0].State){
            alert("Something Went Wrong");
        }else{
            window.location.href = "http://localhost/safetybusters/screens/incidentreporting.html";
            popupPdf(prev);
        }
    };
    function popupPdf(res){
        var popupDataRaw = res.Trigger,
        popupWindow = window.open('','Incident Report','height=500, width=500');
        if(photoResults.length){
            localStorage.setItem('__SafetyBusterIncidentImage', JSON.stringify(photoResults));
            popupWindow.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Incident Report</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"><link rel="stylesheet" href="../assets/css/user-text.css" type="text/css"><link rel="stylesheet" href="../assets/css/incident-report.css" type="text/css"><link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/latest/normalize.css"/></head><body><div class="inci-rep-cover"><div class="inci-rep-tab"><div class="inci-rep-top"><img src="../assets/images/safetybuster-white.png" alt="" class="inci-rep-top-img"></div><div class="inci-rep-big"><span class="text-xl text-bold text-grey">Incident Report</span><hr class="inci-rep-big-hr"/></div><div class="inci-rep-form-tab"><div class="inci-rep-form-tab-main"><span class="text-ll text-black text-bold">Information about the employee</span><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black  text-bold">Full name</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Employee_Name+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black  text-bold">Name of supervisor</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Supervisor_Name+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Street address</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Street_Address+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">City</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.City+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">State</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.State+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Zip/Postal code</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Zip_Code+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Gender</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Gender+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Date hired</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Date_Hired+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Years with company</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Years_In_Company+'</span></th></tr></table></div></div><div class="inci-rep-form-tab"><div class="inci-rep-form-tab-main"><span class="text-ll text-black text-bold">Information about the physician/health care professional</span><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Name of physician</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Physician_Name+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Treatment facility</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Facility+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Treatment street</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Facility_Street+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Treatment city</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Facility_City+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Treatment zip/postal code</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Facility_Zip_Code+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Employee treated in emergency room</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Employee_Emergency+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Employee hospitalized overnight as an in-patient</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Employee_Hospitalized+'</span></th></tr></table></div></div><div class="inci-rep-form-tab"><div class="inci-rep-form-tab-main"><span class="text-ll text-black text-bold">Information about the case</span><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Exact location of event</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Event_Location+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Case number from OSHA Log</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.OSHA_Log+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Date of injury or illness</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Date_of_Injury+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Time employee began work</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Time_of_Work+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Time of event</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Time_of_Event+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Years of experience in specific task</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Years_of_Experience+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Part of body that was injured</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Injured_Body_Part+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Nature if injury</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Nature_of_Injury+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Equipment/tool being used</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Equipment_Used+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Object/substance that harmed the employee</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Substance_that_Harmed+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Treatment(s) the employee received</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Treatment_Received+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Witnesses name</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Witness_Name+'</span></th></tr></table></div></div><div class="inci-rep-form-tab"><div class="inci-rep-form-tab-main"><span class="text-ll text-black text-bold">Information/corrective actions about the case</span><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">OSHA recordable injury?</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.OSHA_Recordable+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">JSA training completion/documentation</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.JSA_Training+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black  text-bold">PPE procedures completion</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.PPE_Procedures+'</span></th></tr></table><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Reason for PPE Information</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Equipment involved</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead-long"><span class="text-m text-blacktext-bold">'+popupDataRaw.Reason_For_No_Procedure+'</span></th><th class="inci-rep-form-tab-main-thead-long"><span class="text-m text-grey text-light">'+popupDataRaw.Equipment_Type+'</span></th></tr></table><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Activity before incident</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Description of incident</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead-long"><span class="text-m text-black text-bold">'+popupDataRaw.Employee_Activity_Before_Incident+'</span></th><th class="inci-rep-form-tab-main-thead-long"><span class="text-m text-grey text-light">'+popupDataRaw.Accident_Description+'</span></th></tr></table><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">If the employee died, date of death</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Date_of_Death+'</span></th></tr></table><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Action to Prevent re-occurence</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead-long"><span class="text-m text-black text-bold">'+popupDataRaw.Action_to_Prevent_Reoccurence+'</span></th></tr></table></div></div><div class="inci-rep-form-tab-main-img-view"><div class="inci-rep-form-tab-main-img-tab"></div></div><div class="inci-rep-big"><hr class="inci-rep-big-hr"/></div></div></div></body><script src="../assets/js/prints/printincidentwith.js"></script></html>');
        }else{
            popupWindow.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Incident Report</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"><link rel="stylesheet" href="../assets/css/user-text.css" type="text/css"><link rel="stylesheet" href="../assets/css/incident-report.css" type="text/css"><link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/latest/normalize.css"/></head><body><div class="inci-rep-cover"><div class="inci-rep-tab"><div class="inci-rep-top"><img src="../assets/images/safetybuster-white.png" alt="" class="inci-rep-top-img"></div><div class="inci-rep-big"><span class="text-xl text-bold text-grey">Incident Report</span><hr class="inci-rep-big-hr"/></div><div class="inci-rep-form-tab"><div class="inci-rep-form-tab-main"><span class="text-ll text-black text-bold">Information about the employee</span><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black  text-bold">Full name</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Employee_Name+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black  text-bold">Name of supervisor</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Supervisor_Name+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Street address</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Street_Address+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">City</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.City+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">State</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.State+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Zip/Postal code</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Zip_Code+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Gender</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Gender+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Date hired</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Date_Hired+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Years with company</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Years_In_Company+'</span></th></tr></table></div></div><div class="inci-rep-form-tab"><div class="inci-rep-form-tab-main"><span class="text-ll text-black text-bold">Information about the physician/health care professional</span><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Name of physician</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Physician_Name+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Treatment facility</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Facility+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Treatment street</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Facility_Street+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Treatment city</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Facility_City+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Treatment zip/postal code</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Facility_Zip_Code+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Employee treated in emergency room</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Employee_Emergency+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Employee hospitalized overnight as an in-patient</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Employee_Hospitalized+'</span></th></tr></table></div></div><div class="inci-rep-form-tab"><div class="inci-rep-form-tab-main"><span class="text-ll text-black text-bold">Information about the case</span><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Exact location of event</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Event_Location+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Case number from OSHA Log</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.OSHA_Log+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Date of injury or illness</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Date_of_Injury+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Time employee began work</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Time_of_Work+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Time of event</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Time_of_Event+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Years of experience in specific task</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Years_of_Experience+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Part of body that was injured</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Injured_Body_Part+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Nature if injury</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Nature_of_Injury+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Equipment/tool being used</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Equipment_Used+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Object/substance that harmed the employee</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Substance_that_Harmed+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Treatment(s) the employee received</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Treatment_Received+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Witnesses name</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Witness_Name+'</span></th></tr></table></div></div><div class="inci-rep-form-tab"><div class="inci-rep-form-tab-main"><span class="text-ll text-black text-bold">Information/corrective actions about the case</span><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">OSHA recordable injury?</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.OSHA_Recordable+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">JSA training completion/documentation</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.JSA_Training+'</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black  text-bold">PPE procedures completion</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.PPE_Procedures+'</span></th></tr></table><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Reason for PPE Information</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Equipment involved</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead-long"><span class="text-m text-blacktext-bold">'+popupDataRaw.Reason_For_No_Procedure+'</span></th><th class="inci-rep-form-tab-main-thead-long"><span class="text-m text-grey text-light">'+popupDataRaw.Equipment_Type+'</span></th></tr></table><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Activity before incident</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Description of incident</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead-long"><span class="text-m text-black text-bold">'+popupDataRaw.Employee_Activity_Before_Incident+'</span></th><th class="inci-rep-form-tab-main-thead-long"><span class="text-m text-grey text-light">'+popupDataRaw.Accident_Description+'</span></th></tr></table><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">If the employee died, date of death</span></th><th class="inci-rep-form-tab-main-thead"><span class="text-m text-grey text-light">'+popupDataRaw.Date_of_Death+'</span></th></tr></table><table class="inci-rep-form-tab-main-table"><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead"><span class="text-m text-black text-bold">Action to Prevent re-occurence</span></th></tr><tr class="inci-rep-form-tab-main-tree"><th class="inci-rep-form-tab-main-thead-long"><span class="text-m text-black text-bold">'+popupDataRaw.Action_to_Prevent_Reoccurence+'</span></th></tr></table></div></div><div class="inci-rep-big"><hr class="inci-rep-big-hr"/></div></div></div></body><script src="../assets/js/prints/printincident.js"></script></html>');
        }
        popupWindow.document.close();
    };
    function readFileAsText(file){
        return new Promise(function(resolve,reject){
          let fr = new FileReader();
          fr.onload = function(){
            resolve(fr.result);
          };
          fr.onerror = function(){
            reject(fr);
          };
          fr.readAsDataURL(file);
        });
    };
    function uploadBlob(event){
        var photoFiles = event.currentTarget.files, photoReaders = [];
        if(!photoFiles.length) {
            return false;
        }else{
            for(var i=0;i<photoFiles.length;i++){
                photoReaders.push(readFileAsText(photoFiles[i]));
            };
            Promise.all(photoReaders).then((values)=>{
                photoResultsLen = values.length;
                photoResults = values;
                for(var a=0;a<values.length;a++){
                    var blobs = values[a];
                    photoInputLen.innerHTML = (photoResultsLen+" image file(s)");
                }
            });
        };
    };
    function UpdatePhotoArray(res){
        if(photoResults.length >1){
            photoResults.splice(res,1);
        }else{
            ClosePhotoView();
            photoResults.length = 0;
        };
        ShowPhotoView();
        photoResultsLen = photoResults.length;
        photoInputLen.innerHTML = (photoResultsLen+" image file(s)");
    };
    function InitiateRemoval(){
        var removalBtn = photoView.querySelectorAll('#inci-dashboard-photo-cors-abs');
        for(var a=0;a<removalBtn.length;a++){
            removalBtn[a].addEventListener('click', function(){
                var thisData = this.getAttribute('data-index');
                UpdatePhotoArray(thisData);
            });
        };
    };
    function ShowPhotoView(){
        photoViewBase.innerHTML = "";
        if(photoResults.length){
            for(var i=0;i<photoResults.length;i++){
                var AllPhotoBlobs = photoResults[i];
                photoViewBase.innerHTML += 
                `<div class="inci-dashboard-photo-cors" id="inci-dashboard-photo-cors" data-index="`+i+`">
                    <div class="inci-dashboard-photo-cors-abs" id="inci-dashboard-photo-cors-abs" data-index="`+i+`">
                        <ion-icon name="remove-circle-outline" class="inci-dashboard-photo-cors-icon"></ion-icon>
                    </div>
                    <img src="`+AllPhotoBlobs+`" class="inci-dashboard-photo-cors-img"/>
                </div>`;
            };
            InitiateRemoval();
            photoView.style.display = "flex";
        };
    };
    function ClosePhotoView(){
        photoView.style.display = "none";
    };
    photoPopupBtn.addEventListener('click',ShowPhotoView,false);
    photoCloseBtn.addEventListener('click',ClosePhotoView,false)
    photoInput.addEventListener('change',uploadBlob,false);
    initialNextBtn.addEventListener('click',showNext,false);
    finalBackBtn.addEventListener('click',showPrev,false);
    finalNextBtn.addEventListener('click',submitReport,false);
    initialTabView.addEventListener('animationend',initialVisible,false);
    finalTabView.addEventListener('animationend',finalVisible,false);
}();