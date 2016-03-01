// Find the next and previous posts
Number.prototype.mod = function(n){
  return ((this%n)+n)%n;
}

function togglePostLeftPanel(direction, posts, post_index) {
  // direction -1 ==> left, 1 ==> right
  post = direction == -1 ? $('.footer-nav')[0] : $('.footer-nav')[1];
  var index = (post_index+direction).mod(posts.length);
  post.setAttribute('href', posts[index].url);
}

function setNext(posts, post_index) {
  next_post = $('.next')[0]; // not sure yet :)
  var index = (post_index+1).mod(posts.length);
  next_post.setAttribute('href', posts[index].url);


  // need to make this div bigger?
  var color = 'rgba(0,0,0,.5)';
  $('.right-bottom').css('background',
    "linear-gradient("+ color + "," + color +"), url('" + posts[index].cover_url +"')");
  $('.right-bottom').css('background-size', 'cover');
  $('.content-header').css('background-size', 'cover');
  var title = posts[index].title;
  $('.right-bottom h2').text(title.toUpperCase().slice(0,1)+title.slice(1, title.length));


}
