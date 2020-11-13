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

let players = []
// let answers = []

let questions = randomLogo()
let question = questions.image_url
let correctAnswer = questions.name

io.on('connection', (socket) => {
  console.log('a user connected');  
    socket.on('connected', (player) => {
      players.push({ 
        id: socket.id, 
        username: player.username, 
        points: 0 
      })
      let payload = {
        current_player : {
          id: socket.id, 
          username: player.username, 
          points: 0 
        },
        player_list : players
      }
      io.emit('connected', payload)
    });

    socket.on('getQuestion', () => {
      let payload = {
        image: question,
        answer: correctAnswer
      }
      io.emit('question', payload)
    })

    socket.on('sendAnswer', (answer) => {
      if(answer === correctAnswer) {
        questions = randomLogo
        increasePoints(socket.id)
        io.emit('sendQuestion', questions.name)
      }
    })

    socket.on('changeQuestion', () => {
      let newQuestion = randomLogo()
      let payload = {
        image: newQuestion.image_url,
        answer: newQuestion.name
      }

      players = players.map(player => {
        if(player.id == socket.id){
          return {
            id: player.id, 
            username: player.username, 
            points: player.points + 1
          }
        } else {
          return player;
        }
      });
      console.log(players);
      io.emit('updatePlayers', players)
      io.emit('question', payload)
    })

    socket.on('disconnect', ()=>{
      console.log('disconnected',socket.id);
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
