const express = require('express');
const app = express.Router();

let testimonials =[{
    id: "1",
    img: "https://i.postimg.cc/j2X3KNR7/Seth3.jpg",
    name: "Seth",
    occupation: "Aspiring Front-end Developer",
    desc: "Xola is a hard working individual who is always on time eager to work and learn. He is very confident and friendly too.",
    link: "https://www.linkedin.com/in/webdevseth/",
},
{
    id:"2",
    img: "https://i.postimg.cc/t4VJMzq7/Bulela.jpg",
    name: "Bulela Gomoshe",
    occupation: "Aspiring Back-end Developer",
    desc: "Xola is a problem solver, I believe he can make good leader",
    link: "https://www.linkedin.com/in/bulelag/",
},
{
    id:"3",
    img: "https://i.postimg.cc/nL4v6xFs/seko.jpg",
    name: "Seko Mpofu",
    occupation: "Aspiring front-end developer",
    desc: "Xola is cardial with everyone and he works hard in class. He participates in activities and he is panctual.",
    link: "https://www.linkedin.com/in/nomvuyiseko-mpofu-0a782b117/",
},
{
    id: "4",
    img: "https://i.postimg.cc/KcwyHhRr/Jude3.jpg",
    name: "Jude Julius",
    occupation: "Full-stack developer",
    desc: "Xola has a uniqueness that makes him the easiest person to reach out to and he is very transparent and dedicated to his work.",
    link: "https://www.linkedin.com/in/jude-julius-a56299212/",
},
{
    id: "5",
    img: "https://i.postimg.cc/d1Xt67bG/Kagiso.jpg",
    name: "Kagiso Mphayi",
    occupation: "Full-stack Developer",
    desc: "Mr Magatya is an inquisitive an attentive person who can mediate any potential problem that needs solving",
    link: "https://www.linkedin.com/in/kagiso-kagiso-5aab71219/",
},
{
    id: "6",
    img: "https://i.postimg.cc/YqRzSMYQ/Godwin.jpg",
    name: "Godwin",
    occupation: "Lecture",
    desc: "Xola is a very consistent student. . He grasps new concepts quickly and accepts constructive criticism and instruction concerning his projects. -Godwin Dzvapatsva-Head of Curriculum and Learning",
    link: "https://www.linkedin.com/in/gpdzvapatsva/",
},
];

function fixArrayID(arr) {
    return arr.forEach((item, index) => (item.id = index + 1));
}

//CREATE
app.post('/', (req,res) => {

    const { img, name, occupation, desc, link} = req.body;

    if(!img || !name || !occupation || !desc || !link) {
        res.status(404).send({msg: "Not all data sent"});
    }

    const testimonial = {
        id: testimonials.length + 1,
        img,
        name,
        occupation,
        desc,
        link,
    };
    
    testimonials.push(testimonial);
    res.send(testimonial);
});


app.get('/', (req, res) => {
    res.send(testimonials);
});

app.get('/:id', (req, res) => {

    const testimonial = testimonials.find(testimonial => testimonial.id == req.params.id)

    if(!testimonial) res.status(404).send({msg: "testimonial not found"});

    res.send(testimonial)
});

//UPDATE
app.put('/:id', (req, res) => {

    const { img, name, occupation, desc, link } = req.body;
    const testimonial = testimonials.find(testimonial => testimonial.id == req.params.id)

    if(!testimonial) res.status(404).send({msg: "Testimonial not found" });

    if(img) testimonial.img = img;
    if(name) project.name = name;
    if(occupation) project.occupation = occupation;
    if(desc) project.desc = desc;
    if(link) project.link = link;

    res.send(testimonial)

})

//DELETE
app.delete("/:id", (req, res) => {

    testimonial = testimonials.filter((testimonial) => testimonial.id != req.params.id);

    fixArrayID(testimonials);
    
    res.send({msg: "Testimonial deleted" }); 
})


module.exports = app;