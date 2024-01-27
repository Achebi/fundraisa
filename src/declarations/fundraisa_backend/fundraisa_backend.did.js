export const idlFactory = ({ IDL }) => {
  const Campaign = IDL.Record({
    'owner' : IDL.Principal,
    'goal' : IDL.Nat,
    'ended' : IDL.Bool,
    'totalRaised' : IDL.Nat,
    'contributionDestination' : IDL.Text,
  });
  const User = IDL.Record({
    'yearOfBirth' : IDL.Nat,
    'principal' : IDL.Principal,
    'name' : IDL.Text,
  });
  return IDL.Service({
    'contributeToCampaign' : IDL.Func([IDL.Text, IDL.Nat], [], []),
    'createCampaign' : IDL.Func([IDL.Text, IDL.Nat, IDL.Text], [Campaign], []),
    'createUser' : IDL.Func([IDL.Text, IDL.Nat], [User], []),
    'endCampaign' : IDL.Func([IDL.Text], [], []),
    'getCampaignDetails' : IDL.Func([IDL.Text], [Campaign], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
