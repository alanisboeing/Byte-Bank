import { FormatoData } from "../types/FormatoData.js";
import { formatarData } from "../utils/formatters.js";
import Conta from "../types/Conta.js";

const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLAnchorElement;

if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
