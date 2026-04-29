export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "40px" }}>
      <h1>名古屋バンドコミュニティ ExBond</h1>
      <p>初心者歓迎・仲間募集・セッション開催</p>

      <section style={{ marginTop: "40px" }}>
        <h2>特徴</h2>
        <ul style={{ listStyle: "none" }}>
          <li>・初心者OK</li>
          <li>・名古屋中心で活動</li>
          <li>・気軽に参加できる</li>
        </ul>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>参加はこちら</h2>
        <a href="#" style={{ fontSize: "20px" }}>
          Discordに参加する
        </a>
      </section>
    </main>
  );
}