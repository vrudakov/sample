FROM node:14.14.0-alpine

COPY . .

RUN npm install \
 && npm run build

RUN rm -rf .git/

EXPOSE 3000

CMD ["npm", "run", "start"]
