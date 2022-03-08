# UnMinable Worker

## Build Docker Images

`docker build . -t unminable`

### Run an Instance with Default Resources

`docker run -it unminable`

### Run an Instance

`docker run -it --memory="8g" --memory-swap="10g" --cpus="4.0" unminable`
