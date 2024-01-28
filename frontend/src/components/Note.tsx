import { useState } from "react";
import { appApi } from "../api/services/AppApi";
import DeleteIcon from "../assets/icons/DeleteIcon";
import DotMenuIcon from "../assets/icons/DotMenuIcon";
import PeopleIcon from "../assets/icons/PeopleIcon";
import ToastMessage from "./ToastMessage";
import PermissionModal from "./PermissionModal";

interface NoteProps {
	header: string;
	body: string;
	noteId: number;
}

const Note = (props: NoteProps) => {
	const [popupMessage, setPopupMessage] = useState<string | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [body, setBody] = useState(props.body);
	const [header, setHeader] = useState(props.header);

	return (
		<div className="card bg-base-200 shadow-xl w-96 h-96 p-4 relative border-solid border-[2px] border-base-300">
			<ToastMessage toastMessage={popupMessage} />
			<ToastMessage toastMessage={errorMessage} isError />
			<PermissionModal noteId={props.noteId} />
			<div className="absolute bottom-4 left-4 badge badge-outline badge-sm">
				<p>{props.noteId}</p>
			</div>
			<div className="absolute top-1 right-1">
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-square btn-sm bg-base-100 border-solid border-[2px] border-base-300"
					>
						{/* 3 dot menu button */}
						<DotMenuIcon />
					</div>
					<ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 gap-2">
						<li>
							<button>
								<label
									htmlFor={`permission_modal_${props.noteId}`}
									className="w-full flex gap-2"
								>
									<PeopleIcon />
									Permission
								</label>
							</button>
						</li>
						<li>
							<button
								className="bg-error"
								onClick={() => {
									appApi.deleteNote(props.noteId).then((response) => {
										setErrorMessage("Deleted!");
										console.log(JSON.stringify(response));
										window.location.reload();
									});
								}}
							>
								<DeleteIcon />
								Delete
							</button>
						</li>
					</ul>
				</div>
			</div>
			<textarea
				rows={1}
				className="textarea textarea-bordered resize-none bg-base-200 max-w-xs"
				placeholder="Header"
				defaultValue={props.header}
				onBlur={(e) => {
					setHeader(e.target.value);
				}}
			/>

			<div className="card-body text-left">
				<textarea
					className="textarea textarea-bordered h-full resize-none bg-base-200"
					placeholder="Body"
					defaultValue={props.body}
					onBlur={(e) => {
						console.log(e.target.value);
						setBody(e.target.value);
					}}
				/>
			</div>

			<div className="card-actions justify-end">
				<button
					className="btn btn-primary"
					onClick={() => {
						console.log({
							id: props.noteId,
							note_header: props.header,
							note_body: props.body,
						});
						appApi
							.editNote({
								id: props.noteId,
								note_header: header,
								note_body: body,
							})
							.then((response) => {
								setPopupMessage("Saved!");
								console.log(JSON.stringify(response));
								// window.location.reload();
							});
					}}
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default Note;
