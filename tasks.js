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


  /////////////////////////Filters/////////////////////////////////////////////////////
		/*if(arr[i]["task.short_description"] == "Desktop Application Integration - Medium Package" )
        {
         $('td',tr).show();
	
	     }
		 
		 else if(arr[i]["task.short_description"] == "Desktop Application Integration - Simple Package") {
          $('td',tr).show();
		  
		  }
		  
		  else if(arr[i]["task.short_description"] == "Desktop Application Integration - Complex Package") {
          $('td',tr).show();
		  
		  }
		  else  {
          $('td',tr).remove();
		  
		  };*/
    }
	




var filteredArray1 = arr.filter(function(element) { return element["task.state"] == "Open" })
filteredArray1.length;

var filteredArray2 = arr.filter(function(element) { return element["task.state"] == "Work in Progress" })
filteredArray2.length;

var filteredArray3 = arr.filter(function(element) { return element["task.state"] == "Awaiting Info" })
filteredArray3.length;

var filteredArray4 = arr.filter(function(element) { return element["task.state"] == "New" })
filteredArray4.length;
/////////////////////chart////////////////////////////////////////////////////////		  
	 google.charts.load('current', {
  callback: function () {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'x');
    data.addColumn('number', 'y');
    data.addRows([
       ['Open', filteredArray1.length],
       ['Work in Progress', filteredArray2.length],
       ['Awaiting Info', filteredArray3.length],
	   ['New', filteredArray4.length]

    ]);

    var container = document.getElementById('DivChart');
    var chart = new google.visualization.PieChart(container);

    var observer = new MutationObserver(function () {
      $.each($('#DivChart path[stroke="#636363"]'), function (index, path) {
        $(path).attr('stroke', '#ffffff');
      });
      $.each($('#DivChart text[fill="#9e9e9e"]'), function (index, label) {
        $(label).attr('fill', '#ffffff');
      });
    });
    observer.observe(container, {
      childList: true,
      subtree: true
    });

    chart.draw(data, {
      backgroundColor: '#215272',
	   pieHole: 0.5,
	  pieSliceText: 'value',
	   width: 2200,
          height: 620,
      legend: {position: 'labeled', textStyle: {color: 'white', fontSize: 17}}
    });
  },
  packages: ['corechart']
});
	  	///////////////////////////chart///////////////////////////////////////////////////////////////////////	


});
});	



















  