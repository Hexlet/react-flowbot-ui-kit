install-deps:
	npm ci

install: install-deps

build:
	npx webpack

start:
	npx webpack serve

lint:
	npx eslint . --ext js,jsx
