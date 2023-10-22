import mongoose from "mongoose";

const productSchema = mongoose.Schema({

  name: {
    type:String,
    require:true
  },
  image: {
    type:String,
    require:true,
  },
  description: {
    type:String,
    require:true,
  },
  rating: {
    type:Number,
    require:true,
    default:0,
  },
  numReviews: {
    type:Number,
    require:true,
    default:0,
  },
    price: {
      type:Number,
      require:true,
      default:0,
    },
    CountInStock: {
      type:Number,
      require:true,
      default:0,
    }
},

{
  timestamps:true
}

)

const Product = mongoose.model("User", productSchema)

export default Product;