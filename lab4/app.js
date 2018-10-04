const todo = require("./todo");
const connection = require("./mongoConnection");


const main = async () => {
    //Create a task1
    const task1 = await todo.createTask("Ponder Dinosaurs",
        "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
    console.log("Creat a task1");
    console.log(task1);//log the task
    console.log();
    //create task2
    const task2 = await todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
    console.log("Creat task2");
    console.log();

    // After the task is inserted, query all tasks and log them
    const alltask = await todo.getAllTasks();
    console.log("All tasks: ")
    console.log(alltask);
    console.log();


    //After all the tasks are logged, remove the first task
    task_removed= await todo.removeTask(alltask[0]._id); 
    task_remained = await todo.getAllTasks();
    console.log("All the remaining tasks: ")
    console.log(task_remained);//Query all the remaining tasks and log them
    console.log();

    //Complete the remaining task
    const complete = await todo.completeTask(task_remained[0]._id);
    console.log("Atfte completing: ")
    console.log(complete);//Log the task that has been completed with its new value.



    const db = await connection();
    await db.serverConfig.close();

    console.log("Done!");
};

main().catch(error => {
    console.log(error);
});