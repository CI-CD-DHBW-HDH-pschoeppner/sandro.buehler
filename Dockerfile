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
# In der Regel ist es keine gute Idee, einen Development Server in einem Docker container laufen zu lassen
# Aber theoretisch kann das genutzt werden, um die Website zur Verfügung zu stellen
CMD ["npm", "run", "dev"] 