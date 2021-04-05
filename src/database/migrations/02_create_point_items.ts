import {Knex} from 'knex'

export async function up (knex: Knex) {
   return knex.schema.createTable('points_items', table =>{
        table.increments('id').primary()
        table.integer('point_id').notNullable().references('id').inTable('points').unsigned()
        table.integer('item_id').notNullable().references('id').inTable('items').unsigned()
    })
}

export async function down (knex: Knex) {
    return  knex.schema.dropTable('points_items')
}