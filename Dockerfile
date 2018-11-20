FROM node:8.11.1

# set working directory
RUN mkdir /usr/src/app
RUN mkdir /usr/src/app/server
RUN mkdir /usr/src/app/server/build
RUN mkdir /usr/src/app/public
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
COPY server/index.js /usr/src/app/server
COPY src /usr/src/app/src
COPY public /usr/src/app/public
RUN npm install 
RUN npm install react-scripts@1.1.1 -g 

# start app
# RUN node server/index.js
CMD ["npm", "run", "start"]