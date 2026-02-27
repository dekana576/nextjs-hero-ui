"use client";

import { Button } from "@heroui/react";


const LinkButtonPrimary = ({ children, className }: any) => {
  return (
      <Button color="primary" className={className}>{children} </Button>
  );
};

export default LinkButtonPrimary;
