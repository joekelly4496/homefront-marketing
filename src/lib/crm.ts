/**
 * Forward a website lead to Afterkey Sales, the operator CRM inside the
 * app (app.getafterkey.com/admin/sales). Server to server, with the shared
 * SALES_INBOUND_SECRET. Returns true only when the CRM saved the lead; the
 * CRM then texts and emails Joe itself. Never throws, gives up after 8
 * seconds, and does nothing without the secret, so the routes fall back to
 * their own email and a lead is never lost.
 */
export async function forwardToCrm(payload: Record<string, unknown>): Promise<boolean> {
  const secret = process.env.SALES_INBOUND_SECRET;
  if (!secret) return false;
  const url = process.env.SALES_INBOUND_URL || "https://app.getafterkey.com/api/sales/inbound";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-afterkey-sales-key": secret },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) console.error("[crm] forward failed:", res.status);
    return res.ok;
  } catch (e) {
    console.error("[crm] forward error:", e instanceof Error ? e.message : e);
    return false;
  }
}
