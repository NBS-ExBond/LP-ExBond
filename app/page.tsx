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
    answer: "Discordへの参加は無料です。スタジオ代などは実費をご負担いただきます。詳細はコミュニティ内でご確認ください。",
  },
  {
    question: "どんな活動をしていますか？",
    answer: "2-3か月に1回程度、土曜を中心にスタジオでのセッションを行っています。また、ディスコードやセッション会で知り合ったメンバーで個別にスタジオ練習で遊んだりもしています",
  },
  {
    question: "参加方法を教えてください",
    answer: "このページのDiscordボタンからサーバーに参加するだけです。まずは見るだけでも歓迎していますので、お気軽にどうぞ！",
  },
];

/* ── Discord SVG ── */
const DiscordSVG = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size * 0.77} viewBox="0 0 71 55" fill="currentColor">
    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.44077 45.4204 0.52529C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.52529C25.5141 0.44359 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978Z" />
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
            <span style={{ fontSize: "20px", color: "rgb(201, 195, 195)", flexShrink: 0, fontWeight: 300 }}>+</span>
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

/* MAIN */
export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0b0b0b",
      color: "white",
      minHeight: "100vh",
      fontFamily: "'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif",
      overflowX: "hidden",
    }}>

      {/* HERO */}
      <section style={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "56px",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }} />

        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, #0b0b0b 38%, rgba(11,11,11,0.6) 65%, rgba(11,11,11,0.1) 100%)",
        }} />

        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "160px",
          background: "linear-gradient(to top, #0b0b0b, transparent)",
        }} />

        <div className="hero-content-wrapper">
          <h1 style={{
            fontSize: "clamp(42px, 6vw, 74px)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "12px",
          }}>
            名古屋で、<br />気軽にバンドをやろう
          </h1>

          <p style={{ fontSize: "16px", color: "#818cf8", fontWeight: 700 }}>
            初心者でも、久しぶりでも、上級者でも。
          </p>

          <DiscordBtn href={DISCORD_URL}>
            Discordに参加する
          </DiscordBtn>
        </div>
      </section>

    </main>
  );
}