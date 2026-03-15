# use the official node js image for build react app

FROM node:22 AS build

# Set working directory

WORKDIR /app

# copy the package.json and installed dependencies 
COPY package.json .

RUN npm install 

# Copy the rest of app code 
COPY . .

# Build the react-app
RUN npm run build

# serve the app with nginx
FROM nginx:alpine

# copy the build folder to the nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]