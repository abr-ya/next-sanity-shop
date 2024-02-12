"use client";

import { Button } from "@/components/ui/button";

const CheckoutNow = () => {
  const buttonClickHandler = () => {
    console.log("Checkout Now");
  };

  return (
    <div>
      <Button variant="outline" onClick={buttonClickHandler}>
        Checkout Now
      </Button>
    </div>
  );
};

export default CheckoutNow;
