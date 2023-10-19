import random
import csv

# Definindo as opções disponíveis
marcas = ["Samsung"]
modelos = ["Galaxy S20", "Galaxy S21", "Galaxy S22", "Galaxy A71", "Galaxy A51"]
condicoes = ["Novo", "Usado - Excelente", "Usado - Bom", "Recondicionado", "Com defeito"]
baterias = ["Perfeita (95% ate 100%)", "Boa (80% ate 94%)", "Ok (60% ate 79%)", "Ruim (40% ate 59%)", "Muito Ruim (abaixo de 39%)"]
memorias = [ 64, 128, 256]

# Variáveis para contagem de 'Sim' e 'Não'
contador_sim = 0
contador_nao = 0

# Criação do arquivo CSV
with open('trainSamsung.csv', 'w', newline='') as csvfile:
    fieldnames = ['Marca', 'Modelo', 'Condicao', 'Memoria', 'Bateria', 'Preco', 'TempoConta', 'Vendas', 'Golpe']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()

    for _ in range(200000):
        marca = random.choice(marcas)
        modelo = random.choice(modelos)
        preco = random.uniform(300, 3300)
        condicao = random.choice(condicoes)
        memoria = random.choice(memorias)
        tempo = random.randint(1, 365)
        venda = random.randint(1, 20)
        bateria = random.choice(baterias)

        golpe = "Nao"

        if modelo == "Galaxy S20":
            if memoria < 128 or memoria > 128 or preco < 600 or preco > 2000 or tempo < 10:
                golpe = "Sim"
        elif modelo == "Galaxy S21":
            if memoria < 128 or memoria > 128 or preco < 800 or preco > 2500 or tempo < 10:
                golpe = "Sim"
        elif modelo == "Galaxy S22":
            if memoria < 128 or memoria > 128 or preco < 1200 or preco > 3000 or tempo < 10:
                golpe = "Sim"
        elif modelo == "Galaxy A71":
            if memoria < 128 or memoria > 128 or preco < 800 or preco > 2000 or tempo < 10:
                golpe = "Sim"
        elif modelo == "Galaxy A51":
            if memoria < 128 or memoria > 128 or preco < 600 or preco > 1800 or tempo < 10:
                golpe = "Sim"

        # Atualizar contadores
        if golpe == "Sim":
            contador_sim += 1
        else:
            contador_nao += 1

        writer.writerow({
            'Marca': marca,
            'Modelo': modelo,
            'Condicao': condicao,
            'Memoria': memoria,
            'Bateria': bateria,
            'Preco': round(preco, 2),
            'TempoConta': tempo,
            'Vendas': venda,
            'Golpe': golpe
        })
# Imprimir contagens
print(f"Quantidade de 'Sim' para Golpe: {contador_sim}")
print(f"Quantidade de 'Nao' para Golpe: {contador_nao}")