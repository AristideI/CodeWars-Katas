def get_in_line(queue):
    time = 0
    while len(queue) > 0:
        # If you're the first in line, return the time.
        if queue[0] == 0:
            return time
        # If the next person in line is a known guest, perform the swap.
        elif queue[0] == 1:
            for i in range(len(queue)-1, 0, -1):
                if queue[i] > 1:
                    queue[0], queue[i] = queue[i], queue[0]
                    break
        # Remove the first person in line.
        queue.pop(0)
        time += 1
    return time