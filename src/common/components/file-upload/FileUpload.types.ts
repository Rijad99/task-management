export interface File {
  name: string;
  extension: '.pdf' | '.txt' | '.fig';
  size: number;
  icon?: string;
}

export enum FileExtensionTypes {
  PDF = '.pdf',
  TXT = '.txt',
  FIG = '.fig',
}

export enum FileSizeTypes {
  KILOBYTES = 'KB',
  MEGABYTES = 'MB',
}
