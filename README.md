# Express-Rest-API-Exercise

This repository contains a simple REST API built using Express, Node.js, and MongoDB. It was developed as an exercise for a course at the SENA.

> [!CAUTION]
> The code from this project is not production ready due to the lack of error handling and improper configuration of resources, among other aspects.

## Key Features

- Provides endpoints for managing posts (CRUD operations).
- Connects to a MongoDB database securely using environment variables.
- Uses Mongoose for interacting with MongoDB data.

## Getting Started

1. Clone this repository:
```
git clone https://github.com/jmferreirab/Express-Rest-API-Exercise.git
```
2.	Install dependencies:
```
npm install
```

3.	Create a .env file in the root directory and add the following variables:

```bash
DB_USER=your_mongodb_user
DB_PASSWORD=your_mongodb_password
DB_NAME=your_mongodb_database_name
DB_HOST=your_mongodb_host
```

4. Start the server:
```bash
npm start
```

## Available Endpoints

* GET /servicios/posts: Get a list of all posts.
* POST /servicios/posts: Create a new post.
* GET /servicios/posts/:id: Get a specific post by ID.
* PUT /servicios/posts/:id: Update an existing post.
* DELETE /servicios/posts/:id: Delete a post.


## Additional Information
* The app.js file contains the main application logic.
* The routes/post.js file defines the routes and logic for the post endpoints.
* The models directory contains Mongoose models for the data schema.

## Contact

For any questions or issues, feel free to create a new issue.

