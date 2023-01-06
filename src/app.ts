import express from "express";
import "express-async-errors";
import routes from "./routers/user.routes";
import handleError from "./errors/handleError";

const app = express();

app.use(express.json());

app.use(routes);

app.use(handleError);

export default app;
