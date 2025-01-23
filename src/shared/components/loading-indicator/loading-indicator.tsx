import { Box, CircularProgress } from "@mui/material";

export function LoadingIndicator() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default LoadingIndicator;
