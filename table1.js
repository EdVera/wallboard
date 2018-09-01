$(document).ready(function () {
			$.getJSON('EUC+-+Incidents.json',

function (arr) {
		var tr;
		for (var i = 0; i < arr.length; i++) {
			tr = $('<tr/>');
		tr.append("<td>" + arr[i].state + "</td>");
		tr.append("<td>" + arr[i].number + "</td>");
		tr.append("<td>" + arr[i].sys_created_on + "</td>");
		tr.append("<td>" + arr[i].short_description + "</td>");
		tr.append("<td>" + arr[i].priority + "</td>");
		tr.append("<td>" + arr[i].assignment_group + "</td>");
	     tr.append("<td>" + arr[i].assigned_to +  "</td>");
       tr.append("<td>" + arr[i].made_sla + "</td>");
		$('table').append(tr);
		
	document.getElementById("thediv").innerHTML = i +1; //Count INCs

	 }
    });
   });
	
	
	
	
	