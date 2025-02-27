import { OrderFunc } from "@/funcs/orders-func"
import { Router } from "express"

export const ordersRoutes = Router()

const orderFunc = new OrderFunc()

ordersRoutes.post("/", orderFunc.create)
ordersRoutes.get("/sessions/:session_id", orderFunc.index)
ordersRoutes.get("/sessions/:session_id/total", orderFunc.show)