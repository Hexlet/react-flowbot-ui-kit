install-deps:
	npm ci

install: install-deps

build:
	npm run build

start:
	NODE_OPTIONS=--openssl-legacy-provider npx webpack serve

lint:
	npx eslint . --ext js,jsx

test:
	npm test

publish:
	npm publish --access public

.PHONY: build
