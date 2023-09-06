import { NextResponse } from "next/server";

export async function POST(req: Request, res: any) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("XXXXXXXXXX"); //SendGridのAPIキー

    const request = await req.json();
    const context = `
        <p>${request.emailMessage}</p>
        
        <p style='font-size: 12px; font-weight: 900;'>${request.signature}</p>
        <br/>
        <h3>${request.summeryTags.header}</h3>
        ${request.companyName ? "<p>" + request.summeryTags.company + request.companyName + "</p>" : ""}
        ${request.name ? "<p>" + request.summeryTags.name + request.name + request.summeryTags.name_after + "</p>" : ""}
        ${request.product ? "<p style='font-size: 16px; padding: 0;'>" + request.summeryTags.product + request.product + "</p>" : ""}
        ${request.freelanceType ? "<p style='font-size: 16px; padding: 0;'>" + request.summeryTags.freelance + request.freelanceType + "</p>" : ""}
        ${request.budget ? "<p style='font-size: 16px; padding: 0;'>" + request.summeryTags.budget + request.budget + "</p>" : ""}
        <h4>${request.context ? request.summeryTags.detail : ""}</h4>
        ${request.context ? "<p style= 'font-size: 16px;' >" + request.context + "</p>" : ""}
    `;

    const msg = {
        to: request.userEmail,
        bcc: "me@tatsuma.co",
        from: "no-reply@tatsuma.co",
        subject: `${request.title}`,
        text: context,
        html: context
    };

    (async () => {
        try {
            await sgMail.send(msg);
        } catch (error: any) {
            console.error(error);
            if (error.response) {
                console.error(error.response.body)
            }
        }
    })();

    return NextResponse.json({ res })
}
