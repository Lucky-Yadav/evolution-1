const express = require("express");

// const cors = require("cors");

// const corsOption = {
//   origin: ["http://localhost:7000"],
// };
// app.use(cors(corsOption));
// app.use(cors());

const getIP = require("./Routes/getIP");
const productsRouter = require("./Routes/products");

const app = express();

app.use(express.json());

app.use(getIP);
app.use(productsRouter);

app.listen(7000, () => {
  console.log("Database Initiated at http://localhost:7000");
});
