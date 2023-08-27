const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const routes = reqier(controller)
const sequelize = require('./config/connection');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

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

app.use(session(sess));

// handle bars 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));  going to bring this back when we have a public folder

app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
      console.log(
        ` Visit http://localhost:${PORT} and see Homeworld!`
      )
    );
  });