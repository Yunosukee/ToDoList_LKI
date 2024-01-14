FROM node:18.16.0-alpine3.18
RUN mkdir -p /opt/app2
WORKDIR /opt/app2
COPY . .
RUN npm install -g pnpm
RUN pnpm install 
RUN pnpm run build
EXPOSE 4173
CMD [ "pnpm","run", "preview"]
