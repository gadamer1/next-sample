import produce from "immer";
import { lawDataStore, lawActions } from "./interfaces";
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

const DummyUnit = {
  unitNum: "1.",
  unitContent:
    '1. "검역감염병"이란 다음 각 목의 어느 하나에 해당하는 것을 말한다.',
};

const DummyColumn = {
  columnContent:
    "⑤ 제1항과 제2항에 따른 소독 및 감염병 매개체를 없애는 일은 보건복지부령으로 정하는 자격이 있는 자가 하여야 한다. <개정 2010.1.18>",
  columnNum: "⑤ ",
  columnRevisionType: "y",
  units: [DummyUnit, DummyUnit, DummyUnit, DummyUnit],
};

const DummyProvision = {
  provision: "전문",
  provisionChange: "Y",
  provisionContent:
    "제1조(목적) 이 법은 우리나라로 들어오거나 외국으로 나가는 운송수단, 사람 및 화물을 검역(檢疫)하는 절차와 감염병을 예방하기 위한 조치에 관한 사항을 규정하여 국내외로 감염병이 번지는 것을 방지함으로써 국민의 건강을 유지ㆍ보호하는 것을 목적으로 한다.",
  provisionEffectiveDate: "20140919",
  provisionMoveAfter: "000000",
  provisionMoveBefore: "000000",
  provisionNum: "2",
  provisionRevision: "본조신설",
  provisionTitle: "국제공인예방접종지정기관의 지정 등",
  columns: [DummyColumn, DummyColumn, DummyColumn, DummyColumn, DummyColumn],
};

const DummyLawDetail = {
  TeleNum: "010-1234-1234",
  competentDepartmentCode: "1613000",
  competentDepartmentName: "국토교통부",
  effectiveDate: "20210421",
  lawKorName: "검역법",
  lawTypeCode: "A0002",
  lawTypeSort: "법률",
  proclamationDate: "20201020",
  proclamationNum: "17553",
  rivisionName: "일부개정",
  statutoryAbbreviation: " ",
  statutoryId: "001790",
  statutorySerialNumber: "222563",
  provisions: [DummyProvision, DummyProvision, DummyProvision, DummyProvision],
};

const DummyLawList = {
  StatutoryHangul: "검역법",
  competentDepartmentCode: "1790387",
  competentDepartmentName: "질병관리청",
  effectiveDate: "20140919",
  proclamationDate: "20140318",
  proclamationNum: "12445",
  rivisionName: "일부개정",
  statutoryId: "001790",
  statutorySerialNumber: "0017902014031812445",
};

const initialState: lawDataStore = {
  lawData: {
    lawDetail: null,
    lawList: null,
    searchLawResultList: {
      query: null,
      searchLawResultList: null,
    },
  },
  loadingStates: {
    isQuerying: false,
  },
  metaStates: {
    requestError: 0,
  },
};

const lawDataReducer = (state = initialState, action: lawActions) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_RECENT_LAWLIST_REQUEST: {
        draft.loadingStates.isQuerying = true;
        break;
      }
      case GET_RECENT_LAWLIST_SUCCESS: {
        draft.loadingStates.isQuerying = false;
        draft.lawData.lawList = [
          DummyLawList,
          DummyLawList,
          DummyLawList,
          DummyLawList,
        ];
        break;
      }
      case GET_RECENT_LAWLIST_FAILURE: {
        draft.loadingStates.isQuerying = false;
        break;
      }

      case GET_DETAIL_LAWDATA_REQUEST: {
        draft.loadingStates.isQuerying = true;
        break;
      }
      case GET_DETAIL_LAWDATA_SUCCESS: {
        draft.loadingStates.isQuerying = false;
        draft.lawData.lawDetail = DummyLawDetail;
        break;
      }
      case GET_DETAIL_LAWDATA_FAILURE: {
        draft.loadingStates.isQuerying = false;
        break;
      }

      case QUERYING_LAWLIST_REQUEST: {
        draft.loadingStates.isQuerying = true;
        draft.lawData.searchLawResultList.query = action.parameter.query;
        break;
      }
      case QUERYING_LAWLIST_SUCCESS: {
        draft.loadingStates.isQuerying = false;
        console.log("?");
        draft.lawData.searchLawResultList.searchLawResultList = [
          DummyLawList,
          DummyLawList,
          DummyLawList,
          DummyLawList,
        ];
        break;
      }
      case QUERYING_LAWLIST_FAILURE: {
        draft.loadingStates.isQuerying = false;
        break;
      }

      default:
        return draft;
    }
  });
};

export default lawDataReducer;
