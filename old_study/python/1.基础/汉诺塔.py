def hnt(n,x,y,z):
    if n == 1:
            print(x,'-->',z)
    else:
        hnt(n-1,x,z,y) #  将 前 n-1 个盘子从x动到 y上
        print(x,"-->",z) #将最底下的盘子 从 x移动到 z
        hnt(n-1,y,x,z) # 将y上的 n-1 个盘子移动到 z上



n = int(input("请输入汉诺塔层数："))

hnt(n,"x","y","z")


