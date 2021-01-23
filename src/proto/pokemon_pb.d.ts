// package: Pokemons
// file: pokemon.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Pokemon extends jspb.Message { 
    getId(): number;
    setId(value: number): Pokemon;

    getName(): string;
    setName(value: string): Pokemon;

    getCaught(): boolean;
    setCaught(value: boolean): Pokemon;

    getType(): PokemonType;
    setType(value: PokemonType): Pokemon;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pokemon.AsObject;
    static toObject(includeInstance: boolean, msg: Pokemon): Pokemon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pokemon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pokemon;
    static deserializeBinaryFromReader(message: Pokemon, reader: jspb.BinaryReader): Pokemon;
}

export namespace Pokemon {
    export type AsObject = {
        id: number,
        name: string,
        caught: boolean,
        type: PokemonType,
    }
}

export class PokemonRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): PokemonRequest;

    getCaught(): boolean;
    setCaught(value: boolean): PokemonRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PokemonRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PokemonRequest): PokemonRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PokemonRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PokemonRequest;
    static deserializeBinaryFromReader(message: PokemonRequest, reader: jspb.BinaryReader): PokemonRequest;
}

export namespace PokemonRequest {
    export type AsObject = {
        id: number,
        caught: boolean,
    }
}

export enum PokemonType {
    NORMAL = 0,
    FIRE = 1,
    WATER = 2,
    GRASS = 3,
    ELECTRIC = 4,
    ICE = 5,
    FIGHTING = 6,
    POISON = 7,
    GROUND = 8,
    FLYING = 9,
    PSYCHIC = 10,
    BUG = 11,
    ROCK = 12,
    GHOST = 13,
    DARK = 14,
    DRAGON = 15,
    STEEL = 16,
    FAIRY = 17,
}
