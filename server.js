const express = require('express');
const cors = require('cors');
const db = require('./app/models');

const app = express();
const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

db.mongoose
.connect(db.url)
.then(() => {
    console.log('Connected to database');
})
.catch((err) => {
    console.log(`Can't connect to database`, err);
    process.exit();
});

app.get('/', (req, res) => {
    res.send('Welcome');
});

require('./app/routes/stud.routes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})