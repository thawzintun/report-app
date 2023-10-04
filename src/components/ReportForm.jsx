import React from "react";
import { Form } from "react-router-dom";

const ReportForm = () => {
    return (
        <>
            <Form method="post">
                <input type="date" name="date" id="date" />
                <button>Run Report</button>
            </Form>
        </>
    );
};

export default ReportForm;

export const action = async ({ request }) => {
    const data = await request.formData();
    const url =
        "https://api.live.sing.musoniservices.com/v1/fixeddepositaccounts";
    const api = "1P8Rsli9pO5cHoSpyDOeDCLH3nIQTIG85gMfxOXh";
    const tenant = "proximityfinance";
    const username = "thawzintun";
    const password = "99999999";
    const basicAuth = btoa(`${username}:${password}`);
    const response = await fetch(url, {
        method: "GET", // You can specify the HTTP method (GET in this case)
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + basicAuth, // Note the space after "Basic"
            "x-fineract-platform-tenantId": tenant,
            "x-api-key": api,
        },
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data);
    } else {
        console.error("Request failed with status:", response.status);
    }
};
