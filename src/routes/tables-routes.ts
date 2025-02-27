import { TableFunc } from "@/funcs/tables-funcs"
import { Router } from "express"

export const tablesRoutes = Router()

const tableFunc = new TableFunc()

tablesRoutes.get("/", tableFunc.index)