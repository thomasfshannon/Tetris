const Clock = function ()
{
    var timer = {
        running: false,
        iv: 5000,
        timeout: false,
        cb : function(){},
        start : function(cb,iv,sd){
            var elm = this;
            clearInterval(this.timeout);
            this.running = true;
            if(cb) this.cb = cb;
            if(iv) this.iv = iv;
            if(sd) elm.execute(elm);
            this.timeout = setTimeout(function(){elm.execute(elm)}, this.iv);
        },
        execute : function(e){
            if(!e.running) return false;
            e.cb();
            e.start();
        },
        stop : function(){
            this.running = false;
        },
        set_interval : function(iv){
            clearInterval(this.timeout);
            this.start(false, iv);
        }
    };
    return timer;
}

export default Clock;


// var timer_1 = new timer();
// timer_1.start(function(){
//     //magic here
// }, 2000, false);

// var timer_2 = new timer();
// timer_2.start(function(){
//     //more magic here
// }, 3000, true);

// //change the interval
// timer_2.set_interval(4000);

// //stop the timer
// timer_1.stop();