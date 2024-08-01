def domain_name(url):
    if "http" not in url and "www" not in url:
        return url.split(".")[0]

    splited = url.split(".")
    if "www" in url:
        return splited[1]
    else:
        return splited[0].split("/")[2]