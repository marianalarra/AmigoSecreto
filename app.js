//Creo un array para almacenar los nombres

let amigos=[];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if (amigo===""){
        alert("Por favor, inserte un nombre.")

    }else{
        amigos.push(amigo);
    }

    console.log(amigos)
    document.getElementById("amigo").value='';

}
