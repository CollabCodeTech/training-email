FROM node:12 as frontend-email
WORKDIR /app
COPY . ./
RUN npm i
RUN chmod +x start.sh
CMD ./start.sh
