module.exports = function(express,app){

var router = express.Router();
router.get('/', function(req,res,next){
	res.render('index',{})
})

router.get('/aboutus', function(req,res,next){
	res.render('aboutus',{})
})

app.use('/', router);
}
