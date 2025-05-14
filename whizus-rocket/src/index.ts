import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const app_name = process.env.APP_NAME;
const app_port = process.env.PORT;
const target_host = process.env.TARGET_HOST;
const target_port = process.env.TARGET_PORT;

app.post('/destination', (req, res) => {
  res.send(`[${app_name}]: A rocket from ${req.body.source_host} has arrived!`);
})

app.get('/send-rocket', async (req, res) => {
  const destination_url = `${target_host}:${target_port}/destination`
  const response = await axios.post(destination_url, {
    source_host: app_name
  });
  res.send(response.data);
});

app.listen(`${process.env.PORT}`, () => {
  console.log(`${app_name} successfully launched on ${app_port}!`);
});
