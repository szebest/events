import { Box, Chip, Grid2, Stack, Typography } from "@mui/material";

import { appFormatDate } from "@/shared/utils";

import { PlannedEvent } from "../../models";

import styles from "./event-details.module.scss";

export type EventsDetailsProps = {
  plannedEvent: PlannedEvent;
};

export function EventsDetails({ plannedEvent }: EventsDetailsProps) {
  return (
    <Grid2 container>
      <Grid2 size={{ sm: 12, md: 4 }}>
        <Box className={styles.imgContainer}>
          <img src={plannedEvent.imageUrl} />
        </Box>
      </Grid2>
      <Grid2 size={{ sm: 12, md: 8 }}>
        <Box p={{ sm: 0, md: 4 }} pt={{ sm: 4, md: 1 }}>
          <Stack spacing={2}>
            <Box>
              <Typography variant="h4">{plannedEvent.title}</Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                {appFormatDate(plannedEvent.eventDateTime)}
              </Typography>
              <Typography variant="h6">{plannedEvent.eventLocation}</Typography>
            </Box>
            <Box>
              <Chip variant="outlined" label={plannedEvent.eventType.name} />
            </Box>
            <Box>
              <Typography variant="body1">
                Organizer's phone number: {plannedEvent.contactPhone}
              </Typography>
              <Typography variant="body1">
                Organizer's email: {plannedEvent.contactEmail}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Grid2>
      <Grid2 mt={2}>
        <Typography variant="body1">{plannedEvent.description}</Typography>
      </Grid2>
    </Grid2>
  );
}

export default EventsDetails;
