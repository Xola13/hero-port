const { Router } = require('express');
const express = require('express');
const router = express.Router();

let testimonials =[{

    img: "https://i.postimg.cc/j2X3KNR7/Seth3.jpg",
    name: "Seth",
    occupation: "Aspiring Front-end Developer",
    desc: "Xola is a hard working individual who is always on time eager to work and learn. He is very confident and friendly too.",
    link: "https://www.linkedin.com/in/webdevseth/",
},
{
    img: "https://i.postimg.cc/t4VJMzq7/Bulela.jpg",
    name: "Bulela Gomoshe",
    occupation: "Aspiring Back-end Developer",
    desc: "Xola is a problem solver, I believe he can make good leader",
    link: "https://www.linkedin.com/in/bulelag/",
},
{
    img: "https://i.postimg.cc/nL4v6xFs/seko.jpg",
    name: "Seko Mpofu",
    occupation: "Aspiring front-end developer",
    desc: "Xola is cardial with everyone and he works hard in class. He participates in activities and he is panctual.",
    link: "https://www.linkedin.com/in/nomvuyiseko-mpofu-0a782b117/",
},
{
    img: "https://i.postimg.cc/KcwyHhRr/Jude3.jpg",
    name: "Jude Julius",
    occupation: "Full-stack developer",
    desc: "Xola has a uniqueness that makes him the easiest person to reach out to and he is very transparent and dedicated to his work.",
    link: "https://www.linkedin.com/in/jude-julius-a56299212/",
},
{
    img: "https://i.postimg.cc/d1Xt67bG/Kagiso.jpg",
    name: "Kagiso Mphayi",
    occupation: "Full-stack Developer",
    desc: "Mr Magatya is an inquisitive an attentive person who can mediate any potential problem that needs solving",
    link: "https://www.linkedin.com/in/kagiso-kagiso-5aab71219/",
},
{
    img: "https://i.postimg.cc/YqRzSMYQ/Godwin.jpg",
    name: "Godwin Dzvapatsva",
    occupation: "Lecture",
    desc: "Xola is a very consistent student. . He grasps new concepts quickly and accepts constructive criticism and instruction concerning his projects. -Godwin Dzvapatsva-Head of Curriculum and Learning",
    link: "https://www.linkedin.com/in/gpdzvapatsva/",
},
];


//CREATE
app.post('/', (req,res) => {})

//READ
app.get('/', (req, res) => {

    res.send(testimonials);
});

app.get('/:id', (req, res) => {})

//UPDATE
router.put('/:id', (req, res) => {})

//DELETE
Router.delete("/:id", (req, res) => {})


module.exports = app;