import express from "express"
import { changePassword,getMe,updateProfile } from "../Controller/ProfileController.js"
import protect from "../middleware/AuthMiddleware.js"

const router=express.Router()

router.get("/me",protect,getMe)
router.put("/update",protect,updateProfile)
router.put("/change-password",protect,changePassword)
export default router