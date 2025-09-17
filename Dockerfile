FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --ignore-scripts   # instala con devDependencies para compilar

COPY . .
RUN npm run build

FROM node:22-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY --from=builder /app/dist ./dist

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

CMD ["node", "dist/main.js"]

FROM node:22-alpine AS development
WORKDIR /app
ENV NODE_ENV=development

COPY package*.json ./
RUN npm ci --ignore-scripts   # mantiene devDependencies
COPY . .

CMD ["npm", "run", "start:dev"]
