//@ts-check
import { Schema, model } from "mongoose";
import monsoosePaginate from "mongoose-paginate-v2";

const schema = new Schema({
  firstName: {
    type: String,
    max: 100,
  },
  lastName: {
    type: String,
    max: 100,
  },
  password: {
    type: String,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    max: 100,
    unique: true,
  },

  rol: {
    type: String,
  },
  age: {
    type: Number,
  },
  cart: {
    type: String,
  },
});
schema.plugin(monsoosePaginate);
export const UserModel = model("users3", schema);
