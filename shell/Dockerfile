FROM node:alpine as builder

WORKDIR /code

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /code/dist /usr/share/nginx/html/
