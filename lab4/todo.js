const mongoCollections = require("./mongoCollections");
const uuid = require("uuid/v4");
const todoItems = mongoCollections.todoItems;


async function createTask(title, description) {
    if (arguments.length !== 2 || typeof title !== 'string' || typeof description !== 'string') {
        throw "CreateTask failed on invalid input";
    } else {
        let task = {
            "_id": uuid(),
            "title": title,
            "description": description,
            "completed": false,
            "completedAt": null
        }
        //create in the db
        const todoCollection = await todoItems();
        const insertInfo = await todoCollection.insertOne(task);
        if (insertInfo.insertedCount === 0) throw "Could not add the new task!";
        return task;

    }
}
async function getAllTasks() {
    const todoCollection = await todoItems();

    const task = await todoCollection.find({}).toArray();

    return task;
}

async function getTask(id) {
    if (!id ) throw "You must provide an id to search for";

    const todoCollection = await todoItems();
    const task = await todoCollection.findOne({'_id': id});
    if (task=== null) throw "No task with that id";

    return task;
}

async function completeTask(taskId) {
    if (!taskId ) throw "You must provide a task id";
    const todoCollection = await todoItems();
    const task = await getTask(taskId);
    if (task === 0) throw "Task doesn't exsit.";
    task.completed = true;
    task.completedAt = new Date();

    const updatedInfo = await todoCollection.replaceOne(
        { '_id': taskId },
        task
    );

    if (updatedInfo.modifiedCount === 0) {
        throw "could not update task successfully";
    }

    return await this.getTask(taskId);
}
async function removeTask(id) {
    const todoCollection = await todoItems();
    const deletionInfo = await todoCollection.removeOne({ _id: id });

    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete task with id of ${id}`;
    }
    0;

}
module.exports = {
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask,
}