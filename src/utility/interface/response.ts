interface IResponseErrors {
  message: string;
  field?: string;
}

export interface IResponseGlobal {
  data?: any;
  success: boolean;
  message: string;
  errors?: IResponseErrors[] | undefined | any;
}
