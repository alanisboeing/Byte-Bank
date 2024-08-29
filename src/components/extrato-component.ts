import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";

const sectionRegistroTransacoes = document.querySelector(".extrato .registro-transacoes");

renderizaExtrato();
function renderizaExtrato(): void {
    const gruposTransacoes: GrupoTransacao[] = Conta.getGrupoTransacoes();
    sectionRegistroTransacoes.innerHTML = "";
    let htmlRegistroTransacoes: string = "";

    for (let grupoTransacao of gruposTransacoes){
        let htmlTransacaoItem: string = "";

        for( let transacao of grupoTransacao.transacoes){
            htmlTransacaoItem += `
            <div class="transacao-item">
                <div class="transacao-info">
                    <span class="tipo">${transacao.tipoTransacao}</span>
                    <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                </div>
                <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
            </div>`
        }
        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${grupoTransacao.label}</strong>
                ${htmlTransacaoItem}
            </div>
        `

    }
    if(htmlRegistroTransacoes === ""){
        htmlRegistroTransacoes =
        `<div>Nenhuma transação registrada.
        `
    }
    sectionRegistroTransacoes.innerHTML = htmlRegistroTransacoes;
}

const ExtratoComponent = {
    atualizar(): void{
        renderizaExtrato();
    }
}
export default ExtratoComponent;