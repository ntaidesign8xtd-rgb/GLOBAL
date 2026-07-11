import React, { useState, useEffect } from "react";
import { Language, SensorData } from "../types";
import { translations } from "../translations";
import { Shield, Thermometer, Droplets, Wind, RefreshCw, AlertTriangle, CheckCircle2, ChevronRight, Landmark, Disc, FlameKindling } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CoreSolutionsProps {
  lang: Language;
}

export const CoreSolutions: React.FC<CoreSolutionsProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<"storage" | "meats" | "rice">("storage");

  // Initial mock live telemetry states
  const [telemetry, setTelemetry] = useState<SensorData[]>([
    {
      locationKey: "HP",
      locationName: {
        vi: "Tổng kho thông minh Hải Phòng (Miền Bắc)",
        en: "Hai Phong Smart Hub (Northern Region)",
        zh: "海防智能总仓 (北部港区)",
        ar: "مركز هاي فونغ الذكي (المنطقة الشمالية)",
        tr: "Hai Phong Akıllı Deposu (Kuzey Bölgesi)",
        de: "Hai Phong Smart Hub (Nördliche Region)",
        ja: "ハイフォンインテリジェント倉庫（北部地区）",
        fr: "Hub intelligent de Hai Phong (Région Nord)"
      },
      temperature: -40.2, // IQF Deep Freeze
      humidity: 48.4,
      o2Level: 1.8, // CA Storage Controlled atmosphere
      status: "active"
    },
    {
      locationKey: "DN",
      locationName: {
        vi: "Tổng kho miền trung Đà Nẵng",
        en: "Da Nang Regional Hub (Central Region)",
        zh: "岘港智能总仓 (中部地区)",
        ar: "مركز دا نانغ الإقليمي (المنطقة الوسطى)",
        tr: "Da Nang Bölgesel Deposu (Merkez Bölge)",
        de: "Da Nang Regional Hub (Zentralregion)",
        ja: "ダナン地域ハブ倉庫（中部地区）",
        fr: "Hub régional de Da Nang (Région Centrale)"
      },
      temperature: -18.5, // Standard cold frozen storage
      humidity: 86.2, // High humidity simulation trigger!
      o2Level: 2.1,
      status: "warning" // To demonstrate warning handling dynamically!
    },
    {
      locationKey: "LA",
      locationName: {
        vi: "Tổng kho nông sản Long An (Miền Nam)",
        en: "Long An Agricultural Hub (Southern Region)",
        zh: "龙安农产品总仓 (南部平原)",
        ar: "مركز لونغ آن الزراعي (المنطقة الجنوبية)",
        tr: "Long An Tarım Deposu (Güney Bölgesi)",
        de: "Long An Agrar-Hub (Südliche Region)",
        ja: "ロンアン農産物流通ハブ（南部地区）",
        fr: "Hub agricole de Long An (Région Sud)"
      },
      temperature: 2.4, // Chilled Storage
      humidity: 62.1,
      o2Level: 1.2,
      status: "active"
    }
  ]);

  const [lastUpdated, setLastUpdated] = useState<string>("");

  // Update timestamps and fluctuate values slightly to represent genuine live telemetry
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLastUpdated(now.toLocaleTimeString());
    };
    updateTime();

    const interval = setInterval(() => {
      setTelemetry((prev) =>
        prev.map((sensor) => {
          // Add small fluctuations
          const tempShift = (Math.random() - 0.5) * 0.4;
          const humidShift = (Math.random() - 0.5) * 0.8;
          const o2Shift = (Math.random() - 0.5) * 0.1;

          // Constraints
          let newTemp = parseFloat((sensor.temperature + tempShift).toFixed(1));
          let newHumid = parseFloat((sensor.humidity + humidShift).toFixed(1));
          let newO2 = parseFloat((sensor.o2Level + o2Shift).toFixed(2));

          // Retain appropriate ranges
          if (sensor.locationKey === "HP") {
            if (newTemp > -38) newTemp = -40.0;
            if (newTemp < -42) newTemp = -40.0;
          } else if (sensor.locationKey === "DN") {
            if (newTemp > -15) newTemp = -18.0;
            if (newTemp < -21) newTemp = -18.0;
            // Humid stays relatively high to trigger warning
            if (newHumid < 82) newHumid = 85.0;
          } else {
            if (newTemp > 4) newTemp = 2.0;
            if (newTemp < 1) newTemp = 2.0;
          }

          // Trigger state status
          const status = sensor.locationKey === "DN" && newHumid > 85 ? "warning" : "active";

          return {
            ...sensor,
            temperature: newTemp,
            humidity: newHumid,
            o2Level: newO2,
            status
          };
        })
      );
      updateTime();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-10" id="core-pillars-section">
      
      {/* 3 Pillars Overview Tab Layout */}
      <div>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h3 className="text-2xl font-sans font-bold text-slate-100 tracking-tight">
            {t.pillarsTitle}
          </h3>
          <p className="text-slate-400 text-sm mt-2 font-sans">
            {t.pillarsDesc}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-8">
          <button
            id="tab-btn-storage"
            onClick={() => setActiveTab("storage")}
            className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-start gap-3.5 focus:outline-none ${
              activeTab === "storage"
                ? "bg-slate-900 border-emerald-500/80 shadow-md shadow-emerald-950/20"
                : "bg-slate-900/45 border-slate-800/80 hover:bg-slate-900/80"
            }`}
          >
            <div className={`p-2.5 rounded-lg ${activeTab === "storage" ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-950 text-slate-500"}`}>
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <h4 className={`text-sm font-sans font-semibold ${activeTab === "storage" ? "text-emerald-400" : "text-slate-300"}`}>
                {t.pillar1Title}
              </h4>
              <p className="text-slate-400 text-xs mt-1 font-sans line-clamp-1">
                {t.pillar1Desc}
              </p>
            </div>
          </button>

          <button
            id="tab-btn-meats"
            onClick={() => setActiveTab("meats")}
            className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-start gap-3.5 focus:outline-none ${
              activeTab === "meats"
                ? "bg-slate-900 border-emerald-500/80 shadow-md shadow-emerald-950/20"
                : "bg-slate-900/45 border-slate-800/80 hover:bg-slate-900/80"
            }`}
          >
            <div className={`p-2.5 rounded-lg ${activeTab === "meats" ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-950 text-slate-500"}`}>
              <Wind className="w-5 h-5" />
            </div>
            <div>
              <h4 className={`text-sm font-sans font-semibold ${activeTab === "meats" ? "text-emerald-400" : "text-slate-300"}`}>
                {t.pillar2Title}
              </h4>
              <p className="text-slate-400 text-xs mt-1 font-sans line-clamp-1">
                {t.pillar2Desc}
              </p>
            </div>
          </button>

          <button
            id="tab-btn-rice"
            onClick={() => setActiveTab("rice")}
            className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-start gap-3.5 focus:outline-none ${
              activeTab === "rice"
                ? "bg-slate-900 border-emerald-500/80 shadow-md shadow-emerald-950/20"
                : "bg-slate-900/45 border-slate-800/80 hover:bg-slate-900/80"
            }`}
          >
            <div className={`p-2.5 rounded-lg ${activeTab === "rice" ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-950 text-slate-500"}`}>
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className={`text-sm font-sans font-semibold ${activeTab === "rice" ? "text-emerald-400" : "text-slate-300"}`}>
                {t.pillar3Title}
              </h4>
              <p className="text-slate-400 text-xs mt-1 font-sans line-clamp-1">
                {t.pillar3Desc}
              </p>
            </div>
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
          <AnimatePresence mode="wait">
            {activeTab === "storage" && (
              <motion.div
                key="storage-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <h4 className="text-white font-sans font-bold text-xl mb-3 flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    {t.pillar1Title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                    {t.pillar1Desc}
                  </p>
                  
                  <div className="space-y-3.5">
                    {t.pillar1Specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-slate-300 text-sm font-sans">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 overflow-hidden relative group h-[220px] flex items-center justify-center">
                  {/* Decorative background visual representation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-sky-500/5 z-0"></div>
                  <div className="relative text-center z-10 p-4">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full mb-3 inline-block">ASRS ACTIVE STORAGE</span>
                    <h5 className="text-white font-sans font-semibold text-sm">Automated Retrieval Cold Stack</h5>
                    <p className="text-slate-500 text-xs mt-1 max-w-xs font-sans">
                      Automated industrial crane picking and storing meats and organic grain in optimized sub-zero environments.
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="text-slate-400 text-[10px] font-mono">148 Racks Monitored OK</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "meats" && (
              <motion.div
                key="meats-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <h4 className="text-white font-sans font-bold text-xl mb-3 flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    {t.pillar2Title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                    {t.pillar2Desc}
                  </p>
                  
                  <div className="space-y-3.5">
                    {t.pillar2Specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-slate-300 text-sm font-sans">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 overflow-hidden relative group h-[220px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-sky-500/5 z-0"></div>
                  <div className="relative text-center z-10 p-4">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full mb-3 inline-block">IQF LINE -40°C</span>
                    <h5 className="text-white font-sans font-semibold text-sm">Deep-Processed Meat Processing</h5>
                    <p className="text-slate-500 text-xs mt-1 max-w-xs font-sans">
                      Sterile automated packaging lines slicing, sealing and freezing premium meats within moments to capture moisture and taste.
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="text-slate-400 text-[10px] font-mono">BLOCKCHAIN ORIGIN TAG #38902</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "rice" && (
              <motion.div
                key="rice-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <h4 className="text-white font-sans font-bold text-xl mb-3 flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    {t.pillar3Title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                    {t.pillar3Desc}
                  </p>
                  
                  <div className="space-y-3.5">
                    {t.pillar3Specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-slate-300 text-sm font-sans">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 overflow-hidden relative group h-[220px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-sky-500/5 z-0"></div>
                  <div className="relative text-center z-10 p-4">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full mb-3 inline-block">HUMIDITY CONTROL SILO</span>
                    <h5 className="text-white font-sans font-semibold text-sm">Vietnamese Organic ST25 Grain</h5>
                    <p className="text-slate-500 text-xs mt-1 max-w-xs font-sans">
                      Controlled dry atmospheric silos keeping vacuumed export bags of ST25 rice pristine, fresh, and free from insect decay.
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="text-slate-400 text-[10px] font-mono">USDA & JAS CERTIFIED GREEN</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* IoT Telemetry Panels */}
      <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl relative overflow-hidden">
        
        {/* Background ambient pulse */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Telemetry Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
          <div>
            <h4 className="text-lg font-sans font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.iotTitle}
            </h4>
            <p className="text-slate-400 text-xs mt-1 font-sans">
              {t.iotDesc}
            </p>
          </div>
          <div className="flex items-center gap-3 self-start sm:self-center">
            <span className="text-slate-400 text-[11px] font-mono flex items-center gap-1.5">
              <RefreshCw className="w-3 h-3 text-emerald-400 animate-spin-slow" />
              {t.iotLastUpdate}: {lastUpdated}
            </span>
          </div>
        </div>

        {/* Telemetry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {telemetry.map((sensor) => {
            const isWarning = sensor.status === "warning";
            return (
              <div
                key={sensor.locationKey}
                id={`sensor-card-${sensor.locationKey}`}
                className={`rounded-xl border p-5 flex flex-col justify-between transition-all duration-300 ${
                  isWarning
                    ? "bg-amber-950/10 border-amber-500/30 shadow-sm"
                    : "bg-slate-950/55 border-slate-800 hover:border-slate-700/80"
                }`}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono font-bold text-slate-500 tracking-wider">
                      LOCID: {sensor.locationKey}-IOT
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold flex items-center gap-1 uppercase ${
                      isWarning
                        ? "bg-amber-400/10 text-amber-400"
                        : "bg-emerald-400/10 text-emerald-400"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isWarning ? "bg-amber-400 animate-pulse" : "bg-emerald-400"}`}></span>
                      {isWarning ? t.iotStatusWarning : t.iotStatusActive}
                    </span>
                  </div>
                  <h5 className="text-white font-sans font-semibold text-xs mt-2 line-clamp-1">
                    {sensor.locationName[lang]}
                  </h5>
                </div>

                {/* Sensors metrics */}
                <div className="space-y-3.5 my-2">
                  {/* Temp */}
                  <div className="flex justify-between items-center bg-slate-900/50 p-2.5 rounded-lg">
                    <span className="text-slate-400 text-[11px] font-sans flex items-center gap-1.5">
                      <Thermometer className="w-3.5 h-3.5 text-sky-400" />
                      {t.iotTemp}
                    </span>
                    <span className="font-mono text-xs font-bold text-white">
                      {sensor.temperature}°C
                    </span>
                  </div>

                  {/* Humidity */}
                  <div className={`flex justify-between items-center p-2.5 rounded-lg ${isWarning ? "bg-amber-500/10" : "bg-slate-900/50"}`}>
                    <span className="text-slate-400 text-[11px] font-sans flex items-center gap-1.5">
                      <Droplets className="w-3.5 h-3.5 text-teal-400" />
                      {t.iotHumidity}
                    </span>
                    <span className={`font-mono text-xs font-bold ${isWarning ? "text-amber-400" : "text-white"}`}>
                      {sensor.humidity}%
                    </span>
                  </div>

                  {/* CA O2 */}
                  <div className="flex justify-between items-center bg-slate-900/50 p-2.5 rounded-lg">
                    <span className="text-slate-400 text-[11px] font-sans flex items-center gap-1.5">
                      <Wind className="w-3.5 h-3.5 text-emerald-400" />
                      {t.iotO2}
                    </span>
                    <span className="font-mono text-xs font-bold text-white">
                      {sensor.o2Level}% O₂
                    </span>
                  </div>
                </div>

                {/* Footer status text */}
                <div className="border-t border-slate-800/80 pt-3 mt-3">
                  {isWarning ? (
                    <div className="flex items-center gap-1.5 text-amber-400 text-[10px] font-sans">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      <span>Adjusting CA atmosphere ventilation</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-sans">
                      <CheckCircle2 className="w-3 h-3 shrink-0 text-emerald-500" />
                      <span>{t.iotSecureChain}</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
