let tasks = [
    { task: "learn js", done: false},
    { task: "build project", done: true}
];


function addtask(taskname){
    let newtask = { task: taskname, done: false};
    tasks.push(newtask);
}
addtask("study blockchain");


function showtasks() {
    for (let i = 0; i< tasks.length; i++){
        let status = tasks[i].done ?
            "completed" : "pending";
        console.log(tasks[i].task, "-", status);
    }
}

function completetask(taskname) {
    for (let i = 0; i< tasks.length; i++){
        if(tasks[i].task === taskname){
            tasks[i].done = true;
                break;
        }
    }
}

function deletetask(taskname){
    for (let i =0; i< tasks.length; i++){
        if(tasks[i].task === taskname){
            tasks.splice(i,1)
        }
    }
}
addtask("learn js");
addtask("build project");
addtask("study blockchain");

showtasks();

completetask("learn js");

deletetask("build project");

showtasks();
