# myAPi

# build json file

`````````
npm i json-server
json server --watch db.json

`````````

1. run to check service with
`````
json-server employees.js
`````

# add faker npm to generate data for postman manupulation
1. npm i faker 
2. json-server employees.js

# create app.js to test node and run it with npm start with app.js sets onstart onpackage json
```````
const http = require('http');

http.createServer((_, res) => {
    res.write("My NodeJS server is live");
    res.end();
}).listen(4040);

```````
# create index.js and install express with npm i express add this on the index.js
`````
const express = require('express');

const app =express();
const port = process.env.PORT || 4041

app.get('/', (req, res)=> {
    res.send("Your express app is running")
});

app.listen(port, () =>{
    console.log(`server is using express on port ${port}`);
    
})
`````
1. run with : node index.js

2. now add :  npm i body-parser --save

3. add this on index.js : const bodyParser = require('body-parser');

4. now add these line on index.js
````

const users = [{name: 'Tony', email: 'tonya@gmail.com'}]


// to display all users
app.get('/users', (req, res)=> {
    res.json({ ok: true, users});
});


// to return specific user back
app.get('/user/:name', (req, res)=> {
    const {name } = req.params;
    const user = users.filter((user) => user.name === name)[0];
    res.json({ ok: true, users});
});


// to create a users
app.post('/adduser', (req, res)=> {
    const {name, email } = req.body;

    if (name && email){
        users.push({ name, email});
        res.json({ ok: true, users});

    }
    
});
````
5. turn index.js on nodemon




