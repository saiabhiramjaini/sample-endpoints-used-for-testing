# Use lightweight Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy application files
COPY index.js .

# Install Express
RUN npm init -y && npm install express

# Expose application port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
