import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  
  name: {
    type:String,
    require:true
  },
  rate: {
    type:Number,
    require:true,
    default:0,
  },
  comment: {
    type:String,
    require:true
  },
  user: {
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:"User",
  }
  
})

const productSchema = mongoose.Schema({

  name: {
    type:String,
    require:true
  },
  brand: {
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
  rate: {
    type:Number,
    require:true,
    default:0,
  },
  reviews: [reviewSchema],
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