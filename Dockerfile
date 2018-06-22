FROM daocloud.io/node:4.8
RUN mkdir -p /bian
WORKDIR /bian
ADD . /bian
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
LABEL maintainer = 'harrison_xu@sphinx.work'