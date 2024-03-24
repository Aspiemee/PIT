import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--str', help='String to be checked for palindrome')
args = parser.parse_args()

if args.str == args.str[::-1]:
    print('String is a palindrome')
else:
    print('String is not a palindrome')