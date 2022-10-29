from pymongo import MongoClient
import os

mongodb_uri = os.getenv('MONGODB_URI')
class Database:
    def __init__(self, client) -> None:
        self.client = client
        self.database = self.client['database_edesoft']
        self.coll = self.database['emprestimos']

    def create_or_update(self, data: dict) -> str:
        try:
            if self.coll.count_documents({'Id': data.get('Id')}) > 0:
                self.coll.update_one({'Id': data.get('Id')}, {'$set': data})
                print(f"Updated register with Id: {data.get('Id')}")
            else:
                print(f"Creating register with Id: {data.get('Id')}")
                self.coll.insert_one(data)
                return True

        
        except Exception as exc:
            print(f"Error on insert: {exc}")

if mongodb_uri:
    client = MongoClient(mongodb_uri)
else:
    client = MongoClient('mongodb://root:MongoDB2019!@127.0.0.1:27017')
db = Database(client=client)