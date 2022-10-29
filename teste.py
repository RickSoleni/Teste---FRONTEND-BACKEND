import re
from datetime import datetime

data_compra = "25/11/1961"
data_compra = re.sub("\.|\/|\-","",data_compra)
data_compra =  datetime.strptime(data_compra, '%d%m%Y')

data = str(data_compra)

print(data[0:10])