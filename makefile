all: server

server: client
	yarn server-up

client: install-dependencies
	yarn client-build

install-dependencies:
	yarn install
