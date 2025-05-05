🎉 Carambar Jokes API  
An Express API that serves deliciously silly Carambar jokes!  
This project was created as part of a technical test for a web development school.

###################################################################

🚀 **Features**

- RESTful API built with Express
- SQLite database using Sequelize ORM
- API endpoints to:
  - 🔍 **Get all jokes**: `GET https://carambar-6rg0.onrender.com/api/jokes`
  - 🎯 **Get a random joke**: `GET https://carambar-6rg0.onrender.com/api/jokes/random`
  - 📌 **Get a joke by ID**: `GET https://carambar-6rg0.onrender.com/api/jokes/:id`
  - ➕ **Add a new joke**: `POST https://carambar-6rg0.onrender.com/api/jokes`
- Auto-generated API documentation with Swagger  
  👉 [Swagger Docs](https://carambar-6rg0.onrender.com/api-docs)
- CORS configured to allow access from the deployed frontend  
  🎯 [Frontend](https://victoria-31.github.io/carambarFront/)
- Deployed on Render


###################################################################

📁 **Project Structure**
```plaintext


├── bin/
│   └── migrate.ts                # Script to initialize the database
├── src/
│   ├── database/
│   │   ├── db.ts                 # Sequelize + SQLite setup
│   │   └── checkConnection.ts    # Database connection check
│   ├── models/
│   │   └── joke.ts               # Joke model
│   ├── modules/
│   │   └── joke/
│   │       ├── jokeActions.ts    # CRUD and logic
│   │       └── jokeRepository.ts # Data access logic
│   ├── router.ts                 # Routes
│   ├── app.ts                    # Express config (CORS, Swagger, etc.)
│   ├── main.ts                   # Entry point of the server

```

###################################################################

📦 **Tech Stack**  
"Tech stack" refers to the collection of technologies used to build and run this project. Here's what powers the Carambar Jokes API:

- **Node.js** – JavaScript runtime
- **Express** – Server framework
- **TypeScript** – Typed JavaScript
- **Sequelize** – ORM to manage the database
- **SQLite** – Lightweight, file-based SQL database
- **Swagger** – API documentation generator
- **Render** – Cloud platform used for deployment

###################################################################

📜 **API Endpoints**

| Method | Route               | Description        |
|--------|---------------------|--------------------|
| GET    | `/api/jokes`         | List all jokes     |
| GET    | `/api/jokes/random`  | Get a random joke  |
| GET    | `/api/jokes/:id`     | Get joke by ID     |
| POST   | `/api/jokes`         | Add a new joke     |

📘 **Swagger Documentation**:  
[Swagger Docs](https://carambar-6rg0.onrender.com/api-docs)

###################################################################

🛠 **Deployment Notes**  
- The backend is deployed on Render.
- The database used is SQLite (stored as a file).
- CORS is restricted to the following origin:  
  [Frontend](https://victoria-31.github.io/carambarFront)
