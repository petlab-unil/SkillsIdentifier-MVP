# SkillsIdentifier
[SkillsIdentifier](http://socialinnovations.us/SkillsIdentifier-MVP/) is a system dedicated to help job seekers identify and communicate current skill set in order to improve resumes accordingly. This system could increase job seekers' self-efficacy by improving users’ ability to articulate their skills.

## Table of Contents
1. [Installation Instructions](#installation-instructions)
2. [Run the App](#run-the-app)
6. [Author](#author)

## Installation Instructions

#### NodeJS
- Install [nodeJS](https://nodejs.org/download/)

#### Ionic Framework
- Install [ionic](https://ionicframework.com/docs/intro/installation/)

#### Firebase
- Navigate to the project roor directory and install Firebase
````
$npm install firebase
````

## Run the App

- Navigate to the project root directory and start a server in your browser
````
$ionic serve
````

Note that because of the way ionic structures files, we use a script (`/hooks/after_prepare/010_copy_browser_to_docs.js`)
to create a 'normal-looking' web app in `/docs`.
To update the website, you must run `ionic cordova build browser` from the Terminal.

## Author
This project is created and managed by the [Social Innovations Group](http://socialinnovations.us/), School of Information, the University of Michigan.
