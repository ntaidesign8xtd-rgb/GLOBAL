import React, { useState, useEffect } from "react";
import { Language, PartnerProposal } from "../types";
import { translations } from "../translations";
import { UserCheck, Trash2, Calendar, FileText, CheckCircle, Mail, Phone, Briefcase, Tag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PartnerFormProps {
  lang: Language;
}

export const PartnerForm: React.FC<PartnerFormProps> = ({ lang }) => {
  const t = translations[lang];

  // Form states
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [marketInterest, setMarketInterest] = useState("");
  const [proposedValue, setProposedValue] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [history, setHistory] = useState<PartnerProposal[]>([]);

  // Load history from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("agri_logistics_proposals");
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (err) {
        console.error("Failed to parse local proposals", err);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !name || !email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newProposal: PartnerProposal = {
        id: "JV-" + Math.floor(Math.random() * 90000 + 10000),
        companyName: company,
        contactName: name,
        email: email,
        phone: phone,
        marketInterest: marketInterest || "Global / Multi-regional",
        proposedValue: proposedValue,
        submittedAt: new Date().toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        status: "under_review"
      };

      const updated = [newProposal, ...history];
      setHistory(updated);
      localStorage.setItem("agri_logistics_proposals", JSON.stringify(updated));

      // Reset fields
      setCompany("");
      setName("");
      setEmail("");
      setPhone("");
      setMarketInterest("");
      setProposedValue("");

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Hide success banner after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const handleDelete = (id: string) => {
    const updated = history.filter((p) => p.id !== id);
    setHistory(updated);
    localStorage.setItem("agri_logistics_proposals", JSON.stringify(updated));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="jv-portal-container">
      
      {/* Registration Form */}
      <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
          <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-400">
            <UserCheck className="w-5.5 h-5.5" />
          </div>
          <div>
            <h3 className="text-white font-sans font-bold text-lg leading-tight">
              {t.formTitle}
            </h3>
            <p className="text-slate-400 text-xs mt-1 font-sans">
              {t.formDesc}
            </p>
          </div>
        </div>

        {/* Success Alert Banner */}
        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-emerald-950/20 border border-emerald-500/40 rounded-xl p-4 mb-6 text-emerald-400 text-xs font-sans flex items-start gap-3 overflow-hidden shadow-sm"
            >
              <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
              <div>
                <span className="font-semibold block">{t.formSuccess}</span>
                <span className="text-slate-400 mt-1 block">Your proposal is securely stored on this browser's local sandbox storage. Our investment team has queued it for primary screening.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company name */}
          <div>
            <label htmlFor="input-company" className="block text-slate-400 text-xs font-sans font-semibold mb-1.5">{t.formCompany} *</label>
            <div className="relative">
              <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                id="input-company"
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. AgriTrade Global Ltd."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-emerald-500/80 transition-colors font-sans"
              />
            </div>
          </div>

          {/* Grid Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="input-contact" className="block text-slate-400 text-xs font-sans font-semibold mb-1.5">{t.formName} *</label>
              <div className="relative">
                <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  id="input-contact"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-emerald-500/80 transition-colors font-sans"
                />
              </div>
            </div>

            <div>
              <label htmlFor="input-email" className="block text-slate-400 text-xs font-sans font-semibold mb-1.5">{t.formEmail} *</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  id="input-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@company.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-emerald-500/80 transition-colors font-sans"
                />
              </div>
            </div>
          </div>

          {/* Phone (WhatsApp/Zalo) */}
          <div>
            <label htmlFor="input-phone" className="block text-slate-400 text-xs font-sans font-semibold mb-1.5">{t.formPhone}</label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                id="input-phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-emerald-500/80 transition-colors font-sans"
              />
            </div>
          </div>

          {/* Market Interest */}
          <div>
            <label htmlFor="input-interest" className="block text-slate-400 text-xs font-sans font-semibold mb-1.5">{t.formMarketInterest}</label>
            <div className="relative">
              <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                id="input-interest"
                type="text"
                value={marketInterest}
                onChange={(e) => setMarketInterest(e.target.value)}
                placeholder="e.g. North America Corridor (US/Canada)"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-emerald-500/80 transition-colors font-sans"
              />
            </div>
          </div>

          {/* Proposed strength value */}
          <div>
            <label htmlFor="textarea-value" className="block text-slate-400 text-xs font-sans font-semibold mb-1.5">{t.formProposedValue}</label>
            <textarea
              id="textarea-value"
              rows={3}
              value={proposedValue}
              onChange={(e) => setProposedValue(e.target.value)}
              placeholder="Detail your strengths in customs brokerage, multimodal freight networks, or equity investment..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-emerald-500/80 transition-colors font-sans resize-none"
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            id="btn-submit-proposal"
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-800 text-slate-950 font-sans font-bold text-sm py-3 px-4 rounded-xl shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-950 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t.formSubmitting}
              </>
            ) : (
              t.formSubmit
            )}
          </button>
        </form>
      </div>

      {/* History log from LocalStorage */}
      <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between min-h-[350px]">
        
        <div>
          <h4 className="text-white font-sans font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-3 flex items-center gap-2">
            <Calendar className="w-4.5 h-4.5 text-slate-400" />
            {t.formHistory}
          </h4>

          {history.length === 0 ? (
            <div className="py-12 text-center border border-dashed border-slate-800 rounded-xl bg-slate-950/20 text-slate-500 text-xs font-sans">
              {t.formNoHistory}
            </div>
          ) : (
            <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
              {history.map((proposal) => (
                <div key={proposal.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 relative group hover:border-slate-700/80 transition-colors">
                  
                  {/* Delete button */}
                  <button
                    id={`btn-delete-${proposal.id}`}
                    onClick={() => handleDelete(proposal.id)}
                    className="absolute top-4 right-4 text-slate-500 hover:text-rose-400 p-1 rounded-md hover:bg-slate-900 transition-colors focus:outline-none"
                    title={t.formDelete}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="pr-6">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] bg-slate-800 text-slate-300 font-mono px-1.5 py-0.5 rounded">
                        {proposal.id}
                      </span>
                      <span className="text-[10px] text-slate-500 font-sans">
                        {proposal.submittedAt}
                      </span>
                    </div>

                    <h5 className="text-white font-sans font-bold text-sm mt-2">
                      {proposal.companyName}
                    </h5>
                    <p className="text-slate-400 text-xs font-sans mt-0.5">
                      Rep: {proposal.contactName} ({proposal.email})
                    </p>

                    <div className="mt-3.5 pt-3 border-t border-slate-900 flex items-center justify-between gap-2">
                      <div className="text-[10px] text-slate-500 font-sans truncate max-w-[150px]">
                        Target: {proposal.marketInterest}
                      </div>
                      <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase shrink-0">
                        {t.formStatusReview}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic legal notice */}
        <div className="mt-6 text-[10px] text-slate-500 leading-normal font-sans pt-4 border-t border-slate-800/80">
          * Standard 2-way Mutual Non-Disclosure Agreement (NDA) will be generated and dispatched automatically using the email address specified above. Please ensure details are correct.
        </div>

      </div>

    </div>
  );
};
