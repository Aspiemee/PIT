import argparse

def list_of_string(arg):
    return arg.split(',')

parser = argparse.ArgumentParser()
parser.add_argument('--string-list', help='String list to concate', type=list_of_string)
args = parser.parse_args()

result = ''

for i in args.string_list:
    result += i

print(result)