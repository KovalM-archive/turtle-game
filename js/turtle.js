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

var commands,numberCommands;
runProgramm = function(){
	var programm = document.getElementById("programm");
	commands = programm.childNodes;
	numberCommands = commands.length;
	doProgram(0,1);
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

doProgram = function(start,n){
	var i=0;
	while (i<n){
		var j = start;
		ans = 0;
		while (true){
			if (j>=numberCommands) break;
			var commandType = commands[j].getAttribute('data-type-command');
			switch(commandType){
			case "fd-command":
				fd(getValue(commands[j]));
				break;
			case "rt-command":
				rt(getValue(commands[j]));
				break;
			case "lt-command":
				lt(getValue(commands[j]));
				break;
			case "pu-command":
				pu();
				break;
			case "pd-command":
				pd();
				break;
			case "repeat-command":
				j=doProgram(j+1,getValue(commands[j]));
				break;
			case "end-circle-command":
				ans = j;
				break;
			default:
				break;
			}
			if (ans!=0) break;
			j++;
		}
		i++;
	}
	return ans;
}

getValue = function(element){
	var elements = element.getElementsByTagName('input');
	return elements[0].value;
}