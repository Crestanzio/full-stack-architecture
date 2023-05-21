import { User } from "../models/user.js";

const postSignup = async (req, res) => {
  const { username, password } = req.body;

  try {
    await User.create({ username, password }).then((user) => {
      res.status(200).json({
        message: "User successfully created",
        user,
      });
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(401).json({
        message: "User already exists",
        error: error.message,
      });
    } else {
      res.status(401).json({
        message: "something wrong, user cannot created",
        error: error.message,
      });
    }
  }

  // User.findOne({ $or: [{ username }, { password }] })
  // .exec()
  // .then((user) => {
  //   if (user?.username === username) {
  //     console.log(user.username);
  //     res.send({ message: "username already exists" });
  //   } else if (user?.password === password) {
  //     console.log(user.password);
  //     res.send({ message: "password already exists" });
  //   } else {
  //     const user = new User({ username, password });
  //     user.save().then((user) => {
  //       if (user) {
  //         res.send({ message: "user sucessfully to created" });
  //       } else {
  //         res.send({ message: user.errors });
  //       }
  //     });
  //   }
  // });
};

export { postSignup };
