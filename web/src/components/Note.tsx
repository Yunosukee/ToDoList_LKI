import DeleteIcon from "../assets/icons/DeleteIcon";
import DotMenuIcon from "../assets/icons/DotMenuIcon";
import PeopleIcon from "../assets/icons/PeopleIcon";

interface NoteProps {
	header: string;
	body: string;
}

const Note = (props: NoteProps) => {
	return (
		<div className="card bg-base-200 shadow-xl border-solid border-[1px] border-base-200 w-96 h-96 p-4 relative">
			<div className="absolute top-1 right-1">
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-neutral btn-square  btn-sm"
					>
						{/* 3 dot menu button */}
						<DotMenuIcon />
					</div>
					<ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
						<li>
							<button>
								<PeopleIcon />
								Permissions
							</button>
						</li>
						<li>
							<button>
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
			>
				{props.header}
			</textarea>

			<div className="card-body text-left">
				<textarea
					className="textarea textarea-bordered h-full resize-none bg-base-200"
					placeholder="Body"
				>
					{props.body}
				</textarea>
			</div>

			<div className="card-actions justify-end">
				<button className="btn btn-primary">Save</button>
			</div>
		</div>
	);
};

export default Note;
