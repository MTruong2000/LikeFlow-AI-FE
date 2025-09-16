import { cookies } from "next/headers";

export default async function isLoggedIn() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");
  if (!token) {
    return false;
  }else {
    return true;
  }
}
