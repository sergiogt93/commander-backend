import { Schema } from "mongoose";

const providerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Required name"],
    //unique: [true, "Required unique name"],
  },
}, {
  versionKey: false
})

providerSchema.set("toJSON", {
  transform: (returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
  },
});

export default providerSchema;