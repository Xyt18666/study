def save(boy,girl,count):
    file_name_boy = "boy" + str(count) + ".txt"
    file_name_girl = "girl" + str(count) + ".txt"

    boy_file = open(file_name_boy,"w")
    girl_file = open(file_name_girl,"w")

    
    boy_file.writelines(boy)
    girl_file.writelines(girl)

    boy_file.close()
    girl_file.close()

def split_file(file_name):
    f = open("分割文本案例.txt")
    boy = []
    girl = []
    count = 1

    for item in f:
        if item[:5] != "=====":
            (role,spok) = item.split(":",1)
            if role == "a":
                boy.append(spok)
            if role == "b":
                girl.append(spok)
        else:
            save(boy,girl,count)

            boy = []
            girl = []
            count += 1

    save(boy,girl,count)

    f.close()

split_file("分割文本案例.txt")
