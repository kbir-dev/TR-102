//server file MVC structure = Model View Controller CommonJS(Backend)
//env files
const express = require("express");
const server = express();
const dotEnv = require("dotenv");
const { fetchProducts, getSingleProduct } = require("./Controller/Products");
const cors = require("cors");
const saltRound = 12;
const bcrypt = require('bcrypt')
dotEnv.config();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());

server.get("/fetchProducts", fetchProducts);
server.get("/singleProduct/:id", getSingleProduct);

server.post("/register", async(req, res) => {
  try {
    const {name , email , password} = req.body;

    const hashPassword = await bcrypt.hash(password , saltRound);

    const data = {
      name : name , 
      email : email , 
      password : hashPassword,
    }

    res.send(data);


  } catch (error) {
    res.send(error.message);
  }
});

server.listen(port, () => {
  console.log(`Backend server is running at  http://localhost:${port}`);
});
