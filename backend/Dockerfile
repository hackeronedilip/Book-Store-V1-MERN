FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Set environment variables directly inside the Dockerfile
ENV PORT=5555
ENV MONGO_URL='mongodb+srv://admin:admin@devopsdilip.dudrh.mongodb.net/?retryWrites=true&w=majority&appName=DevopsDilip'

# Expose the application port
EXPOSE 5555

# Command to run the application
CMD ["node", "index.js"]

