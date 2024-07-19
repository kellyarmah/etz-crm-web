# Use the official Node.js 18 image as the base image
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /crm-web

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight web server to serve the built files
FROM node:18-slim

# Install 'serve' to serve the static files
RUN npm install -g serve

# Set the working directory to /app
WORKDIR /crm-web

# Copy the build output from the previous stage
COPY --from=builder /crm-web/dist ./dist

# Expose port 3003
EXPOSE 3003

# Serve the built files
CMD ["serve", "-s", "dist", "-l", "3003"]
