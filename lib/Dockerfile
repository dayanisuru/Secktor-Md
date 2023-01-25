FROM quay.io/dayanisuru/secktor
RUN git clone https://github.com/dayanisuru/Secktor-Md /root/dayanisuru
WORKDIR /root/dayanisuru/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
