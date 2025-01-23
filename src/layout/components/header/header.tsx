import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          component={RouterLink}
          to="/events"
          underline="none"
          color="white"
        >
          <Typography variant="h6" component="div">
            Planned events
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
