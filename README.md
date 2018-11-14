# Setting Up Task Management App
This source code is related to the [Setting Up Express, Sequelize And MySQL tutorial](https://codehandbook.org/setting-up-sequelize-express-mysql/) 
published on [CodeHandbook](https://codehandbook.org/).
Steps to get this source code up and running :
* Clone the source code
```
git clone https://github.com/codehandbook/task_management_setting_up
```
* Install the required dependencies
```
npm install
```
* Modify the config/config.json file as per your development database
Once you have an empty database schema in your local MySQL database, migrate and seed the table and dummy data
```
node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all
```
* Run the applicaion
```
DEBUG=taskmanagement:* npm start
```
You will have the application running at http://localhost:3000/users/
