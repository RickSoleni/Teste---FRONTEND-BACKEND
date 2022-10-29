import csv
import re
from datetime import datetime
from mongo import db 

# arquivo = requests.get(bucket_name) #receber arquivo via http


#def function_read(file):
with open('arquivo_exemplo.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=';')
    for row in reader:
        if len(row) >1:
            originador = row[0]
            doc_originador = row[1]
            doc_originador = re.sub("\.|\/|\-","",doc_originador)
            cedente = row[2]
            doc_cedente = row[3]
            ccb = row[4]
            id = row[5]
            cliente = row[6]
            cpf_cnpj = row[7]
            cpf_cnpj = re.sub("\.|\/|\-","",cpf_cnpj)
            endereco = row[8]
            cep = row[9]
            cidade = row[10]
            uf = row[11]
            valor_emprestimo = row[12]
            taxa_juros = row[13]
            parcela_valor = row[14]
            principal = row[15]
            juros_valor = row[16]
            iof = row[17]
            comissao = row[18]
            total_parcelas = row[19]
            parcela = row[20]
            multa = row[21]
            mora = row[22]
            data_emissao = row[23]
            data_emissao = re.sub("\/","-",data_emissao)
            ano_data_emissao = data_emissao[6:10]
            mes_data_emissao = data_emissao[2:6]
            dia_data_emissao = data_emissao[0:2]
            nova_data_emissao = ano_data_emissao + mes_data_emissao + dia_data_emissao
            data_vencimento = row[24]
            data_compra = row[25]
            preco_aquisicao = row[26]
    print(nova_data_emissao)