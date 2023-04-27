# Common build stage
FROM node:16 as common-build-stage

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV development

EXPOSE 5173

CMD ["npm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


