import React, { memo, useState } from "react";
import CardSessions from "./styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ListLeasson, SessionLesson } from "../../molecules";
import { ListLessonData } from "../../../utils/types";
import { Button } from "../../atoms";
import { FaPlus } from "react-icons/fa";
import moment from "moment";
import EmptyData from "../../molecules/EmptyData";

export interface PropsSession {
    labelSession: string;
    listLeasson: ListLessonData[] | null;
    handleActionSession: () => void;
    setNewList: (data: ListLessonData[]) => void;
    handleAddLesson: () => void;
    handleEditLesson: (data: ListLessonData) => void;
    handleDeleteLesson: (id: number) => void;
    handleEditSession: () => void;
}

const CardSession = ({
    labelSession,
    handleActionSession,
    listLeasson,
    setNewList,
    handleAddLesson,
    handleEditLesson,
    handleDeleteLesson,
    handleEditSession
}: PropsSession) => {

    const [listDataLesson, setListDataLesson] = useState<ListLessonData[] | null>(listLeasson);

    const onDragEnd = (result: any) => {
        if(result?.destination) {
            const newItems = Array.from(listDataLesson || []);
            const [removed] = newItems.splice(result.source.index, 1);
            newItems.splice(result.destination.index, 0, removed);
            setNewList(newItems);
            setListDataLesson(newItems);
        }
       
    };

    return (
        <CardSessions.Container>
            <SessionLesson label={labelSession} handleAction={handleActionSession} handleEdit={handleEditSession}/>
            <CardSessions.Content height={listDataLesson && listDataLesson.length > 0 ? listDataLesson.length * 68 : 88}>
                <DragDropContext onDragEnd={(result: any) => onDragEnd(result)}>
                    <Droppable droppableId="droppable">
                        {(droppableProvided) => (
                            <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
                                {listDataLesson && listDataLesson.length > 0 ? (
                                    <>
                                        {listDataLesson && listDataLesson.map((data, index) => (
                                            <Draggable index={index} key={data.id} draggableId={data.id}>
                                                {(provided, snapshot) => (
                                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <ListLeasson
                                                            key={index}
                                                            typeLeasson={data.isOnline}
                                                            titleLeason={data.titleLeason}
                                                            isRequired={data.isRequired}
                                                            isPreviewable={data.isPreviewable}
                                                            scheduleTime={moment(data.scheduleTime).format('lll')}
                                                            durationTime={data.durationTime}
                                                            isDownloadable={data.isDownloadable}
                                                            onEditLesson={() => handleEditLesson(data)}
                                                            onDeleteLesson={() => handleDeleteLesson(index)}
                                                        />
                                                        {droppableProvided.placeholder}
                                                    </div>
                                                    
                                                )}
                                            </Draggable>
                                            
                                            
                                        ))}
                                    </>
                                ): (
                                    <EmptyData type={'Lesson'}/>
                                )}
                                
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </CardSessions.Content>
            <CardSessions.ButtonAdd>
                <Button title={''} variant={'primary'} onClick={handleAddLesson} mode={'small'} Icon={FaPlus}/>
                <CardSessions.textAdd>
                    {'Add Lesson Material'}
                </CardSessions.textAdd>
            </CardSessions.ButtonAdd>
        </CardSessions.Container>
    )
}

export default memo(CardSession)