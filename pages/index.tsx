import React, { useEffect } from "react";
import { GET_RECENT_LAWLIST_REQUEST } from "../reducers/lawData/actions";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_RECENT_LAWLIST_REQUEST,
    });
  }, []);

  return (
    <div>
      <h1>하이</h1>
      <article></article>
    </div>
  );
};

export default Index;
