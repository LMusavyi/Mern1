import mongoose from 'mongoose';

//Schemas are ultimately containers for a structure. They act as blueprints 
//for a components individual characteristics.

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
        },

    price:{
        type: Number,
        required:true
        },

    image:{
        type:String,
        required: true
        },
    }, 
{
    timestamps: true
});


//Tells mongo to create a "model" called Product and uses the schema as a blueprint
const Product = mongoose.model('Product', productSchema);

export default Product;