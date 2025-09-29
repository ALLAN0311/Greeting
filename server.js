// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// import routes
const aboutUsRouter = require('./routes/aboutUsRoutes');
const greetingRouter = require('./routes/greetingRoutes');

app.use(express.json());

// default route
app.get('/', (req, res) => res.send('Hello World from server!'));

// mount routers
app.use('/aboutus', aboutUsRouter);
app.use('/greeting', greetingRouter);

app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
