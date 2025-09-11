import HeaderClient from "@/app/components/header-client";
import isLoggedIn from "@/app/components/funcs/isLonggedIn";


export default async function HeaderServer() {
  const token = await isLoggedIn();
  if (token) {
    // Chưa đăng nhập
    return <HeaderClient isLonggedIn={true} />;
  }else {
    // Đã đăng nhập
    return <HeaderClient isLonggedIn={false} />;
  }
}
