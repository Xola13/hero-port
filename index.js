const express = require('express');
const cors = require('cors');
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const path = require("path")

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send({msg: "Xola own API"});
});

app.use('/projects', projectRoutes);
app.use('/contact', contactRoutes);


const PORT = process.env.PORT || 6900;
app.listen(PORT, () =>  {
    console.log(`server running on port ${PORT}`)
    console.log("Press CTRL+C to quit")
})




