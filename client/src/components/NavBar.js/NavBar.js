import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: theme.spacing(1),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function NavBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Button variant="contained" color="primary" disableElevation href="/">
						Login
					</Button>
					<Button
						variant="contained"
						color="primary"
						href="/budget"
						disableElevation
					>
						Budget
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
