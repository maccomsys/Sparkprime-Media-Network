/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import PostPage from './pages/PostPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/category/:categoryName" element={<ArchivePage />} />
            <Route path="/post/:slug" element={<PostPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

