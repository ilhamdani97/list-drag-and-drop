import React from "react";
import LeasonMateris from "./styles";
import { FaGripVertical } from 'react-icons/fa';
import colors from "../../../utils/colors";
import { IconLeason } from "../../atoms";

interface Props {
    type: boolean;
    titleMateri: string;
    isRequired: boolean;
    isPreview: boolean;
}
const LeasonMateri = ({
    type,
    titleMateri,
    isRequired,
    isPreview
}: Props) => {
    
    return (
        <LeasonMateris.Container>
            <LeasonMateris.IconBurge>
                <FaGripVertical color={colors.text50} size={24}/>
            </LeasonMateris.IconBurge>
            
            <IconLeason type={type} />
            <LeasonMateris.TitleVideo>
                <LeasonMateris.TextVideo>
                    {titleMateri}
                </LeasonMateris.TextVideo>
               
                {isRequired && 
                    <>
                        <LeasonMateris.line/>
                        <LeasonMateris.TextRequired>
                            {'Required'}
                        </LeasonMateris.TextRequired>
                    </>
                }
            </LeasonMateris.TitleVideo>
            {isPreview && (
                <>
                    <LeasonMateris.Dot/>
                    <LeasonMateris.TextPreview>
                        {'Previewable'}
                    </LeasonMateris.TextPreview>
                </>
            )}
        </LeasonMateris.Container>
    )
}

export default LeasonMateri