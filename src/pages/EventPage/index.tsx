import React, { useEffect, useState } from "react";
import Event from "./styles";
import { Button, CardSession, EmptyData, Header } from "../../components";

import ModalForm from "./Components/ModalForm";
import { FaPlus } from "react-icons/fa";
import HeaderCourse from "../../components/organisms/HeaderCourse";
import { EventSchedule} from "../../components/molecules";
import { FormDataLesson, ListLessonData, ListSessionData } from "../../utils/types";
import { useDispatch } from "react-redux";
import { store } from "../../redux/store";
import { addListLesson, addListLessonDrag, addListSession, deleteListLesson, setDataListSession, updateListLesson, updateNameSession } from "../../redux/action/event";
import { randomId } from "../../utils/general";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const EventPage = () => {
    interface PropsEdit {
        index: number;
        value: string;
    }
    interface PropsForm {
        showModal: boolean;
        type: 'Session' | 'Lesson';
        id?: number;
        dataEdit?: ListLessonData | null;
        sessionEdit?: string;
    }

    const dispatch = useDispatch();
    const stores = store.getState();
    const dataListSession = stores.event.dataListSession;
    const [listSession, setListSession] = useState<ListSessionData[] | null>(null);
    const [lisLesson, setLisLesson] = useState<ListLessonData[] | null>(null);
    const [showForm, setShowForm] = useState<PropsForm>({
        showModal: false,
        type: 'Session',
        id: -1
    })

    
    const handleSaveSession = (value: FormDataLesson | ListSessionData) => {
        if(showForm.type === 'Lesson') {
            const valueLessson = value as FormDataLesson;
            const dataLesson = {
                id: showForm.dataEdit ? showForm.dataEdit.id : randomId(20),
                isOnline: valueLessson.isOnline || false,
                titleLeason: valueLessson.lessonName || '',
                isRequired: valueLessson.isRequired || false ,
                isPreviewable: valueLessson.isPreview || false ,
                scheduleTime: valueLessson.schadule,
                durationTime: valueLessson.duration || '',
                isDownloadable: valueLessson.isDownload || false
            }

            if(showForm.dataEdit)
                dispatch(updateListLesson(showForm.id || 0, dataLesson))
            else
                dispatch(addListLesson(showForm.id || 0 , dataLesson))
        } else {
            const dataSession = value as ListSessionData;
            if(showForm.sessionEdit)
                dispatch(updateNameSession(showForm.id || 0, dataSession.labelSession))
            else 
                dispatch(addListSession(dataSession))
        }
    }

    const handleDragList = (data: ListLessonData[], index: number) => {
        dispatch(addListLessonDrag(index, data))
    }

    const handleEditLesson = (data: ListLessonData, id: number) => {
        setShowForm({
            showModal: true,
            id: id,
            type: 'Lesson',
            dataEdit: data
        })
    }

    const onDragEnd = (result: any) => {
        if(result?.destination) {
            const newItemsList = Array.from(listSession || []);
            const [removed] = newItemsList.splice(result.source.index, 1);
            newItemsList.splice(result.destination.index, 0, removed);

            setListSession(newItemsList);
            dispatch(setDataListSession(newItemsList));
        }
       
    };

    const handleDeleteLesson = (indexLesson: number, indexSession: number) => {
        setListSession([])
        dispatch(deleteListLesson(indexLesson, indexSession))
    }

    const handleDeleteSession = (indexSession: number) => {
        let dataSessionDelete = [...listSession || []];
        const dataDelete = dataSessionDelete[indexSession]
        const listLesson = dataSessionDelete.filter(data => data !== dataDelete)
        dataSessionDelete = listLesson;
        setListSession(dataSessionDelete);
        dispatch(setDataListSession(dataSessionDelete));
    }

    useEffect(() => {
        setListSession(dataListSession);
    }, [dataListSession])
 
    return (
        <Event.Container>
            <Header title={'Event'} goBack={()=> {}}/>
            <Event.Content height={listSession && listSession.length > 0 ? listSession.length * 140 : 200 }>
                <HeaderCourse
                    labelCourse={'Belajar dan praktek cinematic videography'}
                    tabLabel={'Curricullum'}
                    date={'Last edited 18 October 2021 | 13:23'}
                    onPreview={()=> {}}
                />

                <EventSchedule schedule={'22 Desember 2021'}/>

                <DragDropContext onDragEnd={(result: any) => onDragEnd(result)}>
                    <Droppable droppableId="droppable">
                        {(droppableProvided) => (
                            <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
                                {listSession && listSession.length > 0 ? (
                                    <>
                                        {listSession.map((data, index) => (
                                            <Draggable index={index} key={`${data.labelSession}${index}`} draggableId={`${data.labelSession}${index}`}>
                                                {(provided, snapshot) => (
                                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <CardSession
                                                            key={index}
                                                            labelSession={data.labelSession}
                                                            listLeasson={data.listLeasson}
                                                            handleActionSession={() => handleDeleteSession(index)}
                                                            handleEditSession={() => {
                                                                setShowForm({
                                                                    showModal: true,
                                                                    id: index,
                                                                    sessionEdit: data.labelSession,
                                                                    type: 'Session'
                                                                })
                                                            }}
                                                            handleEditLesson={(datas) => handleEditLesson(datas, index)}
                                                            handleDeleteLesson={(id) => handleDeleteLesson(id, index)}
                                                            setNewList={(data: ListLessonData[]) => handleDragList(data, index)}
                                                            handleAddLesson={() => setShowForm({
                                                                showModal: true,
                                                                type: 'Lesson',
                                                                id: index
                                                            })}
                                                        />
                                                        {droppableProvided.placeholder}
                                                    </div>
                                                    
                                                )}
                                            </Draggable>
                                            
                                        ))}

                                    </>
                                ) : (
                                    <EmptyData type={'Session'}/>
                                )}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                
                
                <Event.ContentButton>
                    <Button title={'Add Session'} variant={'primary'} onClick={()=> setShowForm({showModal: true, type: 'Session'})} mode={'default'} Icon={FaPlus}/>
                </Event.ContentButton>
            </Event.Content>
            
            <ModalForm
                showModal={showForm.showModal} 
                type={showForm.type}
                sessionEdit={showForm.sessionEdit}
                dataEdit={showForm.dataEdit}
                handleSave={(value) =>  handleSaveSession(value)}
                onClose={() => setShowForm({...showForm, showModal: false})}
            />
        </Event.Container>
    )
}

export default EventPage;