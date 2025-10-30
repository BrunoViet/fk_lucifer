import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { accessToken } = await req.json();
    const query = `
                    query {
                        customer {
                            id
                            emailAddress { emailAddress }
                            imageUrl
                            firstName
                            lastName
                            phoneNumber { phoneNumber }
                        }
                    }
                `;

    const response = await fetch(
        `https://shopify.com/${process.env.SHOP_ID}/account/customer/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: accessToken,
                Origin: process.env.NEXT_PUBLIC_API_BASE_URL!,
            },
            body: JSON.stringify({ query }),
        }
    );

    const data = await response.json();

    const { emailAddress: { emailAddress }, imageUrl, firstName, lastName, phoneNumber } = data?.data?.customer;

    if (!emailAddress) {
        return NextResponse.redirect("/login");
    }

    return NextResponse.json({
        emailAddress,
        imageUrl,
        firstName,
        lastName,
        phoneNumber,
    });
}