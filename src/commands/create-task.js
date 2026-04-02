// ** Now let's create separate modules for each command. This approach follows the Single Responsibility Principle—each module does one thing well.

import { assignId, readTasks, writeTasks, taskExists } from '../utils/utils.js';

async function createTask(task) {
    const taskData = {
        id: await assignId(), // ** انتظار ال ID
        description: task, // ** الوصف
        status: "todo", // ** المهمه
        createdAt: new Date().toISOString(), // ** تاريخ الانشاء
        updatedAt: new Date().toISOString(), // ** تاريخ التحديث
    };

    try {
        const tasks = await readTasks(); // ** قراءة المهام الحاليه
        if (await taskExists(task)) {
            console.log("Task akready exists");
        }
        tasks.push(taskData); // ** اضافه المهمه الجديده
        await writeTasks(tasks); // ** كتابه المهام المحدثه
        return `Task added successfuly (ID: ${taskData.id})`;
    }
    catch (err) {
        console.error("Error creating task:", err);
        throw err;
    }
}

export default createTask;
