import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">食事管理ツール</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">ホーム</Link></li>
            <li><Link to="/upload" className="hover:underline">食事アップロード</Link></li>
            <li><Link to="/history" className="hover:underline">食事履歴</Link></li>
            <li><Link to="/reports" className="hover:underline">レポート</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;