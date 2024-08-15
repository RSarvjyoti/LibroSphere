const express = require("express");
const connectToMongo = require("./configs/db");
const userRoutes = require("./routes/userRoutes");
const corsMiddleware = require("./middlewares/corsMiddleware");
require("dotenv").config();

// middlewares
const app = express();
app.use(express.json());

app.use(corsMiddleware);
app.use('/user', userRoutes);


const PORT = process.env.PORT || 8000
const DB_URL = process.env.DB_URL

app.get('/', (req, res) => {
    res.send("This is home route.");
})

app.listen(PORT, async () => {
    try{
        await connectToMongo(DB_URL);
        console.log("Database connected successully.");
        console.log(`Server is runing at port http://localhost:${PORT}`);
    }catch(err) {
        console.log(err);
    }
})

