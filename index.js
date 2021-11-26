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

// const fs = require('fs');

// fs.readFile('./txt/start.txt','utf-8',(err,data1) => {
//     if (err) return console.log('ERROR !');
//     // console.log(data1)
//     // fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2) => {
//     //     console.log(data2);
       
//     // })
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2) => {
//         console.log(data2)
//         fs.readFile('./txt/append.txt','utf-8',(err,data3)=>{
//             console.log(data3)
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}\nCreated On${Date.now()}`,'utf-8', err =>{
//                 console.log('My File Written & Created');
//             });
//         });
//     });
// });
// console.log('Will You Read This File ')

            // Asynchronous DOne

            // /SERVER CREATE // ON HAND MODE 
// const http = require('http');

// const server = http.createServer((req,res) => {
//     // console.log(req);
//     res.end('HELLO WELCOME SERVER');
// });
// server.listen(8000,'127.168.0.1',()=>{
//     console.log('welcome Our Server')
// });

// again Server creatred

// const http = require('http');
// const server = http.createServer((req, res) =>{
//     res.end('Welcome HEY')
// })
// server.listen(5000,'127.0.0.1',()=>{
//     console.log('welcome Our Server')
// })

///////////////////////////////////////////////////////////////
                    // ANOTHER EAY DONE//
//////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
                    //ROUTING STARTED//
//////////////////////////////////////////////////////////////

// const http = require('http')
// const url = require('url')

// const server = http.createServer((req,res) => {

//     const pathName = req.url;

//     if(pathName === '/' || pathName === '/overview'){
//         res.end('This Is OVERVIEW PAGE')
//     }
//     else if(pathName === '/product'){
//         res.end('This PAGE is PRODUCT')
//     }
//     else{
//         res.writeHead(404,{
//             'Content-type':'text/html',
//             'my-own-header':'Hellow World'
//         })
//         res.end('<h1> 404 PAGE NOT FOUND</h1>')
//     }
// })
// server.listen(3000,'127.0.0.1',()=>{
//     console.log('EWlCOME')
// })
///////////////////////////////////////////////////////////////
                    //ROUTING END//
//////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
                    //AGAIN ROUTING//
//////////////////////////////////////////////////////////////
const http = require('http')
const url = require('url')

const server = http.createServer((req,res) =>{
    const pathName = req.url;
    if(pathName === '/' || pathName === '/admin'){
        res.end('This Is ADMIN PAGE')
    }
    else if(pathName === '/overview'){
        res.end('OVERVIEW page Here')
    }else if(pathName === '/category'){
        res.end('CATEGORY page Here')
    }else{
        res.writeHead(404,{
            'Content-type': 'text/html',
            'my-Own-Content': 'Hellow World'
        })
        res.end('<h1> 404 PAGE NOT FOUND</h1>')
    }
   
})
server.listen(8000,'127.10.0.1',()=>{
    
    console.log('hey')
})

// const http = require('http');
// const server = http.createServer((req, res) =>{
//     res.end('Welcome HEY')
// })
// server.listen(5000,'127.0.0.1',()=>{
//     console.log('welcome Our Server')