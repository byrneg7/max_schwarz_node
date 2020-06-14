const path = require('path');

// process.mainMoudle points to whatever file spins up the app
module.exports = path.dirname(process.mainModule.filename)