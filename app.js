const firstName = prompt("Insira o primeiro nome do recruta: ");
const lastName = prompt("Insira o sobrenome do recruta: ");
const study = prompt("Insira o campo de estudo: ");
const birth = prompt("Insira o ano de nascimento: ");

let age = 2023 - birth;

alert("Nome completo: " + firstName + " " + lastName + 
"\nCampo de estudo: " + study + 
"\nIdade: " + age);