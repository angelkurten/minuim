/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';


export interface SendNotificationRequest {
  taskId: number;
}

export interface SendNotificationResponse {
  result: boolean;
}

const baseSendNotificationRequest: object = {
  taskId: 0,
};

const baseSendNotificationResponse: object = {
  result: false,
};

export interface NotificationService {

  SendNotification(request: SendNotificationRequest): Promise<SendNotificationResponse>;

}

export class NotificationServiceClientImpl implements NotificationService {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  SendNotification(request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const data = SendNotificationRequest.encode(request).finish();
    const promise = this.rpc.request("com.mu.logistic.api.NotificationService", "SendNotification", data);
    return promise.then(data => SendNotificationResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const SendNotificationRequest = {
  encode(message: SendNotificationRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.taskId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): SendNotificationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSendNotificationRequest } as SendNotificationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taskId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SendNotificationRequest {
    const message = { ...baseSendNotificationRequest } as SendNotificationRequest;
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = Number(object.taskId);
    } else {
      message.taskId = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<SendNotificationRequest>): SendNotificationRequest {
    const message = { ...baseSendNotificationRequest } as SendNotificationRequest;
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = object.taskId;
    } else {
      message.taskId = 0;
    }
    return message;
  },
  toJSON(message: SendNotificationRequest): unknown {
    const obj: any = {};
    obj.taskId = message.taskId || 0;
    return obj;
  },
};

export const SendNotificationResponse = {
  encode(message: SendNotificationResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.result);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): SendNotificationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSendNotificationResponse } as SendNotificationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SendNotificationResponse {
    const message = { ...baseSendNotificationResponse } as SendNotificationResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = Boolean(object.result);
    } else {
      message.result = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<SendNotificationResponse>): SendNotificationResponse {
    const message = { ...baseSendNotificationResponse } as SendNotificationResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = false;
    }
    return message;
  },
  toJSON(message: SendNotificationResponse): unknown {
    const obj: any = {};
    obj.result = message.result || false;
    return obj;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;