import { useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";

import { LinkBehavior } from "@/shared/components";
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
    <Stack spacing={2}>
      <Box display="flex" justifyContent="end">
        <Button
          LinkComponent={LinkBehavior}
          href="/events/add"
          variant="contained"
        >
          Add event
        </Button>
      </Box>
      <EventsListTable plannedEvents={plannedEvents} />
    </Stack>
  );
}

export default EventsListPage;
