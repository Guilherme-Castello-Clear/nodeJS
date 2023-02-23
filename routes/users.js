module.exports = (app)=>{
    app.get('/users', (req, res)=>{

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ //return a json to user
            users:[{
                name: "Castello",
                email: 'guilherme.guilherme@guilherme'
            }]
        });
    });
    
    app.get('/users/admin', (req, res)=>{ //define route /users/admin
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users:[]
        });
    });
}