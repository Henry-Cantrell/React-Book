import React from "react";
import { FIRST_BANNER_CONTENT } from "./firstbannercontent";
import { SECOND_BANNER_CONTENT } from "./secondbannercontent";
import { useSelector } from "react-redux";

export let BANNER_CONTENT_FLOW_CONTROLLER = () => {
  return (
    <>
      <FIRST_BANNER_CONTENT />
      <SECOND_BANNER_CONTENT />
      <div class="third"></div>
    </>
  );
};
