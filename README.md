# README

## What's this?

Hatebu(http://b.hatena.ne.jp/) client built with Rails and React/Redux. 

URL: https://tic40-emperor.herokuapp.com/
(might change the domain..)

## Requirement

* Ruby: v2.5.1
* Node.js: v9.5.0
* yarn or npm
* FW
  * Back-end: Rails v5.2.0
  * Front-end: React v16 / Redux

## Getting Started

Docker is the easiest way to create local environment.
```
# build and start
$ docker-compose up

# Stop
$ docker-compose stop

# Login to the web container
$ docker exec -it {container-name} /bin/bash
```

Docker recipe is in the Dockerfile and docker-compose.yml.


Install gem packages
```
$ bundle install
```

Install node modules via yarn
```
$ yarn
```

Setup database
```
$ rails db:migrate
```

Create master data
```
$ rails db:seed_fu
```

Run app on your local
```
# run Rails server
$ rails s

# run webpack dev server
$ ./bin/webpack-dev-server

# now the app is working. you can see it at locahost:3000 on your browser.
$ open http://localhost:3000
```

## For Developers

### Back-end

Rails app is created API mode and webpacker(--webpack=react --api)

#### API

is designed along with the REST style.

- endpoint: /api/v{version number}/**/*
- response: json

#### Crawling Task

Crawling task: lib/tasks/task_crawl.rake

1. crawl hatebu rss
1. fetch hatebu API for each entries
1. store entries info to Database

Run
```
$ rails task_crawl:feeds
```

*caution: Do not execute the task many times in a short period of time. 

#### Static Code Analyzer

Run rubocop
```bash
$ rubocop -R
```

### Front-end

React/Redux pattern.

```
# directories
app/javascript/packs/
   |-actions
   |-components
   |-constants
   |-containers
   |-reducers
   |-utils
```

### Style

Adopting Bulma(https://bulma.io/) as main CSS FW.

#### Static Code Analyzer

Run eslint
```
$ yarn run lint
```

Run prettier(code formatter)
```
$ yarn run prettier
```

#### Testing

not written yet.

### Production Deploy(for administrator)

Production Server: Heroku

Tools on the production.
- CircleCI: as CI/CD.
- Redis: as API cache.
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
