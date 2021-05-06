import React, { useState, useEffect } from "react";

export default (api) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    api
      .then((data) => {
        setState({
          error: null,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ loading: false, error });
      });
  }, [state]);

  return { ...state };
};
