# Step 1: Use the official Node.js image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies using npm
COPY package.json package-lock.json ./
RUN npm install

# Step 4: Copy the rest of the app code
COPY . .

# Step 5: Build the Next.js app
RUN npm run build

# Step 6: Expose the port that Next.js will run on
EXPOSE 3000

# Step 7: Set environment variables
ENV PORT 3000

# Step 8: Start the Next.js server
CMD ["npm", "start"]
