IMAGE=very-krutoi-chat:latest
PORT=4301

run: build
	docker run -d -p $(PORT):$(PORT) --rm --name very-krutoi-chat $(IMAGE)

build:
	docker build -t $(IMAGE) .