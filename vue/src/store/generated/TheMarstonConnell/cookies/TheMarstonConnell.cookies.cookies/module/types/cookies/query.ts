/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../cookies/params";
import { Buildings } from "../cookies/buildings";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "TheMarstonConnell.cookies.cookies";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetBuildingsRequest {
  uid: string;
}

export interface QueryGetBuildingsResponse {
  buildings: Buildings | undefined;
}

export interface QueryAllBuildingsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBuildingsResponse {
  buildings: Buildings[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCostRequest {
  address: string;
  building: string;
}

export interface QueryGetCostResponse {
  cost: number;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetBuildingsRequest: object = { uid: "" };

export const QueryGetBuildingsRequest = {
  encode(
    message: QueryGetBuildingsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBuildingsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBuildingsRequest,
    } as QueryGetBuildingsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuildingsRequest {
    const message = {
      ...baseQueryGetBuildingsRequest,
    } as QueryGetBuildingsRequest;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid);
    } else {
      message.uid = "";
    }
    return message;
  },

  toJSON(message: QueryGetBuildingsRequest): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuildingsRequest>
  ): QueryGetBuildingsRequest {
    const message = {
      ...baseQueryGetBuildingsRequest,
    } as QueryGetBuildingsRequest;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = "";
    }
    return message;
  },
};

const baseQueryGetBuildingsResponse: object = {};

export const QueryGetBuildingsResponse = {
  encode(
    message: QueryGetBuildingsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buildings !== undefined) {
      Buildings.encode(message.buildings, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBuildingsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBuildingsResponse,
    } as QueryGetBuildingsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buildings = Buildings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuildingsResponse {
    const message = {
      ...baseQueryGetBuildingsResponse,
    } as QueryGetBuildingsResponse;
    if (object.buildings !== undefined && object.buildings !== null) {
      message.buildings = Buildings.fromJSON(object.buildings);
    } else {
      message.buildings = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBuildingsResponse): unknown {
    const obj: any = {};
    message.buildings !== undefined &&
      (obj.buildings = message.buildings
        ? Buildings.toJSON(message.buildings)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuildingsResponse>
  ): QueryGetBuildingsResponse {
    const message = {
      ...baseQueryGetBuildingsResponse,
    } as QueryGetBuildingsResponse;
    if (object.buildings !== undefined && object.buildings !== null) {
      message.buildings = Buildings.fromPartial(object.buildings);
    } else {
      message.buildings = undefined;
    }
    return message;
  },
};

const baseQueryAllBuildingsRequest: object = {};

export const QueryAllBuildingsRequest = {
  encode(
    message: QueryAllBuildingsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBuildingsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBuildingsRequest,
    } as QueryAllBuildingsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBuildingsRequest {
    const message = {
      ...baseQueryAllBuildingsRequest,
    } as QueryAllBuildingsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuildingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuildingsRequest>
  ): QueryAllBuildingsRequest {
    const message = {
      ...baseQueryAllBuildingsRequest,
    } as QueryAllBuildingsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBuildingsResponse: object = {};

export const QueryAllBuildingsResponse = {
  encode(
    message: QueryAllBuildingsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.buildings) {
      Buildings.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBuildingsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBuildingsResponse,
    } as QueryAllBuildingsResponse;
    message.buildings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buildings.push(Buildings.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBuildingsResponse {
    const message = {
      ...baseQueryAllBuildingsResponse,
    } as QueryAllBuildingsResponse;
    message.buildings = [];
    if (object.buildings !== undefined && object.buildings !== null) {
      for (const e of object.buildings) {
        message.buildings.push(Buildings.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuildingsResponse): unknown {
    const obj: any = {};
    if (message.buildings) {
      obj.buildings = message.buildings.map((e) =>
        e ? Buildings.toJSON(e) : undefined
      );
    } else {
      obj.buildings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuildingsResponse>
  ): QueryAllBuildingsResponse {
    const message = {
      ...baseQueryAllBuildingsResponse,
    } as QueryAllBuildingsResponse;
    message.buildings = [];
    if (object.buildings !== undefined && object.buildings !== null) {
      for (const e of object.buildings) {
        message.buildings.push(Buildings.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCostRequest: object = { address: "", building: "" };

export const QueryGetCostRequest = {
  encode(
    message: QueryGetCostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.building !== "") {
      writer.uint32(18).string(message.building);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCostRequest } as QueryGetCostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): QueryGetCostRequest {
    const message = { ...baseQueryGetCostRequest } as QueryGetCostRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.building !== undefined && object.building !== null) {
      message.building = String(object.building);
    } else {
      message.building = "";
    }
    return message;
  },

  toJSON(message: QueryGetCostRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.building !== undefined && (obj.building = message.building);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCostRequest>): QueryGetCostRequest {
    const message = { ...baseQueryGetCostRequest } as QueryGetCostRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.building !== undefined && object.building !== null) {
      message.building = object.building;
    } else {
      message.building = "";
    }
    return message;
  },
};

const baseQueryGetCostResponse: object = { cost: 0 };

export const QueryGetCostResponse = {
  encode(
    message: QueryGetCostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cost !== 0) {
      writer.uint32(8).int64(message.cost);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCostResponse } as QueryGetCostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cost = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCostResponse {
    const message = { ...baseQueryGetCostResponse } as QueryGetCostResponse;
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCostResponse): unknown {
    const obj: any = {};
    message.cost !== undefined && (obj.cost = message.cost);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCostResponse>): QueryGetCostResponse {
    const message = { ...baseQueryGetCostResponse } as QueryGetCostResponse;
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Buildings by index. */
  Buildings(
    request: QueryGetBuildingsRequest
  ): Promise<QueryGetBuildingsResponse>;
  /** Queries a list of Buildings items. */
  BuildingsAll(
    request: QueryAllBuildingsRequest
  ): Promise<QueryAllBuildingsResponse>;
  /** Queries a list of GetCost items. */
  GetCost(request: QueryGetCostRequest): Promise<QueryGetCostResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "TheMarstonConnell.cookies.cookies.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Buildings(
    request: QueryGetBuildingsRequest
  ): Promise<QueryGetBuildingsResponse> {
    const data = QueryGetBuildingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "TheMarstonConnell.cookies.cookies.Query",
      "Buildings",
      data
    );
    return promise.then((data) =>
      QueryGetBuildingsResponse.decode(new Reader(data))
    );
  }

  BuildingsAll(
    request: QueryAllBuildingsRequest
  ): Promise<QueryAllBuildingsResponse> {
    const data = QueryAllBuildingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "TheMarstonConnell.cookies.cookies.Query",
      "BuildingsAll",
      data
    );
    return promise.then((data) =>
      QueryAllBuildingsResponse.decode(new Reader(data))
    );
  }

  GetCost(request: QueryGetCostRequest): Promise<QueryGetCostResponse> {
    const data = QueryGetCostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "TheMarstonConnell.cookies.cookies.Query",
      "GetCost",
      data
    );
    return promise.then((data) =>
      QueryGetCostResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
