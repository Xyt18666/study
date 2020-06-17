def fn1(n):
    n1 = 1
    n2 = 1
    n3 = 1
    
    if n < 1:
    	print("输入有误")
    	return -1
    
    while (n-2) > 0 :
    	n3 = n2 + n1
    	n1 = n2
    	n2 = n3
    	n -= 1
    return n3
    
res = fn1(20)
if res != -1:
    print("总共是 %d" % res)


#递归 ↓


def fn2(n):
    if n < 1:
	    print("输入有误")
	    return -1

    if n == 1 or n == 2:
        return 1
    else:  
        return fn2(n-1) + fn2(n-2)

res2 = fn2(20)
if res2 != -1:
	print("fn2 总共是 %d" % res2)
