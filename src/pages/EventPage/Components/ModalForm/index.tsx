import React, {useEffect, useState} from 'react';
import Modal from './styles';
import CloseIcon from '../../../../assets/images/close-icon.png'
import { Button, Input } from '../../../../components';
import { InputDatePicker, SwitchButton } from '../../../../components/atoms';
import { FormDataLesson, ListLessonData, ListSessionData } from '../../../../utils/types';
import moment from 'moment';
import { isEqualObject } from '../../../../utils/general';

interface Props {
    showModal: boolean;
    type: 'Session' | 'Lesson';
    dataEdit?: ListLessonData | null;
    sessionEdit?: string | null;
    onClose: () => void;
    handleSave: (value: FormDataLesson | ListSessionData) => void;
}

const ModalForm = ({
    showModal,
    type,
    onClose,
    handleSave,
    dataEdit,
    sessionEdit
}: Props) => {

    const [sessionName, setSessionName] = useState<string>('');
    const [formDataLesson, setFormDataLesson] = useState<FormDataLesson>({
        lessonName: null,
        isOnline: false,
        isRequired: false,
        isPreview: false,
        isDownload: false,
        duration: null,
        schadule: undefined
    });
    const [disableButton, setDisableButton] = useState<boolean>(false);

    const handleResetForm = () => {
        setFormDataLesson({
            lessonName: null,
            isOnline: false,
            isRequired: false,
            isPreview: false,
            isDownload: false,
            duration: null,
            schadule: undefined
        });
        setSessionName('');
    }

    const handleSaveData = () => {
        handleSave(type === 'Lesson' ? formDataLesson : {labelSession: sessionName, listLeasson: []})
        onClose();
        handleResetForm();
    }

    useEffect(() => {
        if(dataEdit) {
            setFormDataLesson({
                lessonName: dataEdit.titleLeason,
                isOnline: dataEdit.isOnline,
                isRequired: dataEdit.isRequired,
                isPreview: dataEdit.isPreviewable,
                isDownload: dataEdit.isDownloadable,
                duration: dataEdit.durationTime,
                schadule: dataEdit.scheduleTime
            })
            
        }
    },[dataEdit]);
    
    useEffect(() => {
        setSessionName(sessionEdit || '')
    },[sessionEdit])

    useEffect(() => {
        if(dataEdit) {
            const editData = {
                lessonName: dataEdit.titleLeason,
                isOnline: dataEdit.isOnline,
                isRequired: dataEdit.isRequired,
                isPreview: dataEdit.isPreviewable,
                isDownload: dataEdit.isDownloadable,
                duration: dataEdit.durationTime,
                schadule: dataEdit.scheduleTime
            }

            const disable = isEqualObject(editData, formDataLesson)
            setDisableButton(disable)
            
        } else if (sessionEdit) {
            setDisableButton(sessionEdit === sessionName)
        } else {
            if(type === 'Lesson') 
                setDisableButton(!formDataLesson.lessonName || !formDataLesson.duration || !formDataLesson.schadule);
            else 
                setDisableButton(!sessionName)
        }
       
    },[formDataLesson, sessionName])

    return (
        <Modal.Container show={showModal}>
            <Modal.Card>
                <Modal.Header>
                    <Modal.TitleHeader>
                        {`Form Add ${type}`}
                    </Modal.TitleHeader>
                    <Modal.IconClose src={CloseIcon} onClick={onClose}/>
                </Modal.Header>
                <Modal.Content>
                    <Modal.Form>
                        {type === 'Lesson' ? (
                            <>
                                <Input 
                                    value={formDataLesson.lessonName || ''} 
                                    variant={'default'}
                                    placeholder={'Lesson Name'}
                                    setValue={(value: string) => setFormDataLesson({...formDataLesson, lessonName: value})}
                                />
                                <SwitchButton
                                    label={'Online Lesson'}
                                    value={formDataLesson.isOnline || false}
                                    onChange={(value: boolean)=> setFormDataLesson({...formDataLesson, isOnline: value})}
                                />
                                <SwitchButton
                                    label={'Required Lesson'}
                                    value={formDataLesson.isRequired || false}
                                    onChange={(value: boolean)=> setFormDataLesson({...formDataLesson, isRequired: value})}
                                />
                                <SwitchButton
                                    label={'Can Preview Lesson'}
                                    value={formDataLesson.isPreview || false}
                                    onChange={(value: boolean)=> setFormDataLesson({...formDataLesson, isPreview: value})}
                                />
                                <SwitchButton
                                    label={'Can Download Lesson'}
                                    value={formDataLesson.isDownload || false}
                                    onChange={(value: boolean)=> setFormDataLesson({...formDataLesson, isDownload: value})}
                                />
                                <Input 
                                    value={formDataLesson.duration || ''} 
                                    variant={'default'}
                                    placeholder={'Duration'}
                                    setValue={(value: string)=> setFormDataLesson({...formDataLesson, duration: value})}
                                />
                                <InputDatePicker
                                    value={moment(formDataLesson.schadule).format('lll')}
                                    label='Schedule Lesson'
                                    onChange={(value: Date)=> setFormDataLesson({...formDataLesson, schadule: value})}
                                />
                            </>
                        ): (
                            <Input 
                                value={sessionName} 
                                variant={'default'}
                                placeholder={'Session Name'}
                                setValue={(value: string) => setSessionName(value)}
                            />
                        )}
                    </Modal.Form>
                </Modal.Content>
                <Modal.ContainerFooter>
                    <Button title={'Cancel'} variant={'danger'} onClick={onClose} mode={'default'}/>
                    <Button 
                        disable={disableButton} 
                        title={'Save'} 
                        variant={disableButton ? 'disable' : 'primary'} 
                        onClick={handleSaveData}
                        mode={'default'}/>
                </Modal.ContainerFooter>
            </Modal.Card>
        </Modal.Container>
    )
}

export default ModalForm;