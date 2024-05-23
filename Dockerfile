# frontend/Dockerfile
# Use an official node image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
# Use a lightweight web server to serve the applicatio

EXPOSE 3000

ENTRYPOINT [ "npm" ]

# Start nginx
CMD ["start"]
