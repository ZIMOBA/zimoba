'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const pillars = [
  { number: '01', title: 'Nos produits', text: 'Nous imaginons, construisons et lançons des produits SaaS qui répondent à de vrais usages.', mark: '↗' },
  { number: '02', title: 'Pour votre entreprise', text: 'Une équipe technique senior pour transformer une idée ambitieuse en logiciel fiable et évolutif.', mark: '◫' },
  { number: '03', title: 'L\u2019argent en mouvement', text: 'Nous intégrons les paiements et les flux financiers au cœur de vos produits, simplement.', mark: '⌁' },
]

const projects = [
  { name: 'YoguePay', category: 'Fintech · Paiements mobiles', description: 'Portefeuille personnel et professionnel, factures, et une infrastructure de paiement mobile money pour la RDC  utilisable directement, ou intégrée dans le produit d\u2019une autre entreprise via notre API.', image: '/yogue-pay.png', url: 'https://yoguepay.com' },
  { name: 'Congo Ndaku', category: 'Immobilier · Hôtellerie', description: 'Plateforme immobilière et hôtelière pour le marché congolais, recherche géolocalisée en temps réel, paiements mobile money intégrés.', image: '/congo-ndaku.png', url: 'https://congondaku.com' },
]

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span> }

function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><div className="nav-shell">
    <Link href="#top" className="wordmark" aria-label="Zimoba, accueil"><span className="wordmark-mark">Z</span> zimoba</Link>
    <nav className="desktop-nav" aria-label="Navigation principale"><Link href="#expertise">Expertise</Link><Link href="#realisations">Réalisations</Link><Link href="#apropos">À propos</Link></nav>
    <Link href="#contact" className="button button-small">Commencer <Arrow /></Link>
  </div></header>
}

function HeroVisual() { return <div className="hero-visual" aria-hidden="true"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-core"><span>Z</span></div><div className="visual-label label-top">systèmes / 01</div><div className="visual-label label-bottom">conçu pour avancer</div></div> }

function Pillars() { return <section id="expertise" className="section pillars-section"><div className="section-intro"><span className="eyebrow">Ce que nous faisons</span><h2>Trois façons de<br /><em>faire avancer</em> les choses.</h2></div><div className="pillar-grid">{pillars.map((pillar) => <article className="pillar" key={pillar.number}><div className="pillar-top"><span>{pillar.number}</span><span className="pillar-mark">{pillar.mark}</span></div><h3>{pillar.title}</h3><p>{pillar.text}</p><Link href="#contact" className="text-link">En savoir plus <Arrow /></Link></article>)}</div></section> }

function Projects() { return <section id="realisations" className="section projects-section"><div className="section-heading"><div><span className="eyebrow">Réalisations sélectionnées</span><h2>Des idées qui<br /><em>existent vraiment.</em></h2></div><p>Nous préférons les produits en production aux promesses en présentation.</p></div><div className="project-list">{projects.map((project, index) => <article className="project" key={project.name}><a href={project.url} target="_blank" rel="noreferrer" className="project-image"><Image src={project.image} alt={`Aperçu du projet ${project.name}`} fill sizes="(max-width: 768px) 100vw, 50vw" /><span className="project-index">0{index + 1}</span><span className="project-visit">Visiter <Arrow /></span></a><div className="project-info"><div><span className="eyebrow">{project.category}</span><h3>{project.name}</h3></div><div><p>{project.description}</p><a href={project.url} target="_blank" rel="noreferrer" className="text-link">Voir le site <Arrow /></a></div></div></article>)}</div></section> }

function Capabilities() { return <section className="capabilities" aria-label="Nos capacités"><div><strong>Produit</strong><span>de l\u2019idée à la mise en ligne</span></div><div><strong>Impact</strong><span>mesuré en production</span></div><div><strong>Vitesse</strong><span>sans sacrifier la qualité</span></div><div><strong>Clarté</strong><span>à chaque étape</span></div></section> }

function App() { return <><Header /><main id="top"><section className="hero section"><div className="hero-copy"><span className="eyebrow reveal">Studio logiciel indépendant <span className="status-dot" /></span><h1 className="reveal reveal-delay-1">Le logiciel<br /><em>qui avance</em><br />avec vous.</h1><p className="hero-sub reveal reveal-delay-2">Nous construisons des produits numériques ambitieux pour nous, pour vous, et pour les marchés de demain.</p><div className="hero-actions reveal reveal-delay-3"><Link href="#contact" className="button">Démarrer un projet <Arrow /></Link><Link href="#realisations" className="text-link">Voir nos réalisations <Arrow /></Link></div></div><HeroVisual /></section><Pillars /><Projects /><Capabilities /><section id="contact" className="cta section"><span className="eyebrow">Une idée en tête ?</span><h2>Faisons-lui<br /><em>prendre forme.</em></h2><Link href="mailto:youssoufeyogueo@gmail.com" className="button button-light">Parlons de votre projet <Arrow /></Link></section></main><footer id="apropos" className="footer"><div className="footer-top"><Link href="#top" className="wordmark"><span className="wordmark-mark">Z</span> zimoba</Link><p>Des logiciels utiles.<br />Des systèmes qui durent.</p><div className="footer-links"><a href="mailto:hello@zimoba.com">Contact</a><a href="#">LinkedIn <Arrow /></a><a href="#">Mentions légales</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Zimoba</span><span>Fait avec intention.</span></div></footer></> }

export default App
