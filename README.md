# timestamp-api

Free Code Camp API Project described at:

https://timestamp-ms.herokuapp.com/

Given a string that contains either a Unix date, or natural language date,
returns an object with either or both, and null if either dates are not specified.

Example Input:

https://timestamp-ms.herokuapp.com/December%2015,%202015

https://timestamp-ms.herokuapp.com/1450137600

Example output:

{ "unix": 1450137600, "natural": "December 15, 2015" }
