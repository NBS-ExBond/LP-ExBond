"use client";

import { useState } from "react";

const DISCORD_URL = "https://discord.gg/zsqekPAh";
const GOOGLE_CALENDAR_SRC = "ngy.bandsession@gmail.com";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "楽器のレベルはどのくらい必要ですか？",
    answer: "レベルは問いません。初めての方でも見学だけでも大歓迎です。まずは気軽にDiscordに参加してみてください。",
  },
  {
    question: "費用はかかりますか？",
    answer: "Discordへの参加は無料です。スタジオ代などは実費をご負担いただく場合があります。詳細はコミュニティ内でご確認ください。",
  },
  {
    question: "どんな活動をしていますか？",
    answer: "週末を中心にスタジオでのセッション、オンラインでの交流、楽曲共有などを行っています。",
  },
  {
    question: "参加方法を教えてください",
    answer: "このページのDiscordボタンからサーバーに参加するだけです。見るだけでも歓迎していますので、お気軽にどうぞ！",
  },
];

/* ── Discord SVG ── */
const DiscordSVG = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size * 0.77} viewBox="0 0 71 55" fill="currentColor">
    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.44077 45.4204 0.52529C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.52529C25.5141 0.44359 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
  </svg>
);

/* ── Discord Button ── */
function DiscordBtn({
  href,
  children,
  style = {},
}: {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "#5865F2",
        color: "white",
        padding: "12px 22px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: "15px",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      <DiscordSVG size={20} />
      {children}
    </a>
  );
}

/* ── FAQ Accordion ── */
function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="faq-grid">
      {items.map((item, i) => (
        <div key={i} style={{
          background: "#0f0f0f",
          border: "1px solid #1e1e1e",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              width: "100%",
              padding: "18px 20px",
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "15px",
              fontWeight: 500,
              textAlign: "left",
              gap: "12px",
            }}
          >
            <span>{item.question}</span>
            <span style={{ fontSize: "20px", color: "#555", flexShrink: 0, fontWeight: 300 }}>+</span>
          </button>
          {openIndex === i && (
            <div style={{ padding: "0 20px 18px", fontSize: "15px", color: "#777", lineHeight: 1.8 }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════
   MAIN
════════════════════════════════════════ */
export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0b0b0b",
      color: "white",
      minHeight: "100vh",
      fontFamily: "'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif",
      overflowX: "hidden",
    }}>

      {/* ══════════════ NAV ══════════════ */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: "rgba(11,11,11,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #1a1a1a",
        height: "56px",
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            width: "32px", height: "32px",
            background: "linear-gradient(135deg,#4338ca,#6366f1)",
            borderRadius: "8px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <rect x="0" y="5" width="2" height="4" rx="1" fill="white" opacity="0.5"/>
              <rect x="3" y="3" width="2" height="8" rx="1" fill="white" opacity="0.7"/>
              <rect x="6" y="0" width="2" height="14" rx="1" fill="white"/>
              <rect x="9" y="2" width="2" height="10" rx="1" fill="white"/>
              <rect x="12" y="4" width="2" height="6" rx="1" fill="white" opacity="0.7"/>
              <rect x="15" y="6" width="2" height="2" rx="1" fill="white" opacity="0.5"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "18px", fontWeight: 800, letterSpacing: "0.04em", lineHeight: 1.1 }}>ExBond</div>
            <div style={{ fontSize: "11px", color: "#818cf8", letterSpacing: "0.14em", lineHeight: 1 }}>NAGOYA BAND COMMUNITY</div>
          </div>
        </div>

        {/* Center nav（モバイルで非表示） */}
        <div className="nav-links-center">
          {["特徴", "参加の流れ", "参加者の声", "よくある質問"].map((label) => (
            <a key={label} href={`#${label}`} style={{
              color: "#bbb",
              textDecoration: "none",
              fontSize: "16px",
            }}>{label}</a>
          ))}
        </div>

        {/* Right */}
        <div style={{ marginLeft: "auto" }}>
          <DiscordBtn href={DISCORD_URL} style={{ fontSize: "15px", padding: "9px 18px" }}>
            Discordに参加する
          </DiscordBtn>
        </div>
      </nav>

      {/* ══════════════ HERO ══════════════ */}
      <section style={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "56px",
      }}>
        {/* 背景写真 */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1501612780327-45045538702b?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "60% center",
          filter: "brightness(0.3)",
        }} />
        {/* 左フェード */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, #0b0b0b 38%, rgba(11,11,11,0.6) 65%, rgba(11,11,11,0.1) 100%)",
        }} />
        {/* 下フェード */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "160px",
          background: "linear-gradient(to top, #0b0b0b, transparent)",
        }} />

        {/* テキストエリア（モバイルでpadding縮小） */}
        <div className="hero-content-wrapper">
          <h1 style={{
            fontSize: "clamp(42px, 6vw, 74px)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "12px",
            letterSpacing: "-0.025em",
          }}>
            名古屋で、<br />気軽にバンドをやろう
          </h1>

          <p style={{ fontSize: "16px", color: "#818cf8", fontWeight: 700, marginBottom: "8px" }}>
            初心者でも、久しぶりでも、上級者でも。
          </p>
          <p style={{ fontSize: "15px", color: "#777", marginBottom: "28px" }}>
            固定バンドなし。セッションでつながる音楽コミュニティ
          </p>

          {/* バッジ */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
            {[
              { icon: "👤", label: "1人参加OK" },
              { icon: "♡", label: "初心者歓迎" },
              { icon: "♪", label: "セッション中心" },
            ].map((b) => (
              <div key={b.label} style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "20px",
                padding: "5px 14px",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "#ccc",
              }}>
                <span>{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>

          <DiscordBtn href={DISCORD_URL} style={{ fontSize: "16px", padding: "14px 20px", borderRadius: "8px", marginBottom: "10px" }}>
            Discordに参加する（見るだけOK）
          </DiscordBtn>
          <div style={{ fontSize: "14px", color: "#555" }}>無料で参加できます</div>
        </div>
      </section>

      {/* ══════════════ こんな人におすすめ ══════════════ */}
      <section className="lp-section">
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: 800, marginBottom: "8px" }}>
            こんな人におすすめ
          </h2>
          <p style={{ textAlign: "center", color: "#666", fontSize: "16px", marginBottom: "36px" }}>
            ひとつでも当てはまる方は、ぜひご参加ください
          </p>

          {/* 4列（モバイルで2列）*/}
          <div className="recommend-grid">
            {[
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" width="26" height="26"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>,
                title: "バンドをやりたいけどメンバーがいない",
                desc: "気軽に集まれる仲間が見つかります",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" width="26" height="26"><path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8"/></svg>,
                title: "楽器を始めたいけどきっかけがない",
                desc: "初心者も安心して参加できます",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" width="26" height="26"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5M12 7v5l4 2"/></svg>,
                title: "昔やっていたけど、また再開したい",
                desc: "ブランクがあっても大丈夫",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" width="26" height="26"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
                title: "とにかく音楽を一緒に楽しみたい",
                desc: "音楽好きが集まる場所です",
              },
            ].map((card, i) => (
              <div key={i} style={{
                background: "#111",
                border: "1px solid #1c1c1c",
                borderRadius: "12px",
                padding: "22px 18px",
                textAlign: "center",
              }}>
                <div style={{
                  width: "52px", height: "52px",
                  background: "rgba(99,102,241,0.1)",
                  borderRadius: "14px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 14px",
                }}>
                  {card.icon}
                </div>
                <div style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px", whiteSpace: "pre-line", lineHeight: 1.55 }}>
                  {card.title}
                </div>
                <div style={{ fontSize: "15px", color: "#666", lineHeight: 1.6 }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ あなたの"今"に合わせて ══════════════ */}
      <section className="lp-section-alt">
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: 800, marginBottom: "8px" }}>
            あなたの&quot;今&quot;に合わせて参加できます
          </h2>
          <p style={{ textAlign: "center", color: "#666", fontSize: "16px", marginBottom: "28px" }}>
            どんな状況でも歓迎します
          </p>

          {/* 3列（モバイルで1列・高さ自動）*/}
          <div className="level-grid">
            {[
              { tag: "初心者", tagBg: "#15803d", title: "楽器経験ゼロでもOK", desc: "見るだけでも参加できます。\n最初の一歩を応援します。", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80" },
              { tag: "復帰者", tagBg: "#6d28d9", title: "ブランクがあってもOK", desc: "忙しくても大丈夫。\n好きなタイミングで参加できます。", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80" },
              { tag: "上級者", tagBg: "#92400e", title: "もっと自由にセッションを", desc: "固定バンドに縛られず、\nやりたい曲を、やりたいメンバーで。", img: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&q=80" },
            ].map((card, i) => (
              <div key={i} className="level-card" style={{ position: "relative", borderRadius: "12px", overflow: "hidden", height: "200px" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: `url('${card.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.32)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)" }} />
                <div style={{ position: "relative", padding: "16px 18px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <div style={{ display: "inline-block", background: card.tagBg, fontSize: "12px", fontWeight: 700, padding: "3px 12px", borderRadius: "20px", marginBottom: "8px", width: "fit-content" }}>{card.tag}</div>
                  <h3 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "6px", lineHeight: 1.3 }}>{card.title}</h3>
                  <p style={{ fontSize: "15px", color: "#ccc", lineHeight: 1.6, whiteSpace: "pre-line" }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ ExBondの特徴 ══════════════ */}
      <section id="特徴" className="lp-section">
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: 800, marginBottom: "36px" }}>
            ExBondの特徴
          </h2>

          {/* 4列（モバイルで2列）*/}
          <div className="features-4col">
            {[
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" width="26" height="26"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
                title: "定期的なセッション開催",
                desc: "週末を中心にセッションを開催。予定が立てやすく参加しやすい！",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" width="26" height="26"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: "1人参加・途中参加OK",
                desc: "気まずさゼロの仕組み。初参加でもすぐに馴染めます。",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" width="26" height="26"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                title: "安心・安全のコミュニティ",
                desc: "ルールを大切にした運営で、誰でも安心して楽しめます。",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" width="26" height="26"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
                title: "オンライン＆リアル両対応",
                desc: "オンラインでつながり、リアルでも音を合わせよう。",
              },
            ].map((f, i) => (
              <div key={i}>
                <div style={{ marginBottom: "12px" }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "8px", lineHeight: 1.4 }}>{f.title}</div>
                <div style={{ fontSize: "14px", color: "#666", lineHeight: 1.8 }}>{f.desc}</div>
              </div>
            ))}
          </div>

          {/* Discord box（モバイルで縦積み）*/}
          <div
            className="discord-3col"
            style={{
              background: "#0f0f0f",
              border: "1px solid #1c1c1c",
              borderRadius: "12px",
              padding: "24px",
            }}
          >
            <div style={{
              width: "52px", height: "52px",
              background: "#5865F2",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <DiscordSVG size={26} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "17px", marginBottom: "8px" }}>Discordが初めてでも大丈夫</div>
              <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.8 }}>
                ExBondはDiscordというアプリを使って活動しています。<br />
                使い方はシンプルで、見るだけでもOK。安心してご参加ください！
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "2px" }}>
              {[
                { color: "#22c55e", label: "見るだけ参加OK" },
                { color: "#a78bfa", label: "匿名OK（ニックネームで参加可）" },
                { color: "#f97316", label: "途中参加・途中退出OK" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                  <div style={{
                    width: "20px", height: "20px",
                    borderRadius: "50%",
                    background: item.color + "20",
                    border: `1.5px solid ${item.color}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <svg width="8" height="6" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L4 7L9 1" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ color: "#bbb" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 参加者の声 ══════════════ */}
      <section id="参加者の声" className="lp-section">
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: 800, marginBottom: "32px" }}>
            参加者の声
          </h2>

          {/* 3列（モバイルで1列・高さ自動）*/}
          <div className="voices-grid">
            {[
              { name: "タカ", role: "20代・ギター", text: "初参加でもすぐに馴染めました！みんな優しくて、雰囲気が最高です。", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80" },
              { name: "ユウ", role: "30代・ドラム", text: "ブランクがあったけど、ここでまた音楽の楽しさを思い出せました！", img: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400&q=80" },
              { name: "ミナ", role: "20代・ボーカル", text: "いろんな人とセッションできて刺激になります！", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80" },
            ].map((t, i) => (
              <div key={i} className="voice-card" style={{ position: "relative", borderRadius: "12px", overflow: "hidden", height: "180px" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: `url('${t.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.22)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 100%)" }} />
                <div style={{ position: "relative", padding: "16px 18px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <div style={{
                      width: "34px", height: "34px",
                      background: "linear-gradient(135deg,#4338ca,#818cf8)",
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "14px", fontWeight: 700, flexShrink: 0,
                    }}>{t.name[0]}</div>
                    <div>
                      <div style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1.2 }}>{t.name}</div>
                      <div style={{ fontSize: "13px", color: "#999" }}>{t.role}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: "14px", color: "#ddd", lineHeight: 1.7 }}>{t.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ドット */}
          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "18px" }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                width: i === 0 ? "18px" : "7px",
                height: "7px",
                borderRadius: "4px",
                background: i === 0 ? "#6366f1" : "#2a2a2a",
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ よくある質問 ══════════════ */}
      <section id="よくある質問" className="lp-section">
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: 800, marginBottom: "28px" }}>
            よくある質問
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ══════════════ Googleカレンダー ══════════════ */}
      <section id="参加の流れ" className="lp-section-cal">
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: 800, marginBottom: "8px" }}>
            開催スケジュール
          </h2>
          <p style={{ textAlign: "center", color: "#555", fontSize: "16px", marginBottom: "24px" }}>
            最新のセッション予定はこちら
          </p>
          <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #1c1c1c" }}>
            <iframe
              src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(GOOGLE_CALENDAR_SRC)}&ctz=Asia%2FTokyo&bgcolor=%230b0b0b&color=%236366f1&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0`}
              className="cal-iframe"
              title="ExBond 開催スケジュール"
            />
          </div>
        </div>
      </section>

      {/* ══════════════ 最終CTA ══════════════ */}
      <section className="lp-cta" style={{
        background: "linear-gradient(135deg, #1e1a4e 0%, #2e2370 40%, #4a1a8a 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(ellipse at 25% 50%, rgba(99,102,241,0.18) 0%, transparent 55%), radial-gradient(ellipse at 75% 50%, rgba(139,92,246,0.12) 0%, transparent 55%)",
        }} />
        <div style={{ position: "relative" }}>
          <h2 style={{
            fontSize: "clamp(24px, 3vw, 38px)",
            fontWeight: 900,
            marginBottom: "14px",
            letterSpacing: "0.02em",
          }}>
            さあ、あなたも<br />一緒に音を楽しもう！
          </h2>
          <p style={{ fontSize: "16px", color: "#c4b5fd", marginBottom: "28px" }}>
            まずは気軽にDiscordに参加して、コミュニティをのぞいてみてください。
          </p>
          <DiscordBtn href={DISCORD_URL} style={{ fontSize: "16px", padding: "16px 36px", borderRadius: "8px" }}>
            今すぐDiscordに参加する（無料）
          </DiscordBtn>
          <p style={{ marginTop: "14px", fontSize: "14px", color: "#9d87d8" }}>
            見るだけでもOK！あなたのペースで大丈夫です。
          </p>
        </div>
      </section>

      {/* ══════════════ フッター ══════════════ */}
      <footer style={{
        padding: "24px 40px",
        background: "#070707",
        textAlign: "center",
        borderTop: "1px solid #111",
        color: "#3a3a3a",
        fontSize: "13px",

}}>
        © 2026 ExBond – Nagoya Band Community
      </footer>
    </main>
  );
}
