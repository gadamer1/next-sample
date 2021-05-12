import {
  GET_RECENT_LAWLIST_REQUEST,
  GET_RECENT_LAWLIST_SUCCESS,
  GET_RECENT_LAWLIST_FAILURE,
  GET_DETAIL_LAWDATA_REQUEST,
  GET_DETAIL_LAWDATA_SUCCESS,
  GET_DETAIL_LAWDATA_FAILURE,
  QUERYING_LAWLIST_REQUEST,
  QUERYING_LAWLIST_SUCCESS,
  QUERYING_LAWLIST_FAILURE,
} from "./actions";

//////////////////STATES////////////////

/*LawData state */

export interface lawList {
  statutorySerialNumber: string; // 법령 일련 번호
  StatutoryHangul: string; // 법령명 한글
  statutoryId: string; // 법령 id
  proclamationDate: string; // 공포 일자
  proclamationNum: string; // 공포 번호
  rivisionName: string; //재개정 구분명
  competentDepartmentName: string; // 소관 부처 명
  competentDepartmentCode: string; // 소관 부처 코드
  effectiveDate: string; // 시행 일자
}

interface provision {
  provisionNum: string; // 조문 번호
  provision: string; // 조문 여부
  provisionTitle: string; // 조문 제목
  provisionEffectiveDate: string; // 조문 시행 일자
  provisionRevision: string; // 조문 재개정 유형
  provisionMoveBefore: string; // 조문 이동 이전
  provisionMoveAfter: string; // 조문 이동 이후
  provisionChange: string; // 조문 변경 여부 (Y값이 있으면 해당 조문 내에 변경 내용 있음)
  provisionContent: string; // 조문 내용
  columns: Array<column>;
}

interface column {
  columnNum: string; // 항번호
  columnRevisionType: string; // 항 재개정 유형
  columnContent: string; // 항 내용
  units: Array<unit> | null;
}

interface unit {
  unitNum: string; //호번호
  unitContent: string; // 호내용
}

export interface lawDetail {
  provisions: Array<provision>;
  statutorySerialNumber: string; // 법령 일련 번호
  lawKorName: string; // 법령명 한글
  statutoryId: string; // 법령 id
  proclamationDate: string; // 공포 일자
  proclamationNum: string; // 공포 번호
  rivisionName: string; //재개정 구분명
  competentDepartmentName: string; // 소관 부처 명
  competentDepartmentCode: string; // 소관 부처 코드
  effectiveDate: string; // 시행 일자
  lawTypeSort: string; // 법종류의 구분
  lawTypeCode: string; // 법종 구분 코드
  statutoryAbbreviation: string; // 법령명 약칭
  TeleNum: string; // 전화 번호
}

export interface lawData {
  lawList: Array<lawList> | null;
  lawDetail: lawDetail | null;
  searchLawResultList: {
    query: string | null;
    searchLawResultList: Array<lawList> | null;
  };
}

/* 로딩 상태 */
export interface loadingStates {
  isQuerying: boolean;
}

/* meta states */
export interface metaStates {
  requestError: number;
}

//////////////Actions////////////////////

/* 최근 법령 */
export interface getRecentLawListRequest {
  type: typeof GET_RECENT_LAWLIST_REQUEST;
}
export interface getRecentLawListSuccess {
  type: typeof GET_RECENT_LAWLIST_SUCCESS;
}
export interface getRecentLawListFailure {
  type: typeof GET_RECENT_LAWLIST_FAILURE;
}

export interface getDetailLawDataRequest {
  type: typeof GET_DETAIL_LAWDATA_REQUEST;
  parameter: {
    statutoryId: string;
  };
}
export interface getDetailLawDataSuccess {
  type: typeof GET_DETAIL_LAWDATA_SUCCESS;
}
export interface getDetailLawDataFailure {
  type: typeof GET_DETAIL_LAWDATA_FAILURE;
}

export interface queryingLawListRequest {
  type: typeof QUERYING_LAWLIST_REQUEST;
  parameter: {
    query: string;
  };
}
export interface queryingLawListSuccess {
  type: typeof QUERYING_LAWLIST_SUCCESS;
}
export interface queryingLawListFailure {
  type: typeof QUERYING_LAWLIST_FAILURE;
}

export type lawActions =
  | getRecentLawListRequest
  | getRecentLawListSuccess
  | getRecentLawListFailure
  | getDetailLawDataRequest
  | getDetailLawDataSuccess
  | getDetailLawDataFailure
  | queryingLawListRequest
  | queryingLawListSuccess
  | queryingLawListFailure;

export interface lawDataStore {
  lawData: lawData | null;
  loadingStates: loadingStates;
  metaStates: metaStates;
}
