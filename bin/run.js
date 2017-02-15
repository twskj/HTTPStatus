#!/usr/bin/env node

var s = require ('../index.js');

if(process.argv[2]){
    console.log(s[process.argv[2]]);
}
else{
    console.log(s);
}


