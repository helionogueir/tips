#!/bin/bash

# Variables
container_backend = helionogueir-tips-javascript-workspace

# Default
all: up

# Commands
up:
	docker-compose up --remove-orphans --detach
down:
	docker-compose down
restart:
	docker-compose restart $(container_backend)
reset:
	docker-compose down --rmi all --volumes
logs:
	docker-compose logs --timestamps --follow --tail="all"
bash:
	docker exec -it $(container_backend) /bin/bash