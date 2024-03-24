import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--str', help='The string to be reversed', type=str)
args = parser.parse_args()

print(args.str[::-1])