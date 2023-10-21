import Link from 'next/link';
import '../styles/style.css';

function MenuPage() {
  return (
    <div className="menu-container">
      <h2>Select a Menu</h2>
      {/* <Link> 컴포넌트 내의 <a> 태그는 단순히 스타일링을 위한 것입니다. */}
      <Link href="/quiz">
        <button className="menu-btn">Quiz</button>
      </Link>
      <Link href="/game">
        <button className="menu-btn">Tree Planting Map</button>
      </Link>
    </div>
  );
}

export default MenuPage;
