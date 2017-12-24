//Packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


//Initialize app
var app = express();
//Setup MongoDB
const MongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017/techstitution';
const objectId = require('mongodb').ObjectId;

//Connecting MongoDB
MongoClient.connect(mongoURL, function(err , database ){
    
    if (err) {
        console.log(err);
    }else{
    console.log('MongoDB Connected !');
    }
    qkmk = database.collection('qkmk');
    
});

//setup template engine
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');

//use static file
app.use(express.static(__dirname + '/public'));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3001,function(){
    console.log("Navigate to http://localhost:3001");

});

app.get('/',function(req,res){
    //res.sendFile(__dirname + '/index.html'); 
    var title="Forma e regjistrimit";
    res.render('index' , {title : title});
});
app.get('/show',function(req,res){
    var title="Lista me te dhena";
    qkmk.find({}).toArray(function(err,docs){
        if(err){
            console.log(err);
        }
        
res.render('show' , {title : title ,docs :docs});
});  
});

app.post('/add', function (req, res) {  
    var data = req.body;
    qkmk.insert(data, function(err, results){
        if(err){
            console.log(err);
        }
        res.redirect('/')
    
    });
});

app.get('/edit/:id', function (req, res) {
    var title= "Editimi i te dhenave";
    var id = req.params.id;
    qkmk.findOne({_id: objectId(id) }, function(err, result) {
        if(err){
            console.log(err);
        }
  res.render('edit',{title: title, doc: result});  
    });
  });

  app.post('/update/:id', function (req, res) {
    var data = req.body;
    var id = objectId(req.params.id);
    qkmk.updateOne({_id : id} ,
        { $set: data} ,
        function(err,result){
            if(err){
          console.log(err);
      }
       res.redirect('/show');
    });
});
app.get('/delete/:id', function (req, res) {
    var data = req.body;
    var id = objectId(req.params.id);
    qkmk.deleteOne({_id : id} ,
       
        function(err,result){
            if(err){
          console.log(err);
      }
       res.redirect('/show');
  
        });
});



        
        
   /*--ushtrim me exercise.ejs
    app.get('/exercise',function(req,res){
        var dataJson ={
            "id" : 1,
            "project" : "techstitution",

        };
        var projects= [
            {id:1 , name: "Fatbardha", lastname: "Bruqi"},
            {id:2 , name: "Anita", lastname: "Hajdari"},
            {id:3 , name: "Dalina", lastname: "Vranovci"},
            


    ];
        res.render('exercise' , {data : dataJson ,projects : projects});
        
        
    });*/
    

app.get('*' ,function(req, res){
   res.send("Not found ! ");

});