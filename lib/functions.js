
module.exports.getJsonLdDocument = function(resourceURI, req, res, callback) {
    const jsonData = {};
    jsonData["@context"] = "http://iiif.io/api/image/2/context.json";
    jsonData["@id"] = resourceURI;
    jsonData["profile"] = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1";
    const out = JSON.stringify(jsonData, null, '\t');
    if (typeof callback === "function") {
        res.set('Content-Type', "application/ld+json");
        callback(res.statusCode, out, res);
    }
};
