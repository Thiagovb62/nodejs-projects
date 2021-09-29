const fs = require('fs');
const files = fs.readdirSync(__dirname) //global acesso ao diretorio atual ou __filename(arquivo atual)

files.forEach (f => console.log(f))
