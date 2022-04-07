.PHONY: clear \
		install \
		commit

clear:
	cls || clear

install:
	yarn install

commit: clear
	yarn run changeset
