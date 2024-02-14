const { readFileSync, writeFileSync, read } = require('fs')

const first = readFileSync('./1-names.js','utf8')
const second = readFileSync('./2-sayhi.js','utf8')



console.log(first);
console.log(second);

writeFileSync(
    './newexp.txt',
    `hi there : \n ${first} \n\n\n\n ${second} `
    
)