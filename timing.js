function Clock() {
  this.date = new Date();
};

Clock.prototype.run = function() {
  var date = this.date
  console.log(date)
  var tick = function() {
    date.setSeconds(date.getSeconds() + 5);
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())
  };
  setInterval(tick, 5000);
}


var c = new Clock();
// c.run();

console.log(Object.getPrototypeOf(c.run()))