import { useState } from "react";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Note from "./Note/Note";
import CreateNote from "./CreateNote/CreateNote";

export interface Notes {
	title: string;
	content: string;
}

const App: React.FC = () => {
	const [notes, setNotes] = useState<Notes[]>([]);

	const addNote = (newNote: Notes) => {
		if (newNote.content) {
			setNotes((prevNotes) => {
				return [...prevNotes, newNote];
			});
		}
		return;
	};

	const deleteNote = (id: number) => {
		setNotes((prevNotes) => {
			return prevNotes.filter((noteItem, index) => index !== id);
		});
	};

	return (
		<div className="App">
			<Header />
			<CreateNote onAdd={addNote} />
			{notes.map((note, index) => (
				<Note
					key={index}
					id={index}
					title={note.title}
					content={note.content}
					onDelete={deleteNote}
				/>
			))}
			<Footer />
		</div>
	);
};

export default App;
