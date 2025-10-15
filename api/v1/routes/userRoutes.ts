import express, { Router } from "express";
import { getUserDetails } from "../controllers/userController";
import authenticate from "../middlerware/authenticate";
import isAuthorized from "../middlerware/authorize";

const router: Router = express.Router();

router.get(
    "/:id",
    authenticate,
    isAuthorized({ hasRole: ["admin"], allowSameUser: true }),
    getUserDetails
);

export default router;
