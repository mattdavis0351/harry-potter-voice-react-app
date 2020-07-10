FROM node:12.16.2-alpine

WORKDIR /app

COPY . .
RUN npm ci && rm -rf ~/.npm
EXPOSE 33000

RUN npm run build && npm prune
ENTRYPOINT [ "node", "./server" ]