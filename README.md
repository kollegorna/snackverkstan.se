http://snackverstan.se.s3-website-eu-west-1.amazonaws.com

## Local setup

1. Make sure you have [the same Ruby version installed as the repo](https://github.com/kollegorna/snackverkstan.se/blob/master/.ruby-version).
2. Install [Bundler](https://rubygems.org/gems/bundler) and [Node.js](http://nodejs.org).
3. Clone repository
4. ``$ npm install && gulp install``

### Gulp commands

The following gulp commands are at your service…

`$ gulp install`

Runs bundle install and bower install

`$ gulp middleman`

Runs bundle exec middleman

`$ gulp serve`

Builds Middleman and create a BrowserSync server that watches all changes

`$ gulp build`

Builds Middleman

## Deployment

Codeship automatically deploys master branch to S3 bucket.
