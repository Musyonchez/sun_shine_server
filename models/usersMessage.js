import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  cart: [
    {
      product_id: String,
      quantity: Number,
    }
  ],
});

const User = mongoose.model('users', userSchema);

export default User;
