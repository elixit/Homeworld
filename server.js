// reqesting all the parts of the project 

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers');

// calling in session to store cookies 

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// calling in express also 2 ports for jaws to run 

const app = express();
const PORT = process.env.PORT || 3001;

// custom middle wear 

const hbs = exphbs.create({});

// cookies 

const sess = {
    secret: 'Homeworld secret sh',
    cookie: {
        maxAge: 60 * 60 * 1000,
        httpOnly:true,
        secure:false,
        sameSite:'strict',
    },
    store: new SequelizeStore({
        db:sequelize,
    }),

};
// using our cookie sess 

app.use(session(sess));

// handle bars 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//call our public file to run css 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));  

// calling in our routes 
app.use(routes);

// launching our app 

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
      console.log(
        ` Visit http://localhost:${PORT} and see Homeworld!`
      )
    );
  });