# Use the official Node.js image to build the app
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app for production
RUN npm run build

# Use a lightweight server to serve the build
FROM nginx:alpine

# Copy the build from the previous step into the nginx server
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
