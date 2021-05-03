import google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb.js'

import { StringMsg } from './protos/event_pb'
import { EventClient } from './protos/event_grpc_web_pb'

const clt = new EventClient('http://localhost:1010')

const echoMe = new StringMsg()
echoMe.setText("Brave new world")
clt.echo(echoMe, {}, function(err, res) {
  let html = ""
  if (!err) {
    console.log("echo:response", res.toObject())
    html = '<div class="alert-success">✓ Echo test pass</div>'
  } else {
    console.log("echo:error:", err)
    html = '<div class="alert-danger">✗ Echo test failed. See console logs for error messages.</div>'
  }
  document.getElementById("echo_test_alert").innerHTML = html
})

const req = new google_protobuf_empty_pb.Empty
const stream = clt.subscribeToEvents(req, {})

stream.on('data', function(response) {
  console.log('stream:data', response)
  const msg = response.toObject()
  AppendReceivedMsg(msg)
})

stream.on('status', function(status) {
  console.log('stream:status', status)  
})

stream.on('end', function(end) {
  console.log('stream:end', end)  
})

stream.on('error', function(err) {
  console.log('stream:error', err)
})

function AppendReceivedMsg(msg) {
  const html = '<tr>\
    <td>Event: '+ msg.event +'</td>\
    <td>Text: '+ msg.text +'</td>\
    <td>Action: ' + msg.action +'</td>\
  </tr>'
  const tr = document.createElement('tr')
  tr.innerHTML = html
  document.getElementById("stream_msgs").appendChild(tr)
}
