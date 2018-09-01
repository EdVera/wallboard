$(document).ready(function () {
        $.getJSON('EUC+-+Requests.json',

function (arr) {
    var tr;
    for (var i = 0; i < arr.length; i++) {
        tr = $('<tr/>');
var TimeLeft = arr[i]['business_time_left'];
var TimeLeft = hhmmss(TimeLeft);

        tr.append("<td>" + arr[i]["task.state"] + "</td>");
        tr.append("<td>" + arr[i]["task.number"] + "</td>");

        tr.append("<td>" + arr[i]["sys_created_on"] + "</td>");
        
        tr.append("<td>" + arr[i]["task.short_description"] + "</td>");
		tr.append("<td>" + arr[i]["task.priority"] + "</td>");
		
		tr.append("<td>" + arr[i]["task.assignment_group"] + "</td>");
		tr.append("<td>" + arr[i]["task.assigned_to"] + "</td>");
		tr.append("<td>" + arr[i]["task.made_sla"] + "</td>");
	       tr.append("<td>" + TimeLeft + "</td>");
        $('table').append(tr);


    document.getElementById("tasks").innerHTML = i +1;

		  //console.log(JSON.stringify( TimeLeft ));
		   function hhmmss(sec_num) {
   
   
    var days    = Math.floor(sec_num / (3600 * 24));
    var hours   = Math.floor((sec_num - (days * (3600 * 24)))/3600);
    var minutes = Math.floor((sec_num - (days * (3600 * 24)) - (hours * 3600)) / 60);
    var seconds = Math.floor(sec_num - (days * (3600 * 24)) - (hours * 3600) - (minutes * 60));

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    return  days + "day" + ':'+ hours+':'+minutes+':'+seconds;
}
}


});
});	



















  