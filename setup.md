# Project Setup Guide

Welcome to the project! This guide will walk you through setting up the project on your local machine. Follow the steps carefully, and you’ll have everything running in no time. Remember, this project has two main parts: the **frontend** and the **backend**, and they will run on two separate localhost servers.

---

## Prerequisites
Before starting, make sure you have the following installed on your computer:
1. **Node.js** (Download it from [https://nodejs.org](https://nodejs.org))
2. **MongoDB** (Download and install from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community))
3. **A code editor** like VS Code (Download it from [https://code.visualstudio.com](https://code.visualstudio.com))
4. **Git** (Download it from [https://git-scm.com](https://git-scm.com))

---

## Step-by-Step Setup

### 1. Clone the GitHub Repository
1. Open your terminal or command prompt.
2. Navigate to the folder where you want to save the project:
   ```bash
   cd /path/to/your/folder
   ```
3. Clone the repository by running:
   ```bash
   git clone https://github.com/your-github-username/your-repository-name.git
   ```
4. Navigate into the project folder:
   ```bash
   cd your-repository-name
   ```

### 2. Setting Up the Backend
1. Go into the **backend** folder:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
   This will download all the necessary libraries listed in the `package.json` file.

3. Start MongoDB:
   - Make sure MongoDB is running on your machine.
   - If MongoDB is not running, open another terminal and start it using:
     ```bash
     mongod
     ```
   - If you’ve installed MongoDB Compass, you can use it to check that MongoDB is running.

4. Start the backend server:
   ```bash
   nodemon server.js
   ```
   - You should see a message like: `Server running on port 5000`.
   - The backend will now be available at `http://localhost:5000`.

5. Leave this terminal running.

### 3. Setting Up the Frontend
1. Open a new terminal (don’t close the backend terminal).
2. Navigate to the **frontend** folder:
   ```bash
   cd frontend
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```
   - This will open the frontend in your default browser at `http://localhost:5173`.
   - If it doesn’t open automatically, go to your browser and enter the URL manually.

5. Leave this terminal running as well.

---

## Folder Structure
Here’s a quick overview of the folder structure so you know where everything is:

```
project-root/
|— backend/
|    |— server.js         # Main backend server file
|    |— package.json      # Backend dependencies
|    |— node_modules/    # Backend libraries (created after npm install)
|— frontend/
|    |— src/
|    |    |— App.jsx       # Main React component
|    |    |— index.css   # styles for the form
|    |    |— main.jsx      # React entry point
|    |— package.json    # Frontend dependencies
|    |— node_modules/  # Frontend libraries (created after npm install)
|— README.md          # Project instructions
```

---

## Running the Project
To run the project, both the **frontend** and **backend** must be running simultaneously:
1. **Backend:**
   - Open a terminal, navigate to the `backend` folder, and run `node server.js`.
   - Keep this terminal open.
2. **Frontend:**
   - Open another terminal, navigate to the `frontend` folder, and run `npm start`.
   - Keep this terminal open.

### Access the Application
- Open your browser and go to `http://localhost:3000`. This is the frontend.
- When the frontend submits data, it sends it to the backend running on `http://localhost:5000`.

---

## Common Issues and Troubleshooting
1. **MongoDB not running:**
   - Make sure you started MongoDB with `mongod`.
   - If you see an error, ensure MongoDB is installed correctly and check its service status.

2. **Port already in use:**
   - If you get an error about a port being in use, change the port number in the `server.js` file (for the backend) or the `package.json` file (for the frontend).

3. **Dependency issues:**
   - If `npm install` fails, make sure Node.js is installed and up to date.

4. **Frontend doesn’t load:**
   - Check that the backend is running first, then restart the frontend.

---

## Hosting on GitHub

### Push Your Code to GitHub
1. Add all files to Git:
   ```bash
   git add .
   ```
2. Commit the changes:
   ```bash
   git commit -m "Initial commit"
   ```
3. Push to the GitHub repository:
   ```bash
   git push origin main
   ```

---

That’s it! You’re ready to run and collaborate on this project. If you run into any issues, feel free to ask for help. Enjoy coding!

