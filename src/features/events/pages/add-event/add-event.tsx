import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid2, Typography } from "@mui/material";

import { useAppDispatch } from "@/shared/hooks";

import { addEvent } from "../../slices";
import { AddEventForm } from "../../components";
import { AddPlannedEventRequest, PlannedEvent } from "../../models";

export function AddEventPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (event: AddPlannedEventRequest) => {
    setLoading(true);
    setError(null);

    try {
      const response = await dispatch(addEvent(event));

      setError(null);

      //navigate(`/events/${(response.payload as PlannedEvent).id}`);
    } catch (e) {
      console.log(e);
      setError("Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <Typography variant="h4">Add new event</Typography>
      </Grid2>
      <AddEventForm onSubmit={onSubmit} loading={loading} error={error} />
    </Grid2>
  );
}

export default AddEventPage;
