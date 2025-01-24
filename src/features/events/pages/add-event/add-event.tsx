import { Grid2, Typography } from "@mui/material";

import { AddEventForm } from "../../components";

export function AddEventPage() {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <Typography variant="h4">Add new event</Typography>
      </Grid2>
      <AddEventForm />
    </Grid2>
  );
}

export default AddEventPage;
