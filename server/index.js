
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')

const passport = require('passport');
const keys = require('./config/keys');

const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000


require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);




///*
const url = require('url');
const proxy = require('express-http-proxy');

//app.use('/wp-content', proxy('https://next.acanud.ru', {
app.use('/wp-content', proxy('https://comsep-wp-vit2.c9users.io/', {
  proxyReqPathResolver: function (req) {
    return req.originalUrl;
  },
    https: true
} ));
//*/

app.use('/dspace', proxy('https://dspace.spbu.ru', {
//  proxyReqPathResolver: function (req) {
//    return req.originalUrl;
//  },
    https: true
} ));



app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
