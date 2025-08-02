# JSL04 Project Brief: Dynamic Task Display & Modal View

## Overview

This project dynamically display tasks on the DOM using JavaScript. Tasks are placed into their correct **Kanban board columns** based on their status, and clicking a task opens a **modal** that can be viewed and modified. This project emphasizes **DOM manipulation, event handling, modular JavaScript structure, and responsive UI implementation.**

## Figma Design Link

Check the updated Figma Design: [Figma Link](https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=0-1&p=f&t=Ki0CZk0RAjrk9Fhs-0)

## Key Objectives

### Dynamic Task Display & Interaction

- Dynamically generates task elements from the given initial data by looping through each task in the initialTasks array and displays it in the appropriate status column on the page.
- Clicking a task opens a modal displaying its details.
- The modal includes editable input fields for the task title and description, a select dropdown showing the       current status with other status options available and a close button that allows users to exit the modal easily.

### Design & Responsiveness

- This Kanban has a fully responsive modal that works on both desktop and mobile devices and has a backdrop effect for focus.

### Code Structure & Maintainability

- Used descriptive and meaningful variable and function names for clarity.
- Used JSDoc comments to functions to describe their purpose, parameters, and return values for better documentation.

## Technologies Used

- Javascript
- CSS
- HTML