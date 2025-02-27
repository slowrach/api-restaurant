import { NextFunction, Request, Response } from "express"
import { knex } from "@/database/knex"

export class TableFunc {
   async index(request: Request, response: Response, next: NextFunction) {
      try {
         const tables = await knex<TableRepository>("tables").select().orderBy("number")

         return response.json()
      } catch (error) {
         next(error)
      }
   }
}