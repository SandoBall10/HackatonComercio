const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/api/reniec/:dni', async (req, res) => {
  try {
    const { dni } = req.params;
    const response = await axios.get(
      `https://api.decolecta.com/v1/reniec/dni`,
      {
        params: { numero: dni },
        headers: {
          'Authorization': 'Bearer sk_11672.tJB7XRDDqLcHnrOMFEORNnhKJQV7amwz',
          'Content-Type': 'application/json'
        }
      }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error consultando la API' });
  }
});
app.listen(3001, () => console.log('Proxy backend en puerto 3001'));