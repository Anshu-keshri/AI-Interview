import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { getCurrentUser } from "../controllers/user.controlller.js"

const userRouter = express.Router()

userRouter.get("/current-user", isAuth, getCurrentUser)

export default userRouter