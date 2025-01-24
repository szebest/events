import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { LinkBehavior } from "@/shared/components";

import { PlannedEvent } from "../../models";

export type EventsListTableProps = {
  plannedEvents: PlannedEvent[];
};

export function EventsListTable({ plannedEvents }: EventsListTableProps) {
  return (
    <TableContainer component={Paper}>
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
          {plannedEvents.map((plannedEvent) => (
            <TableRow
              key={plannedEvent.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{plannedEvent.title}</TableCell>
              <TableCell align="right">
                {plannedEvent.eventDateTime.toString()}
              </TableCell>
              <TableCell align="right">{plannedEvent.eventType.name}</TableCell>
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
