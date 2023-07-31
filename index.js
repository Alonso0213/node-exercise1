const fs = require('fs');
fs.writeFile('./message.txt','Joel',(err,data)=>{
    if (err)
    console.log('sorry');
   console.log(data);
  })
fs.readFile('./message.txt', 'utf-8', (err, data) => {
    if (err)
    console.log('sorry');
   console.log(data);
  });
  fs.appendFile('./message.txt', 'is awesome',(err,data)=>{
    if(err)
    console.log(data);
})
