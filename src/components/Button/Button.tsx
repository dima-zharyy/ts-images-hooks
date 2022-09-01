import React from "react";
import { Button } from "./Button.styled";

interface ILoadButtonProps {
  onClick: () => void;
}

export const LoadButton: React.FC<ILoadButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} type="button">
      Load more
    </Button>
  );
};
