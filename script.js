function addTask(subject) {
    let taskDescription = prompt("أدخل المهمة:");

    if (taskDescription !== null && taskDescription.trim() !== "") {
        let taskList = document.getElementById(`tasks-${subject}`);
        let li = document.createElement("li");
        li.classList.add("task-item");
        
        let taskText = document.createElement("span");
        taskText.innerText = taskDescription;
        
        let completeButton = document.createElement("button");
        completeButton.innerText = "إكمال";
        completeButton.onclick = function () {
            li.classList.toggle("complete");
        };

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "حذف";
        deleteButton.onclick = function () {
            li.remove();
        };

        li.appendChild(taskText);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }
}