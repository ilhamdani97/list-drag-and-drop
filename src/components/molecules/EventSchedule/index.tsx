import React from "react";
import EventSchedules from "./styles";

interface Props {
    schedule: string;
}

const EventSchedule = ({
    schedule
}: Props) => {

    return (
        <EventSchedules.Container>
            <EventSchedules.Label>
                {`Event Schedule: ${schedule}`}
            </EventSchedules.Label>
        </EventSchedules.Container>
    )
}

export default EventSchedule