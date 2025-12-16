const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://username:password700@cluster123.fcjjkjn.mongodb.net/GnanData?retryWrites=true&w=majority&appName=Cluster123')
.then(() => console.log('Database connected successfully'))
.catch(() => console.log('Database is not connected'))