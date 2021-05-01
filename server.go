package main

import (
	"context"
	"grpc-start/protos"

	"google.golang.org/grpc/grpclog"
)

type EventServer struct {
	Log grpclog.LoggerV2
	protos.UnimplementedEventServer
}

func (c *EventServer) Status(context.Context, *protos.Void) (msg *protos.StringMsg, err error) {
	c.Log.Infoln("Handing Hello...")
	msg = &protos.StringMsg{
		Text: "Status OK",
	}
	return
}

func (c *EventServer) Echo(ctx context.Context, msgParam *protos.StringMsg) (msg *protos.StringMsg, err error) {
	c.Log.Infoln("Handing Echo...")
	msg = &protos.StringMsg{
		Text: "Echo: " + msgParam.Text,
	}
	return
}
