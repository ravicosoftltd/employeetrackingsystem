var app = require('./app');

const port=8000;

app.listen(port,function(err){
    if (err){
        console.log("Error in server setup");
    }
    else{
        console.log(`Express server listening on port: ${port}`);
    }    
});