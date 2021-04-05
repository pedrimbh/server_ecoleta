import {Knex} from 'Knex'

export async function seed(knex: Knex) {
   return await knex('items').insert([
        {title: 'Lâmpadas', image:'lampadas.svg'},
        {title: 'Pilhas e Baterias', image:'baterias.svg'},
        {title: 'Papéis e Papelão', image:'papeis-papelao.svg'},
        {title: 'Resíduos ELetrônicos', image:'eletronicos.svg'},
        {title: 'Résiduos Orgânicos', image:'organicos.svg'},
        {title: 'Óleo de Cozinha', image:'oleo.svg'}
    ])
}