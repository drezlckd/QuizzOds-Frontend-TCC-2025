import React from 'react';
import "./Header.css"

export function Header() {
    return (
        <header className="header">
  <div className="avatar"></div>

  <div className="actions">
    <input type="text" placeholder="Buscar..." />
    <div>🔔</div>
  </div>
</header>
    );
}
