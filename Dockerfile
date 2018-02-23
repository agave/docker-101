FROM node:carbon

# Set the user to use when running this image
USER node

# Create app directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY ./services/shared /home/node/app/shared

CMD [ "node", "app.js" ]
