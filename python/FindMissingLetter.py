def find_missing_letter(array):
    alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    starting_index = alphabet.index(array[0])
    
    for i in range(len(array)):
        if array[i] != alphabet[starting_index + i]:
            return alphabet[starting_index + i]
    return ''