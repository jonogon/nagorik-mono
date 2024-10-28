# Use a Node.js base image
ARG BUILD_IMAGE
ARG BUILD_TAG
FROM ${BUILD_IMAGE}:${BUILD_TAG} as build

# output
FROM node:20-alpine as output
WORKDIR /app
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/dist/apps/api-gateway .

EXPOSE 3000
CMD ["node", "main.js"]

