import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  Grid2,
  Typography,
  FormControl,
  Box,
  Stack,
} from "@mui/material";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

import { AddPlannedEventRequest, UploadedImage } from "../../models";

import styles from "./add-event-form.module.scss";
import { eventFormToAddEventRequestMapper } from "../../mappers";
import { EVENT_TYPES } from "../../mock";

export type AddEventFormProps = {
  onSubmit?: (_: AddPlannedEventRequest) => void;
  loading: boolean;
  error: string | null;
};

export function AddEventForm({ onSubmit, loading, error }: AddEventFormProps) {
  const formik = useFormik({
    initialValues: {
      title: "",
      eventDateTime: new Date(),
      description: "",
      image: null as UploadedImage,
      eventTypeId: null as number | null,
      contactPhone: "",
      contactEmail: "",
      eventLocation: "",
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      title: Yup.string().required("Event title is required"),
      eventDateTime: Yup.date().required("Date and time are required"),
      description: Yup.string().required("Description is required"),
      image: Yup.mixed().required("Image is required"),
      eventTypeId: Yup.number().required("The type of event is required"),
      contactPhone: Yup.string()
        .matches(/^\+?[0-9]{9,15}$/, "Incorrect phone number")
        .required("A telephone number is required"),
      contactEmail: Yup.string()
        .email("Incorrect e-mail address")
        .required("An e-mail address is required"),
      eventLocation: Yup.string().required("Venue is required"),
    }),
    onSubmit: (values) => {
      const mapped = eventFormToAddEventRequestMapper(values);

      onSubmit?.(mapped);
    },
  });

  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];

    formik.setFieldValue("image", { file, url: URL.createObjectURL(file) });
  };

  const handleResetForm = () => {
    formik.resetForm();
    formik.setFieldValue("eventDateTime", new Date());

    setIsPreviewVisible(false);
  };

  const togglePreviewImage = () => {
    setIsPreviewVisible((prev) => !prev);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={3}>
          <Grid2 size={12}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Event title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid2>

          <Grid2 size={12}>
            <DesktopDateTimePicker
              label="Date and time of the event"
              value={formik.values.eventDateTime}
              onChange={(value) => formik.setFieldValue("eventDateTime", value)}
              minDate={new Date()}
              closeOnSelect={false}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error:
                    formik.touched.eventDateTime &&
                    Boolean(formik.errors.eventDateTime),
                },
              }}
            />
          </Grid2>

          <Grid2 size={12}>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Grid2>

          <Grid2 size={12}>
            <Button variant="contained" component="label">
              Upload event image
              <input type="file" hidden onChange={handleFileSelected} />
            </Button>
            {formik.values.image && (
              <Stack spacing={1}>
                <Typography pt={1}>
                  Uploaded image name: {formik.values.image.file.name}
                </Typography>
                <Button
                  variant="contained"
                  onClick={togglePreviewImage}
                  sx={{ width: "max-content" }}
                >
                  {isPreviewVisible ? "Hide image" : "Show image"}
                </Button>
                {isPreviewVisible && (
                  <Box className={styles.imgContainer}>
                    <img src={formik.values.image.url} />
                  </Box>
                )}
              </Stack>
            )}
            {formik.errors.image && formik.touched.image && (
              <Typography color="error">{formik.errors.image}</Typography>
            )}
          </Grid2>

          <Grid2 size={12}>
            <FormControl fullWidth>
              <TextField
                select
                label="Type of event"
                id="eventTypeId"
                name="eventTypeId"
                value={formik.values.eventTypeId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.eventTypeId &&
                  Boolean(formik.errors.eventTypeId)
                }
                helperText={
                  formik.touched.eventTypeId && formik.errors.eventTypeId
                }
              >
                {EVENT_TYPES.map((eventType) => (
                  <MenuItem key={eventType.id} value={eventType.id}>
                    {eventType.name}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid2>

          <Grid2 size={12}>
            <TextField
              fullWidth
              id="contactPhone"
              name="contactPhone"
              label="Contact phone number"
              value={formik.values.contactPhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.contactPhone &&
                Boolean(formik.errors.contactPhone)
              }
              helperText={
                formik.touched.contactPhone && formik.errors.contactPhone
              }
            />
          </Grid2>

          <Grid2 size={12}>
            <TextField
              fullWidth
              id="contactEmail"
              name="contactEmail"
              label="Contact e-mail address"
              value={formik.values.contactEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.contactEmail &&
                Boolean(formik.errors.contactEmail)
              }
              helperText={
                formik.touched.contactEmail && formik.errors.contactEmail
              }
            />
          </Grid2>

          <Grid2 size={12}>
            <TextField
              fullWidth
              id="eventLocation"
              name="eventLocation"
              label="Event location"
              value={formik.values.eventLocation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.eventLocation &&
                Boolean(formik.errors.eventLocation)
              }
              helperText={
                formik.touched.eventLocation && formik.errors.eventLocation
              }
            />
          </Grid2>

          <Grid2 size={12}>
            <Stack spacing={1}>
              <Box display="flex" justifyContent="end" gap={2}>
                <Button
                  color="primary"
                  variant="outlined"
                  type="reset"
                  onClick={handleResetForm}
                >
                  Clear form
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  disabled={!formik.isValid || loading}
                >
                  Save event
                </Button>
              </Box>
              {error && (
                <Box display="flex" justifyContent="end">
                  {error}
                </Box>
              )}
            </Stack>
          </Grid2>
        </Grid2>
      </form>
    </LocalizationProvider>
  );
}

export default AddEventForm;
