"use client";

import { Card, CardBody } from "@heroui/react";

const CardList = ({ children }: any) => {
  return (
    <Card>
      <CardBody className="space-y-4">{children}</CardBody>
    </Card>
  );
};

export default CardList;
