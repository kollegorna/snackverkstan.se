Every year, the biggest players in Swedish politics and media meet for Almedalen, a full week of meetings and presentations taking place inside Visby on the island Gotland in the Baltic Sea. This year, we've set up our own event space and we're asking participants to submit their Web-based ideas. We'll choose the best one and build it for them. In 5 days. For free.

- “Snack” is Swedish for talk.
- “Verkstan” means workshop.
- “Mycket snack och lite verkstad” is a Swedish saying that means something like “Lots of talk but no action.”

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

Codeship automatically deploys master branch to a VPS on Digital Ocean.
