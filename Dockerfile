FROM node:12
WORKDIR /app
COPY . ./
RUN npm i
CMD ["npm", "run", "dev"]
