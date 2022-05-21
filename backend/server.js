const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
// import db here
const connectDB = require('./config/db');
const colors = require('colors');


const port = process.env.PORT || 500;





// connect db here 
connectDB();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(errorHandler);





// set up routes here

// app.use('/api/watchlist');


// set up dep here

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    )
  } else {
    app.get('/', (req, res) => res.send('Please set to production'))
  }
  
//   app.use(errorHandler)
  
  app.listen(port, () => console.log(`Server started on port ${port}`))