async function hack(){
    let r = Math.ceil(Math.random()*8000);

    await new Promise((resolve)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor="green";
        document.body.innerText+="Initiallizing hacking...\n";
        document.body.innerText+="Reading your Files...\n";
        document.body.innerText+="Password and personal files detected...\n";
        document.body.innerText+="sending all password and files to server...\n";
        document.body.innerText+="cleaning up...\n";
        resolve();
    },r );
    })
}

async function main(){
    await hack();
}

main();