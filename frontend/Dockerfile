# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy backend source code
COPY . .

# Expose backend port
EXPOSE 5555

# Accept frontend URL as a build argument (default: localhost)
ARG FRONTEND_URL=http://localhost:5173

# Set environment variables
ENV PORT=5555
ENV MONGO_URL=mongodb+srv://admin:admin@devopsdilip.dudrh.mongodb.net/?retryWrites=true&w=majority&appName=DevopsDilip
ENV FRONTEND_URL=${FRONTEND_URL}

# Start backend service
CMD ["npm", "start"]

