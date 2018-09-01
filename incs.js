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
//filters
 if(arr[i].priority == "3 - High")
        {
          $('td',tr).css ('background-color', 'red');
		}
		 else if(arr[i].priority == "4 - Medium") {
          $('td',tr).css('background-color', '#f9bc59');
		  };
//filters		   		  
var filteredArray1 = arr.filter(function(element) { return element.state == "Work in Progress" })
filteredArray1.length;

var filteredArray2 = arr.filter(function(element) { return element.state == "Awaiting Info" })
filteredArray2.length;

var filteredArray3 = arr.filter(function(element) { return element.state == "Open" })
filteredArray3.length;

var filteredArray4 = arr.filter(function(element) { return element.state == "Acknowledged" })
filteredArray4.length;

var filteredArray5 = arr.filter(function(element) { return element.state == "New" })
filteredArray5.length;
/////////////////////Status End////////////////////////////////////////////////////////
var filteredArray6 = arr.filter(function(element) { return element.priority == "5 - Low" })
filteredArray6.length;

var filteredArray7 = arr.filter(function(element) { return element.priority == "4 - Medium" })
filteredArray7.length;

var filteredArray8 = arr.filter(function(element) { return element.priority == "3 - High" })
filteredArray8.length;
/////////////////////PriortyEnd////////////////////////////////////////////////////////	

var filteredArray9 = arr.filter(function(element) { return element.assigned_to == "Mike Lopez" })
filteredArray9.length;

var filteredArray10 = arr.filter(function(element) { return element.assigned_to == "Alex Alvarez" })
filteredArray10.length;

var filteredArray11 = arr.filter(function(element) { return element.assigned_to == "Amit Gupta" })
filteredArray11.length;

var filteredArray12 = arr.filter(function(element) { return element.assigned_to == "Roberto Salinas" })
filteredArray12.length;

var filteredArray13 = arr.filter(function(element) { return element.assigned_to == "German Vazquez" })
filteredArray13.length;

var filteredArray14 = arr.filter(function(element) { return element.assigned_to == "Earl Hill" })
filteredArray14.length;

var filteredArray15 = arr.filter(function(element) { return element.assigned_to == "Joel Barcenas" })
filteredArray15.length;

var filteredArray16 = arr.filter(function(element) { return element.assigned_to == "Raul Vera" })
filteredArray16.length;

var filteredArray17 = arr.filter(function(element) { return element.assigned_to == "Manuel Velarde" })
filteredArray17.length;

var filteredArray18 = arr.filter(function(element) { return element.assigned_to == "Ariel Juarez" })
filteredArray18.length;
	  		  
/////////////////////chart////////////////////////////////////////////////////////		  
		google.charts.load('current', {
  callback: function () {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'x');
    data.addColumn('number', 'y');
    data.addRows([
       ['Mike Lopez', filteredArray9.length],
       ['Alex Alvarez', filteredArray10.length],
       ['Amit Gupta', filteredArray11.length],
	   ['Roberto Salinas', filteredArray12.length],
       ['German Vazquez', filteredArray13.length],
       ['Earl Hill', filteredArray14.length],
	   ['Joel Barcena', filteredArray15.length],
       ['Raul Vera', filteredArray16.length],
       ['Manuel Velarde', filteredArray17.length],
	   ['Ariel Juarez', filteredArray18.length]
    ]);

    var container = document.getElementById('chart_div');
    var chart = new google.visualization.PieChart(container);

    var observer = new MutationObserver(function () {
      $.each($('#chart_div path[stroke="#636363"]'), function (index, path) {
        $(path).attr('stroke', '#ffffff');
      });
      $.each($('#chart_div text[fill="#9e9e9e"]'), function (index, label) {
        $(label).attr('fill', '#ffffff');
      });
    });
    observer.observe(container, {
      childList: true,
      subtree: true
    });

    chart.draw(data, {
		
      backgroundColor: '#215272',
	  is3D:true,
	  pieSliceText: 'value',
	   width: 2400,
          height: 620,
      legend: {position: 'labeled', textStyle: {color: 'white', fontSize: 17}}
    });
  },
  packages: ['corechart']
});
	  	///////////////////////////chart///////////////////////////////////////////////////////////////////////	

 google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["INC", "Tasks", { role: "style" } ],
        ["Work in Progress", filteredArray1.length, "#4ca6ba"],
        ["Awaiting Info", filteredArray2.length, "#e0701a"],
        ["Open", filteredArray3.length, "#fcbb3a"],
        ["Acknowledged", filteredArray4.length, "#188702"],
        ["New", filteredArray5.length, "#932824"],
        ["Low", filteredArray6.length, "#adb2b1"],
        ["Medium", filteredArray7.length, "#adb2b1"],
        ["High", filteredArray8.length, "color: #adb2b1"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {


hAxis: {
    textStyle:{color: '#c2c3c4'}
	
},

      colors: ['#4ca045'],
	  backgroundColor: '#215272',
          
    annotations: {
      alwaysOutside: true
    },
	width: 2500,
          height: 550,
   
    chartArea: {width: '50%'},
	legend: { position: "bottom"},
     
     
	
  };
      var chart = new google.visualization.ColumnChart(document.getElementById("bar_chart"));
      chart.draw(view, options);
  }
	  	///////////////////////////chart///////////////////////////////////////////////////////////////////////	

	 }
    });
   });
	
	
	
	
	