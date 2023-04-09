var request = require('request');

async function proxyRequest(req, res){
    // console.log('ch01');
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header(
        "Access-Control-Allow-Headers", 
        req.header("access-control-request-headers")
    );

    if(req.method == "OPTIONS"){
        res.send();
    } else {
        if(req.query.url){
            var url = req.query.url;
            request.get(url).pipe(res);
        } else {
            res.status(500).send({'success': false, value : "No url provided in the body"});
        }
    }

}

module.exports = {
    proxyRequest
}