import random
secrt = random.randint(1,10)

print("-------------one----------------")
temp = input("❤猜测一下我心中的数字趴❤")

# 输入框  input()
# 注释  #



num = 3

guess = int(temp)
if (guess!=secrt) and  (num>0) :
    while (guess!=secrt) and (num>0) :
    #循环 while
        num = num - 1
        print("剩余次数",num)

        if guess > 7 :
             print("大了")
        else:
             print("小了")
                
        temp = input("哎呀！猜错了，重新输入叭")
        guess = int(temp)  #  整形（整数） int()  bif  内置函数
        # 变量 等于 输入的 值

    print("ove")
    
else:
    print("太棒了,",secrt)
   
 
   





            
        












# 严格要求缩进 tab



# dir(__builtins__)  全小写的是bif
#  help(bif名字)    帮助你学习某某 bif（ 内置函数） 的 用法


