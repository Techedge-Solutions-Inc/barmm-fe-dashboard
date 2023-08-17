export type TSpotReportTypeManagement =
  | {
      spotCode: string;
      spotTitle: string;
      spotDescription: string;
      createdBy?: string;
      dateCreated?: string;
      action?: string;
      updatedBy?: string;
      dateUpdated?: string;
      isActive?: boolean;
    }
  | null
  | undefined;
