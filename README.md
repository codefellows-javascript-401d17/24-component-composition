![cf](https://i.imgur.com/7v5ASc8.png) 24: Component Composition
======

## Submission Instructions
* continue working on the fork you created from lab 23
* open a **new branch** for today's assignment
* upon completion, create a **new pull request** in github
* submit a link to your PR in canvas

## Learning Objectives
* students will be able to utilize proper component composition constructs
* students will be able to compose react components through the use of props

#### Configuration  
* `README.md`
* `.babelrc`
* `.gitignore`
* `package.json`
* `webpack.config.js`
* `src/**`
* `src/main.js`
* `src/style`
* `src/style/main.scss`

## Requirements  
#### Feature Tasks
refactor and add the following components:

###### NoteUpdateForm
* create a `NoteUpdateForm` component that inherits a note through props
  * on submit, this should update the App's state with an updated note

###### Refactor the NoteItem Component
* include the following behavior:
  * if the user double clicks on the notes content, it should switch to the edit view  
* default view
  * display the note content and a delete button
  * the delete button should remove the note from the application's state
* edit view
  * show the `NoteUpdateForm` and a cancel button
  * `onNoteUpdateForm` submit (or click of the cancel button) should switch back to the default view

###### App Component Tree
your components should be nested in the following layout  
```
App
  NoteCreateForm
  NoteList
    NoteItem
      NoteUpdateForm
```
