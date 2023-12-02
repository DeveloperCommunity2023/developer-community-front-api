export interface ProjectDto {
    studyList: ProjectList[];
  }
  export interface ProjectList {
    projectSeq: number;
    projectName: string;
    projectDesc: string;
    projectCount: number;
    profileUrl: string;
    headerUrl: number;
    recruitYn: number;
  }
  