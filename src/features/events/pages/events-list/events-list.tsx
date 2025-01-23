import { useEffect } from "react";
import { Box } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@/shared/hooks";

import { fetchEvents, selectAllEvents, selectEventsStatus } from "../../slices";
import { EventsListTable } from "../../components";

export function EventsListPage() {
  const dispatch = useAppDispatch();

  const plannedEvents = useAppSelector(selectAllEvents);
  const eventsStatus = useAppSelector(selectEventsStatus);

  useEffect(() => {
    if (eventsStatus !== "idle") return;

    dispatch(fetchEvents());
  }, []);

  return (
    <Box>
      <EventsListTable plannedEvents={plannedEvents} />
    </Box>
  );
}

export default EventsListPage;
