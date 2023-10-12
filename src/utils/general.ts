import { FormDataLesson } from "./types";

export function randomId(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export function isEqualObject(value: FormDataLesson, valueCompare: FormDataLesson) {
    return  value.lessonName === valueCompare.lessonName &&
            value.isRequired === valueCompare.isRequired &&
            value.isDownload === valueCompare.isDownload &&
            value.isPreview === valueCompare.isPreview &&
            value.isOnline === valueCompare.isOnline &&
            value.duration === valueCompare.duration &&
            value.schadule === valueCompare.schadule
}