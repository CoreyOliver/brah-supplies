**PREPRODUCTION VERSION***

data provided is 'dummy' data with some factual basis. production data and enviroment hosted privately

Project:
    Multiple users are responsible for supply tracking. The team needed a tool to not only track the stock we have but also to coordinate from which vendor individual supply items should be ordered. This tool will allow users to access and update the db on mobile devices and even draft orders from the web app to our vendors. 

What I learned:
    Using component based pages allows for quick loading and a clean interface. The data is cheap to pull, so in this iteration the code isn't optimized, but over time and at production the fetch and controller functions will need to lean out. Lowest hanging fruit would be more deliberate requests for db data.


Tools:
-React Router
-Express
-MongoDB
-Mongoose
-Tailwind
-Node


//Supply Order checklist:

To do

[x] list supplies by vendor
[x] filter supplies by vendor
[x] sort supplies data
[] access cost and vendor information by access db (mongo)
[] process order request 
    [] place request using app to generate email to correct vendor
[]dashboard development to watch levels
[] historical data to watch supply flow
[] access to update pricing and vendor for supplies but also keep historic data
[] update onSubmit to reroute to root
[x] remove negative
[x] add color for low quantities
[x] add bottom level for supplies quantities needed
[x] split loaded data for orders
    [x] map through to get items for each vendor dynamically as more or fewer vendors have items requesting to be ordered
[x] handle click up for order
[x] handle click down for order
[x] update vendor order list to show selected vendor
    [x]add filter
    [] add print function
[] update Submit button on Order Line to bring order quantity values to 0

