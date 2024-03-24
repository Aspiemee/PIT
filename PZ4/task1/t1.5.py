import argparse

def list_of_ints(arg):
    return list(map(int, arg.split(',')))

parser = argparse.ArgumentParser()
parser.add_argument('--int-list', help='enter some ints here to see it\'s sum', type=list_of_ints)
args = parser.parse_args()

sum = 0;
for i in args.int_list:
    sum += i

print(f'The sum is {sum}')