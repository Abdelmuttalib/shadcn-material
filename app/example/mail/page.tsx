import { cookies } from "next/headers";
import Image from "next/image";

import { Mail } from "./components/mail";
import { accounts, mails } from "./data";

export default async function MailPage() {
  const layout = (await cookies()).get("react-resizable-panels:layout:mail");
  const collapsed = (await cookies()).get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <>
      <div className="lg:hidden">
        <Image
          src="/images/examples/carbon/mail-dark.png"
          width={1280}
          height={727}
          quality={100}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/images/examples/carbon/mail-light.png"
          width={1280}
          height={727}
          quality={100}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>

      <div className="hidden lg:flex lg:flex-col">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
