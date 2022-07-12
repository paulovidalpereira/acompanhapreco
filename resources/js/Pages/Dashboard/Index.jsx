import App from "@/Layouts/App";

export default function Dashboard(props) {
    return (
        <App auth={props.auth} errors={props.errors} title="Dashboard">
            <div className="bg-white overflow-hidden shadow-sm">
                <div className="p-6 bg-white border-b border-gray-200">
                    teste
                </div>
            </div>
        </App>
    );
}
