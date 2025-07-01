// CALCULADORA DE VALOR DE FREELA DE DESIGN

// Valor total do projeto = Valor da hora * Horas estimadas
// Valor da hora = Piso * Margem de lucro  * Senioridade * Complexidade * Perfil do Cliente * Região
// Piso = Custos / Horas úteis por mês

// VALOR DA HORA

// Custos Mensais (Somatório)
function calcular_custos_totais(despesas) {
  return despesas.impostos
       + despesas.contador
       + despesas.softwares
       + despesas.homeoffice
       + despesas.backups
       + despesas.cursos
       + despesas.equipamentos;
}

// Margem de Lucro (Cálculo)
function calcular_margem_lucro(margem) {
  return 1 + (margem / 100);
}

// Senioridade do designer (Tradução)
function calcular_senioridade(senioridade) {
  if (senioridade === 'iniciante') return 0.8;
  if (senioridade === 'júnior')    return 1.0;
  if (senioridade === 'pleno')     return 1.3;
  if (senioridade === 'sênior')    return 1.5;
  return 1.0;
}

// Complexidade do projeto (Tradução)
function calcular_complexidade(complexidade) {
  if (complexidade === 'baixa')  return 0.9;
  if (complexidade === 'média')  return 1.0;
  if (complexidade === 'grande') return 1.2;
  return 1.0;
}

// Perfil do cliente (Tradução)
function calcular_perfil_cliente(perfil) {
  if (perfil === 'amigos')           return 0.8;
  if (perfil === 'startups')         return 1.0;
  if (perfil === 'empresas médias')  return 1.2;
  if (perfil === 'empresas grandes') return 1.4;
  return 1.0;
}

// Região do cliente (Tradução)
function calcular_regiao_cliente(regiao) {
  if (regiao === 'brasil') return 1.0;
  if (regiao === 'eua')    return 1.3;
  if (regiao === 'europa') return 1.2;
  return 1.0;
}

// Valor da hora (Cálculo)
function calcular_valor_hora(custos, horas_uteis, margem, senioridade, complexidade, perfil, regiao) {
  const piso = custos / horas_uteis;
  return piso
    * calcular_margem_lucro(margem)
    * calcular_senioridade(senioridade)
    * calcular_complexidade(complexidade)
    * calcular_perfil_cliente(perfil)
    * calcular_regiao_cliente(regiao);
}

// NA PRÁTICA

// Custos mensais
const despesas = {
  impostos: 200,
  contador: 100,
  softwares: 100,
  homeoffice: 200,
  backups: 30,
  cursos: 300,
  equipamentos: 166
};

// Parâmetros
const horas_uteis     = 60;                   // Horas disponíveis no mês para trabalhar no freela, para calcular o piso
const margem          = 50;
const senioridade     = 'pleno';
const complexidade    = 'grande';
const perfil          = 'empresas grandes';
const regiao          = 'brasil';
const horas_estimadas = 20;

// Valor por hora (Cálculo)
const valor_hora = calcular_valor_hora(
  calcular_custos_totais(despesas),
  horas_uteis,
  margem,
  senioridade,
  complexidade,
  perfil,
  regiao
);

// VALOR TOTAL

// Cálculo do valor total do projeto
const valor_total_projeto = valor_hora * horas_estimadas;

// RESULTADO
console.log(`Valor por hora: R$ ${valor_hora.toFixed(2)}`);
console.log(`Horas estimadas: ${horas_estimadas}h`);
console.log(`Valor total do projeto: R$ ${valor_total_projeto.toFixed(2)}`);


// DOM E EVENTOS (ENTREGÁVEL 2)

// Carregamento Html
document.addEventListener('DOMContentLoaded', function () {

    // Valor final
    const valorTotal = valorHora * horasEstimadas;

    // Resultados na tela
    const campoValorHora = document.getElementById('valor-hora');
    const campoHoras = document.getElementById('horas-usadas');
    const campoTotal = document.getElementById('valor-total');

    campoValorHora.textContent = `R$ ${valorHora.toFixed(2)}`;
    campoHoras.textContent = `${horasEstimadas}h`;
    campoTotal.textContent = `R$ ${valorTotal.toFixed(2)}`;
    
  });