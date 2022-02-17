const express = require('express');
const app = express.Router();

let projects =[
    {
        id: "1",
        title: "Online Store",
        techStack: "HTML, CSS, Javascript",
        github: "https://github.com/Xola13/Store.git",
        live: "https://xola-online-store.netlify.app",
        image: "https://i.postimg.cc/rm9vBNYN/online-store.png",
        
    },
    {
        id: "2",
        title: "Tourist Cards",
        techStack: "HTML, CSS",
        github: "https://github.com/Xola13/css.05-10-21.git",
        live: "https://tourist-cards.netlify.app",
        image: "https://i.postimg.cc/mDtF1mfm/cards.png",
        
    },
    {
        id:"3",
        title: "Flip Cards",
        techStack: "HTML, CSS",
        github: "https://github.com/Xola13/flip-cards.git",
        live: "https://flip-cards.netlify.app",
        image: "https://i.postimg.cc/yN50PMTM/flip-cards.png",
        
    },
    {

        id: "4",
        title: "BMI Calculator",
        techStack: "HTML, CSS, Javascript",
        github: "https://github.com/Xola13/BMI-Calculator.git",
        live: "https://xola-bmi-calculator.netlify.app",
        image: "https://i.postimg.cc/4x9LV1ZN/bmi.png",
        
    },
    {
        id: "5",
        title: "Calculator",
        techStack: "HTML, CSS, Javascript",
        github: "https://github.com/Xola13/calculator.git",
        live: "https://xola-calculator.netlify.app",
        image: "https://i.postimg.cc/W1SphPBZ/calculator.png",
        
    },
    {
        id: "6",
        title: "Landing page",
        techStack: "HTML, CSS",
        github: "https://github.com/Xola13/calculator.git",
        live: "https://xola-calculator.netlify.app",
        image: "https://i.postimg.cc/tJDCbrmj/landing.png",
        
    },
];

function fixArrayID(arr) {
    return arr.forEach((item, index) => (item.id = index + 1));
}

//CREATE
app.post('/', (req, res) => {

    const { title, techStack, github, live, image } = req.body;
 
if(!title || !techStack || !github || !live || !image ) {
    res.status(400).send({msg: "Not all data sent"});
}

const project = {
    id: projects.length + 1,
    title,
    techStack,
    github,
    live,
    image,
    
};

projects.push(project);
res.send(project);

});


app.get('/', (req, res) => {

    res.send(projects);

});

app.get('/:id', (req, res) => {

    const project = projects.find(project => project.id == req.params.id)

    if(!project) res.status(404).send({msg: "Project not found" });

    res.send(project)
});

//UPDATE
app.put('/:id', (req, res) => {

    const { title, techStack, github, live, image } = req.body;
    const project = projects.find(project => project.id == req.params.id)

    if(!project) res.status(404).send({msg: "Project not found" });

    if(title) project.title = title;
    if(techStack) project.techStack = techStack;
    if(github) project.github = github;
    if(live) project.live = live;
    if(image) project.image = image;

    res.send(project)
});

//DELETE
app.delete("/:id", (req, res) => {

project = projects.filter((project) => project.id != req.params.id);

fixArrayID(projects);

res.send({msg: "Project deleted" });

});

module.exports = app;