import React from "react";
import { ImageGalleryItem } from "components";
import { List } from "./ImageGallery.styled";

interface IGalleryProps {
  images: Array<{
    webformatURL: string;
    tags: string;
    largeImageURL: string;
    id: number;
  }>;
  onOpenModal: (event: React.MouseEvent<HTMLImageElement>) => void;
}

export const ImageGallery: React.FC<IGalleryProps> = ({
  images,
  onOpenModal,
}) => {
  return (
    <List>
      {images.map((image) => {
        return (
          <ImageGalleryItem
            onClick={(event) => onOpenModal(event)}
            imageSrc={image.webformatURL}
            imageAlt={image.tags}
            imageLarge={image.largeImageURL}
            key={image.id}
          />
        );
      })}
    </List>
  );
};
