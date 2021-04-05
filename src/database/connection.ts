import knex from 'knex'

const connection = knex({
    client: 'mysql',
    connection: {
      database : 'ecoleta',
      host : '127.0.0.1',
      user : 'root',
      password : '1301420',
    },
}
)
export default connection