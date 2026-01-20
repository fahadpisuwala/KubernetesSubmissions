FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package files first (better cache)
COPY package*.json ./

RUN npm ci

# Copy rest of the source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
