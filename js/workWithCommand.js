var commandInProgrammBlock;
$(document).ready(function() {
      $( "#programm").sortable({
        connectWith: "#commandList",
        over: function(){
          commandInProgrammBlock=true;
        },
        out: function(){
          commandInProgrammBlock=false;
        },
        beforeStop: function(event,ui){
          if (!commandInProgrammBlock){
            $("#"+ui.item.attr('id')).remove();
          }
        }
      });
      dragCommand("fd-command");
      dragCommand("rt-command");
      dragCommand("lt-command");
      dragCommand("pu-command");
      dragCommand("pd-command");
      dragCommand("repeat-command");
      dragCommand("end-circle-command");
    });

var currentID = 0;

dragCommand = function(id){
	$("#"+id).draggable({
      helper: function(){
        var command = document.getElementById(id);
        var commandClone = command.cloneNode(true);
        commandClone.setAttribute('data-type-command',command.getAttribute('data-type-command'));
        commandClone.setAttribute('id', currentID);
        currentID++;
        return commandClone;
      },
      connectToSortable: "#programm",
    });
}