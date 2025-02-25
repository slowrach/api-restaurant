import { AppError } from "@/utils/AppError"
import { NextFunction, Request, Response } from "express"

export function errors(error: any,  _request: Request,response: Response, _next: NextFunction){
   if (error instanceof AppError) {
      return response.status(error.statusCode).json({ message: error.message })
   }

   return response.status(500).json({ message: error.message })
}