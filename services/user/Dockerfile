FROM agavelab-node

# Install app dependencies
COPY package.json /home/node/app/
RUN npm install

# Bundle app source
COPY . /home/node/app
