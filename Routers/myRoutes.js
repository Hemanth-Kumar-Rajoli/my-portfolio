const express = require('express')
const ejs = require('ejs')
const router = express.Router()

router.route('/').get((req, res) => {
    res.render('index', {
        skills:
            ["JAVA", "PYTHON", "JS", "MYSQL", "REACT", "NODE.JS", "HTML", "CSS"],
        descriptions: {
            "JAVA": "My all time favorite language java. The first language to teach me OOPS concepts very well. It's my base language to apply algorithms. ",
            "PYTHON": "This is my playgroud to code programs. This is the First language to be introduced in the curriculum. I have Designed games like 'servive the snake' and 'space shoot' using python turtle library.",
            "JS": "The  doubts raised on OOPS concept in python language are being clarified in JS. In the process of learning full stack development, it plays one of the key roles in programming the behaviour of webpages.",
            "MYSQL": `DBMS and SQL are interesting subjects in arranging data properly with considering normalization in tables to reduce the redundancy in the tables.`,
            "REACT": "ReactJS learned during my internship period. Frankly, I would like to use EJS and plain Js instead of libraries or other frameworks. But react is easy and simple to use.",
            "NODE.JS": 'As nodeJS and JS have similar syntax with minimal changes, I spent most of my time exploring express and other libraries. Express is like a real express vehicle in nodeJS makeing things easier, simple, and productive.',
            "HTML": 'Commenced with enthusiasm to learn and do something big, I did it. The amusing moment here is I used to code in pure HTML format as a kiddy coder, and now HTML is altered with EJS and react. Speaking of HTML, I would say coding is easy but alignment is tricky.',
            "CSS": 'CSS, the "make-up man" of HTML. Learning is easy, applying needs experience to arrange all things proper and good looking. '
        }
    });
})

module.exports = router