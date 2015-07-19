$(document).ready(function() {
      dragCommand("fd-command");
      dragCommand("rt-command");
      dragCommand("lt-command");
      dragCommand("pu-command");
      dragCommand("pd-command");
      dragCommand("repeat-command");
      dragCommand("end-circle-command");
    });

var currentCommand = "fd-command";
dragCommand = function(id){
	$("#"+id).draggable({
      helper:'clone',
      start: function(){
        currentCommand = id;
      }
    });
    $("#programm").droppable({
      drop: function(){
        var command = document.getElementById(currentCommand);
        var programm = document.getElementById("programm");
        var commandClone = command.cloneNode(true);
        commandClone.class=command.class;
        programm.appendChild(commandClone);  
      }
  })
}