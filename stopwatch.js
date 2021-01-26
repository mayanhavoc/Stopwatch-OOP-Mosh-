// function Stopwatch() {
//   // Initialize
//   sTime: null,
//   sReset: null,
//   startStop: null,
//   timer: null,
//   now: 0,
//   count: function(){
//       s.now++;
//       let remain = s.now;
//       let secs = remain;
//   },

//   start: function() {
//     s.timer = setInterval(s.count, 1000);
//     s.startStop.value = "Stop";
//   },

//   stop : function() {
//       clearInterval(s.Time);
//       s.time = null;
//       s.startStop.value = 'Start';
//   }

//   reset: function(){
//       if (s.time != null) {s.stop();}
//       s.now = -1;
//       s.count();
//   }
// }

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000; // <-- this expression returns the miliseconds between the two objects so we divide it by 1000 to get the seconds and then add it to the 'duration' variable defined earlier.
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
