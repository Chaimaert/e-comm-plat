import mongoose from "mongoose";

const orderSchema = mongoose.Schema({

  user: {
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:"User",
  },
  OrderItems: [
    {
      name: { type: String, require:true },
      qty:  { type: Number, require:true },
      image: { type: String, require:true,},
      price:  { type: Number, require:true },
      product: {
          type:mongoose.Schema.Types.ObjectId,
          require:true,
          ref:"Product",
      },
    },
  ],
  ShippingAddress: {
      address: { type: String, require:true },
      city: { type: String, require:true,},
      postalCode:  { type: Number, require:true },
      country: { type: String, require:true },
  },
  paymentMethod: {
    type:String,
    require:true,
    default:"Paypal",
  },

},

{
  timestamps:true
}

)

const Order = mongoose.model("Order", orderSchema);

export default Order;