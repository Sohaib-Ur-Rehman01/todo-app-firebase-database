Manager Panel - React + Firebase Todo App

A full-featured task management web application designed for managers to assign, monitor, and manage tasks for their employees. Built using React, Firebase Realtime Database, and Firebase Authentication, this project features a dynamic UI, real-time data syncing, and efficient user-role-based task control.

🚀 Features

👥 User Management

Displays all registered users (excluding the manager).

Fetches real-time user data from Firebase.

Displays user's name and email.

✅ Task Assignment

Manager can assign tasks to any employee.

Includes input fields for task title and description.

Saves each task with a unique ID and metadata:

assignedTo, assignedBy, status, createdAt

Uses dayjs for timestamp formatting.

📋 Task Listing

Lists all pending tasks assigned by the manager.

Displays task details: title, assigned to, and status.

Includes delete button for individual pending tasks.

🏁 Task Completion

Allows marking tasks as "finished".

Finished tasks include a finishedAt timestamp.

Tasks are grouped under a collapsible "Completed Tasks" section.

🧹 Bulk Finished Task Management

Manager can delete individual or all finished tasks at once.

Confirmation prompt before bulk deletion.

Efficient batch deletion using Firebase update().

🔄 Real-time Sync

Real-time updates using Firebase Realtime Database listeners.

Automatic UI updates when data changes.

🎨 Stylish User Interface

Beautiful, responsive UI using custom CSS with glassmorphism.

Interactive buttons, inputs, and section toggles.

Toast notifications for actions and errors (via react-toastify).

🔐 Authentication & Session Management

Firebase Authentication integration.

Only authenticated manager can access the panel.

Logout functionality included.

🛠️ Built With

React – Frontend UI library

Firebase Realtime Database – Real-time backend

Firebase Authentication – User authentication and session control

Dayjs – Date and time formatting

React Toastify – Elegant notifications
