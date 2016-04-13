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

  var color = 'rgba(0,0,0,.5)';
  $('.right-bottom').css('background',
    "linear-gradient("+ color + "," + color +"), url('" + posts[index].cover_url +"')");
  $('.right-bottom').css('background-size', 'cover');
  var title = posts[index].title;
  $('.right-bottom h2').text(title.toUpperCase().slice(0,1)+title.slice(1, title.length));


}

/*
* This is kind of a special and weird function -- go through each of the posts
* and handle the post number and match it to the corresponding class that should
* be attributed to it. A bit janky, but gets the job done.
* @items - a list of divs that should get corresponding classes.
*/
function assignColumnClasses(items) {
  for (var i=0; i< items.length; i++) {
    if (i==0) {
      jQuery(items[i]).addClass('col-2-3');
    } else if ((items.length-1).mod(3) == 2 && i >=items.length-2) {
      jQuery(items[i]).addClass('col-1-2');
    } else if ((items.length-1).mod(3) == 1 && i >=items.length-1) {
      jQuery(items[i]).addClass('');
    } else {
      jQuery(items[i]).addClass('col-1-3');
    }
  }

  var one_thirds = $('.col-1-3');
  var mod_amt = (one_thirds.length).mod(2);
  if (mod_amt == 0){
    jQuery(one_thirds[one_thirds.length-1]).addClass('full-width');
  }
}
