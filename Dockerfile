FROM node:latest
COPY . /app
WORKDIR /app
EXPOSE 5500
CMD ["node", "index.js"]
