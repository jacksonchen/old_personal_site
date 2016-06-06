#!/Python27/python
print "Content-type: text/html"
print
file = open("C:\Jackson\Website\Otherstuff\Top10\CO_Top.html")
while 1:
    line = file.readline()
    if not line:
        break
    print line
file.close()
