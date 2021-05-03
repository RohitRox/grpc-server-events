/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = require('./event_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.EventClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.EventPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.StringMsg>}
 */
const methodDescriptor_Event_Status = new grpc.web.MethodDescriptor(
  '/Event/Status',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.StringMsg,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StringMsg.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.StringMsg>}
 */
const methodInfo_Event_Status = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StringMsg,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StringMsg.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StringMsg)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StringMsg>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EventClient.prototype.status =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Event/Status',
      request,
      metadata || {},
      methodDescriptor_Event_Status,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StringMsg>}
 *     Promise that resolves to the response
 */
proto.EventPromiseClient.prototype.status =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Event/Status',
      request,
      metadata || {},
      methodDescriptor_Event_Status);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.StringMsg,
 *   !proto.StringMsg>}
 */
const methodDescriptor_Event_Echo = new grpc.web.MethodDescriptor(
  '/Event/Echo',
  grpc.web.MethodType.UNARY,
  proto.StringMsg,
  proto.StringMsg,
  /**
   * @param {!proto.StringMsg} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StringMsg.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.StringMsg,
 *   !proto.StringMsg>}
 */
const methodInfo_Event_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StringMsg,
  /**
   * @param {!proto.StringMsg} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StringMsg.deserializeBinary
);


/**
 * @param {!proto.StringMsg} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StringMsg)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StringMsg>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EventClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Event/Echo',
      request,
      metadata || {},
      methodDescriptor_Event_Echo,
      callback);
};


/**
 * @param {!proto.StringMsg} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StringMsg>}
 *     Promise that resolves to the response
 */
proto.EventPromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Event/Echo',
      request,
      metadata || {},
      methodDescriptor_Event_Echo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.EventMsg>}
 */
const methodDescriptor_Event_SubscribeToEvents = new grpc.web.MethodDescriptor(
  '/Event/SubscribeToEvents',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.EventMsg,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.EventMsg.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.EventMsg>}
 */
const methodInfo_Event_SubscribeToEvents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EventMsg,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.EventMsg.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.EventMsg>}
 *     The XHR Node Readable Stream
 */
proto.EventClient.prototype.subscribeToEvents =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Event/SubscribeToEvents',
      request,
      metadata || {},
      methodDescriptor_Event_SubscribeToEvents);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.EventMsg>}
 *     The XHR Node Readable Stream
 */
proto.EventPromiseClient.prototype.subscribeToEvents =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Event/SubscribeToEvents',
      request,
      metadata || {},
      methodDescriptor_Event_SubscribeToEvents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EventCode,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Event_BroadcastEvent = new grpc.web.MethodDescriptor(
  '/Event/BroadcastEvent',
  grpc.web.MethodType.UNARY,
  proto.EventCode,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.EventCode} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EventCode,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Event_BroadcastEvent = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.EventCode} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.EventCode} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EventClient.prototype.broadcastEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Event/BroadcastEvent',
      request,
      metadata || {},
      methodDescriptor_Event_BroadcastEvent,
      callback);
};


/**
 * @param {!proto.EventCode} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.EventPromiseClient.prototype.broadcastEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Event/BroadcastEvent',
      request,
      metadata || {},
      methodDescriptor_Event_BroadcastEvent);
};


module.exports = proto;

