import React from "react";
import Note from "../components/Note";
import ThemeButton from "../components/ThemeButton";

const NotesPage = () => {
	return (
		<div className="min-h-screen">
			<div className="text-center p-4">
				<div className="flex gap-4 flex-wrap relative">
					{/* 3 round buttons on right top corner */}
					<div className="absolute flex flex-col top-1 right-1 gap-4">
						<div className="tooltip tooltip-left" data-tip="Theme">
							<ThemeButton />
						</div>
						<div className="tooltip tooltip-left" data-tip="Settings">
							<button className="btn btn-circle">
								<svg
									className="swap-on fill-current w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path fill="none" d="M0 0h24v24H0V0z"></path>
									<path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
								</svg>
							</button>
						</div>
						<div className="tooltip tooltip-left" data-tip="Logout">
							<button className="btn btn-circle">
								<svg
									className="swap-on fill-current w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path d="M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"></path>
								</svg>
							</button>
						</div>
						<div className="tooltip tooltip-left" data-tip="Add new note">
							<button className="btn btn-circle">
								<svg
									className="swap-on fill-current w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path fill="none" d="M0 0h24v24H0V0z"></path>
									<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
								</svg>
							</button>
						</div>
					</div>

					<Note header="Header" body="Body" />
				</div>
			</div>
		</div>
	);
};

export default NotesPage;
