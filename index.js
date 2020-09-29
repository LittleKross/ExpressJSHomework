let express = require('express');
let bodyParser = require('body-parser');
let port = 8080;
let app = express();
let info = {
    "Brandon Young":{
       email: "youngbt@iu.edu",
       favoriteMusician: "Callum Gahram"
    }
};

app.use(bodyParser.json())

app.use('/', routes);

app.listen(port, function() {
    console.log("Listening on :%d", port);
});

//routes
let routes = express.Router();

routes.get('/companies', companies.root);

routes.get('/companies/:companyName', companies.name)

routes.get('/companies/:companyName/employees', companies.employees)

routes.route('/companies/:companyName/employees/:employeeName')
    .get(companies.singleEmployee)
    .put(companies.createEmployee)
    .delete(companies.removeEmployee)

module.exports = routes;

