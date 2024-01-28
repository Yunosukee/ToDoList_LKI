import { useState } from "react";
import { appApi } from "../api/services/AppApi";

export interface PersmissionModalProps {
	noteId: number;
}
const PermissionModal = (props: PersmissionModalProps) => {
	const [canEdit, setCanEdit] = useState(false);
	const [userId, setUserId] = useState<undefined | number>(undefined);
	const handleSave = (noteId: number) => {
		if (userId === undefined) {
			return;
		} else {
			appApi.createPermission({ noteId, userId, canEdit }).then((response) => {
				console.log(JSON.stringify(response));
				window.location.reload();
			});
		}
	};
	return (
		<div>
			{" "}
			<input
				type="checkbox"
				id={`permission_modal_${props.noteId}`}
				className="modal-toggle"
			/>
			<div className="modal" role="dialog">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Assign permission</h3>
					<label className="form-control w-full">
						<div className="label">
							<span className="label-text">User ID</span>
						</div>
						<input
							type="number"
							min={1}
							placeholder="User ID"
							className="input input-bordered w-full "
							defaultValue={userId}
							onChange={(e) => setUserId(parseInt(e.target.value))}
						/>
					</label>
					<div className="form-control mt-2">
						<label className="label cursor-pointer justify-start gap-4">
							<input
								type="checkbox"
								className="checkbox"
								defaultChecked={canEdit}
								onClick={() => setCanEdit(!canEdit)}
							/>
							<span className="label-text">Can edit</span>
						</label>
					</div>
					<div className="modal-action">
						<label
							htmlFor={`permission_modal_${props.noteId}`}
							className="btn"
							onClick={() => handleSave(props.noteId)}
						>
							Save
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PermissionModal;
