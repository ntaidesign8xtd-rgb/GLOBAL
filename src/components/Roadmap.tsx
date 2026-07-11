import React, { useState } from "react";
import { Language } from "../types";
import { translations } from "../translations";
import { Calendar, Download, Building2, MapPin, CheckCircle, FileText, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface RoadmapProps {
  lang: Language;
}

export const Roadmap: React.FC<RoadmapProps> = ({ lang }) => {
  const t = translations[lang];
  const [downloadingDoc, setDownloadingDoc] = useState<string | null>(null);

  // Strategic timeline checkpoints
  const checkpoints = [
    {
      year: "2024",
      budget: "$15M",
      title: {
        vi: "Thiết kế & Khảo sát Địa chất",
        en: "Engineering & Geological Surveying",
        zh: "工程设计与地质详勘",
        ar: "الهندسة والمسح الجيولوجي",
        tr: "Mühendislik & Jeolojik Etütler",
        de: "Engineering & Geologische Vermessung",
        ja: "基本設計・地質調査・許認可",
        fr: "Ingénierie & Étude géologique"
      },
      desc: {
        vi: "Mở rộng 3 kho Hải Phòng, Đà Nẵng, Long An; triển khai giai đoạn 1 công nghệ ASRS.",
        en: "Expand Hai Phong, Da Nang, Long An facilities; initiate Phase 1 ASRS automation.",
        zh: "扩建海防、大南、龙安三大核心总仓；一期全自动立库 (ASRS) 建设启动。",
        ar: "توسيع مرافق هاي فونغ، دا نانغ، لونغ آن؛ بدء المرحلة الأولى من أتمتة ASRS.",
        tr: "Hai Phong, Da Nang, Long An tesislerinin genişletilmesi; 1. Aşama ASRS kurulumu.",
        de: "Erweiterung der Standorte Hai Phong, Da Nang und Long An; Start der Phase 1 ASRS-Automatisierung.",
        ja: "ハイフォン、ダナン、ロンアン各拠点の用地拡張と、第1期ASRS自動化導入。",
        fr: "Agrandissement des sites de Hai Phong, Da Nang et Long An ; phase 1 de l'automatisation ASRS."
      }
    },
    {
      year: "2025",
      budget: "$25M",
      title: {
        vi: "Xây dựng Hạ tầng Siêu đông IQF",
        en: "IQF Deep Freezing Infrastructure",
        zh: "IQF超低温深冻库房建设",
        ar: "البنية التحتية للتجميد العميق IQF",
        tr: "IQF Derin Dondurucu Altyapı İnşası",
        de: "IQF-Tiefkühl-Infrastruktur",
        ja: "急速IQF凍結・超低温加工ライン構築",
        fr: "Infrastructures de surgélation rapide IQF"
      },
      desc: {
        vi: "Xây dựng nhà máy chế biến sâu thịt sạch khép kín và kho lạnh điều chỉnh khí quyển CA.",
        en: "Erect clean deep-processed meat packaging facilities and controlled atmosphere CA chambers.",
        zh: "建成精深加工肉类无菌包装车间及高精密气体调控 (CA) 气调气调库。",
        ar: "إنشاء مرافق تغليف اللحوم العميقة المعالجة النظيفة وغرف التحكم في الغلاف الجوي CA.",
        tr: "Steril derin işlenmiş et paketleme tesisleri ve kontrollü atmosfer CA odalarının inşası.",
        de: "Errichtung von Anlagen für tiefverarbeitetes Fleisch und CA-Lagerkammern (kontrollierte Atmosphäre).",
        ja: "欧州基準準拠の加工肉無菌パッキングプラントおよびCAガス制御貯蔵シームの併設。",
        fr: "Construction d'installations d'emballage de viande stérile et de chambres à atmosphère contrôlée (CA)."
      }
    },
    {
      year: "2026 - 2027",
      budget: "$30M",
      title: {
        vi: "Liên minh Vận tải Toàn cầu & IoT",
        en: "Global Freight Alliance & IoT Mesh",
        zh: "全球海运多式联运联盟及IoT物联网整合",
        ar: "تحالف الشحن العالمي وشبكة IoT",
        tr: "Küresel Navlun İttifakı & IoT Mesh Entegrasyonu",
        de: "Globale Frachtallianz & IoT-Mesh-Netzwerk",
        ja: "国際マルチモーダル輸送アライアンス＆IoTネットワーク",
        fr: "Alliance mondiale du fret & Réseau IoT"
      },
      desc: {
        vi: "Thành lập đội tàu container lạnh chuyên tuyến Bắc Mỹ/EU; lắp đặt 22.000 thiết bị cảm biến.",
        en: "Form specialized cold container fleets for US/EU routes; deploy 22,000 real-time sensors.",
        zh: "组建北美及欧盟航线的专用智能温控冷箱船队；在物流全链条部署2.2万台传感器。",
        ar: "تشكيل أساطيل حاويات مبردة متخصصة لطرق الولايات المتحدة والاتحاد الأوروبي؛ نشر 22,000 مستشعر في الوقت الفعلي.",
        tr: "ABD/AB hatları için özel soğuk konteyner filolarının kurulması; 22.000 sensörün entegrasyonu.",
        de: "Aufbau spezialisierter Kühlcontainer-Flotten für US/EU-Routen; Bereitstellung von 22.000 Echtzeitsensoren.",
        ja: "米欧航路の専用リーファーコンテナ船隊の組成、および全サプライチェーンに22,000基のセンサーを配備。",
        fr: "Création d'une flotte de conteneurs frigorifiques pour les routes US/UE ; déploiement de 22 000 capteurs."
      }
    },
    {
      year: "2028",
      budget: "$10M",
      title: {
        vi: "Số hóa Blockchain & Hoạt động toàn cầu",
        en: "Blockchain Digitalization & Global Run",
        zh: "区块链数字化追溯与全面商业运营",
        ar: "الرقمنة عبر البلوكشين والتشغيل العالمي",
        tr: "Blockchain Dijitalizasyon & Küresel Tam Operasyon",
        de: "Blockchain-Digitalisierung & globaler Betrieb",
        ja: "ブロックチェーン追溯デジタル化と全面運用",
        fr: "Numérisation Blockchain & Exploitation globale"
      },
      desc: {
        vi: "Tích hợp sổ cái Blockchain truy xuất nguồn gốc; vận hành thương mại chuỗi nông sản đạt ESG.",
        en: "Integrate blockchain ledgers for 100% origin audits; full commercial operation in line with ESG.",
        zh: "实现100%原产地区块链追溯电子账本；冷链供应链实现符合ESG准则的绿色全面商运。",
        ar: "دمج دفاتر بلوكشين لتدقيق المنشأ بنسبة 100%؛ التشغيل التجاري الكامل بما يتماشى مع ESG.",
        tr: "Tam orijin denetimleri için blockchain entegrasyonu; ESG ilkelerine uygun küresel tam operasyon.",
        de: "Integration von Blockchain-Ledgern für lückenlose Herkunftsprüfungen; voller kommerzieller Betrieb nach ESG.",
        ja: "100%完全原产地証明ブロックチェーン台帳の統合、およびESGに完全に準拠した全線商業運用の稼働。",
        fr: "Intégration de registres blockchain pour la traçabilité ; pleine exploitation commerciale conforme aux critères ESG."
      }
    }
  ];

  const handleDownload = (docName: string) => {
    setDownloadingDoc(docName);
    
    // Simulate real download delay
    setTimeout(() => {
      setDownloadingDoc(null);
      
      // Programmatically trigger a dummy text file download representing the brochure/NDA
      const blob = new Blob([
        `--- GLOBAL AGRI-LOGISTICS CHAIN PROJECT ---
Document: ${docName}
Generated At: 2026-07-11
Confidentiality Notice: This is a secure bilingual project dossier representing the $80M investment framework.
Vietnam National Agri-Logistics Office`
      ], { type: "text/plain" });
      
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = docName.toLowerCase().replace(/[^a-z0-9]/g, "_") + ".txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <div className="space-y-12" id="roadmap-invest-timeline">
      
      {/* Timeline Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight flex items-center justify-center gap-2">
            <Calendar className="w-5.5 h-5.5 text-emerald-400" />
            {t.timelineTitle}
          </h3>
          <p className="text-slate-400 text-sm mt-2 font-sans">
            {t.timelineDesc}
          </p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0">
          
          {/* Centered line for desktop, left line for mobile */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2"></div>

          <div className="space-y-8">
            {checkpoints.map((cp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Node marker */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-1.5 z-10">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950 shadow"></div>
                  </div>

                  {/* Empty filler block for desktop */}
                  <div className="hidden sm:block w-1/2"></div>

                  {/* Real Content card */}
                  <div className={`w-full sm:w-1/2 pl-8 sm:pl-0 ${isEven ? "sm:pl-8" : "sm:pr-8"}`}>
                    <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 hover:border-slate-700/80 transition-colors shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-emerald-400 font-mono font-bold text-lg">
                          {cp.year}
                        </span>
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-mono px-2 py-0.5 rounded-full font-bold">
                          BUDGET: {cp.budget}
                        </span>
                      </div>
                      <h4 className="text-white font-sans font-bold text-sm mb-2">
                        {cp.title[lang]}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed font-sans">
                        {cp.desc[lang]}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Representation Offices Addresses & Downloads */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Contact offices addresses */}
        <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h4 className="text-white font-sans font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2 border-b border-slate-850 pb-3">
            <Building2 className="w-4.5 h-4.5 text-emerald-400" />
            Global Representation Offices
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
            {/* VN */}
            <div className="space-y-1.5">
              <span className="text-emerald-400 font-sans font-semibold tracking-wide flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                VIETNAM HUB
              </span>
              <p className="text-slate-300 font-sans leading-normal">
                {t.officeVN}
              </p>
              <p className="text-slate-500 font-mono text-[10px]">
                No 88 Le Loi Blvd, Ngo Quyen Dist, Hai Phong City
              </p>
            </div>

            {/* DE */}
            <div className="space-y-1.5">
              <span className="text-emerald-400 font-sans font-semibold tracking-wide flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                GERMANY HUB
              </span>
              <p className="text-slate-300 font-sans leading-normal">
                {t.officeDE}
              </p>
              <p className="text-slate-500 font-mono text-[10px]">
                Kaiserstraße 28, 60311 Frankfurt am Main
              </p>
            </div>

            {/* JP */}
            <div className="space-y-1.5">
              <span className="text-emerald-400 font-sans font-semibold tracking-wide flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                JAPAN HUB
              </span>
              <p className="text-slate-300 font-sans leading-normal">
                {t.officeJP}
              </p>
              <p className="text-slate-500 font-mono text-[10px]">
                Marunouchi Chiyoda-ku, Tokyo 100-0005
              </p>
            </div>

            {/* SG */}
            <div className="space-y-1.5">
              <span className="text-emerald-400 font-sans font-semibold tracking-wide flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                SINGAPORE HUB
              </span>
              <p className="text-slate-300 font-sans leading-normal">
                {t.officeSG}
              </p>
              <p className="text-slate-500 font-mono text-[10px]">
                10 Marina Boulevard, Marina Bay Financial Centre, 018983
              </p>
            </div>
          </div>
        </div>

        {/* Resources downloads mockup */}
        <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <h4 className="text-white font-sans font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-850 pb-3">
              <FileText className="w-4.5 h-4.5 text-emerald-400" />
              {t.docDownload}
            </h4>
            <p className="text-slate-400 text-xs mb-4 font-sans leading-relaxed">
              Retrieve full corporate blueprints, trade routes and secure double NDA drafts instantly.
            </p>
          </div>

          <div className="space-y-3">
            {/* Brochure download */}
            <button
              id="btn-download-brochure"
              onClick={() => handleDownload("Global_Agri_Logistics_Brochure_2026")}
              disabled={downloadingDoc !== null}
              className="w-full bg-slate-950 hover:bg-slate-900 text-slate-200 border border-slate-800 rounded-xl px-4 py-3 text-xs font-sans font-medium flex items-center justify-between cursor-pointer transition-colors"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 text-emerald-400" />
                {t.docBrochure}
              </span>
              {downloadingDoc === "Global_Agri_Logistics_Brochure_2026" ? (
                <span className="text-emerald-400 font-mono text-[10px] animate-pulse">Downloading...</span>
              ) : (
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              )}
            </button>

            {/* NDA Template download */}
            <button
              id="btn-download-nda"
              onClick={() => handleDownload("Bilingual_Mutual_NDA_Form_Viet_Eng")}
              disabled={downloadingDoc !== null}
              className="w-full bg-slate-950 hover:bg-slate-900 text-slate-200 border border-slate-800 rounded-xl px-4 py-3 text-xs font-sans font-medium flex items-center justify-between cursor-pointer transition-colors"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 text-teal-400" />
                {t.docNda}
              </span>
              {downloadingDoc === "Bilingual_Mutual_NDA_Form_Viet_Eng" ? (
                <span className="text-teal-400 font-mono text-[10px] animate-pulse">Downloading...</span>
              ) : (
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              )}
            </button>
          </div>

          <div className="mt-4 pt-3 text-[10px] text-slate-500 text-center font-mono">
            SECURE SHA256 CORRIDOR HANDSHAKE
          </div>
        </div>

      </div>

    </div>
  );
};
