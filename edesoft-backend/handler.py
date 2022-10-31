import csv
import json
import re
from datetime import datetime
from os import environ

import requests

from mongo import db

AWS_REGION = environ.get("AWS_REGION")


def format_date(datestr):
    dt_str = datetime.strptime(datestr, "%d/%m/%Y")
    return datetime.strftime(dt_str, "%Y-%m-%d")


def csv_read(file):
    try:

        reader = csv.DictReader(file, delimiter=";")
        for row in reader:
            row["Doc Originador"] = re.sub("\.|\/|\-", "", row["Doc Originador"])
            row["CPF/CNPJ"] = re.sub("\.|\/|\-", "", row["CPF/CNPJ"])
            row["Data de Emissão"] = format_date(row["Data de Emissão"])
            row["Data de Vencimento"] = format_date(row["Data de Vencimento"])
            row["Data de Compra CCB"] = format_date(row["Data de Compra CCB"])

            db.create_or_update(row)

    except Exception as exc:
        print(f"something happened while parsing/adding data to db: {exc}")
        raise


def download_csv(bucket_id: str, object_key: str):

    response = requests.get(
        f"https://{bucket_id}.s3-{AWS_REGION}.amazonaws.com/{object_key}",
        allow_redirects=False,
    )

    return response.content.decode("ISO-8859-1").splitlines()


def csvImporter(event, context):

    bucket_id = event.get("bucket_id")
    object_key = event.get("object_key")

    body = {"Message": "File import was successful"}

    if not bucket_id or not object_key:
        return {
            "statusCode": 400,
            "body": json.dumps({"message": "there is values missing on data"}),
        }

    csv_file = download_csv(bucket_id, object_key)

    csv_read(csv_file)

    return {"statusCode": 200, "body": json.dumps(body)}
