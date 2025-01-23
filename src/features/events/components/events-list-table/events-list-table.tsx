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
import { Link as RouterLink } from "react-router-dom";

import { PlannedEvent } from "../../models";

export type EventsListTableProps = {
  plannedEvents: PlannedEvent[];
};

export function EventsListTable({ plannedEvents }: EventsListTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
              <TableCell component="th" scope="row">
                {plannedEvent.title}
              </TableCell>
              <TableCell align="right">
                {plannedEvent.date.toString()}
              </TableCell>
              <TableCell align="right">{plannedEvent.type.name}</TableCell>
              <TableCell align="center">
                <Link
                  component={RouterLink}
                  to={`/events/${plannedEvent.id}`}
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
