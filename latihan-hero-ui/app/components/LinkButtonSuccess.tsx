"use client";

import { Button } from "@heroui/react";


const LinkButtonSuccess = ({ children, className }: any) => {
  return (
      <Button color="success" className={className} >{children} </Button>
  );
};

export default LinkButtonSuccess;
