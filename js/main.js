//console.log("hi");

$(function() {
/*
    //console.log("note yet");
    $.get('Titanictest.csv', function(data){
	console.log("hi");
	var result = $.csv.toObjects(data);
	console.log(data);
	//console.log("hi");
    });
*/
var blah = $.get("Titanictest.csv", function() {
    console.log("success");
})
.fail(function(data) {
    console.log(data);
})
    
});
