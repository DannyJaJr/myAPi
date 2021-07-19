const express = require('express');
const bodyParser = require('body-parser');

const app =express();
const port = process.env.PORT || 4041


const users = [{name: 'Tony', email: 'tonya@gmail.com'}]

app.get('/', (_, res)=> {
    res.send("Your express app is running")
});





// to display all users
app.get('/users', (_, res)=> {
    res.json({ ok: true, users});
});


// to return specific user back
app.get('/user/:name', (req, res)=> {
    const {name } = req.params;
    const user = users.filter((user) => user.name === name)[0];
    res.json({ ok: true, user});
});


// to create a users
app.post('/adduser', (req, res)=> {
    const { name, email } = req.body;
    if (name && email){
        users.push({ name, email});
        res.json({ ok: true, users});

    }
    
});




app.listen(port, () =>{
    console.log(`server is using express on port ${port}`);

})
