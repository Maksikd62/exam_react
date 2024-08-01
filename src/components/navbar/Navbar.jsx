import React, { useEffect, useState } from "react";
import {
    AppBar,
    Button,
    Grid,
    Menu,
    MenuItem,
    Typography,
    Avatar,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { btnPageStyle } from "./style";
import { Link, useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";
import { toast } from "react-toastify";

const pages = [
    { id: "1", title: "Головна сторінка", url: "/" },
];

const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const { isAuth, user } = useSelector((state) => state.authReducer);
    const { theme } = useSelector((state) => state.themingReducer);
    const { logout, setTheme } = useAction();
    const navigate = useNavigate();

    const logoutHandler = () => {
        handleCloseUserMenu();
        logout();
        navigate("signin");
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const changeTheme = () => {
        const value = theme === "light" ? "dark" : "light";
        setTheme(value);
        toast.success(`${value} theme`);
    };

    useEffect(() => {
        const themeLocal = localStorage.getItem("theme");
        if (themeLocal != null) {
            if (themeLocal != "light") {
                setTheme(themeLocal);
            }
        }
    }, []);
    

    return (
        <AppBar position="static">
            <Grid container alignItems="center" sx={{ height: "100px" }}>
                <Grid item sx={{ display: "flex", alignItems: "center", paddingLeft: 2, flexGrow: 1 }}>
                    <IconButton component={Link} to="/" color="inherit">
                        <DirectionsCarIcon fontSize="large" />
                    </IconButton>
                    {pages.map((page) => (
                        <Link key={page.id} to={page.url}>
                            <Button sx={btnPageStyle}>{page.title}</Button>
                        </Link>
                    ))}
                </Grid>
                <Grid item sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 2 }}>
                    <IconButton onClick={changeTheme} color="inherit" sx={{ marginRight: 2 }}>
                        {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    {!isAuth ? (
                        <>
                            <Link to="/signin">
                                <Button sx={{ color: "black" }}>Увійти</Button>
                            </Link>
                            <Link to="/signup">
                                <Button sx={{ color: "black" }}>Зареєструватися</Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <IconButton
                                sx={{ p: 0, mr: 2 }}
                                onClick={handleOpenUserMenu}
                            >
                                <Avatar alt="Avatar" src={user.picture} />
                            </IconButton>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Link to="/add-ad">
                                        <Typography textAlign="center">Додати оголошення</Typography>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Link to="/my-ads">
                                        <Typography textAlign="center">Мої оголошення</Typography>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={logoutHandler}>
                                    <Typography textAlign="center">Вийти</Typography>
                                </MenuItem>
                            </Menu>
                        </>
                    )}
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default Navbar;
