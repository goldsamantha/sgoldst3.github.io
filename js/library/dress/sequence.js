function StarSequencer(selector, queue_name) {
  this.is_empty =  false;
  this.iter = 1;
  this.selector = selector;
  this.queue_name = queue_name;
  this.steps = [];
  this.increment = function() {
    this.iter++;
    return;
  };
  this.getCurrentStep = function() {
    return this.steps[this.iter];
  };
  this.getIter = function() {
    return this.iter;
  };
  this.setIter = function(i) {
    this.iter = i;
  };
  this.queue = function(queue_foo) {
    $(selector).queue(this.queue_name, queue_foo);
  };
}
