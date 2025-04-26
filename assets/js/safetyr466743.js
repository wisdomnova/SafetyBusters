!function(){
    var args = ["A",0,"B","C",1,"D","E",2,"F","G",3,"H","I",4,"J","K",,5,"L","M",6,"N","O","P",7,"Q","R",8,"S","T",9,"U","V","W","X","Y","Z"];
    function generate(){
        var retr = [];
        for(var i=0;i<25;i++){
            var rand = Math.floor(Math.random() * args.length);
            var rest = args[rand];
            retr.push(rest);
        }
        return retr;
    };
    function joinvalues(){
        var gen = generate();
        var arrs = gen.join("");
        return arrs;
    };
    function generateIncidentId(){
        var retr = [];
        for(var i=0;i<10;i++){
            var rand = Math.floor(Math.random() * args.length);
            var rest = args[rand];
            retr.push(rest);
        }
        return retr;
    };
    function joinincidentvalues(){
        var gen = generateIncidentId();
        var arrs = gen.join("");
        return ("#"+arrs);
    };
    if(window.randomiser !== null){
        window.randomiser = function(){
            var results = joinvalues();
            return results;
        };
    };
    if(window.incidentid !== null){
        window.incidentid = function(){
            var results = joinincidentvalues();
            return results;
        };
    };
}();