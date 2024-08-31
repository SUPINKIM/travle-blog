export interface ResponseData {
  message: string;
}

export interface RequestData {
  title: string;
  country: string;
  contents: string;
  images?: string[];
}
