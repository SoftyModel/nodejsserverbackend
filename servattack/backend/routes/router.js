import {Router} from "express";
import * as ctrl from "../controllers/controlfunc.js"
const router=Router()


router.get("/p",ctrl.getHome)
router.get("/auth?",ctrl.getAuth)

export default router