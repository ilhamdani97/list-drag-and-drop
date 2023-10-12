
export interface ListSessionData {
    labelSession: string;
    listLeasson: ListLessonData[];
}

export interface ListLessonData {
    id: string;
    isOnline: boolean;
    titleLeason: string;
    isRequired: boolean;
    isPreviewable: boolean;
    scheduleTime: Date | undefined;
    durationTime: string;
    isDownloadable: boolean;
}

export interface FormDataLesson {
    lessonName: string | null;
    isOnline: boolean | null;
    isRequired: boolean | null;
    isPreview: boolean | null;
    isDownload: boolean | null;
    duration: string | null;
    schadule: Date | undefined;
}