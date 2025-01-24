import { AppBar, Link, Toolbar, Typography } from "@mui/material";

import { LinkBehavior } from "@/shared/components";

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          component={LinkBehavior}
          href="/events"
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
