# Server

## Usage

The API domain is `https://blueglove.herokuapp.com/`.

### POST /provider/new

```json
{
  "email": "philip@boba.com",
  "name": "Phil’s Boba"
}
```

### POST /consumer/new

```json
{
  "name": "Andy Jiang"
}
```

### POST /visit/new

```json
{
  "beaconId": "xyz",
  "iosId": "xyz",
  "visitBeginTime":
  "visitEndTime":
}
```

## Setup

You need node 6.x, npm, and mongo.

First copy the environmental variables (needed for postgres) onto it’s own `.env` file:

```
$ cp .env.example .env
```

And then fill out the `.env` file with the necessary stuff.

Then, to run mongo:

```
$ mongod
```

To run the server:

```
$ make
listening on port 3000
```

Then you can begin making requests:

```
$ curl localhost:3000/provider/1
```

Done!