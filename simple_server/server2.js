const http = require("http")
const url = require("url")
const path = require("path")
const fs = require("fs")


const mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpg",
    "png": "image/png",
    "js": "text/javascript"
}

http.createServer((req, res) => {
    var uri = url.parse(req, url).pathname;
    var fileName = path.join(process.cwd(),unescape(uri))
    console.log('Loading... '+uri);
    var stats;

    try {
        stats = fs.lstatSync(fileName)
    } catch (e) {
        res.writeHead(404,{'Content-type':'text/plain'})
    }
})