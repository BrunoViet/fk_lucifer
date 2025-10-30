import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    return redirect(process.env.NEXT_PUBLIC_API_BASE_URL! + `login?code=${code}&state=${state}`)
}