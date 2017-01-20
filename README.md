
# Snippet Sharer - Front End Client
![Imgur](http://i.imgur.com/lXR7jTU.png)
<br>

## Purpose and Funcationality

A Single Page Application built with react and redux that provides a user interface to rails a application that serves jeopardy clues and manages user response history. ( [Repository](https://github.com/paulsevere/jeopardy-backend) -- [Deployed API](https://jeopardy-server-paulsevere.herokuapp.com ))
<br>

The frontend client allows users to filter clues by keyword and difficulty and features an intuitive interface for submitting answers.  It relies on a combination of "fuzzy" string matching and key-word matching to assess the correctness of user-submitted answers.  In recognition of the fact that that his algorithm is likely to produce "false negatives," users have the opportunity to update their answers after submission.

In the future, I would like to implement a leaderboard to display top user sccores.
<br>

[Frontend repository]( https://github.com/paulsevere/jeopardy-front-end) >> [Deployed frontend](https://paulsevere.github.io/jeopardy-front-end/index.html) <br>

[Backend repository](https://github.com/paulsevere/jeopardy-backend) >> [Deployed backend](https://jeopardy-server-paulsevere.herokuapp.com)


## FrontEnd Technologies Used

- jQuery
- React
- Redux
- Redux-Thunk
- Material-UI Components




## Development Process

1. Brainstorm layout and develop wireframes.
2. Map basic structure of Redux Store and React Containers
3. Create required API Calls and corresponding Redux Actions
4. Create individual presentational UI components
5. Fill containers with components and ensure access to needed action creators and state items.
6. Polish UI style using "materialize-css" library.
7. Due to deployment issue with "create-react-app" boilerplate, I migrated to the General Assembly browser template and started a fresh repo (this repo).  The commit history prior to that migration can be found at [paulsevere/jeopardy-frontend](https://github.com/paulsevere/jeopardy-frontend).

## User Stories

As a user I want to be able to retrieve snippets created by all other users.<br>
As a user I want to be able to create snippets and persist them in a database<br>
As a user I want to be able to change my snippets text and title.<br>
As a user I want to be able to delete my snippets.<br>
<br>

### Wire Frames:
<br>

![Table-View](http://i.imgur.com/ZhKcIFn.png)
<br>
<br>
![Editor-View](http://i.imgur.com/FZIyhvc.png)


##### Initial Data Modeling Concepts<br>
[ERD](http://i.imgur.com/TDTTEL9.png)
<br>
