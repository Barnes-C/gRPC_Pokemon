// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pokemon_pb = require('./pokemon_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_Pokemons_Pokemon(arg) {
  if (!(arg instanceof pokemon_pb.Pokemon)) {
    throw new Error('Expected argument of type Pokemons.Pokemon');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Pokemons_Pokemon(buffer_arg) {
  return pokemon_pb.Pokemon.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Pokemons_PokemonRequest(arg) {
  if (!(arg instanceof pokemon_pb.PokemonRequest)) {
    throw new Error('Expected argument of type Pokemons.PokemonRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Pokemons_PokemonRequest(buffer_arg) {
  return pokemon_pb.PokemonRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var PokemonsService = exports.PokemonsService = {
  getPokemon: {
    path: '/Pokemons.Pokemons/GetPokemon',
    requestStream: false,
    responseStream: false,
    requestType: pokemon_pb.PokemonRequest,
    responseType: pokemon_pb.Pokemon,
    requestSerialize: serialize_Pokemons_PokemonRequest,
    requestDeserialize: deserialize_Pokemons_PokemonRequest,
    responseSerialize: serialize_Pokemons_Pokemon,
    responseDeserialize: deserialize_Pokemons_Pokemon,
  },
  getPokemons: {
    path: '/Pokemons.Pokemons/GetPokemons',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: pokemon_pb.Pokemon,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_Pokemons_Pokemon,
    responseDeserialize: deserialize_Pokemons_Pokemon,
  },
  catchPokemon: {
    path: '/Pokemons.Pokemons/catchPokemon',
    requestStream: false,
    responseStream: false,
    requestType: pokemon_pb.PokemonRequest,
    responseType: pokemon_pb.Pokemon,
    requestSerialize: serialize_Pokemons_PokemonRequest,
    requestDeserialize: deserialize_Pokemons_PokemonRequest,
    responseSerialize: serialize_Pokemons_Pokemon,
    responseDeserialize: deserialize_Pokemons_Pokemon,
  },
  createPokemon: {
    path: '/Pokemons.Pokemons/CreatePokemon',
    requestStream: true,
    responseStream: false,
    requestType: pokemon_pb.Pokemon,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_Pokemons_Pokemon,
    requestDeserialize: deserialize_Pokemons_Pokemon,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.PokemonsClient = grpc.makeGenericClientConstructor(PokemonsService);
