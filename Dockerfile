FROM node:7.3.0

ENV HOME /home/linky

RUN groupadd linky
RUN useradd --create-home --shell /bin/false linky -g linky

RUN mkdir -p $HOME/app
COPY package.json npm-shrinkwrap.json $HOME/app/
RUN chown -R linky:linky $HOME/*

USER linky
WORKDIR $HOME/app
RUN npm install

CMD ["node", "."]
