var http=require('http');
var url=require('url');//url对象可以解析URL中的内容
var qs=require('querystring');//查询参数对象就可以处理查询参数

var server=http.createServer(function (req,res) {
//	var obj ={name:"zs"};
//	res.end(JSON.stringify(obj));
    //req.url是前段页面URL中的?后面的所有内容,是一个字符串的形式
    //url.parse(req.url)将req.url从一个字符串变为一个对象,该对象如下:
    // {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: '?myUrl=http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html&callback=JSON_CALLBACK',
    //     query: 'myUrl=http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html&callback=JSON_CALLBACK',
    //     pathname: '/',
    //     path: '/?myUrl=http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html&callback=JSON_CALLBACK',
    //     href: '/?myUrl=http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html&callback=JSON_CALLBACK'
    // }
    //上面对象中的query属性中保存的还是原来req.url中的字符串,通过querystring的parse方法又可以将该字符串内部包含的具体内容再次形成一个对象:如下所示:
    // {
    //     myUrl: 'http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html',
    //     callback: 'JSON_CALLBACK'
    // }

    var query=url.parse(req.url).query;//对请求的URL进行解析,拿到?后面的查询参数字符串
    var queryObj=qs.parse(query);//将字符串转化为对象
    console.log("~~~~~~~请求查询参数~~~~~~~~~~~~");
    console.log(query+"==============");
    console.log(queryObj.myUrl);
    console.log(queryObj.callback+"***************");

    var responData='';//由于数据是分批到达的 不是一次到达的  因此用一个变量就进行数据拼接


    //用http可以继续发送请求,去请求远端的数据(参一:远端url路径,参二:回调函数(用来发送和接受信息))
    http.get(queryObj.myUrl,function (request) {
        request.setEncoding('utf-8');

        // 检测是否有数据返回,只要有就调用第二个参数(函数)
        request.on('data',function (result) {
            // console.info();
            //
            // console.log(result);
            // console.info();
            responData+=result;
        });
        //end表示数据全部接收完毕  将数据放入回调函数 返回给前端页面
        request.on('end',function () {
            var str=queryObj.callback+"("+JSON.stringify(responData)+")";
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
            console.log(responData);
            res.end(str);
        })
    }).on('error',function (e) {
        res.end(e.message);
    })

})
console.log("HTTP server is listening at port 8800");
server.listen(8800,function (err) {
    if(!err){
        console.log('服务器在8800端口启动完毕..........')
    }
});



