const express = require('express');
const app = express();
const port = 3000;

const USERS = [];
const QUESTIONS = [{
    title: "two states",
    description: "Given an array, return the maximum number from array",
    testcases = [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}]

const SUBMISSIONS = [];

app.get('/', ()=>{
    res.send("Hello from home page route");
    });

app.post('/signup', (req, res)=>{
    res.send("Hello from signup route");
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if email is already available in user array 
    let existingUser = USERS.indexOf(`${email}`);
    if (existingUser>=0) {
        return res.status(409).json({ error: 'User with the same email already exists' });
    }

    // If the user doesn't exist, create a new user object
    const newUser = new USERS({
    email,
    password
    });

    USERS.push(newUser);
    return res.status(201).json({ message: 'User registered successfully' });
    });
    console.log(USERS);

app.post('/login', (req, res)=>{
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find the user by email in the database
    let userVerify = USERS.indexOf(`${email}`);
    if (userVerify<0) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Verify the password
    let passwordVerify = USERS.indexOf(`${passwprd}`);
    if (passwordVerify<0) {
        return res.status(401).json({ error: 'Invalid Password' });
    }

    // Password is correct, generate a token or session to authenticate the user
    // Return the token or any other relevant data
    let rs = Math.random();
    let strnum = rs.toString();
    const ele = strnum.split(".");
    const token = ele[1];
    return res.status(200).json({ token });
});

app.get('/questions', (req, res)=>{
    res.status(200).json({QUESTIONS});
})

app.get('/submissions', (req, res)=>{
    res.status(200).json({SUBMISSIONS});
})

app.post('/submissions', (req, res)=>{
    const usrsub = new SUBMISSIONS({
        code
    });
    SUBMISSIONS.push(usrsub);

    let result = Math.random();
    if(result>0.5){
        res.send("submission is pass");
    }
    else{
        res.send("submission is fail");
    }
    
    console.log(SUBMISSIONS);
    return res.status(200).json({ message: 'Code is submitted successfully.' });
});

app.listen(port, ()=>{
    console.log(`Example app is listening on port ${port}`);
});