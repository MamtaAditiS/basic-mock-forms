module.exports = function (app) {
    var userList = require('../controllers/auth');

    // userList Routes
    app.route('/users')
        .get(userList.list_all_users)
        .post(userList.create_a_user);


    app.route('/tasks/:taskId')
        .delete(todoList.delete_a_task);
};

/home/trigma/Downloads/mongodb-linux-x86_64-ubuntu1604-4.4.5

export PATH="/home/trigma/Downloads/mongodb-linux-x86_64-ubuntu1604-4.4.5/bin:$PATH"  