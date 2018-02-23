# Agave Lab Docker 101

## Install

### Clone repo

```
$ git clone https://github.com/agave/docker-101.git
```

### Build base image

Build docker base image used in services.

Using Makefile

```
$ make build-base
```

Without Makefile

```
$ docker build -t agavelab-node .
```

## Usage

Run services.

```
$ docker-compose up -d
```

Try it!

```
$ curl localhost:3000/greeting?name=<YOUR_NAME>
```

Example

```
$ curl localhost:3000/greeting?name=Joshua
```

Response

```json
{"message":"Hello Joshua!"}
```
