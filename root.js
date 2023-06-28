document.querySelector(".push").onclick = function () {
  if (document.querySelector(".newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector(".tasks").innerHTML += ` 
             <div class="task">
                   <span class="taskname">
                    ${document.querySelector(".newtask input").value}
                   </span>
                   <button class="delete">
                   <i class="gg-trash"></i>
                   </button>
             </div>
        `;
    document.querySelector(".tasks").style.display = "block";

    var current_task = document.querySelectorAll(".delete");
    for (var i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove();
        if (document.querySelectorAll(".task").length == 0) {
          document.querySelector(".tasks").style.display = "none"; 
        }
      };
    }

    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    document.querySelector(".newtask input").value = "";
  }
};
