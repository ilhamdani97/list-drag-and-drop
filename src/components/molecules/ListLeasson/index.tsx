import React, { memo } from "react";
import ListLeassons from "./styles";
import { LeasonMateri, LeassonTimeAction } from "../";

export interface PropsListLeasson {
    typeLeasson: boolean;
    titleLeason: string;
    isRequired: boolean;
    isPreviewable: boolean;
    scheduleTime: string;
    durationTime: string;
    isDownloadable: boolean;
    onEditLesson: () => void;
    onDeleteLesson: () => void;
}

const ListLeasson = ({
    typeLeasson,
    titleLeason,
    isRequired,
    isPreviewable,
    scheduleTime,
    durationTime,
    isDownloadable,
    onEditLesson,
    onDeleteLesson
}: PropsListLeasson) => {
    return (
        <ListLeassons.Container >
            <LeasonMateri
                type={typeLeasson}
                titleMateri={titleLeason}
                isPreview={isPreviewable}
                isRequired={isRequired}
            />
            <LeassonTimeAction
                schadule={scheduleTime}
                duration={durationTime}
                isDownload={isDownloadable}
                handleEdit={onEditLesson}
                handleDelete={onDeleteLesson}
            />
        </ListLeassons.Container>
    )
}

export default memo(ListLeasson);