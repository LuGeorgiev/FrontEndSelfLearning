 let fs = require('fs');

 // fs.readFile('index.js', 'utf8', (err, data) => {
 //     if (err) {
 //         console.log(err);
 //     }
 //     console.log(data);
 // });

 let http = require('http');
 let formidable = require('formidable');
 http.createServer((req, res) => {
         if (req.method === "GET") {
             fs.readFile('./index.html', 'utf8', (err, data) => {
                 if (err) {
                     console.log(err);
                     return;
                 }

                 res.writeHead(200, {
                     'Content-Type': 'text/html'
                 });
                 res.write(data);
                 res.end();
             });
         } else {
             let form = new formidable.IncomingForm();
             form.parse(req, (err, fields, files) => {

                 if (err) {
                     console.log(err);
                     return;
                 }
                 console.log(fields);

                 let file = files.profilePicture;
                 let tempPath = file.path;
                 let fileName = file.name;
                 fs.rename(tempPath, './file/' + fileName, err => {
                     if (err) {
                         console.log(err);
                         return;
                     }
                     res.write('Thank you');
                     res.end();
                 });

             });
         }
     })
     .listen(6969);