import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("products").del();

    await knex("products").insert([
        { name: "Porção de Fritas", price: 15 },
        { name: "Suco de Abacaxi com Hortelã", price: 8.80 },
        { name: "Lasanha de Carne", price: 32.40 },
        { name: "Nhoque", price: 24 },
        { name: "Salmão ao Molho", price: 56.70 },
        { name: "Escondidinho de Carne de Sol", price: 33.65 },
        { name: "Coxinha de Frando", price: 11.35 },
        { name: "Feijão Preto", price: 31.70 },
        { name: "Arroz com Cenoura", price: 25 },
        { name: "Salada de Legumes", price: 30 },
        { name: "Fígado Acebolado", price: 45.67 },
        { name: "Frango à Parmegiana", price: 47.80}
    ]);
};
