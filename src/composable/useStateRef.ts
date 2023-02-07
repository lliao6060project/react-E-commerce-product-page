import React, { useState, useRef, useCallback } from 'react';

function useStateRef(initialState: any) {
  const [state, setState] = useState(initialState);
  const ref = useRef(initialState);

  const dispatch = useCallback((updatedState: any) => {
    ref.current = typeof updatedState === 'function'
    ? updatedState(ref.current)
    : updatedState;
    setState(ref.current);
  }, []);

  return [state, dispatch, ref];
}

export default useStateRef;