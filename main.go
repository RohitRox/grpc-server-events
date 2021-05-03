package main

import (
	"grpc-sse/protos"
	"log"
	"net"
	"os"
	"os/signal"
	"sync"
	"syscall"

	"google.golang.org/grpc"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/reflection"
)

func main() {
	gs := grpc.NewServer()
	logger := grpclog.NewLoggerV2(os.Stdout, os.Stdout, os.Stdout)

	eventsCh := make(chan EventRecord)
	cs := &EventServer{
		Log:     logger,
		EventCh: eventsCh,
	}

	protos.RegisterEventServer(gs, cs)

	// Switch off in dev
	reflection.Register(gs)

	l, err := net.Listen("tcp", ":9000")

	if err != nil {
		log.Fatalf("Unable to listen: %s", err)
	}

	go cs.EventLoop()

	stopChan := make(chan os.Signal, 1)
	// bind OS events to the signal channel
	signal.Notify(stopChan, syscall.SIGTERM, syscall.SIGINT)

	wg := sync.WaitGroup{}
	wg.Add(1)
	go func() {
		<-stopChan
		log.Println("Exit signal received...")
		close(eventsCh)
		log.Println("Stopping gRpc")
		gs.GracefulStop()
		wg.Done()
	}()

	logger.Infoln("Starting gRpc server at port 9000...")
	err = gs.Serve(l)

	if err != nil {
		close(eventsCh)
		log.Fatalf("Unable to start: %s", err)
	}

	wg.Wait()
}
