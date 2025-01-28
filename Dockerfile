# Use the official Node.js image from the Docker Hub
FROM node:18.20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install  --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application


# Expose the port that the application will run on
EXPOSE 3000

CMD ["npm", "run" , "dev"]

 