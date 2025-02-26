import { AppError } from "@/utils/AppError"
import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod"

export function errors(error: any,  _request: Request,response: Response, _next: NextFunction){
   if (error instanceof AppError) {
      return response.status(error.statusCode).json({ message: error.message })
   }

   if (error instanceof ZodError) {
      return response.status(400).json({ message: "validation error", issues: error.format() })
   }

   return response.status(500).json({ message: error.message })
}