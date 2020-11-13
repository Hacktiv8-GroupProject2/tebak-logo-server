const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const { generateQuestion, getRandomLogo } = require('./helpers/helper');
const { create } = require('domain');
let players = []
let answers = []

let questions = generateQuestion();
let question = questions.q;

// console.log(question)
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
      io.emit('sendQuestion', question)
      // console.log(question)
    });
    
    // socket.on('sendQuestion', (question) => {
    //   io.emit('sendQuestion', question)
    // });

    socket.on('sendAnswer', (answer) => {
      console.log(answer.answer)
      console.log(questions.a)
      answers.push(answer)
      io.emit('sendAnswer', answers)

      if(+answer.answer == questions.a){
        questions = generateQuestion();
        increasePoints(socket.id);

        io.emit('sendQuestion', questions.q)
      }
    });
});

function increasePoints(id) {
  players = players.map(player => {
    if(player.id == id){
      return {
        id: player.id, 
        username: player.username, 
        points: player.points + 1
      }
    } else {
      return player;
    }
  });
}

http.listen(PORT,()=>{
  console.log(`App running in http://localhost:${PORT}`);
})
