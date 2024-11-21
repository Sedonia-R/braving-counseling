import React from 'react';
import { InlineWidget } from 'react-calendly';
import classes from "../styles/Calendly.module.css";

const Calendly = () => {
  return (
    <div className={classes.inlineWidget}>
      <InlineWidget url="https://calendly.com/braving-counseling/15min" />
    </div>
  );
};

export default Calendly;
