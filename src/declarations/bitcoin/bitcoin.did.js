export const idlFactory = ({ IDL }) => {
    return IDL.Service({
      'get_btc_address' : IDL.Func([], [IDL.Text], ['query']),
      'get_balance' : IDL.Func([IDL.Text], [IDL.Nat64], ['query']),
      'send_transaction' : IDL.Func([IDL.Text, IDL.Nat64], [IDL.Text], []),
      'verify_transaction' : IDL.Func([IDL.Text], [IDL.Bool], ['query']),
      'get_project_address' : IDL.Func([IDL.Principal], [IDL.Text], ['query']),
    });
  };