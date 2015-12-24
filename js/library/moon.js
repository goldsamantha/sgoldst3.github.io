var width = 600,
    height = 800,
    rad = 150;

if($(window).width()<600){
  width = $(window).width();
}

var nodes = d3.range(400).map(function() { return {radius: Math.random() * 4 + 0}; }),
    root = nodes[0],
    color = d3.scale.category10();





root.radius = rad;
root.fixed = true;
root.px = width/2;
root.py = height/2;


window.onresize = function() {
  if($(window).width()<600){
  width = $(window).width();
  height = $(window).height();
  svg.attr('width', width).attr('height', height);
  force.size([width, height]).resume();
}
};




var force = d3.layout.force()
    .gravity(0.08)
    .charge(function(d, i) { return i ? 0 : -2000; })
    .nodes(nodes)
    .size([width, height]);

force.start();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height).attr("class", "moon");

svg.selectAll("circle")
    .data(nodes.slice(1))
    .enter().append("circle")
    .attr("r", function(d) { return d.radius; })
   // .style("fill", function(d, i) { return color(i % 1); });

   .style("fill", function(d, i) {
  return i % 3 ? "#DDD" : "#fff";
});

force.on("tick", function(e) {
  var q = d3.geom.quadtree(nodes),
      i = 0,
      n = nodes.length;

  while (++i < n) q.visit(collide(nodes[i]));

  svg.selectAll("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
});

svg.on("mousemove", function() {
  var p1 = d3.mouse(this);

  if (p1[0]< width/2+rad && p1[0]>width/2-rad && p1[1]<height/2+rad && p1[1]>height/2-rad){
  root.px = p1[0];
  root.py = p1[1];
  }
  else{
    root.px = width/2;
    root.py = height/2;
  }

  force.resume();

});




function collide(node) {
  var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;
  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = node.radius + quad.point.radius;
      if (l < r) {
        l = (l - r) / l * .5;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}
