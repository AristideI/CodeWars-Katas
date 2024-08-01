def is_solved(board):
    pro = 0
    for row in board:
        for cell in row:
            if cell == 0:
                pro += 1

    one = 1
    two = 2

    a, b, c = board

    if (
        (a[0] == one and a[1] == one and a[2] == one) or
        (b[0] == one and b[1] == one and b[2] == one) or
        (c[0] == one and c[1] == one and c[2] == one) or
        (a[0] == one and b[0] == one and c[0] == one) or
        (a[1] == one and b[1] == one and c[1] == one) or
        (a[2] == one and b[2] == one and c[2] == one) or
        (a[0] == one and b[1] == one and c[2] == one) or
        (a[2] == one and b[1] == one and c[0] == one)
    ):
        return 1

    if (
        (a[0] == two and a[1] == two and a[2] == two) or
        (b[0] == two and b[1] == two and b[2] == two) or
        (c[0] == two and c[1] == two and c[2] == two) or
        (a[0] == two and b[0] == two and c[0] == two) or
        (a[1] == two and b[1] == two and c[1] == two) or
        (a[2] == two and b[2] == two and c[2] == two) or
        (a[0] == two and b[1] == two and c[2] == two) or
        (a[2] == two and b[1] == two and c[0] == two)
    ):
        return 2

    else:
        if pro > 0:
            return -1
        return 0