//Supply Order checklist:

To do

[x] list supplies by vendor
[x] filter supplies by vendor
[] sort supplies data
[] access cost and vendor information by access db (mongo)
[] process order request 
    [] place request using app to generate email to correct vendor
[]dashboard development to watch levels
[] historical data to watch supply flow
[] access to update pricing and vendor for supplies but also keep historic data
[] update onSubmit to reroute to root
[] remove negative
[x] add color for low quantities
[x] add bottom level for supplies quantities needed



changelogs
//6-15
moved the loader function within component
need to map through the loaded data to render in supply list
item type isn't pulling properly

//6-16
added edit functions and adjusted request to handle changes
puts increase and decrease quantity as needed
need to add "edit supply" page. 
issues with exporting from file
was able to work out loader and map function properly. used improper brackets....

//6-20
added edit function 
cannot redirect to root route, user will need to manually update


//6-21
updated editsupplyaction
    removed json method to data already formatted json
added orderlist component
need to aggregate to add to orders

//6-22
added color for less than 3
created min levels property. 
    leveraged for coloring to call out low stock. Automatic formatting based on minlevel v qty

//6-23
added buttons to sort the supply list
styling for buttons
added minlevel to match model requirements in addsupplyaction 
add line for adding quantity to order

//6-24
clean up commented out code. retesting to check for errors