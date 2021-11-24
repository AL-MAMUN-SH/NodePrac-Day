// const fs = require('fs');

// const txtInput = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(txtInput);

     // IS ONE SYSTEM //


// const txtOut = 'Their Is Mohammad Almamoon Typing Master: ' + txtInput  + '\nCreated On ' + Date.now()
// fs.writeFileSync('./txt/Output.txt',txtOut);
// console.log('File Written!');

             // IS ANOTHER ONE//

// const txtOut = 'ALMAMOON FILE Writer Master ' + txtInput + '\nCreated on MOhammad AL-MAMUN ' + Date.now()
// fs.writeFileSync('./txt/Output.txt',txtOut);
// console.log('File Written')

    // IS ANOTHER FOR ``SIGN //
  
// const txtOut = `This IS MOHAMMAD ALMMAMOON FILE Write System HERE : ${txtInput}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/EmniTxt.txt',txtOut);
// console.log('File Written');


            // FILE ASYNCHRONOUSSYSTEM In JS

const fs = require('fs');

fs.readFile('./txt/start.txt','utf-8',(err,data1) => {
    // console.log(data1)
    // fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2) => {
    //     console.log(data2);
       
    // })
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2) => {
        console.log(data2)
        fs.readFile('./txt/append.txt','utf-8',(err,data3)=>{
            console.log(data3)
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}\nCreated On${Date.now()}`,'utf-8', err =>{
                console.log('My File Written & Created');
            });
        });
    });
});

            // Asynchronous DOne