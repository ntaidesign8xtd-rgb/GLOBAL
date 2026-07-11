/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Language } from "./types";
import { translations } from "./translations";
import { InteractiveMap } from "./components/InteractiveMap";
import { CoreSolutions } from "./components/CoreSolutions";
import { InvestmentCalculator } from "./components/InvestmentCalculator";
import { PartnerForm } from "./components/PartnerForm";
import { Roadmap } from "./components/Roadmap";
import {
  Globe,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Boxes,
  Users,
  Compass,
  FileSpreadsheet
} from "lucide-react";
const heroImage = "/src/assets/images/hero_banner_1783761665474.jpg";

export default function App() {
  const [lang, setLang] = useState<Language>("vi");
  const [activeTab, setActiveTab] = useState<"map" | "pillars" | "roi" | "partner" | "roadmap">("map");

  const t = translations[lang];

  // List of 8 supported languages
  const languagesList: { code: Language; label: string; flag: string }[] = [
    { code: "vi", label: "Tiếng Việt", flag: "VN" },
    { code: "en", label: "English", flag: "US" },
    { code: "zh", label: "中文", flag: "CN" },
    { code: "ar", label: "العربية", flag: "AE" },
    { code: "tr", label: "Türkçe", flag: "TR" },
    { code: "de", label: "Deutsch", flag: "DE" },
    { code: "ja", label: "日本語", flag: "JP" },
    { code: "fr", label: "Français", flag: "FR" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-900" id="app-root">
      
      {/* Dynamic Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-900 shadow-sm" id="site-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold text-lg shadow-md shadow-emerald-950/30">
              <Boxes className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h1 className="text-base font-sans font-bold text-white tracking-tight flex items-center gap-2">
                {t.title}
              </h1>
              <span className="text-[10px] text-emerald-400 font-mono tracking-wider block uppercase">
                {t.subtitle}
              </span>
            </div>
          </div>

          {/* Right controls: Language Select + Navigation */}
          <div className="flex flex-wrap items-center gap-3.5">
            
            {/* Lang dropdown selector */}
            <div className="flex items-center gap-1 bg-slate-900/85 border border-slate-800 rounded-lg p-1.5 shadow-inner">
              <Globe className="w-3.5 h-3.5 text-slate-400 mx-1" />
              <select
                id="select-language"
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-xs text-slate-300 font-medium font-sans focus:outline-none cursor-pointer pr-2"
              >
                {languagesList.map((item) => (
                  <option key={item.code} value={item.code} className="bg-slate-900 text-slate-100">
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Direct Contact Icons */}
            <div className="flex items-center gap-1.5 border-l border-slate-800 pl-3.5">
              {/* Email Link */}
              <a
                id="header-contact-email"
                href="mailto:ntaidesign.ads@gmail.com;covereyeartcompanylimited@gmail.com?subject=Global Agri-Logistics Joint Venture Proposal"
                className="p-2 bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 rounded-lg transition-all"
                title="Email Support"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>

              {/* WhatsApp Link */}
              <a
                id="header-contact-whatsapp"
                href="https://wa.me/84373803977?text=Hello,%20I'm%20interested%20in%20Global%20Agri-Logistics%20Chain%20Joint%20Venture%20collaboration."
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 rounded-lg transition-all"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>

              {/* Zalo Link */}
              <a
                id="header-contact-zalo"
                href="https://zalo.me/84373803977"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 rounded-lg transition-all"
                title="Zalo Direct"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick action buttons */}
            <a
              id="anchor-connect-direct"
              href="#contact-footer-block"
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-sans font-bold px-3.5 py-2 rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              {t.contactBtn}
            </a>

          </div>

        </div>
      </header>

      {/* Hero Section Banner */}
      <section className="relative bg-slate-900 border-b border-slate-900 overflow-hidden" id="hero-banner-section">
        
        {/* Large premium generated background image */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-40 mix-blend-luminosity">
          <img
            src={heroImage}
            alt="Global Agri-Logistics automated cool terminal"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main textual message */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline label */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-sans font-semibold tracking-wider uppercase border border-emerald-500/15 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.partnerSearch}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
              Hệ thống kho lạnh thông minh và phân phối thực phẩm chế biến sâu Việt Nam
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
              {t.tagline}
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans max-w-2xl bg-slate-950/45 p-4 rounded-xl border border-slate-900">
              {t.partnerSearchDesc}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                id="btn-nav-map-hero"
                onClick={() => {
                  setActiveTab("map");
                  document.getElementById("interactive-main-panel")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-sans font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                {t.learnMore}
              </button>
              <a
                id="btn-nav-partner-hero"
                href="#jv-portal-container"
                className="bg-slate-900/80 hover:bg-slate-900 text-slate-100 border border-slate-800 font-sans font-bold text-sm px-6 py-3 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                {t.tabPartner}
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </a>
            </div>

          </div>

          {/* Stats Bento Card */}
          <div className="lg:col-span-5 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            <h3 className="text-white font-sans font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-3">
              {t.statsTitle}
            </h3>

            <div className="space-y-4">
              {/* Coverage */}
              <div className="flex items-center gap-4 p-3 bg-slate-950/50 rounded-xl border border-slate-850">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-emerald-400 font-sans font-bold text-lg block leading-none">
                    {t.statsCoverage}
                  </span>
                  <span className="text-slate-400 text-xs mt-1 block">
                    North America, Europe, ASEAN, GCC
                  </span>
                </div>
              </div>

              {/* Investment */}
              <div className="flex items-center gap-4 p-3 bg-slate-950/50 rounded-xl border border-slate-850">
                <div className="p-3 bg-sky-500/10 rounded-lg text-sky-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-sky-400 font-sans font-bold text-lg block leading-none">
                    {t.statsInvestment}
                  </span>
                  <span className="text-slate-400 text-xs mt-1 block">
                    {t.statsInvestmentSub}
                  </span>
                </div>
              </div>

              {/* Certification seal */}
              <div className="flex items-center gap-4 p-3 bg-slate-950/50 rounded-xl border border-slate-850">
                <div className="p-3 bg-teal-500/10 rounded-lg text-teal-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-teal-400 font-sans font-bold text-lg block leading-none">
                    USDA Organic & JAS Standards
                  </span>
                  <span className="text-slate-400 text-xs mt-1 block">
                    100% Certified Eco-compliant Supply Chain
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Main Interactive Workspace Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12" id="interactive-main-panel">
        
        {/* Navigation Workspace Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 border-b border-slate-900 pb-6" id="workspace-navigation-tabs">
          {/* Map Tab */}
          <button
            id="tab-select-map"
            onClick={() => setActiveTab("map")}
            className={`px-5 py-3 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer focus:outline-none flex items-center gap-2 ${
              activeTab === "map"
                ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950/25 font-bold"
                : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80"
            }`}
          >
            <Compass className="w-4 h-4" />
            {t.tabMap}
          </button>

          {/* Pillars Tab */}
          <button
            id="tab-select-pillars"
            onClick={() => setActiveTab("pillars")}
            className={`px-5 py-3 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer focus:outline-none flex items-center gap-2 ${
              activeTab === "pillars"
                ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950/25 font-bold"
                : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80"
            }`}
          >
            <Boxes className="w-4 h-4" />
            {t.tabPillars}
          </button>

          {/* ROI Calculator Tab */}
          <button
            id="tab-select-roi"
            onClick={() => setActiveTab("roi")}
            className={`px-5 py-3 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer focus:outline-none flex items-center gap-2 ${
              activeTab === "roi"
                ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950/25 font-bold"
                : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80"
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            {t.tabCalculator}
          </button>

          {/* Partner Registration Tab */}
          <button
            id="tab-select-partner"
            onClick={() => setActiveTab("partner")}
            className={`px-5 py-3 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer focus:outline-none flex items-center gap-2 ${
              activeTab === "partner"
                ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950/25 font-bold"
                : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80"
            }`}
          >
            <Users className="w-4 h-4" />
            {t.tabPartner}
          </button>

          {/* Roadmap Tab */}
          <button
            id="tab-select-roadmap"
            onClick={() => setActiveTab("roadmap")}
            className={`px-5 py-3 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer focus:outline-none flex items-center gap-2 ${
              activeTab === "roadmap"
                ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950/25 font-bold"
                : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            {t.tabTimeline}
          </button>
        </div>

        {/* Dynamic Panel Display */}
        <div id="dynamic-active-panel">
          {activeTab === "map" && <InteractiveMap lang={lang} />}
          {activeTab === "pillars" && <CoreSolutions lang={lang} />}
          {activeTab === "roi" && <InvestmentCalculator lang={lang} />}
          {activeTab === "partner" && <PartnerForm lang={lang} />}
          {activeTab === "roadmap" && <Roadmap lang={lang} />}
        </div>

      </main>

      {/* Online Support & Joint Venture Contact Area */}
      <section className="bg-slate-900 border-t border-slate-850 py-12" id="contact-footer-block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-white font-sans font-bold text-lg">
              {t.supportUrgent}
            </h4>
            <p className="text-slate-400 text-sm font-sans leading-relaxed max-w-2xl">
              Connect instantly with our regional investment board and logistics specialists for instant integration assistance, customs clearance guidelines, and joint venture feasibility analysis.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap gap-4 justify-start lg:justify-end">
            {/* Email Contact Link */}
            <a
              id="anchor-contact-email"
              href="mailto:ntaidesign.ads@gmail.com?subject=Global Agri-Logistics Joint Venture Proposal"
              className="bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-center gap-3 transition-colors cursor-pointer group"
            >
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:bg-emerald-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-500 font-mono block">BUSINESS EMAIL 1</span>
                <span className="text-xs text-slate-200 font-sans font-semibold">ntaidesign.ads@gmail.com</span>
              </div>
            </a>

            {/* Email Contact Link 2 */}
            <a
              id="anchor-contact-email-2"
              href="mailto:covereyeartcompanylimited@gmail.com?subject=Global Agri-Logistics Joint Venture Proposal"
              className="bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-center gap-3 transition-colors cursor-pointer group"
            >
              <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400 group-hover:bg-teal-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-500 font-mono block">BUSINESS EMAIL 2</span>
                <span className="text-xs text-slate-200 font-sans font-semibold">covereyeartcompanylimited@gmail.com</span>
              </div>
            </a>

            {/* WhatsApp Contact Link */}
            <a
              id="anchor-contact-whatsapp"
              href="https://wa.me/84373803977?text=Hello,%20I'm%20interested%20in%20Global%20Agri-Logistics%20Chain%20Joint%20Venture%20collaboration."
              target="_blank"
              rel="noreferrer"
              className="bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-center gap-3 transition-colors cursor-pointer group"
            >
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:bg-emerald-500/20">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-500 font-mono block">WHATSAPP CHAT</span>
                <span className="text-xs text-slate-200 font-sans font-semibold">+84 373 803 977</span>
              </div>
            </a>

            {/* Zalo Contact Link */}
            <a
              id="anchor-contact-zalo"
              href="https://zalo.me/84373803977"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-center gap-3 transition-colors cursor-pointer group"
            >
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:bg-emerald-500/20">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-500 font-mono block">ZALO CONNECT</span>
                <span className="text-xs text-slate-200 font-sans font-semibold">+84 373 803 977</span>
              </div>
            </a>

          </div>

        </div>
      </section>

      {/* Footer copyright */}
      <footer className="bg-slate-950 border-t border-slate-900/80 py-6" id="site-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-500 font-sans">
          <span>
            © 2026 Global Agri-Logistics Chain. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href="#hero-banner-section" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#hero-banner-section" className="hover:text-slate-300">Terms of Use</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
