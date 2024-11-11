export const idlFactory = ({ IDL }) => {
    const Project = IDL.Record({
      'id' : IDL.Principal,
      'title' : IDL.Text,
      'description' : IDL.Text,
      'goal' : IDL.Nat64,
      'raised' : IDL.Nat64,
      'creator' : IDL.Principal,
      'btc_address' : IDL.Text,
      'end_date' : IDL.Time,
      'status' : IDL.Variant({
        'active' : IDL.Null,
        'completed' : IDL.Null,
        'cancelled' : IDL.Null,
      }),
    });
  
    return IDL.Service({
      'create_project' : IDL.Func([IDL.Text, IDL.Text, IDL.Nat64, IDL.Time], [Project], []),
      'get_projects' : IDL.Func([], [IDL.Vec(Project)], ['query']),
      'get_project' : IDL.Func([IDL.Principal], [IDL.Opt(Project)], ['query']),
      'fund_project' : IDL.Func([IDL.Principal, IDL.Text], [IDL.Bool], []),
    });
  };