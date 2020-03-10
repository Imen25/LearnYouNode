var fs = require("fs");
var path = require("path");

module.exports = function(dir, filterStr, callback) {
  fs.readdir(dir, function(err, list) {
    console.log("list", list);
    if (err) return err;

    secondList = list.filter(function(file) {
      return path.extname(file) === "." + filterStr;
    });

    secondList.map(el => console.log(el));
  });
};
