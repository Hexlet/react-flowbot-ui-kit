install-deps:
	npm ci

install: install-deps

build:
	npm run build

start:
	npx webpack serve

lint:
	npx eslint . --ext js,jsx

test:
	npm test

.PHONY: build
