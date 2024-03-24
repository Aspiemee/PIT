import argparse

def list_of_strings(arg):
    return arg.split(',')

parser = argparse.ArgumentParser()
parser.add_argument('--string-list', help='Enter here string to be cleared of dublicates', type=list_of_strings)
args = parser.parse_args()

temp =[]
for i in args.string_list:
    if not i in temp:
        temp.append(i)

args.string_list = temp
print(args.string_list)