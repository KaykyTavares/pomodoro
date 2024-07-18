FROM node:20

WORKDIR /usr/src/app

RUN apt-get update && \
  apt-get install vim -y 
  
ENV DOCKERIZE_VERSION v0.7.0
RUN apt-get install -y wget && \
  wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin && \
  apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

COPY ./app .
  
EXPOSE 4000

CMD [ "npm", "run", "dev" ]