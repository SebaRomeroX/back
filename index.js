const express = require('express')
const cors = require('cors')
const app = express()
const showRequest = require('./showRequest')

app.use(cors())
app.use(express.json()) // parcea body para POST
app.use(showRequest)



//-------------------------------

const InfoPost = [
    {
      id: 1,
      titulo: "Hades",
      descripcion: "Un rogue-like donde deberas escapar del inframundo.",
      miniatura: "Hades.jpg",
      reseña: `Hades es un juego zarpadisimo con una rejugabilidad tremenda. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam odio turpis, vehicula non condimentum vel,
        volutpat non erat. Ut vulputate imperdiet ligula eu bibendum. Fusce non fringilla mi, vitae egestas erat. 
        Quisque magna erat, malesuada quis rutrum ut, viverra a neque. Fusce vel scelerisque purus. Fusce eget pretium arcu.
        Y tiene un par de waifus preciosas.` 
    },
    {
      id: 2,
      titulo: "Need for Speed",
      descripcion: "Deberas tunear autos y andar a los pedos.",
      miniatura: "needforspeed.jpg",
      reseña: `Alto juego que envejecio perfectamente y sigue 100% jugable 20 años despues. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam odio turpis, vehicula non condimentum vel,
      volutpat non erat. Ut vulputate imperdiet ligula eu bibendum. Fusce non fringilla mi, vitae egestas erat. 
      Quisque magna erat, malesuada quis rutrum ut, viverra a neque. Fusce vel scelerisque purus. Fusce eget pretium arcu.
      Cras convallis enim vel nulla ultricies facilisis.
      El tema waifu se podria mejorar.` 
    },
    {
      id: 3,
      titulo: "Resident Evil 4",
      descripcion: "Mata zombies como si te hubieran hecho algo... porque seguramente lo hicieron.",
      miniatura: "residentevil.jpg",
      reseña: `Este juego resume bastante mi adolecensia, Adictivo y terrorifico como pocos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nullam odio turpis, vehicula non condimentum vel,
      volutpat non erat. Ut vulputate imperdiet ligula eu bibendum. Fusce non fringilla mi, vitae egestas erat. 
      Quisque magna erat, malesuada quis rutrum ut, viverra a neque. Fusce vel scelerisque purus. Fusce eget pretium arcu.
      Cras convallis enim vel nulla ultricies facilisis.
      Tiene un par de wifus que estan bastante bien.` 
    }
]


//------------------------------------------------------

app.get('/api/posts', (req,res) => {
    res.json(InfoPost)
})

app.get('/api/posts/:id', (req,res) => {
    const id = Number(req.params.id)
    const post = InfoPost.find(post => post.id == id)

    if (post) {
        res.json(post)
    } else {
        res.status(404).end()
    }

})

//------------------- 404

app.use((req, res) => {
    res.status(404).json({
        error:"Not found"
    })

})

//------------------------

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor levantado en ${PORT}`)
})