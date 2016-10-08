console.log('5.2');

//First, append <svg> element and implement the margin convention
var m = {t:50,r:50,b:50,l:50},
    w = document.getElementById('canvas').clientWidth - m.l - m.r,
    h = document.getElementById('canvas').clientHeight - m.t - m.b;

var plot = d3.select('.canvas').append('svg')
    .attr('width',w+ m.l+ m.r)
    .attr('height',h+ m.t+ m.b)
    .append('g')
    .attr('transform','translate('+ m.l+','+ m.t+')');

//Import data...

/* d3.csv("../data/data.csv", parse, function(error, rows){
	console.log(error);
	console.table(rows);

});


function parse(d){
	console.log(d);

	return{
		x: +d.x,
		y: +d.y,
		r: +d.r
	}
} */

d3.csv("../data/data.csv", parse, function(error, rows){
	console.table(rows);
}
);

function parse(d){
	return{
		x: (+d.x)?(+d.x):undefined // This is called a ternary operation: (condition)?a:b. It's read like "If the condition (in parenthesis) is true, return a; if it's false, return b. In this case what we're saying is "if d.x is a string, return undefined; if it's a number, return the number."
		y: +(d.y.slice(2)) //Starts the string from the third character of what was a string. 
	}
}