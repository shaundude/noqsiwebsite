TARGETS=mainpage.html

all : $(TARGETS)

%.html:  header.tmpl.html %.tmpl.html footer.tmpl.html
	cat $^ > $@

clean : 
	rm -f $(TARGETS)
