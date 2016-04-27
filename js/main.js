var data;
var ratio = false;

function clearGraph() {
    var svg = d3.select("svg");
    svg.selectAll("*").remove();
}

function drawElem(barList, data, max, scaleY) {
    var scaled = d3.scale.linear()
	.domain([0, max])
	.range([0,300]);
    var yAxis = d3.svg.axis()
	.scale(scaled)
	.orient("left");
    var tempScale = d3.scale.linear()
	.domain([0, 1200])
	.range([0,300]);
    var yAxisTemp = d3.svg.axis()
	.scale(tempScale)
	.orient("left");

    if (ratio == false) {
	var svgElem = d3.select('#svgElem').attr('height', 2000);
	var rekt = svgElem.selectAll('rect').data(barList, function(d){return d.id;});
	rekt.enter()
	.append('rect')
	.attr('width', 50)
	.attr("y", function(d){return scaled(d.Y);})
	.attr("height", function(d){ return scaled(d.num);})
	.attr("x", function(d){return d.x * 90;})
	.style("fill", function(d){return d.color;});

	svgElem.append("g")
	.data(barList)
        .attr("class", "axis")
        .attr("transform", "translate(" + 50 + "," + scaleY + ")")
        .call(yAxis);
    } else {
	var svgElem = d3.select('#svgElem').attr('height', 2000);
	var rekt = svgElem.selectAll('rect').data(barList, function(d){return d.id;});
	rekt.enter()
	.append('rect')
	.attr('width', 50)
	.attr("y", function(d){return scaled(d.Y);})
	.attr("height", function(d){ return scaled(d.num);})
	.attr("x", function(d){return d.x * 90;})
	.style("fill", function(d){return d.color;});
	svgElem.append("g")
	.data(barList)
        .attr("class", "axis")
        .attr("transform", "translate(" + 50 + "," + scaleY + ")")
        .call(yAxis);

    }
    

    
    svgElem.append("text")
    .data(barList)
    .attr("y", function(d){return (d.Y);})
    .attr("x", function(d){return d.x * 90;})
    .text(function(d){return d.id;})
    .attr("font-size", "12px")
    .attr("fill", "black");
}


function classOnly(data) {
    var ar1d = 0;
    var ar1a = 0;
    var ar2d = 0;
    var ar2a = 0;
    var ar3d = 0;
    var ar3a = 0;
    var ar0a = 0;
    var ar0d = 0;
    for (i = 0; i < data.length; i++) {
	if (data[i][0] == 0) {
	    if (data[i][3] == 0) {
		ar0d++;
	    } else if (data[i][3] == 1) {
		ar0a++;
	    }
	}
	if (data[i][0] == 1) {
	    if (data[i][3] == 0) {
		ar1d++;
	    } else if (data[i][3] == 1) {
		ar1a++;
	    }
	}
	if (data[i][0] == 2) {
	    if (data[i][3] == 0) {
		ar2d++;
	    } else if (data[i][3] == 1) {
		ar2a++;
	    }
	}
	if (data[i][0] == 3) {
	    if (data[i][3] == 0) {
		ar3d++;
	    } else if (data[i][3] == 1) {
		ar3a++;
	    }
	}
    }

    var class0 = [
	{id:"crew alive", num:ar0a, Y:100, color:"blue", x:4},
	{id:"crew dead", num:ar0d, Y: 100 + ar0a, color:"gray", x:4}
    ];
    var class1 = [
	{id:"1st class alive", num:ar1a, Y:100, color:"blue", x:1},
	{id:"1st class dead", num:ar1d, Y: 100 + ar1a, color:"gray", x:1}
    ];
    var class2 = [
	{id:"2nd class alive", num:ar2a, Y:100, color:"blue", x:2},
	{id:"2nd class dead", num:ar2d, Y: 100 + ar2a, color:"gray", x:2}
    ];
    var class3 = [
	{id:"3rd class alive", num:ar3a, Y:100, color:"blue", x:3},
	{id:"3rd class dead", num:ar3d, Y: 100 + ar3a, color:"gray", x:3}
    ];
    if (ratio == false) {
	drawElem(class1, data, 673, 44.576523031203564);
	drawElem(class2, data, 673, 44.576523031203564);
	drawElem(class3, data, 673, 44.576523031203564);
	drawElem(class0, data, 673, 44.576523031203564);
    } else {
	drawElem(class1, data, 203, 147.7832512315271);
    }
	

}

function ageOnly(data) {
    childAlive = 0;
    childDead = 0;
    adultAlive = 0;
    adultDead = 0;
    for (i = 0; i < data.length; i++) {
	if (data[i][1] == 0) {
	    if (data[i][3] == 0) {
		childDead++;
	    } else if (data[i][3] == 1) {
		childAlive++;
	    }
	}
	if (data[i][1] == 1) {
	    if (data[i][3] == 0) {
		adultDead++;
	    } else if (data[i][3] == 1) {
		adultAlive++;
	    }
	}
    }
    var childVar = [
	{id:"children alive", num:childAlive, Y:100, color:"blue", x:2},
	{id:"children dead", num:childDead, Y: 100 + childAlive, color:"gray", x:2}
    ];
    var adultVar = [
	{id:"adults alive", num:adultAlive, Y:100, color:"blue", x:1},
	{id:"adults dead", num:adultDead, Y: 100 + adultAlive, color:"gray", x:1}
    ];

    if (ratio == false) {
	drawElem(adultVar, data, 1364, 21.994134897360706);
	drawElem(childVar, data, 1364, 21.994134897360706);
    } else {
	drawElem(childVar, data, 57, 526.3157894736842);
    }

	
}

function sexOnly(data) {
    maleAlive = 0;
    maleDead = 0;
    femaleAlive = 0;
    femaleDead = 0;
    for (i = 0; i < data.length; i++) {
	if (data[i][2] == 0) {
	    if (data[i][3] == 0) {
		femaleDead++;
	    } else if (data[i][3] == 1) {
		femaleAlive++;
	    }
	}
	if (data[i][2] == 1) {
	    if (data[i][3] == 0) {
		maleDead++;
	    } else if (data[i][3] == 1) {
		maleAlive++;
	    }
	}
    }
    var femaleVar = [
	{id:"females alive", num:femaleAlive, Y:100, color:"blue", x:2},
	{id:"females dead", num:femaleDead, Y: 100 + femaleAlive, color:"gray", x:2}
    ];
    var maleVar = [
	{id:"males alive", num:maleAlive, Y:100, color:"blue", x:1},
	{id:"males dead", num:maleDead, Y: 100 + maleAlive, color:"gray", x:1}
    ];

    if (ratio == false) {
	//I hard coded these numbers based on the Y position of the bars after scaling.
	drawElem(femaleVar, data, 1364, 21.994134897360706);
	drawElem(maleVar, data, 1364, 21.994134897360706);
    } else {
	drawElem(femaleVar, data, 344, 87.2093023255814); 
    }
}

function classClick() {
    clearGraph();
    ratio = false;
    classOnly(data);
}

function ageClick() {
    clearGraph();
    ratio = false;
    ageOnly(data);
}

function sexClick() {
    clearGraph();
    ratio = false;
    sexOnly(data);
}

function classRatioClick() {
    clearGraph();
    ratio = true;
    classOnly(data);
}

function ageRatioClick() {
    clearGraph();
    ratio = true;
    ageOnly(data);
}

function sexRatioClick() {
    clearGraph();
    ratio = true;
    sexOnly(data);
}


$(function() {
$.ajax({
    url: "./tcsv.csv",
    async: false,
    success: function (csvd) {
        data = $.csv.toArrays(csvd);
	console.log("function was success");
    },
    dataType: "text",
    complete: function () {
	classOnly(data);
    }
    })
});

