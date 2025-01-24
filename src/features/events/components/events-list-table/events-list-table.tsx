import {
  Chip,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { LinkBehavior, LoadingIndicator } from "@/shared/components";
import { appFormatDate } from "@/shared/utils";
import { RequestStatus } from "@/shared/models";

import { PlannedEvent } from "../../models";

export type EventsListTableProps = {
  plannedEvents: PlannedEvent[];
  status: RequestStatus;
};

export function EventsListTable({
  plannedEvents,
  status,
}: EventsListTableProps) {
  return (
    <TableContainer component={Paper} elevation={4}>
      <Table aria-label="planned events table">
        <TableHead>
          <TableRow>
            <TableCell width="30%">Title</TableCell>
            <TableCell align="right" width="50%">
              Date
            </TableCell>
            <TableCell align="right" width="10%">
              Type
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {status === "pending" && (
            <TableRow>
              <TableCell colSpan={4}>
                <LoadingIndicator />
              </TableCell>
            </TableRow>
          )}
          {status === "failed" && (
            <TableRow>
              <TableCell colSpan={4}>
                <Typography color="error">
                  An unknown error has occurred
                </Typography>
              </TableCell>
            </TableRow>
          )}
          {plannedEvents.map((plannedEvent) => (
            <TableRow
              key={plannedEvent.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{plannedEvent.title}</TableCell>
              <TableCell align="right">
                {appFormatDate(plannedEvent.eventDateTime)}
              </TableCell>
              <TableCell align="right">
                <Chip variant="outlined" label={plannedEvent.eventType.name} />
              </TableCell>
              <TableCell align="center">
                <Link
                  component={LinkBehavior}
                  href={`/events/${plannedEvent.id}`}
                  underline="none"
                >
                  Details
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EventsListTable;
