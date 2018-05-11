# README

## What's this?

Hatebu(http://b.hatena.ne.jp/) client built with Rails and React/Redux. 

URL: https://tic40-emperor.herokuapp.com/
(might change the domain..)

## Requirement

* Ruby: v2.5.1
* Node.js: v9.5.0
* yarn
* FW
  * Back-end: Rails v5.2.0
  * Front-end: React v16 / Redux

## Getting Started

Using Docker is the easiest way to create local environment.
```bash
# build and start
$ docker-compose up

# Stop
$ docker-compose stop

# Login to the web container
$ docker exec -it {container-name} /bin/bash
```

*See the Dockerfile and docker-compose.yml about the details.


Install gem packages
```bash
$ bundle install
```

Install node modules via yarn
```bash
$ yarn
```

Setup database
```bash
$ rails db:migrate
```

Create master data
```bash
$ rails db:seed_fu
```

Run app on your local
```bash
# run Rails server
$ rails s

# run webpack dev server
$ ./bin/webpack-dev-server

# now the app is working. you can see it at locahost:3000 on your browser.
$ open http://localhost:3000
```

## For Developers

### Back-end

Rails Application which is created with API mode and webpacker option(Rails new . --webpack=react --api)

#### API

is designed along with the REST.

- endpoint: /api/v{version number}/**/*
- response type: json

#### Crawling Task

lib/tasks/task_crawl.rake

Execute crawling task
```bash
# fetch feeds and entry info, and store them to database.
$ rails task_crawl:feeds
```

*caution: Do not execute the task many times in a short period of time. 

#### Static Code Analyzer for Rails

rubocop
```bash
$ rubocop -R
```

### Front-end

React/Redux App.

Directories
```
app/javascript/packs/
   |-actions
   |-components
   |-constants
   |-containers
   |-reducers
   |-utils
```

#### CSS Style

Adopting Bulma(https://bulma.io/) as main CSS FW.

#### Static Code Analyzer for JavaScript

eslint
```bash
$ yarn run lint
```

prettier(code formatter)
```bash
$ yarn run prettier
```

#### Testing

not written yet.

### Production Deploy(for administrator)

Production Server: Heroku

Tools on the production.
- CircleCI: as CI/CD.
- Redis: as cache server.
- Heroku Scheduler: Execute crawling task.

When the master branch on GitHub is updated, then the CircleCI will deploy to the Heroku automatically if it passes the all test and installation.

See the .circleci/config.yml.

## Reference

- Hatena Developer Center: http://developer.hatena.ne.jp/
- React: https://reactjs.org/
- Redux: https://redux.js.org/
- Rails: http://guides.rubyonrails.org/v5.2/
- Bulma: https://bulma.io/
- CircleCI: https://circleci.com/
- Heroku: https://dashboard.heroku.com/
