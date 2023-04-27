# Common build stage
FROM node:16 as common-build-stage

EXPOSE 3000

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

COPY .env* ./

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV development

CMD ["npm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["npm", "run", "build"]

