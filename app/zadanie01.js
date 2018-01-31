const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

const crypto = require('crypto');


const requestedPasswords = ['??TegoHasła','CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83',];
const algorithms = ['sha256', 'sha512', 'md5', 'rmd160'];
requestedPasswords.forEach(password =>{
   algorithms.forEach(algorithm => {
       let result = crypto.createHmac(algorithm, password).digest('hex');
       if(result === MY_PWD_HASH){
           console.log(`${password}(${algorithm})`)
       }
   });

});