const http = require("http")
const url = require("url")
const path  = require("path")
const fs = require("fs")


const mimeTypes = {
    "html":"text/html",
    "jpeg":"image/jpeg",
    "jpg":"image/jpg",
    "png":"image/png",
    "js":"text/javascript" 
}