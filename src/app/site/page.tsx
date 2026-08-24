import { redirect } from "next/navigation";

/** Mantém /site funcionando — redireciona para a raiz. */
export default function SiteLegacyPage() {
  redirect("/");
}
