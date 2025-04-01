Step-by-Step Deployment
Step 1: Build & Run Backend
Build backend Docker image:

sh
Copy
Edit
docker build -t my-backend:latest ./backend
Run backend container:

sh
Copy
Edit
docker run -d -p 5555:5555 --name backend-container \
  -e PORT=5555 \
  -e MONGO_URL="mongodb+srv://admin:admin@devopsdilip.dudrh.mongodb.net/?retryWrites=true&w=majority&appName=DevopsDilip" \
  -e FRONTEND_URL="http://localhost:5173" \
  my-backend
✅ Now, your backend is running!



Once the frontend is deployed at a real URL (e.g., https://frontend.example.com), restart the backend with the correct URL:

sh
Copy
Edit
docker stop backend-container
docker rm backend-container

docker run -d -p 5555:5555 --name backend-container \
  -e PORT=5555 \
  -e MONGO_URL="mongodb+srv://admin:admin@devopsdilip.dudrh.mongodb.net/?retryWrites=true&w=majority&appName=DevopsDilip" \
  -e FRONTEND_URL="https://frontend.example.com" \
  my-backend
