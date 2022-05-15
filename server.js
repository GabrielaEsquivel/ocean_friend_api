

const AlarmController = require('./app/controllers/AlarmController');
const UserController = require('./app/controllers/UserController');

const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
// Cors

const cors = require('cors');
const corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));


app.get('/', (req, res) => {
  res.json({ message: 'Server on!' });
});
/***  Alarms  */
app.get('/alarms', async (req, res) => {
  /* res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
   res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
   );*/
  const allAlarms = await AlarmController.getAllAlarms();
  res.json(allAlarms);
});

app.get('/alarms/last', async (req, res) => {
  const lastAlarms = await AlarmController.getTheLastAlarms();
  res.json(lastAlarms);
});

app.post('/alarms/create', async (req, res) => {
  const alarm = req.body;
  const alarmCreated = await AlarmController.create(alarm)
  return res.json({ alarmCreated });
});

app.put('/alarms/seen/:id', async (req, res) => {
  const alarm = { id: parseInt(req.params.id), isSeen: req.body.isSeen }
  const updated = await AlarmController.editSeen(alarm)
  return res.json(updated);
});

app.put('/alarms/attend/:id', async (req, res) => {
  const alarm = { id: parseInt(req.params.id), isAttended: req.body.isAttended }
  const updated = await AlarmController.editAttended(alarm)
  return res.json(updated);
});

app.delete('/alarms/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = await AlarmController.delete(id)
  return res.json(deleted);
});

/** Users */
app.post('/user/create', async (req, res) => {
  const user = req.body;
  const userCreated = await UserController.create(user)
  return res.json(userCreated);
});

app.post('/user/login', async (req, res) => {
  const user = req.body;
  const login = await UserController.login(user)
  return res.json(login);
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});