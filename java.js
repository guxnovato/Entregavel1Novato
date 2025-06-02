// Cálculo dos custos totais de despesa 
function calcularCustosTotais(despesas) {
    return despesas.impostos
         + despesas.contador
         + despesas.softwares
         + despesas.internet
         + despesas.backups
         + despesas.cursos
         + despesas.equipamentos;
}
  
// Horas úteis faturáveis por mês 
function obterHorasUteis(horasMes) {
  return horasMes; 
}
  
// Margem de lucro desejada (percentual)
function calcularFatorLucro(percentual) {
  return 1 + (percentual / 100);
}
  
// Senioridade do Designer
function getSenioridade(level) {
  if (level === 'iniciante')   return 0.8;
  else if (level === 'júnior') return 1.0;
  else if (level === 'pleno')  return 1.3;
  else if (level === 'sênior') return 1.5;
  else                          return 1.0; 
}
  
// Complexidade do projeto
function getComplexidade(grau) {
  if (grau === 'baixa')  return 0.9;
  else if (grau === 'média') return 1.0;
  else if (grau === 'grande') return 1.2;
  else                         return 1.0;
}
  
// Tipo de cliente
function getTipoCliente(tipo) {
  if (tipo === 'amigos')        return 0.8;
  else if (tipo === 'startups') return 1.0;
  else if (tipo === 'médias')   return 1.2;
  else if (tipo === 'grandes')  return 1.4;
  else                           return 1.0;
}
  
// Região do cliente
function getRegiao(region) {
  if (region === 'brasil') return 1.0;
  else if (region === 'eua')    return 1.2;
  else if (region === 'europa') return 1.1;
  else                           return 1.0;
}
  
// Cálculo do valor-hora
function calcularValorHora(
  custosTotais, horasUteis, 
  percentualLucro,
  senioridade, complexidade, tipoCliente, regiao
) {
  const piso = custosTotais / horasUteis;
  const fatorLucro = calcularFatorLucro(percentualLucro);
  
  return piso
    * fatorLucro
    * getSenioridade(senioridade)
    * getComplexidade(complexidade)
    * getTipoCliente(tipoCliente)
    * getRegiao(regiao);
}
  
// Horas que serão gastas no projeto
function obterHorasProjeto(horas) {
  return horas;
}
  
// Valor total do projeto
function calcularValorProjeto(valorHora, horasProjeto) {
  return valorHora * horasProjeto;
}

// CALCULADORA

// Definir despesas mensais
const despesas = {
    impostos: 100,
    contador: 200,
    softwares: 60,
    internet: 200,
    backups: 30,
    cursos: 300,
    equipamentos: 166,
  };
  
// Escolher os parâmetros
const horasUteis     = obterHorasUteis(60);
const margem         = 50;              
const senioridade    = 'pleno';         
const complexidade   = 'grande';
const tipoCliente    = 'grandes';
const regiao         = 'brasil';
  
// Calcular o valor da hora
const custoHora = calcularValorHora(
  calcularCustosTotais(despesas),
    horasUteis,
    margem,
    senioridade, complexidade, tipoCliente, regiao
);
  
// Informar horas estimadas para o projeto:
const horasProjeto = obterHorasProjeto(20);
  
// Calcula o valor total:
const valorTotal = calcularValorProjeto(custoHora, horasProjeto);

console.log(`Valor hora: R$ ${custoHora.toFixed(2)}`);
console.log(`Valor total do projeto: R$ ${valorTotal.toFixed(2)}`);