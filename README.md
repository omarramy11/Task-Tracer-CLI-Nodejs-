Task Tracker CLI 🚀
Overview
Task Tracker CLI is a high-performance, lightweight command-line utility built with Node.js for efficient task management. It provides a localized persistence layer using a JSON-based storage system, allowing developers to manage, track, and filter tasks without the overhead of a database server or a graphical interface. This project is the implementation of the task tracker project on roadmap.sh.

Features
Persistent Storage: Utilizes a local tasks.json file for data integrity across sessions.
Dynamic ID Management: Automatically handles unique identifier assignment for every new entry.
Status Lifecycle: Supports transition between todo, in-progress, and done states.
Advanced Filtering: Quickly list tasks based on their current status.
Validation: Prevents duplicate task entries and ensures data consistency.
Technologies Used
Technology	Purpose
Node.js	Core Runtime Environment
File System (FS)	Asynchronous Data Persistence
JSON	Lightweight Data Interchange Format
ES Modules	Modern Modular Architecture
Getting Started
Installation
To get a local copy up and running, follow these steps:

Clone the Repository

git clone https://github.com/Dprof-code/task-tracker-cli.git
Navigate to Project Directory

cd task-tracker-cli
Link the CLI Tool Use npm link to make the command available globally on your machine:

npm link
Usage
The application is executed via the task-cli command. Below are the available operations:

Adding a Task
Create a new task with an initial "todo" status.

task-cli add "Finish backend documentation"
Updating Task Description
Modify the text of an existing task by its ID.

task-cli update 1 "Finish comprehensive documentation"
Updating Task Status
Move a task through different stages of completion.

task-cli mark-in-progress 1
task-cli mark-done 1
Deleting a Task
Remove a task permanently from the registry.

task-cli delete 1
Listing Tasks
View all tasks or filter them by status.

# List all tasks
task-cli list

# List by status
task-cli list todo
task-cli list in-progress
task-cli list done
Data Structure
The project stores data in a structured JSON format to ensure compatibility and ease of manual inspection:

{
  "id": "1",
  "description": "Task description",
  "status": "todo",
  "createdAt": "2026-01-03T01:51:23.374Z",
  "updatedAt": "2026-01-03T01:51:23.379Z"
}
Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

Fork the Project.
Create your Feature Branch (git checkout -b feature/AmazingFeature).
Commit your Changes (git commit -m 'Add some AmazingFeature').
Push to the Branch (git push origin feature/AmazingFeature).
Open a Pull Request.
Author
GitHub: Dprof-code
Twitter: @pr0devs
Node.js JavaScript License

