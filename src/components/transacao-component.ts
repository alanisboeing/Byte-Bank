import Conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoFormulario.addEventListener("submit", (evento)=>{
   try{ 
        evento.preventDefault();
        if(!elementoFormulario.checkValidity()){
            alert("Por favor, preencha todos os campos da transação.");
            return;
        }

        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
        const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
        const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

        let valor: number = inputValor.valueAsNumber;
        let data: Date = new Date(inputData.value + "T00:00:00"); // Por padrão o js considera o dia anterior caso não seja determinado um horário após 00:00:00;
        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;

        const novaTransacao : Transacao = {
            tipoTransacao : tipoTransacao,
            valor : valor,
            data : data
        }

        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset();
    }catch(erro){
        alert(`Erro ao realizar transação: ${erro.message}`);
    }

})
