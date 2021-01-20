import React, { useState, useCallback } from "react";
import produce from "immer";

export interface IImmerPractice {}
export const ImmerPractice = (props: IImmerPractice) => {
  const [state, setState] = useState({
    d: 1,
    e: 2,
    f: {
      i: 3,
      j: 4,
      l: 9,
    },
    o: {
      i: 3,
      j: 4,
      l: 9,
    },
  });
  /* Object{{},transactions,{payer:{
    ...transaction,
    address:{
        ...transaction.payer.address,
        street
    }
}}}
  {
      ...transaction,
      payer:{
          ...transaction.payer,
          address:{
              ...transaction.payer.address,
              street:'newStreet'
          }
      }
  }
const def = (draft)=>{
      draft.payer.address.street = 'newStreet';
  }
  const transactionUpdater = produce(def);
  const newTransaction = transactionUpdater(transaction)
  setState(newTransaction)
  setState(transactionUpdater); */
  const handleState = useCallback(() => {
    const s = produce(state, (draft: any) => {
      //   draft.e = 3;
    });
    setState(s);
    // state.e = 3;

    /* setState({
      ...state,
      e: 3,
    });
    cond def2 = state =>({
      ...state,
      e: 3,
    })
    setState(def2);
    */

    // sum(3,4) ==> 7 , sum(3)=>f(4)=>7
    // currying
    /* const updater = produce((draft) => {
      draft.e = 3;
    });
    setState(updater); */
    //setState
  }, [state]);

  const handleState2 = useCallback(() => {
    const s = produce(state, (draft: any) => {
      draft.f.j = 5;
    });
    setState(s);
    //setState({ ...state, f: { ...state.f, j: 5 } });
  }, [state]);
  const handleState3 = useCallback(() => {
    const s =   produce(state, (draft: any) => {
      draft.f.j = 5;
      draft.o.j = 5;
    });
    // setState({ ...state, f: { ...state.f, j: 5 }, o: { ...state.o, j: 5 } });
    setState(s);
  }, [state]);

  return (
    <div>
      <div>An Immer Example</div>
      <button onClick={handleState}>Change State</button>
      <button onClick={handleState2}>Change State 2</button>
      <button onClick={handleState3}>Change State 3</button>
      {JSON.stringify(state, null, 2)}
    </div>
  );
};
