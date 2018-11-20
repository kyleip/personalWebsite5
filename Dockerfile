FROM node:8.11.1

# set working directory
RUN mkdir /usr/src/app
RUN mkdir /usr/src/app/server
RUN mkdir /usr/src/app/public
RUN mkdir /usr/src/app/build
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
COPY server/index.js /usr/src/app/server
COPY build /usr/src/app/build
COPY public /usr/src/app/public
RUN npm install 
RUN npm install react-scripts@1.1.1 -g 
RUN apt-get update
RUN apt-get install xsel

# start app
# RUN node server/index.js
CMD ["serve", "-s", "build"]