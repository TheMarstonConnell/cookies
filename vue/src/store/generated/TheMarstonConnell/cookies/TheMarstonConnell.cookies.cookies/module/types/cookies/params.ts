/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "TheMarstonConnell.cookies.cookies";

/** Params defines the parameters for the module. */
export interface Params {
  cookie_denom: string;
}

const baseParams: object = { cookie_denom: "" };

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.cookie_denom !== "") {
      writer.uint32(10).string(message.cookie_denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cookie_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (object.cookie_denom !== undefined && object.cookie_denom !== null) {
      message.cookie_denom = String(object.cookie_denom);
    } else {
      message.cookie_denom = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.cookie_denom !== undefined &&
      (obj.cookie_denom = message.cookie_denom);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.cookie_denom !== undefined && object.cookie_denom !== null) {
      message.cookie_denom = object.cookie_denom;
    } else {
      message.cookie_denom = "";
    }
    return message;
  },
};

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
