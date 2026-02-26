"use client";

import { Button } from "@heroui/react";


const LinkButtonDanger = ({ children, onClick }: any) => {
  return (
      <Button color="danger" onClick={onClick}>{children} </Button>
  );
};

export default LinkButtonDanger;
