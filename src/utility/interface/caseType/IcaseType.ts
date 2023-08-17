export interface ICreatedBy {
  assignedBarangay: string;
  birthday: string;
  civilStatus: string;
  dateCreated: string;
  deviceToken: [];
  email: string;
  firstName: string;
  gender: string;
  isEmailVerified: boolean;
  lastLogin: string;
  lastName: string;
  lastUpdated: string;
  lastUpdatedBy: string;
  mothersFirstName: string;
  mothersLastName: string;
  mothersMaidenName: string;
  position: string;
  registrationType: string;
  userRole: string;
  _id: string;
}
export interface ICaseTypeDocs {
  _id: string;
  caseTypeCode: string;
  caseTitle: string;
  desc: string;
  isActive: string;
  createdBy: ICreatedBy;
  dateCreated: string;
  lastUpdated: string;
  __v: number;
}
export interface ICaseType {
  docs: ICaseTypeDocs[];
  totalDocs: number | null | undefined;
  limit: number | null | undefined;
  totalPages: number | null | undefined;
  page: number | null | undefined;
  pagingCounter: number | null | undefined;
  hasPrevPage: boolean | null | undefined;
  hasNextPage: boolean | null | undefined;
  prevPage: null | undefined;
  nextPage: null | undefined;
}

export interface ICaseTypeResponse {
  success?: boolean;
  message?: string;
  data?: ICaseType;
}
