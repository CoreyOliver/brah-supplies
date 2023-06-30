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

//6-25
refactor sort
    supplies list will omit all vendors outside of selection
    (?) similar sort to orders catalog

//6-26
init order table and list.
pulled data from db for items with order quantity

//6-27
added order tables  
    mapped through vendors
    separated SKUs by vendor table
    added function for handle up
        server side db handler
//6-28
    updated order tables
    add qty for order items works
    send down prop for click handle

//6-29
    added conditional for no negative quantities
    update button to add order items to 'print page'
    created vendor order list
    adjust changelog dates to match reality
