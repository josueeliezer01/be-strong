'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../Logo/logo';
import SearchIcon from '../SearchICon/SearchIcon';
import './NavBar.css';
import UserIcon from '../UserIcon/UserICon';
import CartIcon from '../CartIcon/CartIcon';

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchToggle = () => setSearchOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <div className="navbar-left">
        <Link href="/" className="logo-link">
          <Logo width={120} height={36} />
        </Link>
      </div>

      <button
        className={`nav-toggle ${isOpen ? 'open' : ''}`}
        aria-label="Menu"
        onClick={handleToggle}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <nav className={`nav-bar ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link href="/categories">CATEGORIAS</Link>
            <ul className="dropdown">
              <li>
                <Link href="/categories/sport-nutrition">
                  Nutrição Desportiva
                </Link>
              </li>
              <li>
                <Link href="/categories/healthy-eating">
                  Alimentação Saudável
                </Link>
              </li>
              <li>
                <Link href="/categories/wellness">Saúde e Bem‑Estar</Link>
              </li>
              <li>
                <Link href="/categories/weight-loss">Emagrecimento</Link>
              </li>
              <li>
                <Link href="/categories/sexual-health">Vida Sexual</Link>
              </li>
              <li>
                <Link href="/categories/beauty">Beleza e cuidado pessoal</Link>
              </li>
              <li>
                <Link href="/categories/activewear">Activewear</Link>
              </li>
              <li>
                <Link href="/categories/accessories">
                  Acessórios Desportivos
                </Link>
              </li>
              <li>
                <Link href="/categories/tech-home">Tecnologia e Casa</Link>
              </li>
              <li>
                <Link href="/categories/pet-nutrition">Nutrição Animal</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/brands">MARCAS</Link>
            <ul className="dropdown">
              <li>
                <Link href="/brands/amix">AMIX</Link>
              </li>
              <li>
                <Link href="/brands/biotech">BIOTECH</Link>
              </li>
              <li>
                <Link href="/brands/scitec">SCITEC</Link>
              </li>
              {/* …outras marcas */}
            </ul>
          </li>
          <li>
            <Link href="/ingredients">INGREDIENTES</Link>
            <ul className="dropdown">
              <li>
                <Link href="/ingredients/whey">Whey Protein</Link>
              </li>
              <li>
                <Link href="/ingredients/creatine">Creatina</Link>
              </li>
              {/* …outros ingredientes */}
            </ul>
          </li>
          <li>
            <Link href="/goals">OBJETIVOS</Link>
            <ul className="dropdown">
              <li>
                <Link href="/goals/muscle-gain">Ganho de Massa</Link>
              </li>
              <li>
                <Link href="/goals/fat-loss">Perda de Gordura</Link>
              </li>
              {/* …outros objetivos */}
            </ul>
          </li>
          <li>
            <Link href="/about">ZUMUB</Link>
          </li>
          <li>
            <Link href="/outlet">OUTLET</Link>
          </li>
        </ul>

        <div className="navbar-right">
          {isOpen && searchOpen && (
            <div className="search-container mobile-only-open">
              <input
                type="text"
                placeholder="PROCURAR"
                className="search-input"
              />
              <button className="search-button" aria-label="Buscar">
                <SearchIcon />
              </button>
            </div>
          )}
          <div className="search-container desktop-only">
            <input
              type="text"
              placeholder="PROCURAR"
              className="search-input"
            />

            <button className="search-button" aria-label="Buscar">
              <SearchIcon />
            </button>
          </div>

          <button
            className="icon-button mobile-search-toggle"
            aria-label="Buscar"
            onClick={handleSearchToggle}
          >
            <SearchIcon />
          </button>

          <select className="lang-select" aria-label="Seleção de idioma">
            <option value="pt">PT</option>
            <option value="en">EN</option>
          </select>

          <button className="icon-button" aria-label="Minha conta">
            <UserIcon />
          </button>

          <button className="icon-button" aria-label="Carrinho">
            <CartIcon />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
