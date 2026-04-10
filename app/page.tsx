"use client";
import { useState } from "react";

const tabs = ["トップ", "メニュー", "店舗情報", "お問い合わせ"] as const;
type Tab = (typeof tabs)[number];

function LeafDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "52px 0 44px" }}>
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "var(--accent)", fontStyle: "italic" }}>&#9753;</span>
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
  );
}

function TopSection() {
  return (
    <div>
      <div className="hero-pad" style={{ padding: "72px 0 56px", textAlign: "center" }}>
        <p className="section-title-en" style={{ marginBottom: 14 }}>Coffee Hanabishi</p>
        <h1 className="hero-title">珈琲花びし</h1>
        <p className="hero-sub" style={{ marginTop: 20, lineHeight: 2.2 }}>薬院の小さな珈琲店。<br />一杯ずつ丁寧にハンドドリップで淌れる、<br />静かな時間をお届けします。</p>
        <div style={{ marginTop: 32, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <a href="tel:092-406-8156" style={{ display: "inline-block", padding: "13px 32px", background: "var(--accent)", color: "#fff", textDecoration: "none", letterSpacing: "0.1em", fontSize: 14, whiteSpace: "nowrap", borderRadius: 2 }}>お電話でのお問い合わせ</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" style={{ display: "inline-block", padding: "13px 32px", border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none", letterSpacing: "0.1em", fontSize: 14, whiteSpace: "nowrap", borderRadius: 2 }}>Instagram</a>
        </div>
      </div>
      <LeafDivider />
      <section style={{ textAlign: "center", maxWidth: 580, margin: "0 auto" }}>
        <p className="section-title-en" style={{ marginBottom: 10 }}>Our Story</p>
        <h2 className="section-title" style={{ marginBottom: 24 }}>一杯の珈琲に、<br />花を添えて。</h2>
        <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 2.2 }}>「珈琲花びし」は、福岡・薬院にひっそりと佇む珈琲専門店です。厳選した豆をハンドドリップで一杯ずつ丁寧に。手作りのランチやスイーツとともに、読書やお仕事の合間に、ほっとひと息つける空間をご用意しています。おひとり様でも気兼ねなくお過ごしいただけます。</p>
      </section>
      <LeafDivider />
      <section>
        <div className="grid-3">
          {[{ title: "ハンドドリップ珈琲", desc: "豆の個性を引き出す丁寧なドリップ。深煎りから浅煎りまで、お好みの味わいをお選びいただけます。" }, { title: "手作りランチ", desc: "ハンバーグランチ、ホットサンド、カレーなど、心もお腹も満たすメニューをご用意。" }, { title: "静かな空間", desc: "カウンターとテーブル席で約12席。落ち着いた店内で、おひとり様でもゆったりお過ごしいただけます。" }].map((item) => (<div key={item.title} style={{ padding: 28, background: "var(--bg-card)", border: "1px solid var(--border-light)", textAlign: "center", borderRadius: 2 }}><h3 style={{ fontSize: 17, color: "var(--accent)", marginBottom: 12, letterSpacing: "0.06em" }}>{item.title}</h3><p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.9 }}>{item.desc}</p></div>))}
        </div>
      </section>
      <LeafDivider />
      <section style={{ background: "var(--bg-card)", border: "1px solid var(--border-light)", padding: "24px 32px", borderRadius: 2 }}>
        <div className="info-bar">
          <div><span style={{ fontSize: 12, color: "var(--text-dim)", letterSpacing: "0.1em" }}>営業時間</span><p style={{ fontSize: 15, marginTop: 4 }}>10:00 〜 22:00（日 〜20:00）</p></div>
          <div><span style={{ fontSize: 12, color: "var(--text-dim)", letterSpacing: "0.1em" }}>定休日</span><p style={{ fontSize: 15, marginTop: 4 }}>月曜日</p></div>
          <div><span style={{ fontSize: 12, color: "var(--text-dim)", letterSpacing: "0.1em" }}>予算目安</span><p style={{ fontSize: 15, marginTop: 4 }}>¥1,000 〜 ¥2,000</p></div>
        </div>
      </section>
    </div>
  );
}

function MenuSection() {
  const coffee = [{ name: "ブレンドコーヒー（Hot / Ice）", price: "¥500" },{ name: "シングルオリジン", price: "¥600〜" },{ name: "カフェラテ", price: "¥550" },{ name: "トルココーヒー", price: "¥600" },{ name: "マンゴースムージー", price: "¥650" },{ name: "アイスコーヒー", price: "¥500" }];
  const food = [{ name: "ハンバーグランチセット", price: "¥1,100" },{ name: "ホットサンドセット", price: "¥900" },{ name: "カレーライスセット", price: "¥1,000" },{ name: "トーストセット", price: "¥750" }];
  const sweets = [{ name: "自家製プリン", price: "¥450" },{ name: "ワッフル", price: "¥500" },{ name: "本日のケーキ", price: "¥480" },{ name: "あんバタートースト", price: "¥550" }];
  const renderMenu = (items) => items.map((item) => (<div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: "var(--bg-card)", borderBottom: "1px solid var(--border-light)" }}><span style={{ fontSize: 15 }}>{item.name}</span><span style={{ fontSize: 14, color: "var(--accent)", whiteSpace: "nowrap", marginLeft: 16 }}>{item.price}</span></div>));
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 48 }}><p className="section-title-en" style={{ marginBottom: 10 }}>Menu</p><h2 className="section-title">お品書き</h2><p style={{ color: "var(--text-dim)", fontSize: 13, marginTop: 8 }}>※ ランチセットにはサラダ・スープ・コーヒー付き</p></div>
      <h3 style={{ fontSize: 17, color: "var(--accent)", marginBottom: 16, letterSpacing: "0.08em", textAlign: "center" }}>― 珈琲・ドリンク ―</h3>
      <div className="grid-2-menu">{renderMenu(coffee)}</div>
      <LeafDivider />
      <h3 style={{ fontSize: 17, color: "var(--accent)", marginBottom: 16, letterSpacing: "0.08em", textAlign: "center" }}>― ランチ ―</h3>
      <div className="grid-2-menu">{renderMenu(food)}</div>
      <LeafDivider />
      <h3 style={{ fontSize: 17, color: "var(--accent)", marginBottom: 16, letterSpacing: "0.08em", textAlign: "center" }}>― スイーツ ―</h3>
      <div className="grid-2-menu">{renderMenu(sweets)}</div>
    </div>
  );
}

function ShopInfoSection() {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 48 }}><p className="section-title-en" style={{ marginBottom: 10 }}>Access</p><h2 className="section-title">店舗情報・アクセス</h2></div>
      <div className="grid-2">
        <div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}><tbody>
            {[["店名","珈琲花びし"],["住所","〒810-0022\n福岡県福岡市中央区薬院2丁目14-26"],["電話","092-406-8156"],["営業時間","火〜土 10:00 〜 22:00\n日 10:00 〜 20:00"],["定休日","月曜日"],["席数","テーブル・カウンター 約12席"],["予算","¥1,000 〜 ¥2,000"],["アクセス","西鉄天神大牟田線\n薬院駅 徒歩3分"]].map(([l,v]) => (<tr key={l} style={{ borderBottom: "1px solid var(--border-light)" }}><td style={{ padding: "14px 16px 14px 0", fontSize: 13, color: "var(--accent)", verticalAlign: "top", whiteSpace: "nowrap", width: 90 }}>{l}</td><td style={{ padding: "14px 0", fontSize: 15, whiteSpace: "pre-line" }}>{v}</td></tr>))}
          </tbody></table>
        </div>
        <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5!2d130.3956021!3d33.5823527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35419150ad3df7b5%3A0xcdbffbf58ac75b6a!2z54+I55Cy6Iqx44Gz44GX!5e0!3m2!1sja!2sjp!4v1700000000000" width="100%" height="100%" style={{ border: 0, minHeight: 320, borderRadius: 2 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 48 }}><p className="section-title-en" style={{ marginBottom: 10 }}>Contact</p><h2 className="section-title">お問い合わせ</h2></div>
      <div className="contact-grid">
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-light)", padding: 32, textAlign: "center", borderRadius: 2 }}>
          <p style={{ fontSize: 13, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 16 }}>お電話</p>
          <a href="tel:092-406-8156" style={{ fontSize: 26, color: "var(--accent)", textDecoration: "none", letterSpacing: "0.05em", fontWeight: 600, wordBreak: "break-all" }}>092-406-8156</a>
          <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 12 }}>営業時間内にお気軽にどうぞ</p>
          <a href="tel:092-406-8156" style={{ display: "inline-block", marginTop: 20, padding: "13px 36px", background: "var(--accent)", color: "#fff", textDecoration: "none", letterSpacing: "0.1em", fontSize: 14, whiteSpace: "nowrap", borderRadius: 2 }}>電話をかける</a>
        </div>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-light)", padding: 32, textAlign: "center", borderRadius: 2 }}>
          <p style={{ fontSize: 13, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 16 }}>Instagram</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: "var(--text)", marginBottom: 8, letterSpacing: "0.05em", fontStyle: "italic" }}>@hanabishi_coffee</p>
          <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.9, marginBottom: 20 }}>新メニューや季節の珈琲情報を<br />Instagramで発信しています。</p>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" style={{ display: "inline-block", padding: "13px 36px", border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none", letterSpacing: "0.1em", fontSize: 14, whiteSpace: "nowrap", borderRadius: 2 }}>Instagramを見る</a>
        </div>
      </div>
      <div style={{ marginTop: 28, textAlign: "center", padding: 24, background: "var(--bg-card)", border: "1px solid var(--border-light)", borderRadius: 2 }}>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 2 }}>※ お席のご予約は承っておりません。直接ご来店ください。<br />※ 混雑時はお待ちいただく場合がございます。<br />※ テイクアウトも対応しております。</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("トップ");
  return (
    <>
      <header style={{ borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 100, background: "var(--bg)" }}>
        <div className="site-header-inner" style={{ maxWidth: 880, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontStyle: "italic", color: "var(--accent)", fontWeight: 500 }}>Hanabishi</span>
            <span style={{ fontSize: 14, letterSpacing: "0.12em", color: "var(--text)" }}>珈琲花びし</span>
          </div>
          <nav className="site-nav">
            {tabs.map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: "20px 16px", background: "none", border: "none", cursor: "pointer", fontSize: 13, letterSpacing: "0.06em", whiteSpace: "nowrap", color: activeTab === tab ? "var(--accent)" : "var(--text-muted)", borderBottom: activeTab === tab ? "2px solid var(--accent)" : "2px solid transparent", transition: "color 0.2s, border-color 0.2s" }}>{tab}</button>))}
          </nav>
        </div>
      </header>
      <main className="main-pad" style={{ paddingTop: 44 }}>
        {activeTab === "トップ" && <TopSection />}
        {activeTab === "メニュー" && <MenuSection />}
        {activeTab === "店舗情報" && <ShopInfoSection />}
        {activeTab === "お問い合わせ" && <ContactSection />}
      </main>
      <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 24px", textAlign: "center", background: "var(--bg-warm)" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, color: "var(--text-dim)", letterSpacing: "0.12em", fontStyle: "italic" }}>&copy; 2024 Coffee Hanabishi. All rights reserved.</p>
      </footer>
    </>
  );
}
