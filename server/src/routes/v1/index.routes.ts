import userRoutes from "./user.routes";
import express from "express";

const v1Routes = express.Router();

v1Routes.use("/users", userRoutes);

export default v1Routes;
