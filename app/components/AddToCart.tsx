"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";

const AddToCart: FC = () => {
  const buttonClickHandler = () => {
    console.log("Add To Cart");
  };

  return (
    <div>
      <Button onClick={buttonClickHandler}>Add To Cart</Button>
    </div>
  );
};

export default AddToCart;
