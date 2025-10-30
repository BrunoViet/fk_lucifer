import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { code, state, codeVerifier } = await req.json();

    const shop_id = process.env.SHOP_ID!;
    const clientId = process.env.CLIENT_ID!;
    const body = new URLSearchParams();
    const redirect_uri = process.env.REDIRECT_URL!;

    body.append("grant_type", "authorization_code");
    body.append("client_id", clientId);
    body.append("redirect_uri", redirect_uri);
    body.append("code", code);

    // Public Client
    body.append("code_verifier", codeVerifier);

    const headers = {
        "content-type": "application/x-www-form-urlencoded",
        // // Confidential Client
        // 'Authorization': 'Basic `<credentials>`'
    };

    const response = await fetch(
        `https://shopify.com/authentication/${shop_id}/oauth/token`,
        {
            method: "POST",
            headers: headers,
            body,
        }
    );
    const data = await response.json();

    return NextResponse.json(data);
}