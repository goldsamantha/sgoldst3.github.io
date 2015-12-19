/*
Setting the basic functions required to initiate the fade in/out procedure



*/
var classname = ".stars";
var width = $(classname).width();
var height = $(classname).height();

var fIn = function(obj, fadespeed){

  $(obj).fadeIn(Math.random()*fadespeed+fadespeed/5, function(){
    fOut(obj, fadespeed);
  }).delay(Math.random()*500+200);

}


var fOut = function(obj, fadespeed){

  $(obj).fadeOut(Math.random()*fadespeed+fadespeed/5, function(){
    fIn(obj, fadespeed);
  });


}









/*
functionality for manipulating and creating multiple svg instances


*/


var nodes = d3.range(20).map(function() { return {radius: Math.random() * 3 + 0}; }),
    root = nodes[0],
    color = d3.scale.category10();



var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height).attr("class", "stars");

window.onresize = function() {
  // do a load of stuff
  width = $(classname).width();
  height = $(classname).height();
  svg.attr("width", width);
  svg.attr("height", height);

  ls_nodes.transition()
  .attr("cx",
  function(){
    return Math.random()*width+1;
  })
  .attr("cy",
  function(){
    return Math.random()*height+1;
  });


  // svg.selectAll("circle")
  //   .data(nodes.slice(1)).enter()
  //   .style("fill","#ff0000")
  //   .attr("cx", function(){return Math.random()*width+1};)
  //   .attr("cy", function(){return Math.random()*height+1};)
  //   .attr("r", function(){return Math.random()*3+1};);
};

var ls_nodes = svg.selectAll("circle")
    .data(nodes.slice(1))
    .enter().append("circle").style("fill", "#fff")
    .attr("cx", function(){return Math.random()*width+1; })
    .attr("cy", function(){return Math.random()*height+1; })
    .attr("r", function(){return Math.random()*3+1; });

var ary = svg.selectAll("circle");

for (var i=0; i<ary[0].length; i++){
  fIn(ary[0][i], 1000);
}
