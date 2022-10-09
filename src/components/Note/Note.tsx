import { Notes } from "../App";
import style from "./Note.module.css";

interface NoteProps {
	id: number;
	onDelete: (id: number) => void;
}

const Note: React.FC<Notes & NoteProps> = (props) => {
	const handleClick = () => {
		props.onDelete(props.id);
	};

	return (
		<div className={style.Note}>
			<h1 className={style.Title}>{props.title}</h1>
			<p className={style.Content}>{props.content}</p>
			<button className={style.Actions} onClick={handleClick}>
				DELETE
			</button>
		</div>
	);
};

export default Note;
