import { client } from "./labels";

const valor = client.value

export function Moeda(valor) {

  valor.toLocaleString('pt-br', {minimumFractionDigits: 2});
}


