import React, { ReactNode } from "react";
import classes from "./Card.module.css";

interface CardProp {
  children: ReactNode[];
  className?: string;
}

const Card: React.FC<CardProp> = ({ className, children }) => {
  return (
    <section className={`${classes.card} ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default Card;
