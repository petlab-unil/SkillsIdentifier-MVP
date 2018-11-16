README for the SkillsIdentifier Minimum Viable Product

## Installation & Use
### Dependencies:
* npm (node package manager)
* ionic web framework
* firebase

To install npm, visit https://www.npmjs.com/get-npm

To install ionic, visit https://ionicframework.com/docs/intro/installation/ and follow the instructions.

To install firebase navigate to the project root directory in the terminal and run command `npm install firebase`.

### Running the App
To run the app from your local system, navigate to the root directory of the project in terminal,
and run the command `ionic serve`. Your default browser will load an instance of the project.

## Web Hosting
The app is currently hosted at http://socialinnovations.us/SkillsIdentifier-MVP/.

Because of the way ionic structures files, we use a script (`/hooks/after_prepare/010_copy_browser_to_docs.js`)
to create a 'normal-looking' web app in `/docs`.
To update the website, you must run `ionic cordova build browser` from the Terminal.
