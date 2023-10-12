import { ListLessonData, ListSessionData } from "../../utils/types"

interface AppReducerState {
    dataListSession: ListSessionData[]
}
export type AppReducerAction = 
| { type: 'SET_DATA_LIST_SESSION' ; dataListSession: ListSessionData[] }
| { type: 'ADD_DATA_LIST_SESSION' ; addListSession: ListSessionData }
| { type: 'ADD_DATA_LIST_LESSON' ; addListLesson: ListLessonData; index: number }
| { type: 'UPDATE_DATA_LIST_LESSON' ; updateListLesson: ListLessonData; index: number }
| { type: 'DELETE_DATA_LIST_LESSON' ; idLesson: number; idSession: number }
| { type: 'ADD_DATA_LIST_LESSON_DRAG' ; addListLessonDrag: ListLessonData[]; index: number }
| { type: 'UPDATE_DATA_NAME_SESSION' ; index: number; name: string }


const defaultState = {
    dataListSession: [],
} as AppReducerState;

export default function eventReducer(
    state = defaultState,
    action: AppReducerAction
) {
    switch (action.type) {
        case 'SET_DATA_LIST_SESSION':
            return {
                ...state,
                dataListSession: action.dataListSession
            }
        case 'ADD_DATA_LIST_SESSION':
            return {
                ...state,
                dataListSession: state.dataListSession.concat(action.addListSession)
            }
        case 'ADD_DATA_LIST_LESSON':
            let dataSessions = [...state.dataListSession];
            dataSessions[action.index].listLeasson.push(action.addListLesson);

            return {
                ...state,
                dataListSession: dataSessions
            }
        case 'UPDATE_DATA_LIST_LESSON':
            let dataSessionUpdate = [...state.dataListSession];
            const indexLesson = dataSessionUpdate[action.index].listLeasson.findIndex((data) => data.id === action.updateListLesson.id)
            dataSessionUpdate[action.index].listLeasson[indexLesson] = action.updateListLesson

            return {
                ...state,
                dataListSession: dataSessionUpdate
            }
        case 'DELETE_DATA_LIST_LESSON':
            let dataSessionDelete = [...state.dataListSession];
            const dataDelete = dataSessionDelete[action.idSession].listLeasson[action.idLesson]
            const listLesson = dataSessionDelete[action.idSession].listLeasson.filter(data=> data.id !== dataDelete.id)
            dataSessionDelete[action.idSession].listLeasson = listLesson;

            return {
                ...state,
                dataListSession: dataSessionDelete
            }
        case 'ADD_DATA_LIST_LESSON_DRAG':
            let dataSessionsDrag = [...state.dataListSession];
            dataSessionsDrag[action.index].listLeasson = action.addListLessonDrag
            return {
                ...state,
                dataListSession: dataSessionsDrag
            }
        case 'UPDATE_DATA_NAME_SESSION':
            let dataSessionName = [...state.dataListSession];
            dataSessionName[action.index].labelSession = action.name
            return {
                ...state,
                dataListSession: dataSessionName
            }
        default:
            return state;
    }
}