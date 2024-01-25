import express from "express"
import { CreateProduct, deleteProduct, getAllProduict, getProductById } from "../controller/productController.js"

export const ProductRouter = express.Router()

ProductRouter.get("/product",getAllProduict)
ProductRouter.post("/product",CreateProduct)
ProductRouter.get("/product/:id",getProductById)
ProductRouter.delete("/product/:id",deleteProduct)