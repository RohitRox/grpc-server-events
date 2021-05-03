protos:
	protoc -I protos/ protos/*.proto --go_out=. --go-grpc_out=.
run:
	go run .

protos-js:
	protoc -I protos/ protos/*.proto --js_out=import_style=commonjs:./frontend/protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./frontend/protos

envoy:
	docker-compose up
