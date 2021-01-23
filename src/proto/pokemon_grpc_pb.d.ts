// package: Pokemons
// file: pokemon.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as pokemon_pb from "./pokemon_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IPokemonsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPokemon: IPokemonsService_IGetPokemon;
    getPokemons: IPokemonsService_IGetPokemons;
    catchPokemon: IPokemonsService_IcatchPokemon;
    createPokemon: IPokemonsService_ICreatePokemon;
}

interface IPokemonsService_IGetPokemon extends grpc.MethodDefinition<pokemon_pb.PokemonRequest, pokemon_pb.Pokemon> {
    path: "/Pokemons.Pokemons/GetPokemon";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pokemon_pb.PokemonRequest>;
    requestDeserialize: grpc.deserialize<pokemon_pb.PokemonRequest>;
    responseSerialize: grpc.serialize<pokemon_pb.Pokemon>;
    responseDeserialize: grpc.deserialize<pokemon_pb.Pokemon>;
}
interface IPokemonsService_IGetPokemons extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, pokemon_pb.Pokemon> {
    path: "/Pokemons.Pokemons/GetPokemons";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<pokemon_pb.Pokemon>;
    responseDeserialize: grpc.deserialize<pokemon_pb.Pokemon>;
}
interface IPokemonsService_IcatchPokemon extends grpc.MethodDefinition<pokemon_pb.PokemonRequest, pokemon_pb.Pokemon> {
    path: "/Pokemons.Pokemons/catchPokemon";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pokemon_pb.PokemonRequest>;
    requestDeserialize: grpc.deserialize<pokemon_pb.PokemonRequest>;
    responseSerialize: grpc.serialize<pokemon_pb.Pokemon>;
    responseDeserialize: grpc.deserialize<pokemon_pb.Pokemon>;
}
interface IPokemonsService_ICreatePokemon extends grpc.MethodDefinition<pokemon_pb.Pokemon, google_protobuf_empty_pb.Empty> {
    path: "/Pokemons.Pokemons/CreatePokemon";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<pokemon_pb.Pokemon>;
    requestDeserialize: grpc.deserialize<pokemon_pb.Pokemon>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const PokemonsService: IPokemonsService;

export interface IPokemonsServer {
    getPokemon: grpc.handleUnaryCall<pokemon_pb.PokemonRequest, pokemon_pb.Pokemon>;
    getPokemons: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, pokemon_pb.Pokemon>;
    catchPokemon: grpc.handleUnaryCall<pokemon_pb.PokemonRequest, pokemon_pb.Pokemon>;
    createPokemon: grpc.handleClientStreamingCall<pokemon_pb.Pokemon, google_protobuf_empty_pb.Empty>;
}

export interface IPokemonsClient {
    getPokemon(request: pokemon_pb.PokemonRequest, callback: (error: grpc.ServiceError | null, response: pokemon_pb.Pokemon) => void): grpc.ClientUnaryCall;
    getPokemon(request: pokemon_pb.PokemonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pokemon_pb.Pokemon) => void): grpc.ClientUnaryCall;
    getPokemon(request: pokemon_pb.PokemonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pokemon_pb.Pokemon) => void): grpc.ClientUnaryCall;
    getPokemons(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pokemon_pb.Pokemon>;
    getPokemons(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pokemon_pb.Pokemon>;
    catchPokemon(request: pokemon_pb.PokemonRequest, callback: (error: grpc.ServiceError | null, response: pokemon_pb.Pokemon) => void): grpc.ClientUnaryCall;
    catchPokemon(request: pokemon_pb.PokemonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pokemon_pb.Pokemon) => void): grpc.ClientUnaryCall;
    catchPokemon(request: pokemon_pb.PokemonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pokemon_pb.Pokemon) => void): grpc.ClientUnaryCall;
    createPokemon(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<pokemon_pb.Pokemon>;
    createPokemon(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<pokemon_pb.Pokemon>;
    createPokemon(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<pokemon_pb.Pokemon>;
    createPokemon(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<pokemon_pb.Pokemon>;
}

export class PokemonsClient extends grpc.Client implements IPokemonsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPokemon(request: pokemon_pb.PokemonRequest, callback: (error: grpc.ServiceError | null, response: pokemon_pb.Pokemon) => void): grpc.ClientUnaryCall;
    public getPokemon(request: pokemon_pb.PokemonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pokemon_pb.Pokemon) => void): grpc.ClientUnaryCall;
    public getPokemon(request: pokemon_pb.PokemonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pokemon_pb.Pokemon) => void): grpc.ClientUnaryCall;
    public getPokemons(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pokemon_pb.Pokemon>;
    public getPokemons(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pokemon_pb.Pokemon>;
    public catchPokemon(request: pokemon_pb.PokemonRequest, callback: (error: grpc.ServiceError | null, response: pokemon_pb.Pokemon) => void): grpc.ClientUnaryCall;
    public catchPokemon(request: pokemon_pb.PokemonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pokemon_pb.Pokemon) => void): grpc.ClientUnaryCall;
    public catchPokemon(request: pokemon_pb.PokemonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pokemon_pb.Pokemon) => void): grpc.ClientUnaryCall;
    public createPokemon(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<pokemon_pb.Pokemon>;
    public createPokemon(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<pokemon_pb.Pokemon>;
    public createPokemon(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<pokemon_pb.Pokemon>;
    public createPokemon(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<pokemon_pb.Pokemon>;
}
