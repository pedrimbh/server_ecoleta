import path from 'path'
module.exports = {
    client: 'mysql',
    connection: {
        database : 'ecoleta',
        host : '127.0.0.1',
        user : 'root',
        password : '1301420',
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database','migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database','seeds')
    }
}