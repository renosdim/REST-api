require('dotenv').config();  
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error: ", err));


app.use('/api/tasks', taskRoutes);


const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
