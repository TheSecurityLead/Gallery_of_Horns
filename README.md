# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This is my project lab for CodeFellows
# Lab 01 2023DEC05
## Feature Tasks
Complete the following steps to setup your repository:
- [x] Create a React application using Vite as demonstrated in class.
    - [x] Use the command npm create vite@latest.
- [x] Create a new repository on GitHub named “Gallery of Horns” WITHOUT a README.md. We will import an “existing” repository with its own README.
- [x] Follow the instructions given by GitHub to “push an existing repository from the command line”.
    * be sure to select HTTPS or SSH, whichever is relevant for you.
* Create a Branch and begin your work. As always, ACP often.
* Your App component should render a Header, Footer and Gallery component, each of which is defined in their own files.

* Your Header component needs to have an <h1> with a title.

* Your Footer component needs to contain your name as the author.

* The Gallery component needs to render at least two copies of a component called HornedBeast.

* The Gallery component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of this lab, you can pass whatever title, url and description that you want into each HornedBeast component.

* The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.
### NOTE: Rendering an image in React is a little tricky. Try to figure out how to do this on your own and we will go over it in the next code review
## Stretch Goal
Given the following array, loop over the data to display three HornedBeast components:

```
[{
    "_id": 1,
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
  },

  {
    "_id": 2,
    "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
    "title": "Rhino Family",
    "description": "Parent rhino with two babies",
    "keyword": "rhino",
    "horns": 2
  },

  {
    "_id": 3,
    "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
    "title": "Unicorn Head",
    "description": "Someone wearing a very silly unicorn head mask",
    "keyword": "unicorn",
    "horns": 1
}]
```
### Submission Instructions
- [ ]Complete your Feature Tasks for the day.
- [ ] Run your Lighthouse Accessibility report looking for a score of 65 or higher. Make adjustments as needed.
- [ ] Create a Pull Request (PR) back to the main branch of your repository.
- [ ] Submit your assignment as a link to your PR, and a comment describing how much time you spent on the lab.
