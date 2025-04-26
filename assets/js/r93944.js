!function(){
    var usersId = localStorage.getItem("__SafetyBusterId");
    if(usersId !== null){
        fetchReports();
    }
    function fetchReports(){
        axios.post('http://localhost/safetybusters/assets/php/reports.php',{
            "userid" : usersId,
        }).then(function(res){
            parse(res.data);
        }).catch(function(res){ 
            parse(res.data);
        });
    };
    function parse(data){
        if(!data[0].State){
            alert('Empty Reports');
        }else{
            var allReports = data[0].Message;
        }
    };
}();