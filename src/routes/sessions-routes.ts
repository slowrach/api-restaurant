import { SessionFunc } from "@/funcs/sessions-funcs"
import { Router } from "express"

export const sessionsRoutes = Router()

const sessionFunc = new SessionFunc()

sessionsRoutes.post("/", sessionFunc.create)
sessionsRoutes.get("/", sessionFunc.index)
sessionsRoutes.patch("/:id", sessionFunc.update)