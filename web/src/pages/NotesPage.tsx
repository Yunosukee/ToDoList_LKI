import React from "react";
import Note from "../components/Note";

const NotesPage = () => {
	return (
		<div className="min-h-screen">
			<div className="text-center p-4">
				<div className="flex gap-4 flex-wrap relative">
					{/* 3 round buttons on right top corner */}
					<div className="absolute flex flex-col top-1 right-1 gap-4">
						<div className="tooltip tooltip-left" data-tip="Theme">
							<button className="btn btn-circle btn-neutral"></button>
						</div>
						<div className="tooltip tooltip-left" data-tip="Settings">
							<button className="btn btn-circle btn-neutral"></button>
						</div>
						<div className="tooltip tooltip-left" data-tip="Logout">
							<button className="btn btn-circle btn-neutral"></button>
						</div>
					</div>

					<Note header="Header" body="Body" />
				</div>
			</div>
		</div>
	);
};

export default NotesPage;
