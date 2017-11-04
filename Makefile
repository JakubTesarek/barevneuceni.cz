help:
	@echo "make help | install | run"

all: help

install:
	gem install jekyll bundle
	bundle install

run:
	bundle exec jekyll serve --drafts
