const path = require('path');
const express = require('express');
const { dirname } = require('path');
const app = express()
const publicPath = path.join(__dirname, '..', 'public');

const port =  process.env.PORT || 3000;

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})