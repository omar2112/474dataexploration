function drawElem(bar, data) {
    var svgElem = d3.select('#svgElem').attr('height', 2000);
    var rekt = svgElem.selectAll('rect').data(bar, function(d){return d.id;});
    rekt.enter()
    .append('rect')
    .attr('width', 50)
    .attr("y", function(d){return d.Y;})
    .attr("height", function(d){ return d.num;})
    .attr("x", function(d){return d.x * 90;})
    .style("fill", function(d){return d.color;});  
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
    console.log(ar1a);
    console.log(ar1d);
    console.log(ar2a);
    console.log(ar2d);
    console.log(ar3a);
    console.log(ar3d);
    console.log(ar0a);
    console.log(ar0d);

    var class0 = [
	{id:"crew alive", num:ar0a, Y:100, color:"blue", x:3},
	{id:"crew dead", num:ar0d, Y: 100 + ar0a, color:"gray", x:3}
    ];
    var class1 = [
	{id:"first class alive", num:ar1a, Y:100, color:"blue", x:0},
	{id:"first class dead", num:ar1d, Y: 100 + ar1a, color:"gray", x:0}
    ];
    var class2 = [
	{id:"second class alive", num:ar2a, Y:100, color:"blue", x:1},
	{id:"second class dead", num:ar2d, Y: 100 + ar2a, color:"gray", x:1}
    ];
    var class3 = [
	{id:"third class alive", num:ar3a, Y:100, color:"blue", x:2},
	{id:"third class dead", num:ar3d, Y: 100 + ar3a, color:"gray", x:2}
    ];
    
    drawElem(class1, data);
    drawElem(class2, data);
    drawElem(class3, data);
    drawElem(class0, data);

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
	{id:"children alive", num:childAlive, Y:100, color:"blue", x:1},
	{id:"children dead", num:childDead, Y: 100 + childAlive, color:"gray", x:1}
    ];
    var adultVar = [
	{id:"adult live", num:adultAlive, Y:100, color:"blue", x:0},
	{id:"adult dead", num:adultDead, Y: 100 + adultAlive, color:"gray", x:0}
    ];

    drawElem(adultVar, data);
    drawElem(childVar, data);

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
	{id:"females alive", num:femaleAlive, Y:100, color:"blue", x:1},
	{id:"females dead", num:femaleDead, Y: 100 + femaleAlive, color:"gray", x:1}
    ];
    var maleVar = [
	{id:"males live", num:maleAlive, Y:100, color:"blue", x:0},
	{id:"males dead", num:maleDead, Y: 100 + maleAlive, color:"gray", x:0}
    ];

    drawElem(femaleVar, data);
    drawElem(maleVar, data);

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
        // call a function on complete
	console.log("success!");
	console.log(data[1]);
	sexOnly(data);
    }
    })
});

