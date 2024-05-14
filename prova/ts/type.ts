export interface Aluno { 
    // Cada aluno é desse tipo
    id:number;
    nome: string;

}

interface sala{
    aluno:Aluno;
}
export interface Fileira { // Cada fileira tem um nome/número na sala e tem os alunos que estão nela
    // Nome/Número da Fileira
    // Alunos na fileira
}

const sala = [...new Array];

function aluno_fileira(aluno:Aluno){

    if(sala.length <5){
        for (let j = 0; j< sala.length; j++) {
         const sala(j);
           
        }
    }
    else{
sala.push(aluno);
}
}

const fora = [... new Array];

function remove_aluno(){
let i:number;
console.log("antes"+sala);



    for(i = 0 ; i<sala.length; i++){
fora[i] = sala[i] 
console.log("depos"+fora);
    }

    console.log("depos"+fora);
}


aluno_fileira({id:1,nome:"nome"});
console.log(sala)

