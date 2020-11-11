import express from "express";

// Controller Imports
import basicController from "./controllers/basicController";
import userController from "./controllers/userController";
import postController from "./controllers/postController";
import commentController from "./controllers/commentController";

const routes = express();

// Basic Routes
routes.get("/", basicController.get);

// User Routes
routes.post("/signup", userController.post);

// Post routes
routes.post("/post", postController.post);
routes.get("/posts", postController.getAll);

// comment routes
routes.post("/comment", commentController.post);

export default routes;
