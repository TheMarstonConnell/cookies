/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "TheMarstonConnell.cookies.cookies";

export interface MsgBake {
  creator: string;
}

export interface MsgBakeResponse {}

export interface MsgBuyBuilding {
  creator: string;
  building: string;
}

export interface MsgBuyBuildingResponse {}

const baseMsgBake: object = { creator: "" };

export const MsgBake = {
  encode(message: MsgBake, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBake {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBake } as MsgBake;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBake {
    const message = { ...baseMsgBake } as MsgBake;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgBake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBake>): MsgBake {
    const message = { ...baseMsgBake } as MsgBake;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgBakeResponse: object = {};

export const MsgBakeResponse = {
  encode(_: MsgBakeResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBakeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBakeResponse } as MsgBakeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBakeResponse {
    const message = { ...baseMsgBakeResponse } as MsgBakeResponse;
    return message;
  },

  toJSON(_: MsgBakeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBakeResponse>): MsgBakeResponse {
    const message = { ...baseMsgBakeResponse } as MsgBakeResponse;
    return message;
  },
};

const baseMsgBuyBuilding: object = { creator: "", building: "" };

export const MsgBuyBuilding = {
  encode(message: MsgBuyBuilding, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.building !== "") {
      writer.uint32(18).string(message.building);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyBuilding {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyBuilding } as MsgBuyBuilding;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.building = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyBuilding {
    const message = { ...baseMsgBuyBuilding } as MsgBuyBuilding;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.building !== undefined && object.building !== null) {
      message.building = String(object.building);
    } else {
      message.building = "";
    }
    return message;
  },

  toJSON(message: MsgBuyBuilding): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.building !== undefined && (obj.building = message.building);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuyBuilding>): MsgBuyBuilding {
    const message = { ...baseMsgBuyBuilding } as MsgBuyBuilding;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.building !== undefined && object.building !== null) {
      message.building = object.building;
    } else {
      message.building = "";
    }
    return message;
  },
};

const baseMsgBuyBuildingResponse: object = {};

export const MsgBuyBuildingResponse = {
  encode(_: MsgBuyBuildingResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyBuildingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyBuildingResponse } as MsgBuyBuildingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBuyBuildingResponse {
    const message = { ...baseMsgBuyBuildingResponse } as MsgBuyBuildingResponse;
    return message;
  },

  toJSON(_: MsgBuyBuildingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBuyBuildingResponse>): MsgBuyBuildingResponse {
    const message = { ...baseMsgBuyBuildingResponse } as MsgBuyBuildingResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Bake(request: MsgBake): Promise<MsgBakeResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BuyBuilding(request: MsgBuyBuilding): Promise<MsgBuyBuildingResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Bake(request: MsgBake): Promise<MsgBakeResponse> {
    const data = MsgBake.encode(request).finish();
    const promise = this.rpc.request(
      "TheMarstonConnell.cookies.cookies.Msg",
      "Bake",
      data
    );
    return promise.then((data) => MsgBakeResponse.decode(new Reader(data)));
  }

  BuyBuilding(request: MsgBuyBuilding): Promise<MsgBuyBuildingResponse> {
    const data = MsgBuyBuilding.encode(request).finish();
    const promise = this.rpc.request(
      "TheMarstonConnell.cookies.cookies.Msg",
      "BuyBuilding",
      data
    );
    return promise.then((data) =>
      MsgBuyBuildingResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
