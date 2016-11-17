FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/chat_proto
WORKDIR /usr/src/chat_proto

# Install app dependencies
COPY package.json /usr/src/chat_proto/
RUN npm install

# Bundle app source
COPY . /usr/src/chat_proto

EXPOSE 8080
CMD [ "npm", "start" ]
