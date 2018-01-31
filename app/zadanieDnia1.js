const crypto = require('crypto');
const fs = require('fs');
const pathToFile = process.argv[2];

fs.readFile(pathToFile, 'utf-8', (err, data) => {
   if(err !== null){
       console.log(err);
       return false;
   }
   let hash = crypto.createHmac('sha256', data).digest('hex');
   console.log(hash);
});
