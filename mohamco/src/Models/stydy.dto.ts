export interface StudyDto {
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
