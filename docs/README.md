# Health Potatoes

One potato... two. Health Potatoes is a social fitness app created with React Native for iOS and Android. Our goal is to match users with a partner of similar goals and values. The two potatoes can then hold each other accountable for their health and fitness goals as well as share tips, recipes, and encouragement throughout the journey.

## Installation

You can fork this project here on Github and then clone it to your local environment in order to make changes. Here is a nice explanation on how to accomplish this task:
[Instructions for forking a project](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)

You will need to have installed React Native in order to work on this project. You can find great installation instructions for many environments in the React Native documentation here:
[React Native environment setup](https://reactnative.dev/docs/environment-setup)

Once you have forked and cloned the repo as well as made sure to have React Native installed, you should run:

```bash
  npm install
```

This will ensure that all dependencies for the project are installed in your development environment.

Please note that in order to run the client development server, you will need to cd into the client folder.

```bash
  cd client
  npm run ios
```

or

```bash
  cd client
  npm run android
```

Also note that in order to run the backend server you will need to cd into the backend folder.

```bash
  cd backend
  npm start
```

### MongoDB

We are using MongoDB for the backend. You will need to setup your own MongoDB database if you need a backend for your development tasks. You can easily setup a MongoDB account and database folowing these instructions:
[MongoDB account and database setup](https://docs.atlas.mongodb.com/getting-started/)

Once you have your MongoDB URI, you will need to create a `.env` file in the root or backend directory of your cloned project.

**Please remember to add .env to your .gitignore so it is not commited to a public repository. You want to keep that MongoDB URI to yourself!**

The `.env` file will hold your environment variable for this project. If you look in `backend/server.js` you will notice the environment variable which injects the MongoDB URI is called `HEALTH_POTATOES_MONGO_URI`.

You can set the value of that environment variable in your `.env` file like so:

```js
  HEALTH_POTATOES_MONGO_URI=<your MongoDB URI goes here>
```

That configuration will allow the backend development server to connect with your MongoDB database.

### Code Formatting

We use prettier for auto-formatting of code. You will notice that it runs on every git commit thanks to pretty-quick and husky. You can read more about that here:
[All about Prettier and precommit hooks](https://prettier.io/docs/en/precommit.html)

If you want to have Prettier correct your code on file save, you can run `npm run prettier-watch` in a dedicated terminal and it will watch for changes.

## Contributing

Please take the time to read over [our contribution guide](CONTRIBUTING.md) before opening any issues or submitting any pull requests. Below is some basic information about contributing to this project:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Follow the issue template and include all relevant information so that we may better understand what you are attempting to do.

Once your request to work on a major change has been approved, feel free to code away. When your pull request is ready for review, we will take our time carefully going over the changes to make sure it is in line with the project goals agreed upon in the issue that was approved.

Please make sure to update tests as appropriate for the changes you are making. If you are adding an entirely new feature, please be sure to include tests for coverage of that feature.

## License

[MPL-2.0](https://choosealicense.com/licenses/mpl-2.0/)
