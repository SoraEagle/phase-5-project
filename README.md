# Phase 5 Project (Capstone)
This is the repository for my Phase 5 Project.

## Description
This project uses *React*, *React-Redux*, *React-Router-Dom*.

This project creates an website where individuals can make a user account, and create binders, to hold decks of flashcards, for creating mock quizzes or for help remembering things.

## Requirements
- Postgresql
- NodeJS (v16), and npm
- Ruby 2.7.4
- Render account (*optional*)
- React 17.0.2
- ReactDOM 17.0.2
- React Router DOM 6.4.5
- Redux Toolkit 1.9.1
- React Redux 8.0.5

## Visuals
[My Demonstration](https://youtu.be/TizMzvto_qg)

## Installation
Fork and clone this repository, and then run
```
bundle install
rails db:create
npm install --prefix client
```
to install the gems.

## Usage
Using two seperate terminals:

- In the first terminal, start up the Postgresql database with
```
sudo service postgresql start
```

- In the second terminal, in your project's root directory, use the command
```
npm start
```

You can use the following commands to run the application: 
- `rails s`: Run the backend on [port 3000](http://localhost:3000)
- `npm start --prefix client`: Run the frontend on [port 4000](http://localhost:4000)
- `npm start`: An alternative to `npm start --prefix client`, but must be used while in the `client` folder of the project's directory
## Roadmap
`Planned Features`:

NOTE: Some of these features will be tested and/or implemented on different branches.  They will be labeled as such. 

`main`:
- Randomize the order of the flashcards

- Allow deleting binders and decks

- Deleting an binder or deck also deletes its child objects

`auth0-test`:
- Implementing Auth0 for:

   - Login / Signup

   - Logout

   - Showing User Profile Info

`user`:

- Add an user profile page

- Add an user dropdown

`binder-deck-experimentation`:

- Add place to add an optional picture to the binder or deck

I may update this code to include other features, if I have the time for it in the future.

## Contributing
Pull requests are welcome.

For major changes, please open an issue to discuss what you wish to change or add.

If you *do* make major edits, **do not claim this as your own original work!**

*Always* reference the original work [here](https://github.com/SoraEagle/phase-5-project)
## Deploying
This project is not currently deployed!  I will redeploy the project when I have the time.
## Licenses
No licenses