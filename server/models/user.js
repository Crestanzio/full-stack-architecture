import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  username: { type: String, lowercase: true, trim: true, unique: { index: true }, required: true },
  password: { type: String, required: true },
  dateCreated: { type: Date, required: true, default: Date.now() },
});

const User = mongoose.model("user", userSchema);

export { User };
