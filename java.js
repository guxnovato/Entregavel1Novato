// Função para somar todos os custos mensais
function calcular_custos_totais(despesas) {
  return despesas.impostos
       + despesas.contador
       + despesas.softwares
       + despesas.internet
       + despesas.backups
       + despesas.cursos
       + despesas.equipamentos;
}

// Função para transformar percentual de lucro em multiplicador
function calcular_margem_lucro(percentual) {
  return 1 + (percentual / 100);
}

// Multiplicador de senioridade do designer
function calcular_senioridade(nivel) {
  if (nivel === 'iniciante') return 0.8;
  if (nivel === 'júnior')    return 1.0;
  if (nivel === 'pleno')     return 1.3;
  if (nivel === 'sênior')    return 1.5;
  return 1.0;
}

// Multiplicador de complexidade do projeto
function calcular_complexidade(nivel) {
  if (nivel === 'baixa')  return 0.9;
  if (nivel === 'média')  return 1.0;
  if (nivel === 'grande') return 1.2;
  return 1.0;
}

// Multiplicador de perfil do cliente
function calcular_perfil_cliente(perfil) {
  if (perfil === 'amigos')          return 0.8;
  if (perfil === 'startups')        return 1.0;
  if (perfil === 'empresas médias') return 1.2;
  if (perfil === 'empresas grandes')return 1.4;
  return 1.0;
}

// Multiplicador de região do cliente
function calcular_regiao_cliente(regiao) {
  if (regiao === 'brasil') return 1.0;
  if (regiao === 'eua')    return 1.2;
  if (regiao === 'europa') return 1.1;
  return 1.0;
}

// Função para calcular o valor da hora
function calcular_valor_hora(custos, horas_uteis, margem, senioridade, complexidade, perfil, regiao) {
  const base = custos / horas_uteis;

  return base
    * calcular_margem_lucro(margem)
    * calcular_senioridade(senioridade)
    * calcular_complexidade(complexidade)
    * calcular_perfil_cliente(perfil)
    * calcular_regiao_cliente(regiao);
}

// CALCULADORA

// Custos mensais
const despesas = {
  impostos: 100,
  contador: 200,
  softwares: 60,
  internet: 200,
  backups: 30,
  cursos: 300,
  equipamentos: 166
};

// Parâmetros
const total_horas_uteis = 60;              // horas disponíveis no mês
const percentual_margem = 50;              // lucro desejado
const nivel_senioridade = 'pleno';         // senioridade do designer
const grau_complexidade = 'grande';        // complexidade do projeto
const perfil_cliente = 'empresas grandes'; // perfil do cliente
const regiao_cliente = 'brasil';           // região do cliente
const horas_estimadas = 20;                // horas estimadas para o projeto

// Cálculo do valor por hora
const valor_hora = calcular_valor_hora(
  calcular_custos_totais(despesas),
  total_horas_uteis,
  percentual_margem,
  nivel_senioridade,
  grau_complexidade,
  perfil_cliente,
  regiao_cliente
);

// Cálculo do valor total do projeto
const valor_total_projeto = valor_hora * horas_estimadas;

// RESULTADO

console.log(`Valor por hora: R$ ${valor_hora.toFixed(2)}`);
console.log(`Horas estimadas: ${horas_estimadas}h`);
console.log(`Valor total do projeto: R$ ${valor_total_projeto.toFixed(2)}`);
