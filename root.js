document.querySelector(".push").onclick = function () {
  if (document.querySelector(".newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector(".tasks").innerHTML += ` 
             <div class ="task">
                   <span class="taskname">
                    ${document.querySelector(".newtask input").value}
                   </span>
                   <button class="delete">
                   <i class="gg-trash"></i>
                   </button>
             </div>
        `;
  }
};
