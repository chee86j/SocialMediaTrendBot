# Dockerfile in src directory

# Use Node.js as the base image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code into /app in the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
