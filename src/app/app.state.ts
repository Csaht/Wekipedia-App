import { State } from "@ngrx/store";
import { Product } from "./show-content/showContent.model";
export interface AppState {
  readonly product: Product[];
   
   error:String;
   
}

