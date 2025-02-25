import { AppError } from "@/utils/AppError"
import { NextFunction, Request, Response } from "express"

export class ProductFunc {
   async index(request: Request, response: Response, next: NextFunction) {
      try {
         return response.json()
      } catch (error) {
         next(error)
      }
   }
}