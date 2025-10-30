import { Customer } from "@/app/events/ani/types";
import { redirect, RedirectType } from "next/navigation";
import { useEffect } from "react";

/**
 * shopify 登录流程
 * @param code 
 * @param state 
 * @returns 
 */
export const useCustomer = (code?: string, state?: string) => {
    // TODO: 这是测试代码
    return {
        accessToken: "111",
        customer: {
            emailAddress: 'softcoreyaoi@gmail.com',
            firstName: 'jc',
            lastName: 'meet'
        },
    }
    const accessToken = localStorage.getItem("access_token");
    const customer: Customer | null = localStorage.getItem("customer")
        ? JSON.parse(localStorage.getItem("customer")!)
        : null;
    const codeVerifier = localStorage?.getItem("code-verifier");

    useEffect(() => {
        if (code && state) {
            return;
        }
        if (accessToken && !customer) {
            fetchCustomerInfo(accessToken);
            redirect('/')
        } else if (!accessToken && localStorage && !customer) {
            startAuthorize();
        }
    }, [accessToken, customer]);

    useEffect(() => {
        if (code && state && codeVerifier) {
            shopifyOauthToken(code, state, codeVerifier);
        }
    }, [code, state, codeVerifier]);

    return { accessToken, customer }
}

// 开始授权
const startAuthorize = async () => {
    const res = await fetch("/api/shopify/oauth/authorize", {
        method: "POST",
    });
    const { authUrl, codeVerifier } = await res.json();
    console.log(authUrl, codeVerifier);
    if (authUrl && codeVerifier) {
        localStorage.setItem("code-verifier", codeVerifier);

        window.location.href = authUrl;
    }
};

const fetchCustomerInfo = async (accessToken: string) => {
    try {
        const res = await fetch("/api/shopify/customer", {
            method: "POST",
            body: JSON.stringify({
                accessToken,
            }),
        });
        if (res.status !== 200) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("customer");
            localStorage.removeItem("code-verifier");
            localStorage.removeItem('refresh_token')
            window.location.href = "/";
            return;
        }
        const data = await res.json();
        localStorage.setItem("customer", JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
};

const shopifyOauthToken = async (
    code: string,
    state: string,
    codeVerifier: string
) => {
    const resp = await fetch("/api/shopify/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            code: code,
            state: state,
            codeVerifier,
        }),
    });

    const data = await resp.json();
    Object.keys(data).forEach((key) => {
        localStorage.setItem(key, data[key]);
    });
    window.location.href = "/";
};