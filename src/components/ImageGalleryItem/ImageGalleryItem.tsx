import React from "react";
import { Item, Image } from "./ImageGalleryItem.styled";

interface IItemProps {
  imageLarge: string;
  imageSrc: string;
  imageAlt: string;
  onClick: React.MouseEventHandler<HTMLImageElement>;
}

export const ImageGalleryItem: React.FC<IItemProps> = ({
  imageLarge,
  imageSrc,
  imageAlt,
  onClick,
}) => {
  return (
    <Item>
      <Image
        onClick={onClick}
        src={imageSrc}
        alt={imageAlt}
        data-large-image-url={imageLarge}
        loading="lazy"
      />
    </Item>
  );
};
