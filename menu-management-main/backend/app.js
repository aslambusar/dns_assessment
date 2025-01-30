const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const menuRoutes = require('./routes/menuRoutes');

connectDB();
const app = express();

//const frontendUrl = "http://localhost:5000";
const frontendUrl = "https://dnsbackend.onrender.com";

// const corsOptions = {
//   origin: frontendUrl,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// };
const corsOptions = {
  origin: "https://dns-frontend-kz1o.onrender.com", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(cors());



app.use(bodyParser.json());

app.use(express.json());


app.use('/api', menuRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
