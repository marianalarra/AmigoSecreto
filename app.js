//Creo un array para almacenar los nombres

let amigos=[];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if (amigo.trim()===""){
        alert("Por favor, inserte un nombre.")

    }else{
        amigos.push(amigo);
        //Borro el campo donde se agregan los amigos
        document.getElementById("amigo").value = ""; 
        actualizaListaAmigos(); 
    }
    
    
   
}

function actualizaListaAmigos(){
    //Obtener elemento de la lista
    let lista = document.getElementById("listaAmigos");
    //Borro los elementos que hayan quedado de la lista anterior
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const element = amigos[i];
        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        listaAmigos.appendChild(listaHTML);
      }
    }

    function sortearAmigo() {
        let cantidadAmigos = amigos.length;
        if (cantidadAmigos === 0) {
          alert("Por favor, inserte un nombre antes de sortear");
        } else {
          let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
          let resultadoHTML = document.querySelector("#resultado");
          resultadoHTML.innerHTML = amigos[indiceAmigo];
        }
      }
    
