import style from "./Footer.module.css";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

function Footer() {
	return (
		<footer className={style.Footer}>
			<div className={style.MadeBy}>Made By: Tanishq</div>
			<div className={style.Socials}>
				<a href="">
					<GitHub />
				</a>
				<a href="">
					<Twitter />
				</a>
				<a href="">
					<LinkedIn />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
