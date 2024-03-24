import argparse

parser = argparse.ArgumentParser()
parser.add_argument('n', help='The number to be checked for simplicity', type=int)
args = parser.parse_args()

for i in range(2, args.n - 1):
    if (args.n % i == 0):
        print('The number is not simple')
        break
else:
    print('The number is simple')