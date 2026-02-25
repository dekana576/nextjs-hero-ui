"use client";

import { Button } from "@heroui/react";

const HeroUiButton = () => {
  return (
    <div>
          <div className="flex gap-2 flex-wrap">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button isDisabled>Disabled</Button>
          </div>
    </div>
  );
}

export default HeroUiButton;