var speedTurtle;
var svansDown;
$(document).ready(function() {
    	eval($.turtle());
    	speedTurtle=1;
    	goHome();
    	pd();
    	svansDown=true;
    	pen('red');
    });

runProgramm = function(){
	fd(100);
}

goHome = function(){
	cg();
	home();
	speed(Infinity);
	pu();
    moveto(-280,-20	);
    if (svansDown) pd();
   	speed(speedTurtle);
}

doPause = function(){
	sleep(1000)
}

changeSpeed = function(newSpeed){
	speedTurtle = newSpeed;
	speed(speedTurtle);
	result = document.getElementById("currentspeed");
	result.value = speedTurtle;
}

