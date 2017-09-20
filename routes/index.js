const express = require('express');
const router = express.Router();
const URI = require('urijs');
const functions = require('../lib/functions');
const config = require('config');

router.get('/resolve', function(req, res, next) {
    let canvas = req.query.id;
    let xywh = req.query.xywh;
    let url = new URI(canvas);
    let path = url.pathname();
    let split = path.split("/");
    let resource = split[1];
    let unary = String(+resource).substring(0, 2).padStart(4, "0");
    let filename = String(split[3]);
    let padfile = filename.padStart(8, "0");
    let imageServiceBaseUri = config.get('iiif.server');
    let resourceURI = imageServiceBaseUri + unary + "/" + resource + "/" + padfile + ".jpx";
    if (xywh) {
        resourceURI = resourceURI + "/" + xywh + "/full/0/default.jpg";
    }
    res.send(resourceURI);
    // functions.getJsonLdDocument(resourceURI, req, res, function(statusCode, result, response) {
   //     response.send(result);
   // });
});

module.exports = router;
