def pig_it(s):
    words = s.split()
    transformed = []

    for word in words:
        if len(word) > 1:
            transformed.append(word[1:] + word[0] + "ay")
        elif len(word) == 1 and word.isalpha():
            transformed.append(word + "ay")
        else:
            transformed.append(word)
    
    return " ".join(transformed)