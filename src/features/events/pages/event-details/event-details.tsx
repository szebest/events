import { useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { LoadingIndicator } from "@/shared/components";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";

import {
  fetchEventById,
  selectEventDetails,
  selectEventDetailsStatus,
} from "../../slices";
import { EventsDetails } from "../../components";

export type EventsDetailsPageProps = {
  eventId?: number;
};

export function EventsDetailsPage({ eventId }: EventsDetailsPageProps) {
  const dispatch = useAppDispatch();

  const plannedEvent = useAppSelector(selectEventDetails);
  const plannedEventStatus = useAppSelector(selectEventDetailsStatus);

  useEffect(() => {
    if (eventId === undefined || plannedEvent?.id === eventId) return;

    dispatch(fetchEventById(eventId));
  }, [eventId, plannedEvent]);

  if (!plannedEvent) {
    return <LoadingIndicator />;
  }

  if (plannedEventStatus === "failed") {
    return <Typography color="error">An unknown error has occurred</Typography>;
  }

  return (
    <Box>
      <EventsDetails plannedEvent={plannedEvent} />
    </Box>
  );
}

export default EventsDetailsPage;
