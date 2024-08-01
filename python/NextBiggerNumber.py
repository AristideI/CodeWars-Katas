def next_bigger(num):
    digits = [int(d) for d in str(num)]

    i = len(digits) - 2
    while i >= 0 and digits[i] >= digits[i + 1]:
        i -= 1

    if i == -1:
        return -1

    j = len(digits) - 1
    while j > i and digits[j] <= digits[i]:
        j -= 1

    digits[i], digits[j] = digits[j], digits[i]

    sorted_right = sorted(digits[i + 1:])

    next_bigger_digits = digits[:i + 1] + sorted_right

    return int(''.join(map(str, next_bigger_digits)))