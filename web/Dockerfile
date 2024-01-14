FROM node:18.16.0-alpine3.18
RUN mkdir -p /opt/app2
WORKDIR /opt/app2
COPY web/package.json package-lock.json .
RUN npm install
COPY web/ .
EXPOSE 3000
CMD [ "npm", "start"]
