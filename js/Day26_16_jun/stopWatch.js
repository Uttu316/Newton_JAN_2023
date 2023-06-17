function StopWatch()
{
    let startTime, endTime, duration, running = 0; 

    this.start = function() {
      if(running)
      {
          return "Stopwatch is already running";
      }
      else {
          running = true;

      startTime = new Date();}
    };

    this.stop = function() {
       if(!running)
       {
          return "Stopwatch is not started";
       }
       else 
       {
           running = false; 
           endTime = new Date();
           const seconds = endTime.getTime() - startTime.getTime()/1000;
           duration = duration + seconds;
       }
    };

    this.reset = function() {
        startTime = 0; 
        endTime = 0;
        duration = 0; 
        running = false;
    };
  
    Object.defineProperty(this, "duration", {
        get: function()
        {
            duration = endTime - startTime;
            return duration;
        }
    })
}