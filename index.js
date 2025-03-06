require('dotenv').config()
require('./mongo')

const express = require('express')
const cors = require('cors')
const app = express()
const showRequest = require('./showRequest')

const Post = require('./models/Post')

const notFound = require('./middlewares/notFound.js')
const handleErrors = require('./middlewares/handleErrors.js')

// app.use(cors())
app.use(cors({
    origin: 'http://localhost:5173', // O '*' para permitir todas
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

app.use(express.json()) // parcea body para POST
app.use(showRequest)



//-------------------------------

// const InfoPost = [
//     {
//       id: 1,
//       titulo: "Hades",
//       descripcion: "Un rogue-like donde deberas escapar del inframundo.",
//       miniatura: "Hades.jpg",
//       reseña: `Hades es un juego zarpadisimo con una rejugabilidad tremenda. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Nullam odio turpis, vehicula non condimentum vel,
//         volutpat non erat. Ut vulputate imperdiet ligula eu bibendum. Fusce non fringilla mi, vitae egestas erat. 
//         Quisque magna erat, malesuada quis rutrum ut, viverra a neque. Fusce vel scelerisque purus. Fusce eget pretium arcu.
//         Y tiene un par de waifus preciosas.` 
//     },
//     {
//       id: 2,
//       titulo: "Need for Speed",
//       descripcion: "Deberas tunear autos y andar a los pedos.",
//       miniatura: "needforspeed.jpg",
//       reseña: `Alto juego que envejecio perfectamente y sigue 100% jugable 20 años despues. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       Nullam odio turpis, vehicula non condimentum vel,
//       volutpat non erat. Ut vulputate imperdiet ligula eu bibendum. Fusce non fringilla mi, vitae egestas erat. 
//       Quisque magna erat, malesuada quis rutrum ut, viverra a neque. Fusce vel scelerisque purus. Fusce eget pretium arcu.
//       Cras convallis enim vel nulla ultricies facilisis.
//       El tema waifu se podria mejorar.` 
//     },
//     {
//       id: 3,
//       titulo: "Resident Evil 4",
//       descripcion: "Mata zombies como si te hubieran hecho algo... porque seguramente lo hicieron.",
//       miniatura: "residentevil.jpg",
//       reseña: `Este juego resume bastante mi adolecensia, Adictivo y terrorifico como pocos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//       Nullam odio turpis, vehicula non condimentum vel,
//       volutpat non erat. Ut vulputate imperdiet ligula eu bibendum. Fusce non fringilla mi, vitae egestas erat. 
//       Quisque magna erat, malesuada quis rutrum ut, viverra a neque. Fusce vel scelerisque purus. Fusce eget pretium arcu.
//       Cras convallis enim vel nulla ultricies facilisis.
//       Tiene un par de wifus que estan bastante bien.` 
//     }
// ]


//------------------------------------------------------ GETS

app.get('/api/posts', (req,res) => {
    Post.find({}).then(posts => {
        res.json(posts)
    })
})

app.get('/api/posts/:id', (req, res, next) => {
    const { id } = req.params

    Post.findById(id).then(post => {
        if (post) {
            res.json(post)
        } else {
            res.status(404).end()
        }
    }).catch(err => next(err) )
})



//----------------------- EROORES

app.use(notFound)
app.use(handleErrors)

//------------------------

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Servidor levantado en ${PORT}`)
})