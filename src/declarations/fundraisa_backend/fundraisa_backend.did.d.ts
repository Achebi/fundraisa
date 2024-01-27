import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Campaign {
  'owner' : Principal,
  'goal' : bigint,
  'ended' : boolean,
  'totalRaised' : bigint,
  'contributionDestination' : string,
}
export interface User {
  'yearOfBirth' : bigint,
  'principal' : Principal,
  'name' : string,
}
export interface _SERVICE {
  'contributeToCampaign' : ActorMethod<[string, bigint], undefined>,
  'createCampaign' : ActorMethod<[string, bigint, string], Campaign>,
  'createUser' : ActorMethod<[string, bigint], User>,
  'endCampaign' : ActorMethod<[string], undefined>,
  'getCampaignDetails' : ActorMethod<[string], Campaign>,
}
