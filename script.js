const alunos = [
    {nome: "Ana", nota: 8},
    {nome: "Carlos", nota: 5},
    {nome: "Mariana", nota: 7},
    {nome: "João", nota: 4},
    {nome: "Beatriz", nota: 9},
    {nome: "Mathias", nota: 10},
    {nome: "Luana", nota: 6},
    {nome: "Pedro", nota: 1}
];

const alunosAprovados = (listaAlunos) => {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
};

console.log("Alunos aprovados:");
console.log(alunosAprovados(alunos));