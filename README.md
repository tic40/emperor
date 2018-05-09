# README

## What's this?

Hatebu client

https://tic40-emperor.herokuapp.com/
(might change the domain...)

## Requirement

* Ruby: v2.5.1
* Rails: v5.2.0
* Node.js: v9.5.0
* yarn or npm

Back-end: Rails app
Front-end: React/Redux app

## Getting Started

install gem packages
```
$ bundle install
```

install node modules
```
$ yarn
```

setup database
```
$ rails db:migrate
```

create db master data
```
$ rails db:seed_fu
```

run app on your local
```
$ rails s
$ ./bin/webpack-dev-server
$ open http://localhost:3000
```

## Deploy

Productiom env: Heroku

Using CircleCI as CI/CD tool for this project.

When master branch is updated, then the CircleCI run the auto test.
after the test, CircleCI deploy master branch to the Heroku env.

see the .circleci/config.yml. deploy recipe is written here.

## For Developers

TODO: write about back-end

TODO: write about front-end

TODO: write something about this app. purpose, differences, advantages..
