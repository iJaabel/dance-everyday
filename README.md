# Dance Everyday!

![gif](https://media.giphy.com/media/Ymhz7H7Ye0gX3xuk59/giphy.gif)

## Project Description

Dance Everyday is a website in which dance venues will display their events by dance, location, and time.With Dance Everyday organizers will be able to create,modify and list all dance events.

## Wireframes

This is the drafted design for the landing page in desktop view:

![](https://i.imgur.com/x00gjfJ.png)

and the design for mobile:

![](https://i.imgur.com/BYik3If.png)

#### MVP

- Build out the database to represent the relation between venue and events per menu.
- Render 2 filter views of available events in the city: by dance, by venue.
- Set up routes for the home, event list, edit, event, create.
- Mobile first design

#### PostMVP EXAMPLE

- Add user auth with favorites and add venue
- Friend Finder
- Food near venue
- Add another filter view for dance style

## ERD Diagram

Diagram of the Database:

![](https://i.imgur.com/kGkkfvv.jpg)

## React Component Hierarchy

![](https://i.imgur.com/sbOngZL.png)

## Priority Matrix

![](https://i.imgur.com/Tas9IlH.jpg)

## Components List

| Component    |
| ------------ |
| App          | Houses all component routes and feeds the Home component initial fetch data |
| Home         | Home houses a Nav component and renders on initial load through the '/' route as well as rendering a searchbar and event results list |
| EventResults | Event results consumes inital fetch data as well search data and rerenders on fetch. Also serves as a styling container for EventList |
| EventList    | Conditionally renders event cards based on the props provided from EventList as well as rerenders on Create Event |
| EventCard    | Conditionally renders based on wether or not the edit button is clicked. Displays information from events such as location, time, and style. As well as provides an edit and delete button |
| SearchBar    | Fetches a new list based on search filters by dance and by venue |
| About/Footer | Displays dummy data about the contributors of this project as well as contact information |

---

---

---

| ( **Jaabel** ) Backend Engineer | Priority | Estimated Time | Time Invetsted | Actual Time |
| ------------------------------- | :------: | :------------: | :------------: | :---------: |
| Setup files                     |    H     |      1hrs      |                |             |
| Setup models                    |    H     |      1hrs      |                |             |
| Create Database                 |    H     |      1hrs      |                |             |
| Create Tables                   |    H     |      1hrs      |                |             |
| Create and fill seed data       |    H     |      3hrs      |                |             |
| Fill Seed Data                  |    H     |      3hrs      |                |             |
| Migrate / Test / debug          |    H     |      3hrs      |                |             |
| Create routes                   |    H     |      3hrs      |                |             |
| Test routes / debug             |    H     |      3hrs      |                |             |
| Create api Docs                 |    H     |      6hrs      |                |             |
| Providing Support to Frontend   |    H     |      5hrs      |                |             |
| Total                           |    H     |     30hrs      |                |             |

---

---

---

| ( **Nelson** ) Frontend Engineer | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Fill Seed Data                   |    H     |      1hrs      |               |             |
| Scaffolding Components           |    H     |      1hrs      |               |             |
| Connect front-end to Api         |    H     |      3hrs      |               |             |
| Create Output cards              |    H     |      4hrs      |               |             |
| Functioning SearchBar            |    H     |      8hrs      |               |             |
| Add editing re-rendering         |    H     |      6hrs      |               |             |
| Add deletion re-rendering        |    H     |      3hrs      |               |             |
| Add creating re-rendering        |    H     |      4hrs      |               |             |
| Total                            |    H     |     30hrs      |               |             |

---

---

---

| ( **Anna** ) Frontend Engineer & Styler | Priority | Estimated Time | Time Invetsted | Actual Time |
| --------------------------------------- | :------: | :------------: | :------------: | :---------: |
| Fill Seed Data                          |    H     |      3hrs      |                |             |
| Header                                  |    H     |      4hrs      |                |             |
| Navigation Bar                          |    H     |      3hrs      |                |             |
| About                                   |    H     |      3hrs      |                |             |
| Footer                                  |    H     |      1hrs      |                |             |
| Output cards                            |    H     |      5hrs      |                |             |
| Search bar styles                       |    H     |      1hrs      |                |             |
| Media queries                           |    H     |      4hrs      |                |             |
| Finishing touches                       |    H     |      6hrs      |                |             |
| Total                                   |    H     |     30hrs      |                |             |

## Additional Libraries

React-router, axios

## Code Snippet

```
function Nothing(Written) {
	return( something soon... )
}
```

## Issues and Resolutions
