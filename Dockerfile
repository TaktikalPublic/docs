FROM node:lts

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
RUN npm run install

CMD ["npm", "run", "install"]
