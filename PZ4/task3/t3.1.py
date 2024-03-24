import argparse

def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n-1)

parser = argparse.ArgumentParser()
parser.add_argument('n', help='Number to get its factorial', type=int)
args = parser.parse_args()

if args.n <= 0:
    print('Incorrect data')
else:
    print(f'The result is {factorial(args.n)}')