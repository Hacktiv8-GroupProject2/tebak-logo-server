const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// const { generateQuestion, getRandomLogo } = require('./helpers/perkalian_helper');
// const { create } = require('domain');
const randomLogo = require('./helpers/randomLogo')
const increasePoints = require('./helpers/increasePoints');
const { generateQuestion } = require('./helpers/perkalian_helper');

let players = []
// let answers = []

let questions = randomLogo
let question = questions.image_url
let correctAnswer = questions.name

io.on('connection', (socket) => {
  console.log('a user connected');  
    socket.on('connected', (player) => {
      console.log(player.username + ' is now connected' );
      players.push({ 
        id: socket.id, 
        username: player.username, 
        points: 0 
      })
      console.log(players)
      io.emit('connected', players)
    });

    socket.on('getQuestion', () => {
      io.emit('question', question)
    })

    socket.on('sendAnswer', (answer) => {
      if(answer === correctAnswer) {
        questions = randomLogo
        increasePoints(socket.id)
        io.emit('sendQuestion', questions.name)
      }
    })

    // socket.on('sendAnswer', (answer) => {
    //   console.log(answer.answer)
    //   console.log(questions.a)
    //   answers.push(answer)
    //   io.emit('sendAnswer', answers)
    //   if(+answer.answer == questions.a){
    //     questions = generateQuestion();
    //     increasePoints(socket.id);
    //     io.emit('sendQuestion', questions.q)
    //   }
    // });
});


http.listen(PORT,()=>{
  console.log(`App running in http://localhost:${PORT}`);
})
