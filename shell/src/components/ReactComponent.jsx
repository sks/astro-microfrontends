import React, { useEffect } from "react";
import { injectMicroFrontendA } from "http://localhost:7100/bundle.js";
import { injectMicroFrontendB } from "http://localhost:7200/bundle.js";

const mountpointA = "microfrontend-a";
const mountpointB = "microfrontend-b";

const ReactComponent = () => {

  useEffect(() => {
    try{
      injectMicroFrontendA(mountpointA);
    }catch(e){
      console.log(e)
    }
    injectMicroFrontendB(mountpointB);
  }, []);

  return (
    <>
      <div id={mountpointA} />
      <div id={mountpointB} />
    </>
  );
};

export default ReactComponent;