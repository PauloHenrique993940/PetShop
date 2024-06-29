// Aletarando o title

document.title = "PETLIFE";

const opcao = prompt("Digite SIM para modificar a cor do site  caso deseja:");

if (opcao === "SIM") {

    const cor = prompt("Escolha uma cor: \n  BLUE \n BLACK \n PINK ");
    
    if (cor === "BLUE"){

        document.body.style = "background: blue";

    }else if ( cor === "BLACK"){
        document.body.style = "background: #000000";
        
    }else if (cor === "PINK"){

        document.body.style = "background: pink";
    }
    
  
}

