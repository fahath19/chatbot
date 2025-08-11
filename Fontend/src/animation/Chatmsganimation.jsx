import React from 'react';
import { SyncLoader } from "react-spinners";

const Chatmsganimation = () => {
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <SyncLoader
      color="#36d7b7"
      loading={true}
      cssOverride={override}
      size={10}
    />
  );
};

export default Chatmsganimation;
