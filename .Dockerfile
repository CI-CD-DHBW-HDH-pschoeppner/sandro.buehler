# Base image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy source code to container
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "dev"]