/*
 * Connect all of your endpoints together here.
 */
module.exports = function (app, router) {
    // app.use('/api', require('./home.js')(router));
    app.use('/users', require('./users.js'));
    app.use('/tasks', require('./tasks.js'));
};
