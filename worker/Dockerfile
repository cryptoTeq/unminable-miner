FROM ubuntu
WORKDIR /usr/app
COPY . .
ENV COIN_AND_ADDRESS='BNB:bnb170ny4jlzc36695955pusxzu28t5ja05nwzqwfu.AM92'
ENV SERVER='rx.unmineable.com:3333'
RUN sed -i -e 's/COIN_AND_ADDRESS/'"$COIN_AND_ADDRESS"'/g' ./config.json
RUN sed -i -e 's/SERVER/'"$SERVER"'/g' ./config.json
CMD ["./xmrig"]
