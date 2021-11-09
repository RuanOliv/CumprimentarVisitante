var data = new Date();
var hora = data.getHours();

const Message = () =>{
    var input = document.querySelector("#name");
    var nome = input.value;
    
    if(hora >= 6 && hora < 12){
        alert(`Bom dia ${nome}`);
    }else if(hora >= 12 && hora < 18){
        alert(`Boa tarde ${nome}`);
    }else{
        alert(`Boa noite ${nome}`);
    }
}
