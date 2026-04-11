"use client"

import { useState, useEffect } from "react"

export default function Page() {
  const [session, setSession] = useState<any | null | undefined>(undefined)

  useEffect(() => {
    fetch("/api/auth/session")
      .then(r => r.json())
      .then(s => setSession(Object.keys(s).length ? s : null))
      .catch(() => setSession(null))
  }, [])

  if (session === undefined) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "#0a0a0a" }}>
        <div style={{ color: "#888", fontFamily: "monospace", fontSize: 13 }}>Loading…</div>
      </div>
    )
  }

  if (!session) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", background: "#0a0a0a", gap: 20 }}>
        <div style={{ width: 38, height: 38, background: "#f5c800", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 18, color: "#0a0a0a", borderRadius: 3 }}>A</div>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#f5f3ef", fontFamily: "sans-serif" }}>Ati Motors — CM Quotation Tool</div>
        <div style={{ color: "#888", fontSize: 13, fontFamily: "monospace" }}>Sign in with your @atimotors.com account to continue</div>
        <button
          onClick={() => window.location.href = "/api/auth/signin"}
          style={{ marginTop: 8, padding: "11px 28px", background: "#f5c800", color: "#0a0a0a", border: "none", borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "sans-serif" }}>
          Sign in with Google
        </button>
      </div>
    )
  }

  return (
    <iframe src="/tool.html" style={{ width: "100%", height: "100vh", border: "none", display: "block" }} title="Ati Motors CM Quotation Tool" />
  )
}
