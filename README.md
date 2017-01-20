
# Snippet Sharer - Front End Client
![Imgur](http://i.imgur.com/lXR7jTU.png)
<br>

## Purpose and Funcationality

A Single Page Application built with react and redux that aggregates code snippets and provides a text field that mimics the behavior of a text editor (syntax highlighting (only javascript is currently suppoerted), etc).


( [Repository](https://github.com/paulsevere/jeopardy-backend) -- [Deployed API](https://jeopardy-server-paulsevere.herokuapp.com ))
<br>

The application has limited functionality presently, as I have been unable to implement streaming code editing due to some issues deploying my web socket server.

<br>

[Frontend repository]( https://github.com/paulsevere/snippet-sharer) >> [Deployed frontend](https://paulsevere.github.io/snippet-sharer) <br>

[Backend repository](https://github.com/paulsevere/express-backend) >> [Deployed backend](https://snippet-server-app.herokuapp.com)


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
