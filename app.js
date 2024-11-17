var toDoText = document.getElementById("toDoText");
var listContainer = document.getElementById("listContainer");

function Add(){
    if (toDoText.value === ''){
        alert("You must write something!")
    }else{
        var li = document.createElement("li");
        li.innerHTML = toDoText.value;
        listContainer.appendChild(li);
        var span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    toDoText.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
 function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
 }
 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask();