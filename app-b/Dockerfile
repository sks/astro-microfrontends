FROM node:alpine as builder

WORKDIR /code

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /code/dist /usr/share/nginx/html/
