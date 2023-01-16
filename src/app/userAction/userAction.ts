import { Action, createAction, props } from '@ngrx/store';
import { Product } from '../show-content/showContent.model';

export enum ProductActionTypes {
  Load = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFail = '[Product] Load Fail',
  DELETE_POST_ACTION = '[Product] DELETE_POST_ACTION',
}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;

  constructor() {
    console.log('Load _t', this.type);
  }
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {
    console.log('LoadSuccess', this.payload);
    console.log('LoadSuccess _t', this.type);
  }
}

export class LoadFail implements Action {
  readonly type = ProductActionTypes.LoadFail;

  constructor(public payload: string) {
    console.log('LoadFail', this.payload);
    console.log('LoadFail _t', this.type);
  }
}


export type ProductActions = Load | LoadSuccess | LoadFail;
