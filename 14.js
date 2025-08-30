
function promesa(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Promesa resuelta");
        },2000)
    });
}

promesa().then((mensaje)=>{
    console.log(mensaje);
})