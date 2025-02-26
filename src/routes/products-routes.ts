import { ProductFunc } from "@/funcs/products-funcs"
import { Router } from "express"

export const productsRoutes = Router()
const productFunc = new ProductFunc()

productsRoutes.get("/", productFunc.index)

productsRoutes.post("/", productFunc.create)

productsRoutes.put("/:id", productFunc.update)

productsRoutes.delete("/:id", productFunc.remove)