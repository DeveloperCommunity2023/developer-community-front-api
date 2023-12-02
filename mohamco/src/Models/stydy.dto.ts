export interface StudyDto {
  count: number;
  studyList: StudyList[];
}
export interface StudyList {
  studySeq: number;
  studyName: string;
  studyDesc: string;
  studyCount: number;
  profileUrl: string;
  headerUrl: number;
  recruitYn: number;
}

export interface createData {
  studySeq: number;
  studyName: string;
  studyDesc: string;
  openYn: number;
  recruitYn: number;
  studyCount: number;
}
