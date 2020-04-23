# Cribhead: online card games during quarantine
A simple webapp to allow people to play card games over the Internet.
Will eventually support
[Shithead](https://en.wikipedia.org/wiki/Shithead_(card_game))
and [Cribbage](https://en.wikipedia.org/wiki/Cribbage).

## Status
Planning stages.

## Standards
To be written in Javascript (possibly
[TypeScript](https://www.typescriptlang.org/) when possible?), Node.JS, and
Express.
Database transactions should happen using [Sequelize](https://sequelize.org/).
Most frontend-backend communication should be through
[WAMP](https://wamp-proto.org/index.html).
All logic code should have unit tests.

## Documentation
* [Business logic](doc/logic.md)
* [Data structures and representations](doc/data.md)
* [API and frontend-backend communication](doc/interface.md)
* [User interface](doc/ui.md)
