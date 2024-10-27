# Use a Node.js base image
ARG BUILD_IMAGE
ARG BUILD_TAG
FROM ${BUILD_IMAGE}:${BUILD_TAG} as build

# output
FROM node:20-alpine as output
WORKDIR /app
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/dist/apps/api-gateway .
ENV RMQ_URL1=amqp://localhost:5669
ENV RMQ_API_SERVICE_NAME=API_SERVICE
ENV RMQ_API_QUEUE=api_service_queue
ENV API_GATEWAY_PORT=3000
ENV MONGO_ALIAS=buildbangladesh2-mongo-atlas
ENV MONGO_URI=mongodb+srv://buildbangladesh2:UKysS9phTWleJbUZ@nagorik-cluster0.oqxt1.mongodb.net/nagorik?retryWrites=true&w=majority&appName=nagorik-cluster0
ENV MONGO_DEBUG=true
ENV BCRYPT_WORK_FACTOR=10
EXPOSE 3000
CMD ["node", "main.js"]

