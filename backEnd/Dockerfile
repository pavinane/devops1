# use official node.js image
FROM node:22

# Set Working directory in container

WORKDIR /usr/src/app

# install dependencies

COPY package.json ./

RUN npm install

# Copy the rest of application code

COPY . .

# Expose the backend port

EXPOSE 5000

CMD [ "npm" ,"run" ,"dev" ]