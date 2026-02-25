"use client";

import { Button } from "@heroui/react";

const LinkButton = ({ href, children }: any) => {
  return (
      <Button color="primary">{children} </Button>
  );
};

export default LinkButton;
