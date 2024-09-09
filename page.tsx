"use client"

import React from 'react';
import '../top/style.css';

export default function TopPage() {
  return (
    <div className="page-container">
      <header className="header">
        <nav className="header-nav">
          <a href="/search">検索</a>
          <a href="/help">ヘルプ</a>
        </nav>
      </header>

      <div className="hero-section"></div>

      <div className="hero-text">
        <h1>Nurse Searchへようこそ</h1>
        <p>違いを活かして相乗効果・スキルUP。あなたに最適なパートナーを見つけましょう!</p>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2>さあ始めましょう</h2>
          <div className="cta-buttons">
            <a href="/signup" className="signup">登録がまだの方</a>
            <a href="/login" className="login">登録済みの方</a>
          </div>
        </div>
      </div>
    </div>
  );
}

