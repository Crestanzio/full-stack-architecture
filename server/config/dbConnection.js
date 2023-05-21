import mongoose from "mongoose";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function dbConnection() {
  try {
    await mongoose.connect(process.env.DB, options);
  } catch (error) {
    console.log(error);
  }
}

export { dbConnection };
