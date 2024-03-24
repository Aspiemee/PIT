import argparse

def list_of_ints(arg):
    return list(map(int, arg.split(',')))

parser = argparse.ArgumentParser()
parser.add_argument('--int-list', help='Enter list of ints to the max one', type=list_of_ints)
args = parser.parse_args()

print(max(args.int_list))

