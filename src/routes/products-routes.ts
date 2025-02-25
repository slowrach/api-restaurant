import { ProductFunc } from "@/funcs/products-funcs"
import { Router } from "express"

export const productsRoutes = Router()
const productFunc = new ProductFunc()

productsRoutes.get("/", productFunc.index)