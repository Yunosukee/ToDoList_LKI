import { useParams } from "wouter";

const SettingsAdvancedPage = () => {
	const params = useParams();
	return <div>SettingsAdvancedPage {params.id}</div>;
};

export default SettingsAdvancedPage;
