interface ToastProps {
	toastMessage: string | null;
	isError?: boolean;
}
const ToastMessage = (props: ToastProps) => {
	const { toastMessage, isError } = props;
	if (isError && toastMessage) {
		return (
			<div className="toast toast-top toast-start z-10">
				<div className="alert alert-error">{toastMessage}</div>
			</div>
		);
	} else if (toastMessage) {
		return (
			<div className="toast toast-top toast-start z-10">
				<div className="alert alert-success">{toastMessage}</div>
			</div>
		);
	}
};

export default ToastMessage;
