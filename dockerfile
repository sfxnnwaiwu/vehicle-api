# Use Node.js LTS version
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Delete any existing npm config file in the container
#RUN rm -f /root/.npmrc && rm -f .npmrc

# Install dependencies
# RUN npm install
RUN npm install

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the project
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
# CMD ["node", "dist/main"]
CMD ["npm", "run", "start:dev"]