import random
import csv

# Definindo as opções disponíveis
marcas = ["Apple"]
modelos_apple = ["iPhone 6","iPhone 6 Plus","iPhone 6S","iPhone 6S Plus","iPhone 7","iPhone 7 Plus","iPhone 8","iPhone 8 Plus","iPhone SE 2020"]
condicoes = ["Novo", "Usado - Excelente", "Usado - Bom", "Recondicionado", "Com defeito"]
baterias = ["Perfeita (95% ate 100%)", "Boa (80% ate 94%)", "Ok (60% ate 79%)", "Ruim (40% ate 59%)", "Muito Ruim (abaixo de 39%)"]
memorias = [8, 16, 32, 64, 128, 256]

# Variáveis para contagem de 'Sim' e 'Não'
contador_sim = 0
contador_nao = 0

# Criação do arquivo CSV
with open('trainApple1.csv', 'w', newline='') as csvfile:
    fieldnames = ['Marca', 'Modelo', 'Condicao', 'Memoria', 'Bateria', 'Preco', 'TempoConta', 'Vendas', 'Golpe']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()

    for _ in range(100):
        marca = random.choice(marcas)
        modelo = random.choice(modelos_apple)
        preco = random.uniform(200, 3000)
        condicao = random.choice(condicoes)
        memoria = random.choice(memorias)
        tempo = random.randint(1, 365)
        venda = random.randint(1, 20)
        bateria = random.choice(baterias)

        golpe = "Nao"

        if modelo == "iPhone 6":
            if memoria < 16 or memoria > 128 or preco < 300 or preco > 1000 or tempo <10:
                golpe = "Sim"

        elif modelo == "iPhone 6 Plus":
            if memoria < 16 or memoria == 32 or memoria > 128 or preco < 300 or preco > 1000 or tempo <10:
                golpe = "Sim"


        elif modelo == "iPhone 6s":
            if memoria < 16 or memoria > 128 or preco < 300 or preco > 1000 or tempo <10:
                golpe = "Sim"

        elif modelo == "iPhone 6s Plus":
            if memoria < 16 or memoria > 128 or preco < 300 or preco > 1000 or tempo <10:
                golpe = "Sim"

        elif modelo == "iPhone 7":
            if memoria < 32 or memoria == 64 or memoria > 256 or preco < 400 or preco > 1000 or tempo <10:
                golpe = "Sim"

        elif modelo == "iPhone 7 Plus":
            if memoria < 32 or memoria == 64 or memoria > 256 or preco < 450 or preco > 1000 or tempo <10:
                golpe = "Sim"

        elif modelo == "iPhone 8":
            if memoria < 64 or memoria > 256 or preco < 500 or preco > 1200 or tempo <10:
                golpe = "Sim"

        elif modelo == "iPhone 8 Plus":
            if memoria < 64 or memoria > 256 or preco < 550 or preco > 1250 or tempo <10:
                golpe = "Sim"

        elif modelo == "iPhone SE 2020":
            if memoria < 64 or memoria > 256 or preco < 750 or preco > 1400 or tempo <10:
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