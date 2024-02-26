
import fs from "fs"
import qr from "qr-image"
import  inquirer from "inquirer"

 function userInput(){
    inquirer
  .prompt([
    {
      name: 'URL',
      message: 'please type a url:'

    },
  ])
  .then(function(x){ 
    const input = x.URL
    fs.writeFile('URL.txt',input,(err)=>{
        if(err) throw err
        else null;
    })
    qrImage(input)
    }
  );

}



function qrImage(url){
    
 
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(`qr_img.png`));

}
userInput()