.PHONY: default clean format build dev

default: clean

clean:
	@rm -rf public/ node_modules/ && \
	bun install

format:
	@bun run format

build:
	@hugo

dev:
	@hugo server