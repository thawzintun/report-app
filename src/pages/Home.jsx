import React from "react";
import ReportForm from "../components/ReportForm";
import { useActionData } from "react-router-dom";

const Home = () => {
    const actionData = useActionData();
    console.log(actionData);
    return (
        <>
            <div>
                <ReportForm />
            </div>
            <div>
                <h3>FTD Accounts generated on</h3>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Client ID</th>
                            <th>Client Name</th>
                            <th>Account ID</th>
                            <th>Account No</th>
                            <th>Product Name</th>
                            <th>Account Status</th>
                            <th>Activation Date/Approved Date</th>
                            <th>Expected Maturity Date</th>
                            <th>Interest Rate</th>
                            <th>Account Balance</th>
                            <th>Total Deposit</th>
                            <th>Total Interest Earned</th>
                            <th>Total Interest Posted</th>
                            <th>Will be matrued in (days)</th>
                            <th>Expected Savings Return Manual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {data.length > 0 &&
                            data.map((result) => {
                                <tr key={result.value.clientId}>
                                    <td></td>
                                </tr>;
                            })} */}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Home;
