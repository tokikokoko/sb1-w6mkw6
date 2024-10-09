import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">食事管理ツールへようこそ</h2>
      <p className="mb-4">このツールを使って、あなたの食事を簡単に記録し、健康的な生活を送りましょう。</p>
      <div className="space-y-4">
        <Link to="/upload" className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          食事をアップロード
        </Link>
        <Link to="/history" className="block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          食事履歴を見る
        </Link>
        <Link to="/reports" className="block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
          レポートを確認
        </Link>
      </div>
    </div>
  );
};

export default Home;