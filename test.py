def countVowels(text):
    count = 0
    for c in text:
        if c in ['a', 'e', 'i', 'o', 'u']:
            count += 1
    return count

print(countVowels("hotdog"))