function promesa(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Promesa resuelta");
        },2000)
    });
}

async function ejecutarPromesa(){
    console.log("Esperando...");
    const mensaje = await promesa();
    console.log(mensaje);
}

ejecutarPromesa();