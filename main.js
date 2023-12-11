function stopwatch(){
let startTime, endTime, running, duration = 0;
 
 this.start = function(){
if (running)
throw new error('stopwatch has already started');
 running = true;
 startTime = new Date();
 }

 this.stop = function(){
if (!running)
throw new error('stopwatch is not running');
running = false;
endTime = new Date();
const seconds = (endTime.getTime() - startTime.getTime())/1000;
duration+=seconds

 }
 this.reset = function(){
startTime = null;
endTime = null;
running = false;
duration = 0;

 }

 Object.defineProperty(this, 'duration', {
get: function(){return duration;} 
 }
 );
}

const myStopwatch = new stopwatch();
myStopwatch.start();
myStopwatch.stop();
myStopwatch.reset();
console.log(myStopwatch.duration);

startButton.addEventListener('click', start);
stopButton.addEventListener('click', Stop);
resetButton.addEventListener('click', reset);

function updateDisplay() {
    stopwatchDisplay.textContent = formatTime(duration);
}

