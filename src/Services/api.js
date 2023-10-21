import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000' //Development URL
    // baseURL: 'https://8543-186-194-197-54.ngrok-free.app' //Production URL
})

export const getConfirmation = async (content) => {
    const url = '/'
    const { Marca, Modelo, Condicao, Memoria, Bateria, Preco } = content
    
    const data = {
        Marca: Marca,
        Modelo: Modelo,
        Condicao: Condicao,
        Memoria: parseInt(Memoria),
        Bateria: Bateria,
        Preco: parseFloat(Preco),
        TempoConta: 100,
        Vendas: 2,
        Golpe: "Nao"
    }

    return api.post(url, data)
}