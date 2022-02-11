const express = require('express');
const cors = require('cors');
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send({msg: "Xola own API"});
});

app.use('/projects', projectRoutes);
app.use('/contact', contactRoutes);
app.use('/testimonials', testimonialRoutes);


const PORT = process.env.PORT || 6900;
app.listen(PORT, () =>  {
    console.log(`server running on port ${PORT}`)
    console.log("Press CTRL+C to quit")
})




