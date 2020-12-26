const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config({
  path: "./config/.env",
});

//set up express

const app = express();
app.use(express.json()); //leer json de los req
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

//DB connection
connectDB();

// set up routes

app.use("/users", require("./routes/userRouter"));
