FROM node:12
WORKDIR /app
COPY . ./
RUN npm i
RUN chmod +x start.sh
CMD ./start.sh
