import random
import csv

# Definindo as opções disponíveis
marcas = ["Apple"]
modelos_apple = ["iPhone 6","iPhone 6 Plus","iPhone 6s","iPhone 6s Plus","iPhone 7","iPhone 7 Plus","iPhone 8","iPhone 8 Plus","iPhone SE 2020","iPhone X","iPhone XR","iPhone XS","iPhone XS Max","iPhone 11","iPhone 11 Pro","iPhone 11 Pro Max","iPhone 12","iPhone 12 Mini","iPhone 12 Pro","iPhone 12 Pro Max","iPhone 13","iPhone 13 Mini","iPhone 13 Pro","iPhone 13 Pro Max","iPhone 14","iPhone 14 Plus","iPhone 14 Pro","iPhone 14 Pro Max","iPhone 15","iPhone 15 Plus","iPhone 15 Pro","iPhone 15 Pro Max"]
condicoes = ["Novo", "Usado - Excelente", "Usado - Bom", "Recondicionado", "Com defeito"]
baterias = ["Perfeita (95% ate 100%)", "Boa (80% ate 94%)", "Ok (60% ate 79%)", "Ruim (40% ate 59%)", "Muito Ruim (abaixo de 39%)"]
memorias = [8, 16, 32, 64, 128, 256, 512, 1024]

# Variáveis para contagem de 'Sim' e 'Não'
contador_sim = 0
contador_nao = 0

# Criação do arquivo CSV
with open('trainApple.csv', 'w', newline='') as csvfile:
    fieldnames = ['Marca', 'Modelo', 'Condicao', 'Memoria', 'Bateria', 'Preco', 'TempoConta', 'Vendas', 'Golpe']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()

    for _ in range(1000000):
        marca = random.choice(marcas)
        modelo = random.choice(modelos_apple)
        preco = random.uniform(200, 10000)
        condicao = random.choice(condicoes)
        memoria = random.choice(memorias)
        tempo = random.randint(1, 365)
        venda = random.randint(1, 20)
        bateria = random.choice(baterias)

        golpe = "Nao"

        if modelo == "iPhone 6":
            if memoria < 16 or memoria > 128 or preco < 300 or preco > 1010 or tempo <10:
                golpe = "Sim"

        elif modelo == "iPhone 6 Plus":
            if memoria < 16 or memoria == 32 or memoria > 128 or preco < 300 or preco > 1000 or tempo <10:
                golpe = "Sim"


        elif modelo == "iPhone 6s":
            if memoria < 16 or memoria > 128 or preco < 300 or preco > 999 or tempo <10:
                golpe = "Sim"
                print('entrou no kauan')

        elif modelo == "iPhone 6s Plus":
            if memoria < 16 or memoria > 128 or preco < 300 or preco > 1100 or tempo <10:
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

        elif modelo == "iPhone X":
            if memoria < 64 or memoria == 128 or memoria > 256 or preco < 800 or preco > 1800 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone XR":
            if memoria < 64 or memoria > 256 or preco < 1000 or preco > 2000 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone XS":
            if memoria < 64 or memoria == 128 or memoria > 512 or preco < 1000 or preco > 2100 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone XS Max":
            if memoria < 64 or memoria == 128 or memoria > 512 or preco < 1000 or preco > 2300 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 11":
            if memoria < 64 or memoria > 256 or preco < 1800 or preco > 2300 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 11 Pro":
            if memoria < 64 or memoria == 128 or memoria > 512 or preco < 1900 or preco > 2400 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 11 Pro Max":
            if memoria < 64 or memoria == 128 or memoria > 512 or preco < 2000 or preco > 2600 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 12":
            if memoria < 64 or memoria > 256 or preco < 2400 or preco > 2800 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 12 Mini":
            if memoria < 64 or memoria > 256 or preco < 1999 or preco > 2600 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 12 Pro":
            if memoria < 128 or memoria > 512 or preco < 3000 or preco > 3500 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 12 Pro Max":
            if memoria < 128 or memoria > 512 or preco < 3250 or preco > 3750 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 13":
            if memoria < 128 or memoria > 512 or preco < 3750 or preco > 4250 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 13 Mini":
            if memoria < 128 or memoria > 512 or preco < 2900 or preco > 3400 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 13 Pro":
            if memoria < 128 or memoria > 1024 or preco < 4000 or preco > 4500 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 13 Pro Max":
            if memoria < 128 or memoria > 1024 or preco < 4000 or preco > 5150 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 14":
            if memoria < 128 or memoria > 512 or preco < 4000 or preco > 4600 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 14 Plus":
            if memoria < 128 or memoria > 512 or preco < 4400 or preco > 5200 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 14 Pro":
            if memoria < 128 or memoria > 1024 or preco < 5000 or preco > 5750 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 14 Pro Max":
            if memoria < 128 or memoria > 1024 or preco < 5250 or preco > 6250 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 15":
            if memoria < 128 or memoria > 512 or preco < 6350 or preco > 7250 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 15 Plus":
            if memoria < 128 or memoria > 512 or preco < 6600 or preco > 7500 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 15 Pro":
            if memoria < 128 or memoria > 1024 or preco < 7500 or preco > 8500 or tempo < 10:
                golpe = "Sim"

        elif modelo == "iPhone 15 Pro Max":
            if memoria < 256 or memoria > 1024 or preco < 8000 or preco > 9000 or tempo < 10:
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