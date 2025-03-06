
const {Schema, model} = require('mongoose')

const postSchema = new Schema({
    titulo: String,
    descripcion: String,
    miniatura: String,
    reseña: String
})

postSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Post = model('Post', postSchema)



// const post = new Post({
    //     titulo: "Hades",
    //     descripcion: "Un rogue-like donde deberas escapar del inframundo.",
    //     miniatura: "Hades.jpg",
    //     reseña: `Hades es un juego zarpadisimo con una rejugabilidad tremenda. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //     Nullam odio turpis, vehicula non condimentum vel,
    //     volutpat non erat. Ut vulputate imperdiet ligula eu bibendum. Fusce non fringilla mi, vitae egestas erat. 
    //     Quisque magna erat, malesuada quis rutrum ut, viverra a neque. Fusce vel scelerisque purus. Fusce eget pretium arcu.
    //     Y tiene un par de waifus preciosas.` 
    // })
    // post.save()
    //     .then(result => {
        //         console.log(result)        
        //         mongoose.connection.close()
        //     }).catch(err => {
            //         console.log(err)       
            //     })

            
module.exports = Post