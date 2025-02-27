import { NextFunction, Request, Response } from "express"
import { knex } from "@/database/knex"
import { z } from "zod"
import { AppError } from "@/utils/AppError"

export class OrderFunc {
   async create(request: Request, response: Response, next: NextFunction) {
      try {
         const bodySchema = z.object({
            session_id: z.number(),
            product_id: z.number(),
            quantity: z.number().gt(0),
         })

         const { session_id, product_id, quantity } = bodySchema.parse(request.body)

         const session = await knex<SessionRepository>("tables_sessions").where({ id: session_id }).first()

         if(!session || session.closed_at) {
            throw new AppError("This table isn't open")
         }

         const product = await knex<ProductRepository>("products").where({ id: product_id }).first()

         if(!product) {
            throw new AppError("This product not exist")
         }

         await knex<OrderRepository>("orders").insert({
            product_id,
            session_id,
            quantity,
            total: quantity * product.price
         })

         return response.status(201).json()
      } catch (error) {
         next(error)
      }
   }

   async index(request: Request, response: Response, next: NextFunction) {
      try {
         const { session_id } = request.params

         const order = await knex<OrderRepository>("orders").select("orders.id", "orders.session_id", "orders.product_id", "products.name", "products.price","orders.quantity","orders.total", "orders.created_at").join("products", "products.id", "orders.product_id").where({ session_id }).orderBy("orders.created_at")

         return response.json(order)
      } catch (error) {
         next(error)
      }
   }

   async show(request: Request, response: Response, next: NextFunction) {
      try {
         const { session_id } = request.params

         const order = await knex<OrderRepository>("orders").select(knex.raw("COALESCE(SUM(quantity), 0) as total_items"), knex.raw("COALESCE(SUM(total), 0) as total_orders_price")).where({ session_id }).first()

         return response.json(order)
      } catch (error) {
         next(error)
      }
   }
}