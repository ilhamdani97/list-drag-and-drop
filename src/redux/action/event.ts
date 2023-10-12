import { ListLessonData, ListSessionData } from "../../utils/types"

export const setDataListSession = (dataListSession: ListSessionData[]) => {
    return {
        type: 'SET_DATA_LIST_SESSION',
        dataListSession
    }
}

export const addListSession = (addListSession: ListSessionData) => {
    return {
        type: 'ADD_DATA_LIST_SESSION',
        addListSession
    }
}

export const updateNameSession = (index : number, name: string) => {
    return {
        type: 'UPDATE_DATA_NAME_SESSION',
        index,
        name
    }
}

export const addListLesson = (index: number, addListLesson: ListLessonData) => {
    return {
        type: 'ADD_DATA_LIST_LESSON',
        index,
        addListLesson
    }
}

export const updateListLesson = (index: number, updateListLesson: ListLessonData) => {
    return {
        type: 'UPDATE_DATA_LIST_LESSON',
        index,
        updateListLesson
    }
}

export const deleteListLesson = (idLesson: number, idSession: number) => {
    return {
        type: 'DELETE_DATA_LIST_LESSON',
        idLesson,
        idSession
    }
}

export const addListLessonDrag = (index: number, addListLessonDrag: ListLessonData[]) => {
    return {
        type: 'ADD_DATA_LIST_LESSON_DRAG',
        index,
        addListLessonDrag
    }
}