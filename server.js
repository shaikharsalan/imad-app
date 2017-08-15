var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title : 'Article One' ,
        date : 'Sep 5, 2017',
        heading: 'Article One',
        content : ` <p>This is article one.This is article one.This is article one.This is article one.</p>
                    <p>This is article one.This is article one.This is article one.This is article one.</p>
                    <p>This is article one.This is article one.This is article one.This is article one.</p> `,
    },
    'article-two' : {
        title : 'Article Two' ,
        date : 'Sep 6, 2017',
        heading: 'Article Two',
        content : ` <p>This is article two.</p> `,
    },
    'article-three' : {
        title : 'Article Three',
        date : 'Sep 10, 2017',
        heading: 'Article Three',
        content : ` <p>This is article three.</p> `,
    }
};

function  createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
        	<title>${title}</title>
        	<link href="/ui/style.css" rel = "stylesheet"/>
        	<meta name="viewport" content="width-device-width , initial-scale = 1"/>
        </head>
        <body>
            <div class="container">
                <a href="/">Home</a>
                <div>
                    <h3>
                    	${heading}
                    </h3>    
                </div>
                
                <div>
                	${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    
    return htmlTemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:ArticleName',function(req,res){
    var ArticleName = req.params.ArticleName;
	res.send(createTemplate(articles[ArticleName]));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
