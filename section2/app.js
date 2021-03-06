const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// allow for inclusion of static files through <Link> tags, starting with the {public} filepath.
app.use(express.static(path.join(__dirname, 'public')));

// '/admin' preceeds all adminRoutes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// catchall route
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(3000);