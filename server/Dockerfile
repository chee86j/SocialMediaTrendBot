# Use Node.js as the base image
FROM node:18

# Set the working directory to /server
WORKDIR /server

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the local server directory into /server in the container
COPY . .

# Expose port 3000 for the backend API
EXPOSE 3000

# Start the Express server
CMD ["node", "server.js"]
