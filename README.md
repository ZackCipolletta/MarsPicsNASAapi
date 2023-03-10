# (Application Name)

#### (Brief Description of Application)

#### By Zachary Cipolletta and Nicholas Guzy

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_
* CSS
* HTML
* JavaScript
* Node.js
* Jest
* Webpack
* npm

## Description

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_
* If using an API remember to add instructions for creating a .env file and adding it to your .gitignore + instructions for getting and setting up an API key
* Include all steps for getting a key — from the link to sign up for an account to any steps to getting an API key to the name of the API key variables that should be added to the .env file. Including accurate instructions for getting and setting up an API key

* Get API from: https://api.nasa.gov/index.html


* Clone repository to your desktop
* Navigate to the top level of the directory
* Install all packages with $ npm install.
* Build the project using webpack with $ npm run build
* If you wish to lint JS files in the src folder, run $ npm run lint
* All business logic should be tested and pass Jest using $ npm run test
* Start a development server with $ npm run start

## Known Bugs

* _Any known issues_
* _should go here_

## Future improvements
* Currently the calendar range allows the user to only select dates on which the selected rover was active. Future functionality would include using the manifest to blackout dates when a selected rover did not take any pictures and show only cameras that were active on the specified date.  For example on date X Opportunity may have only taken picutes with one of it's cameras, the user would only be able to select this once camera as an option for Opportunity on that date.
* Another piece of future functionality would be the ability to click on each image and have it blow up to full-size resolution.
* change rover selection to use radio buttons
* 'change' event listener on radio buttons for rover selection.
* use 'change' event listener on calendar to call function which will update the cameras list to show only cameras that were active on selected date for specified rover

## License
MIT
