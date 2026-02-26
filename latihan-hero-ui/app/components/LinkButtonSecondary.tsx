"use client";

import { Button } from "@heroui/react";


const LinkButtonSecondary = ({ children, className }: any) => {
  return (
      <Button color="secondary" className={className}>{children} </Button>
  );
};

export default LinkButtonSecondary;
