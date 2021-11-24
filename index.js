const fs = require('fs');

const txtInput = fs.readFileSync('./txt/input.txt','utf-8');
console.log(txtInput);

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

