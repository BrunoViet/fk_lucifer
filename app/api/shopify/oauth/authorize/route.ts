import { NextResponse } from "next/server";

export async function POST() {
    const data = await initiateLogin();
    return NextResponse.json(data);
}
// 开始登录流程
async function initiateLogin() {
    const shop_id = process.env.SHOP_ID!;
    const clientId = process.env.CLIENT_ID!;
    const redirect_uri = process.env.REDIRECT_URL!;
    const scopes = process.env.SCOPES!;

    try {
        // 生成 PKCE 参数
        const codeVerifier = generateRandomString(128);
        const codeChallenge = await generateCodeChallenge(codeVerifier);
        const state = generateState();
        const nonce = generateNonce();

        // 构建授权URL
        const authUrl = new URL(
            `https://shopify.com/authentication/${shop_id}/oauth/authorize`
        );
        authUrl.searchParams.set("scope", scopes);
        authUrl.searchParams.set("client_id", clientId);
        authUrl.searchParams.set("response_type", "code");
        authUrl.searchParams.set("redirect_uri", redirect_uri);
        authUrl.searchParams.set("state", state);
        authUrl.searchParams.set("nonce", nonce);
        authUrl.searchParams.set("code_challenge", codeChallenge);
        authUrl.searchParams.set("code_challenge_method", "S256");

        return {
            authUrl: authUrl.toString(),
            codeVerifier
        }
    } catch (error) {
        throw new Error("Failed to initiate login");
    }
}

// PKCE 辅助函数
function generateRandomString(length: number) {
    const charset =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
}

async function generateCodeChallenge(verifier: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const digest = await crypto.subtle.digest("SHA-256", data);
    const base64 = btoa(String.fromCharCode(...new Uint8Array(digest)));
    return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

// 生成状态参数和随机数
function generateState() {
    return generateRandomString(32);
}

function generateNonce() {
    return generateRandomString(32);
}