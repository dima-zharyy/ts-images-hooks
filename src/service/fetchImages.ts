export interface IFetchingData {
  total: number;
  totalHits: number;
  hits: {
    id: number;
    pageURL: string;
    type: string;
    tags: string;
    previewURL: string;
    previewWidth: number;
    previewHeight: number;
    webformatURL: string;
    webformatWidth: number;
    webformatHeight: number;
    largeImageURL: string;
    fullHDURL: string;
    imageURL: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    views: number;
    downloads: number;
    likes: number;
    comments: number;
    user_id: number;
    user: string;
    userImageURL: string;
  }[];
}

export const fetchImages = async (
  query: string,
  page: number
): Promise<IFetchingData> => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=27891054-2199c429fab30e58c22aa7ec7&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => response.json());
};
