// Form submission. Set NEXT_PUBLIC_FORM_WEBHOOK (an n8n webhook URL, for example) to deliver enquiries.
// Without it the form still completes in the UI so the flow can be reviewed, but nothing is sent.
export async function submitForm(kind: "quote" | "commercial", data: FormData): Promise<boolean> {
  const url = process.env.NEXT_PUBLIC_FORM_WEBHOOK;
  data.append("form", kind);
  if (!url) return true;
  try {
    const res = await fetch(url, { method: "POST", body: data });
    return res.ok;
  } catch {
    return false;
  }
}
