// import the express application and type definition
import express, { Express } from "express";

import userRoutes from "./api/v1/routes/userRoutes";
import adminRoutes from "./api/v1/routes/adminRoutes";
import errorHandler from "./api/v1/middlerware/errorHandler";


// initialize the express application
const app: Express = express();

// Middleware START

// Ensures incoming body is correctly parsed to JSON, otherwise req.body would be undefined
app.use(express.json());

// Middleware END

// respond to GET request at endpoint "/" with message
app.get("/", (req, res) => {
    res.send("Hello World");
});



// Route Imports START
// "/api/v1/items" will prefix all item routes

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/admin", adminRoutes);

// Route Imports END

// needs to be used last
app.use(errorHandler);

export default app;


