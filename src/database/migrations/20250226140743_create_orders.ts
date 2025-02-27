import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
   await knex.schema.createTable("orders", (table) => {
      table.increments("id").primary(),
      table.integer("session_id").notNullable().references("id").inTable("tables_sessions"),
      table.integer("product_id").notNullable().references("id").inTable("products"),
      table.integer("quantity").notNullable(),
      table.decimal("total").notNullable(),
      table.timestamp("created_at").defaultTo(knex.fn.now())
   })
}


export async function down(knex: Knex): Promise<void> {
   await knex.schema.dropTable("orders")
}

