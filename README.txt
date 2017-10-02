to run the rails server: rails s -p 5000
to run the react side: npm install in react directory
                       npm run build
                       npm start

Here is my care home manangement app.
It is pretty basic but you can add and delete residents, as well as assign residents to rooms and remove them from rooms.
You cannot add or delete rooms as in a real care home there would only be a set amount of rooms and every resident should have a
room but not every room will always have a resident.

The Rooms page is the default main page with a link at the top of the page to the Residents page.
It contains a list of rooms and shows which ones are currently available and which are occupied. Here you can also assign a room
to a resident and each assigned resident can be removed from their room.
You need to refresh the page after assigning a room or removing a resident from a room.

The Resident page shows the list of residents and you can delete a chosen resident or create a new one.
The page also has a link at the top to take you back to the Rooms page.

The rails side of the application was pretty straightforward. I used rails 5 to set up a database and help me create an api.
The api is used to help me communicate between the browser and the server. I haven't done any styling as I was focusing on functionality.
