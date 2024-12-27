import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Box, Toolbar, Typography, IconButton, MenuItem, Menu, Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const auth = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleLogoClick = () => {
    if (auth) {
      // Navigate to the dashboard if logged in
      navigate("/dashboard");
    } else {
      // Navigate to the home page if not logged in
      navigate("/");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Logo - Clicking on it redirects based on the login state */}
          <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }} onClick={handleLogoClick}>
            <Typography variant="h6" component="div">
              HabitForge
            </Typography>
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>

          {auth ? (
            <>
              {/* Create Habit Button (Visible when logged in) */}
              <Button color="inherit" onClick={() => navigate("/create-habit")}>
                Create Habit
              </Button>

              {/* User Menu with Logout */}
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </>
          ) : (
            <>
              {/* Login Button (Visible when not logged in) */}
              <Button color="inherit" onClick={() => navigate("/login")}>
                Login
              </Button>

              {/* Register Button (Visible when not logged in) */}
              <Button color="inherit" onClick={() => navigate("/register")}>
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
