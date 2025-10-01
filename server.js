const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const aboutUsRouter = require('./routes/aboutUsRoutes');
const greetingRouter = require('./routes/greetingRoutes');

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World from server!'));

app.use('/aboutus', aboutUsRouter);
app.use('/greeting', greetingRouter);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
