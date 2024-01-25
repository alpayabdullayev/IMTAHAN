import Product from "../models/productModels.js";


export const CreateProduct = async (req,res)=>{
    try {
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}


export const getAllProduict = async (req,res)=>{
    try {
        const newProduct = await Product.find({})
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}


export const getProductById = async (req,res)=>{
    try {
        const {id} = req.params
        const newProduct = await Product.findById(id)
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}



export const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const newProduct = await Product.findByIdAndDelete(id)
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}