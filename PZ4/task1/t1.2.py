import argparse

parser = argparse.ArgumentParser()
parser.add_argument('str', help='Enter string to get its length')
args = parser.parse_args()

print(len(args.str))