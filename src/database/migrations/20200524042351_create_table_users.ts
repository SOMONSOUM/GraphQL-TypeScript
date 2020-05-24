import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  if (!(await knex.schema.hasTable('users'))) {
    return await knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('username').notNullable();
      table.string('email').unique().notNullable();
      table.string('phone_number').unique().notNullable();
      table.string('password').notNullable();
      table.string('avatar').defaultTo('https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  }
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('users');
}
