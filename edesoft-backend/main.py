import csv
import re
from datetime import datetime
from mongo import db


def format_date(datestr):
    dt_str = datetime.strptime(datestr, "%d/%m/%Y")
    return datetime.strftime(dt_str, "%Y-%m-%d")



def function_read(file):
    with open('arquivo_exemplo.csv', newline='', encoding='ISO-8859-1') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=';')
        for row in reader:
            row["Doc Originador"] = re.sub("\.|\/|\-","", row["Doc Originador"])
            row["CPF/CNPJ"] = re.sub("\.|\/|\-","", row["CPF/CNPJ"])
            row["Data de Emissão"] = format_date(row["Data de Emissão"])
            row["Data de Vencimento"] = format_date(row["Data de Vencimento"])
            row["Data de Compra CCB"] = format_date(row["Data de Compra CCB"])

            db.create_or_update(row)
        