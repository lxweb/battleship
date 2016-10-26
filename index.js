const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const ejs = require('ejs');
let turn = 1

let data = {
  users:[
    {
      id: 1,
      map:{},
      ships:[
        [1,2,3,4],
        [30,42,54,66],
        [111,112,113,114,115,116]
      ]
    },
    {id: 2,
      map:{},
      ships:[
        [37,49,61,73],
        [17,18,19,20],
        [88,89,90,91,92,93]
      ]
    }
  ]
}
let path = __dirname + '/build';
if(false){
  path = __dirname + '/app';
}

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path );

app.use(bodyParser());
app.use(express.static(path));

app.get('/', function(req,res){
  res.render('index')
});

// Check if user is already logged-in
app.get('/api/user/:userId', function(req,res){
  let currentUser = data.users.filter( item => item.id == req.params.userId)
  return res.send(currentUser[0]);
});

app.post('/api/attack/:userId/:pos', function(req, res){
  let {userId, pos} = req.params;

  if(userId==turn) return res.status(500).send('Not your turn!')
  turn = (turn==1)?2:1;

  let attackedUser = data.users.filter( item => item.id == userId)[0]

  if([].concat.apply([], attackedUser.ships).indexOf(parseInt(pos,10))>-1){
    attackedUser.map[pos] = 1
    return res.send({status: 1, newMap: attackedUser.map});
  }
  attackedUser.map[pos] = 0
  return res.send({status:0});
});

let port = process.env.PORT || 4000;
app.listen(port, ()=> {
  console.log('Server started at port number: ', port);
});
