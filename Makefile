protos:
	protoc -I protos/ protos/*.proto --go_out=. --go-grpc_out=.
run:
	go run .
