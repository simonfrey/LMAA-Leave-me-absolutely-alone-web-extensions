.PHONY: store 

store:
	@echo "Building..."
	@zip leave_tab_titles_alone.zip * -r
	@echo "Build completed."

clean:
	@echo "Started cleaning...."
	@rm leave_tab_titles_alone.zip 
	@echo "Finished cleaning"
