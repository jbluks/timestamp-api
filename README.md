# timestamp-api

Free Code Camp API Project described at:

https://timestamp-ms.herokuapp.com/

Given a string that contains either a Unix date or natural language date,
returns a JSON string with both, and null valyes if no date is specified.

Note 1: No error checking is performed. Input assumed to be in a valid form as shown in examples.

Note 2: Uses Express for basic routing, and request/response.

Example Input:

https://timestamp-ms.herokuapp.com/December%2015,%202015

https://timestamp-ms.herokuapp.com/1450137600

Example output:

{ "unix": 1450137600, "natural": "December 15, 2015" }
