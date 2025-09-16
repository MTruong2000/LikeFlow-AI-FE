import HeaderClient from "@/components/component-layout/header/header-client";
import isLoggedIn from "@/funcs/isLonggedIn";


export default async function HeaderServer() {
  const token = await isLoggedIn();
  if (token) {
    return <HeaderClient isLonggedIn={true} />;
  }else {
    return <HeaderClient isLonggedIn={false} />;
  }
}
