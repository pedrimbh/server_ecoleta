import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (request, response)=>{
    console.log('Listagem de usuários')
    response.json([
        "joao",
        "PEdro",
        "Elisa"
    ])
})

app.listen(3333)