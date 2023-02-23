let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app)=>{
    let route = app.route('/users')

    route.get((req, res)=>{

        db.find({}).sort({name:1}).exec((err, users)=>{

            if(err){
                app.utils.error.send(err, res, req);
            }
            else{
                console.log(users);
            
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ //return a json to user
                    users
                });
            }


        });

        
    });
    
    route.post('/users', (req, res)=>{ //define route /users/admin
    

        db.insert(req.body, (err, user)=>{
            if(err){
                app.utils.error.send(err, res, req);
            }
            else{
                res.status(200).json(user);
            }

        })
    });
}