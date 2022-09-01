import { IFetchingData } from "service";

export interface IProperDataItem {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

export type IProperData = IProperDataItem[];

export const getProperData = (data: IFetchingData): IProperData => {
  const properData = data.hits.map(
    ({ id, webformatURL, largeImageURL, tags }: IProperDataItem) => {
      return {
        id,
        webformatURL,
        largeImageURL,
        tags,
      };
    }
  );
  return properData;
};
