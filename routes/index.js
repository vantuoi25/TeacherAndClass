const teacherRouter = require('./teacher.router');
const classRouter = require('./class.router');

module.exports = (app)  => {
    app.use('/api/classes', classRouter)
    app.use('/api/teachers', teacherRouter)
};