# Sierver

A simple server solution with static file server and domain based routing. Using microservices approach.

## How to use

### Installation

Install all dependencies. For best results, install `pm2` globally.

`npm i -g pm2 && npm i`

### Configuration

Static content is being routed using the `rules.json` file. See `rules.example.json` for example of usage.
Basically, it's a key-value pairs of domain and internal port of microservice for given domain.

Server will serve files from directory of the same name as domain. So, for example, if you have domain `mydomain.com`,
simply create `mydomain.com` directory inside current working directory, put all the files inside you wish to serve and
add the following to `rules.json`

`"mydomain.com": "3001"`

### Running

Simply, use `pm2`!

`pm2 start ecosystem.config.js`

For more details, check out pm2 webpage http://pm2.keymetrics.io/
