"use server";

import { revalidateTag } from "next/cache";

export default async function createProduct(formData: FormData) {
  await fetch(`${process.env.API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidateTag("products");
}
