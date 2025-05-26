import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <section className="sidebar">
    {/* 1. Tweets(홈) 메뉴 */}
    <Link to="/" className="sidebar__menuItem">
    <i className="far fa-comment-dots" aria-hidden="true"></i>
    <span aria-label="Tweets">Tweets</span>
    </Link>
    {/* 2. About 메뉴 */}
    <Link to="/about" className="sidebar__menuItem">
      <i className="far fa-question-circle"></i> About
    </Link>
    {/* 3. MyPage 메뉴 */}
    <Link to="/mypage" className="sidebar__menuItem">
      <i className="far fa-user"></i> MyPage
    </Link>
  </section>
);


export default Sidebar;
