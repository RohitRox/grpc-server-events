package main

import (
	"grpc-start/protos"
	"log"
	"net"
	"os"

	"google.golang.org/grpc"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/reflection"
)

func main() {
	gs := grpc.NewServer()
	logger := grpclog.NewLoggerV2(os.Stdout, os.Stdout, os.Stdout)
	cs := &EventServer{
		Log: logger,
	}

	protos.RegisterEventServer(gs, cs)

	// Switch off in dev
	reflection.Register(gs)

	l, err := net.Listen("tcp", ":9000")

	if err != nil {
		log.Fatalf("Unable to listen: %s", err)
	}

	logger.Infoln("Starting gRpc server...")
	gs.Serve(l)
}
