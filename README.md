# UnMinable Worker

### Build Docker Images

```
cd ./worker
docker build [--build-arg COIN_AND_ADDRESS=""] [--build-arg SERVER=""] -t unminable .

```

### Run an Instance with Default Resources

`docker run -it unminable`

### Run an Instance

`docker run -it [--memory="8g"] [--memory-swap="10g"] --cpus="4.0" unminable`
