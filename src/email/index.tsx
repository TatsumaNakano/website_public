import ReactDOMServer from "react-dom/server";

function Email({ request }: { request: any }) {
    return (
        <html>
            <head>
                <style></style>
            </head>
            <body>
                <h3>{request.companyName ? "Company Name: " + request.companyName : ""}</h3>
                <h3>{request.name ? request.name : ""}</h3>
                <p style={{ fontSize: "16px" }}>{request.product ? "Make " + request.product : ""}</p>
                <p style={{ fontSize: "16px" }}>{request.freelanceType ? "Freelance as " + request.freelanceType : ""}</p>
                <p style={{ fontSize: "16px" }}>{request.budget ? "Budget: " + request.budget : ""}</p>
                <p style={{ fontSize: "16px" }}>{request.context ? request.context : ""}</p>
            </body>

        </html>
    );
}

export default Email;

// ReactDOMServer.renderToString(<Email />);