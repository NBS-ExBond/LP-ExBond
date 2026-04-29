export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0b0b0b",
      color: "white",
      minHeight: "100vh",
      fontFamily: "sans-serif"
    }}>

      {/* ヒーロー */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
          名古屋でバンドやりたい人、集まれ
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          初心者OK・1人参加OK・セッション中心
        </p>
        <a href="https://discord.gg/zsqekPAh" target="_blank" rel="noopener noreferrer" style={{ background: "#5865F2", padding: "12px 24px", borderRadius: "8px", color: "white", textDecoration: "none" }}>
          Discordに参加する
        </a>
      </section>

      {/* ターゲット */}
      <section style={{ padding: "60px 20px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
          こんな人におすすめ
        </h2>
        <ul>
          <li>・バンドをやりたいけど機会がない</li>
          <li>・1人で参加できる場所を探している</li>
          <li>・初心者でも安心して演奏したい</li>
        </ul>
      </section>

      {/* 特徴 */}
      <section style={{ background: "#1a1a1a", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px", textAlign: "center" }}>
          ExBondの特徴
        </h2>
        <ul style={{ maxWidth: "800px", margin: "0 auto" }}>
          <li>・初心者歓迎の設計</li>
          <li>・定期的なセッション開催</li>
          <li>・気軽に参加できる環境</li>
        </ul>
      </section>

      {/* イベントスケジュール */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ fontSize: "24px", textAlign: "center", marginBottom: "20px" }}>
          イベントスケジュール
        </h2>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=ngy.bandsession%40gmail.com&ctz=Asia%2FTokyo"
            style={{ border: 0, width: "100%", height: "500px", borderRadius: "8px" }}
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </section>

      {/* Discord風（参加者の声） */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          参加者の声
        </h2>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {[
            { user: "タカ", text: "初参加でも安心でした！" },
            { user: "ユウ", text: "めっちゃ楽しいです！" },
            { user: "ミナ", text: "雰囲気が最高！" }
          ].map((msg, i) => (
            <div key={i} style={{ background: "#222", padding: "15px", borderRadius: "8px", marginBottom: "10px" }}>
              <div style={{ fontSize: "12px", color: "#aaa" }}>{msg.user}</div>
              <div>{msg.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA（最下部） */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <a href="https://discord.gg/zsqekPAh" target="_blank" rel="noopener noreferrer" style={{ background: "linear-gradient(135deg, #5865F2, #4752C4)", padding: "16px 32px", borderRadius: "12px", color: "white", textDecoration: "none", fontSize: "20px", fontWeight: "bold" }}>
          今すぐDiscordに参加する
        </a>
      </section>
    </main>
  );
}