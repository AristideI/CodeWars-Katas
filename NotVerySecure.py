def alphanumeric(string):
    print(string)
    if string.strip() == "":
        return False

    checker = set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")
    for char in string:
        if char not in checker:
            return False

    return True