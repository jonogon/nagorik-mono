# Use a Node.js base image
FROM node:20-alpine AS base
WORKDIR /build
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm nx reset
RUN pnpm nx run-many --target=build --all
RUN mv /build/dist/libraries /build/node_modules/@nagorik-backend

