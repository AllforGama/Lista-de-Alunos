let listaDeAlunos = ["Carlos", "João", "Rafael", "Beto"];

let contador = 0;

for (contador = 0; contador < listaDeAlunos.length;) {
    
    for (let nome of listaDeAlunos){

    if (contador == 0) {
        
        console.log(`Seu nome é ${nome} e seu numero atual é zero`)
    
    }else if (contador % 2 == 0) {
        
        console.log(`Seu nome é ${nome} seu numero é ${contador} e ele é par`)
    
    }else{
        
        console.log(`Seu nome é ${nome} seu numero é ${contador} e ele é impar`)
    }
    contador ++
  }
}