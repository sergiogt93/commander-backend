import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Required name"],
    unique: [true, "Required unique name"],
  },
  password: {
    type: String,
    required: [true, "Required password"],
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  versionKey: false
})

export default userSchema;