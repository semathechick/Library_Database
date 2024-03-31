import { Authors } from "./Authors";

export interface AuthorsResponseModel {
    items: Authors[];
    index:number;
    size:number;
    count:number;
    pages:number;
    hasPrevious:boolean;
    hasNext:boolean;
  }