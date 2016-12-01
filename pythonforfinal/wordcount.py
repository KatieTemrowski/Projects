import re
from collections import Counter

ignore_words = list() 

for line in open('ignore.txt'):
	line = line.strip()
	ignore_words.append(line)


with open('tellmeaboutyourcrush.txt') as f:
    passage = f.read()

words = re.findall(r'\w+', passage)

cap_words = [word.upper() for word in words if not word.upper() in ignore_words]

word_counts = Counter(cap_words)

print(word_counts)