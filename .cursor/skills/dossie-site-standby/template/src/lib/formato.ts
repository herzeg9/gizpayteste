import { type Endereco } from "@/data/schema";

/** `https://instagram.com/kio.bakehouse/` → `@kio.bakehouse` */
export function handleInstagram(url: string): string {
  const caminho = url.replace(/^https?:\/\/(www\.)?instagram\.com\//, "");
  return `@${caminho.replace(/\/+$/, "")}`;
}

export function enderecoEmLinha(endereco: Endereco): string {
  return `${endereco.logradouro}, ${endereco.bairro}, ${endereco.cidade} — ${endereco.uf}`;
}

export function urlMaps(nome: string, endereco: Endereco): string {
  const busca = `${nome} ${endereco.logradouro} ${endereco.cidade}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(busca)}`;
}
