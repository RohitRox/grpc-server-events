package main

import (
	"context"
	"grpc-sse/protos"

	"google.golang.org/grpc/grpclog"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

type EventRecord struct {
	Code string
}

type EventServer struct {
	protos.UnimplementedEventServer
	Log       grpclog.LoggerV2
	EventCh   chan EventRecord
	Connected []protos.Event_SubscribeToEventsServer
}

func (c *EventServer) EventLoop() {
	c.Log.Infof("Event loop started")
	for e := range c.EventCh {
		for _, sub := range c.Connected {
			msg := &protos.EventMsg{
				Text:   "Event occured",
				Event:  e.Code,
				Action: "REFRESH",
			}
			err := sub.Send(msg)

			if err != nil {
				c.Log.Errorf("delivery failed to: %v error: %s", sub, err)
			}
		}
	}
	c.Log.Infof("Event loop closed")
}

func (c *EventServer) Status(context.Context, *emptypb.Empty) (msg *protos.StringMsg, err error) {
	c.Log.Infoln("Handing Hello...")
	msg = &protos.StringMsg{
		Text: "Status OK",
	}
	return
}

func (c *EventServer) Echo(_ context.Context, param *protos.StringMsg) (msg *protos.StringMsg, err error) {
	c.Log.Infoln("Handing Echo...")
	msg = &protos.StringMsg{
		Text: "Echo: " + param.Text,
	}
	return
}

func (c *EventServer) SubscribeToEvents(_ *emptypb.Empty, sub protos.Event_SubscribeToEventsServer) (err error) {
	c.Log.Infoln("Subscribe request...")

	c.Connected = append(c.Connected, sub)

	<-sub.Context().Done()
	return sub.Context().Err()
}

func (c *EventServer) BroadcastEvent(_ context.Context, e *protos.EventCode) (emp *emptypb.Empty, err error) {
	c.Log.Infoln("Broadcast request...")
	c.EventCh <- EventRecord{
		Code: e.Code,
	}
	emp = &emptypb.Empty{}
	return
}
