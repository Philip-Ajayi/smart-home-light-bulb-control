const mqtt = require('mqtt');
const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const client = mqtt.connect('mqtt://localhost');
const app = express();

app.use(bodyParser.json());

app.post('/light', (req, res) => {
  const action = req.body.action;

  if (action === 'on') {
    exec('python ./light_on.py', (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error turning on light');
      } else {
        console.log(stdout);
        res.send('Light turned on');
      }
    });
  } else if (action === 'off') {
    exec('python ./light_off.py', (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error turning off light');
      } else {
        console.log(stdout);
        res.send('Light turned off');
      }
    });
  } else {
    res.status(400).send('Invalid action');
  }
});

client.subscribe('light/status', (topic, message) => {
  const status = message.toString();
  console.log(`Light status: ${status}`);
});

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
