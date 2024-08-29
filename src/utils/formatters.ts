import { FormatoData } from "../types/FormatoData.js";

export function formatarMoeda(saldo: number):string {
    return saldo.toLocaleString("pt-br", {currency: "BRL", style: "currency"});
};

export function formatarData(dataAcesso: Date, formato: FormatoData):string {
    if(formato === FormatoData.DIA_SEMANA_DIA_MES_ANO){
        return dataAcesso.toLocaleDateString( "pt-br", {
            weekday : "long",
            day : "2-digit",
            month : "2-digit",
            year : "numeric"
        })
    }else if(formato === FormatoData.DIA_MES){
        return dataAcesso.toLocaleDateString("pt-br", {
            day : "2-digit",
            month : "2-digit"
        })
    }
    return dataAcesso.toLocaleString("pt-br")
}

// export const formatter : any = {
//     formatarMoeda,
//     formatarData
// }