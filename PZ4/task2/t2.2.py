import argparse

def list_of_floats(arg):
    return list(map(int, arg.split(',')))

parser = argparse.ArgumentParser()
parser.add_argument('--float-list', help='Float list to get its arithmetic mean', type=list_of_floats)
args = parser.parse_args()

sum = 0
for i in args.float_list:
    sum += i

print(sum/len(args.float_list))