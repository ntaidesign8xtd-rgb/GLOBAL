import React, { useState, useEffect } from "react";
import { Language, CountryData } from "../types";
import { translations } from "../translations";
import { Globe, MapPin, Anchor, ArrowRight, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface InteractiveMapProps {
  lang: Language;
}

export const countryDataset: CountryData[] = [
  {
    id: "US",
    nameKey: "United States",
    names: {
      vi: "Hoa Kỳ",
      en: "United States",
      zh: "美国",
      ar: "الولايات المتحدة",
      tr: "Amerika Birleşik Devletleri",
      de: "Vereinigte Staaten",
      ja: "米国",
      fr: "États-Unis"
    },
    coordinates: { x: 18, y: 35 },
    exportVolume: 18500,
    mainProducts: {
      vi: "Thịt heo thảo mộc IQF, Gạo hữu cơ ST25 hút chân không",
      en: "IQF Herbal Pork, Vacuum-sealed ST25 Organic Rice",
      zh: "IQF草本猪肉、真空包装ST25有机大米",
      ar: "لحم خنزير عشبي IQF، أرز ST25 عضوي مفرغ من الهواء",
      tr: "IQF Bitkisel Domuz Eti, Vakumlu ST25 Organik Pirinç",
      de: "IQF-Kräuterschweinefleisch, vakuumversiegelter ST25-Bio-Reis",
      ja: "ハーブ飼育IQF豚肉、真空パック有機ST25米",
      fr: "Porc biologique aux herbes IQF, Riz biologique ST25 sous vide"
    },
    customsRegs: {
      vi: "Đạt chuẩn an toàn vệ sinh thực phẩm khắt khe của FDA & USDA Organic.",
      en: "Strict compliance with US FDA food safety rules & USDA Organic certification.",
      zh: "需严格符合美国FDA食品安全法规及USDA有机认证标准。",
      ar: "الامتثال الصارم لقواعد سلامة الأغذية الأمريكية FDA وشهادة USDA العضوية.",
      tr: "ABD FDA gıda güvenliği kuralları ve USDA Organik sertifikasına tam uyum.",
      de: "Strikte Einhaltung der US-FDA-Sicherheitsregeln & USDA-Bio-Zertifizierung.",
      ja: "米国FDA食品安全基準およびUSDAオーガニック認証への厳格な準拠が必要。",
      fr: "Conformité stricte aux règles de sécurité de la FDA américaine et certification USDA Organic."
    },
    sourceHub: {
      vi: "Tổng kho Long An (Khu vực phía Nam)",
      en: "Long An Hub (Southern Region)",
      zh: "龙安总仓 (南部地区)",
      ar: "مركز لونغ آن (المنطقة الجنوبية)",
      tr: "Long An Hub (Güney Bölgesi)",
      de: "Long An Hub (Südliche Region)",
      ja: "ロンアンハブ（南部地域）",
      fr: "Hub de Long An (Région Sud)"
    }
  },
  {
    id: "DE",
    nameKey: "Germany",
    names: {
      vi: "Đức",
      en: "Germany",
      zh: "德国",
      ar: "ألمانيا",
      tr: "Almanya",
      de: "Deutschland",
      ja: "ドイツ",
      fr: "Allemagne"
    },
    coordinates: { x: 44, y: 28 },
    exportVolume: 14200,
    mainProducts: {
      vi: "Thịt heo thảo mộc chế biến sâu, Gạo lứt đỏ hữu cơ",
      en: "Deep-processed Herbal Pork, Organic Red Brown Rice",
      zh: "精深加工草本猪肉、有机红糙米",
      ar: "لحم خنزير عشبي معالج بعمق، أرز بني أحمر عضوي",
      tr: "Derin İşlenmiş Bitkisel Domuz Eti, Organik Kırmızı Pirinç",
      de: "Tiefverarbeitetes Kräuterschweinefleisch, Bio-Raturreis",
      ja: "高度加工ハーブ豚肉、有機赤米",
      fr: "Porc aux herbes hautement transformé, Riz rouge complet biologique"
    },
    customsRegs: {
      vi: "Tuân thủ tiêu chuẩn chất lượng cao của EU, chứng chỉ IFS Food và kiểm dịch hải quan Châu Âu.",
      en: "Compliant with EU high quality standards, IFS Food certificate, and European veterinary quarantine.",
      zh: "符合欧盟高品质标准、IFS食品安全认证及欧洲进境兽医检疫体系。",
      ar: "متوافق مع معايير الجودة العالية للاتحاد الأوروبي، شهادة IFS Food، والحجر البيطري الأوروبي.",
      tr: "AB yüksek kalite standartları, IFS Gıda sertifikası ve Avrupa veteriner karantinasına uyum.",
      de: "Konform mit EU-Qualitätsstandards, IFS-Food-Zertifikat und europäischer Veterinärquarantäne.",
      ja: "EU品質基準、IFS食品安全認証、および欧州獣医検疫規制への適合が必要。",
      fr: "Conforme aux normes de qualité de l'UE, certificat IFS Food et quarantaine vétérinaire européenne."
    },
    sourceHub: {
      vi: "Tổng kho Đà Nẵng (Khu vực miền Trung)",
      en: "Da Nang Hub (Central Region)",
      zh: "岘港总仓 (中部地区)",
      ar: "مركز دا نانغ (المنطقة الوسطى)",
      tr: "Da Nang Hub (Merkez Bölge)",
      de: "Da Nang Hub (Zentralregion)",
      ja: "ダナンハブ（中部地域）",
      fr: "Hub de Da Nang (Région Centrale)"
    }
  },
  {
    id: "JP",
    nameKey: "Japan",
    names: {
      vi: "Nhật Bản",
      en: "Japan",
      zh: "日本",
      ar: "اليابان",
      tr: "Japonya",
      de: "Japan",
      ja: "日本",
      fr: "Japon"
    },
    coordinates: { x: 84, y: 34 },
    exportVolume: 16800,
    mainProducts: {
      vi: "Gạo hữu cơ ST25 thượng hạng, Thịt heo thảo mộc đông lạnh nhanh",
      en: "Premium ST25 Organic Rice, Quick-frozen Herbal Pork",
      zh: "顶级ST25有机大米、速冻草本猪肉",
      ar: "أرز ST25 عضوي ممتاز، لحم خنزير عشبي مجمد سريعًا",
      tr: "Premium ST25 Organik Pirinç, Hızlı Dondurulmuş Bitkisel Domuz Eti",
      de: "Premium ST25 Bio-Reis, schockgefrorenes Kräuterschweinefleisch",
      ja: "高級特選有機ST25米、急速凍結ハーブ豚肉",
      fr: "Riz biologique ST25 de qualité supérieure, Porc aux herbes surgelé"
    },
    customsRegs: {
      vi: "Đạt chuẩn hữu cơ JAS (Japan Agricultural Standards) và kiểm định tồn dư hóa chất nghiêm ngặt.",
      en: "Meets JAS Organic (Japan Agricultural Standards) and strict chemical residue inspection.",
      zh: "通过JAS（日本农业标准）有机认证及极其严苛的农残理化检测。",
      ar: "يلبي معايير JAS العضوية اليابانية وفحص متبقيات المواد الكيميائية الصارم.",
      tr: "JAS Organik (Japon Tarım Standartları) ve sıkı kimyasal kalıntı denetimlerine uygunluk.",
      de: "Erfüllt JAS-Bio (Japan Agricultural Standards) und strenge chemische Rückstandsprüfung.",
      ja: "JAS有機認証（日本農林規格）および極めて厳格な残留農薬検査のクリアが必要。",
      fr: "Conforme aux normes biologiques JAS (Japan Agricultural Standards) et contrôle strict des résidus chimiques."
    },
    sourceHub: {
      vi: "Tổng kho Hải Phòng (Khu vực phía Bắc)",
      en: "Hai Phong Hub (Northern Region)",
      zh: "海防总仓 (北部地区)",
      ar: "مركز هاي فونغ (المنطقة الشمالية)",
      tr: "Hai Phong Hub (Kuzey Bölgesi)",
      de: "Hai Phong Hub (Nördliche Region)",
      ja: "ハイフォンハブ（北部地域）",
      fr: "Hub de Hai Phong (Région Nord)"
    }
  },
  {
    id: "SG",
    nameKey: "Singapore",
    names: {
      vi: "Singapore",
      en: "Singapore",
      zh: "新加坡",
      ar: "سنغافورة",
      tr: "Singapur",
      de: "Singapur",
      ja: "シンガポール",
      fr: "Singapour"
    },
    coordinates: { x: 67, y: 64 },
    exportVolume: 9200,
    mainProducts: {
      vi: "Thịt bò thảo mộc mát, Gạo hữu cơ ST25 đóng gói sẵn",
      en: "Chilled Herbal Beef, Pre-packaged ST25 Organic Rice",
      zh: "冷鲜草本牛肉、预包装ST25有机大米",
      ar: "لحم بقري عشبي مبرد، أرز ST25 عضوي معبأ مسبقًا",
      tr: "Soğutulmuş Bitkisel Sığır Eti, Paketlenmiş ST25 Organik Pirinç",
      de: "Gekühltes Kräuter-Rindfleisch, vorverpackter ST25-Bio-Reis",
      ja: "チルドハーブ牛肉、パック包装有機ST25米",
      fr: "Bœuf réfrigéré aux herbes, Riz biologique ST25 préemballé"
    },
    customsRegs: {
      vi: "Đạt chuẩn cơ quan thực phẩm Singapore SFA (Singapore Food Agency) về chuỗi lạnh liên tục.",
      en: "Meets Singapore Food Agency (SFA) criteria with fully unbroken cold chain log.",
      zh: "需完全符合新加坡食品局 (SFA) 准入标准，附全程冷链不间断运行日志。",
      ar: "يلبي معايير وكالة الأغذية السنغافورية (SFA) مع سجل سلسلة تبريد غير منقطع بالكامل.",
      tr: "Kesintisiz soğuk zincir günlüğü ile Singapur Gıda Ajansı (SFA) kriterlerine uygunluk.",
      de: "Erfüllt die Kriterien der Singapore Food Agency (SFA) mit lückenlosem Kühlkettenprotokoll.",
      ja: "シンガポール食品庁（SFA）の安全基準および完全非破壊コールドチェーンログへの適合が必要。",
      fr: "Répond aux critères de la Singapore Food Agency (SFA) avec un journal de chaîne du froid continu."
    },
    sourceHub: {
      vi: "Tổng kho Long An (Khu vực phía Nam)",
      en: "Long An Hub (Southern Region)",
      zh: "龙安总仓 (南部地区)",
      ar: "مركز لونغ آن (المنطقة الجنوبية)",
      tr: "Long An Hub (Güney Bölgesi)",
      de: "Long An Hub (Südliche Region)",
      ja: "ロンアンハブ（南部地域）",
      fr: "Hub de Long An (Région Sud)"
    }
  },
  {
    id: "UAE",
    nameKey: "United Arab Emirates",
    names: {
      vi: "UAE (Các Tiểu Vương Quốc Ả Rập Thống Nhất)",
      en: "United Arab Emirates",
      zh: "阿联酋",
      ar: "الإمارات العربية المتحدة",
      tr: "Birleşik Arap Emirlikleri",
      de: "Vereinigte Arabische Emirate",
      ja: "アラブ首長国連邦",
      fr: "Émirats Arabes Unis"
    },
    coordinates: { x: 53, y: 48 },
    exportVolume: 11000,
    mainProducts: {
      vi: "Thịt thảo mộc tiêu chuẩn HALAL, Gạo ST25 thượng hạng",
      en: "HALAL-certified Herbal Meat, Premium ST25 Rice",
      zh: "HALAL清真认证草本肉类、特级ST25大米",
      ar: "لحوم عشبية معتمدة حلال، أرز ST25 ممتاز",
      tr: "HALAL Sertifikalı Bitkisel Et, Premium ST25 Pirinç",
      de: "HALAL-zertifiziertes Kräuterfleisch, Premium ST25 Reis",
      ja: "ハラール認証ハーブ肉、高級特選ST25米",
      fr: "Viande aux herbes certifiée HALAL, Riz ST25 de qualité supérieure"
    },
    customsRegs: {
      vi: "Chứng nhận HALAL quốc tế và đáp ứng tiêu chuẩn ESMA của vùng Vịnh.",
      en: "Requires strict International Halal Certification & compliance with Gulf ESMA rules.",
      zh: "必须具备国际清真 (Halal) 认证，并完全符合海湾国家ESMA技术法规标准。",
      ar: "تتطلب شهادة حلال دولية صارمة والامتثال لقواعد ESMA الخليجية.",
      tr: "Sıkı Uluslararası Helal Sertifikası ve Körfez ESMA kurallarına uygunluk gerektirir.",
      de: "Erfordert eine strenge internationale Halal-Zertifizierung und die Einhaltung der ESMA-Richtlinien am Golf.",
      ja: "厳格な国際ハラール認証、および湾岸諸国ESMA規則への適合が必要。",
      fr: "Exige une certification Halal internationale stricte et la conformité aux règles de l'ESMA du Golfe."
    },
    sourceHub: {
      vi: "Tổng kho Long An (Khu vực phía Nam)",
      en: "Long An Hub (Southern Region)",
      zh: "龙安总仓 (南部地区)",
      ar: "مركز لونغ آن (المنطقة الجنوبية)",
      tr: "Long An Hub (Güney Bölgesi)",
      de: "Long An Hub (Südliche Region)",
      ja: "ロンアンハブ（南部地域）",
      fr: "Hub de Long An (Région Sud)"
    }
  },
  {
    id: "FR",
    nameKey: "France",
    names: {
      vi: "Pháp",
      en: "France",
      zh: "法国",
      ar: "فرنسا",
      tr: "Fransa",
      de: "Frankreich",
      ja: "フランス",
      fr: "France"
    },
    coordinates: { x: 41, y: 34 },
    exportVolume: 8900,
    mainProducts: {
      vi: "Gạo lứt thảo mộc hữu cơ, Thịt heo cấp đông IQF",
      en: "Organic Herbal Brown Rice, IQF Deep-frozen Pork",
      zh: "有机草本红糙米、IQF速冻猪肉",
      ar: "أرز بني عشبي عضوي، لحم خنزير مجمد سريعًا IQF",
      tr: "Organik Bitkisel Kahverengi Pirinç, IQF Dondurulmuş Domuz Eti",
      de: "Bio-Kräuter-Naturreis, IQF-schockgefrorenes Schweinefleisch",
      ja: "有機ハーブ玄米、急速凍結豚肉",
      fr: "Riz complet biologique aux herbes, Porc surgelé IQF"
    },
    customsRegs: {
      vi: "Đạt chuẩn kiểm định thực phẩm nhập khẩu của Hải quan Pháp và tiêu chuẩn hữu cơ Ecocert Châu Âu.",
      en: "Compliant with French Customs Import Food regulations and European Ecocert Organic standards.",
      zh: "通过法国海关进口食品检疫及欧盟Ecocert有机质量标准认证。",
      ar: "متوافق مع لوائح الأغذية المستوردة للجمارك الفرنسية ومعايير Ecocert العضوية الأوروبية.",
      tr: "Fransız Gümrük İthalat Gıda düzenlemeleri ve Avrupa Ecocert Organik standartlarına uyum.",
      de: "Konform mit den Einfuhrbestimmungen des französischen Zolls und den europäischen Ecocert-Bio-Standards.",
      ja: "フランス税関輸入食品検疫規制および欧州Ecocert有機認証への適合が必要。",
      fr: "Conforme aux réglementations douanières d'importation françaises et aux normes biologiques européennes Ecocert."
    },
    sourceHub: {
      vi: "Tổng kho Đà Nẵng (Khu vực miền Trung)",
      en: "Da Nang Hub (Central Region)",
      zh: "岘港总仓 (中部地区)",
      ar: "مركز دا نanغ (المنطقة الوسطى)",
      tr: "Da Nang Hub (Merkez Bölge)",
      de: "Da Nang Hub (Zentralregion)",
      ja: "ダナンハブ（中部地域）",
      fr: "Hub de Da Nang (Région Centrale)"
    }
  },
  {
    id: "TR",
    nameKey: "Turkey",
    names: {
      vi: "Thổ Nhĩ Kỳ",
      en: "Turkey",
      zh: "土耳其",
      ar: "تركيا",
      tr: "Türkiye",
      de: "Türkei",
      ja: "トルコ",
      fr: "Turquie"
    },
    coordinates: { x: 49, y: 38 },
    exportVolume: 6700,
    mainProducts: {
      vi: "Gạo hữu cơ ST25, Gạo lứt đỏ hút chân không",
      en: "ST25 Organic Rice, Vacuum-packed Red Rice",
      zh: "ST25有机大米、真空包装红糙米",
      ar: "أرز ST25 العضوي، أرز أحمر مفرغ من الهواء",
      tr: "ST25 Organik Pirinç, Vakumlu Kırmızı Pirinç",
      de: "ST25 Bio-Reis, vakuumverpackter roter Reis",
      ja: "有機ST25米、真空パック赤米",
      fr: "Riz biologique ST25, Riz rouge sous vide"
    },
    customsRegs: {
      vi: "Đáp ứng đầy đủ quy trình kiểm nghiệm hóa lý và vi sinh của Bộ Nông nghiệp Thổ Nhĩ Kỳ.",
      en: "Adheres strictly to biochemical and microbial standards set by Turkish Ministry of Agriculture.",
      zh: "严格执行符合土耳其农业与林业部要求的物理化学及微生物准入检验。",
      ar: "يلتزم تمامًا بالمعايير البيوكيميائية والميكروبية التي حددتها وزارة الزراعة التركية.",
      tr: "Türkiye Tarım ve Orman Bakanlığı tarafından belirlenen biyokimyasal ve mikrobiyal standartlara sıkı uyum.",
      de: "Hält sich streng an die biochemischen und mikrobiellen Standards des türkischen Landwirtschaftsministeriums.",
      ja: "トルコ農林省が指定する厳格な生化学・微生物安全基準のクリアが必要。",
      fr: "Respecte scrupuleusement les normes biochimiques et microbiennes fixées par le ministère de l'Agriculture turc."
    },
    sourceHub: {
      vi: "Tổng kho Hải Phòng (Khu vực phía Bắc)",
      en: "Hai Phong Hub (Northern Region)",
      zh: "海防总仓 (北部地区)",
      ar: "مركز هاي فونغ (المنطقة الشمالية)",
      tr: "Hai Phong Hub (Kuzey Bölgesi)",
      de: "Hai Phong Hub (Nördliche Region)",
      ja: "ハイフォンハブ（北部地域）",
      fr: "Hub de Hai Phong (Région Nord)"
    }
  },
  {
    id: "UK",
    nameKey: "United Kingdom",
    names: {
      vi: "Vương Quốc Anh",
      en: "United Kingdom",
      zh: "英国",
      ar: "المملكة المتحدة",
      tr: "Birleşik Krallık",
      de: "Vereinigtes Königreich",
      ja: "英国",
      fr: "Royaume-Uni"
    },
    coordinates: { x: 38, y: 26 },
    exportVolume: 10500,
    mainProducts: {
      vi: "Thịt thảo mộc đóng gói vô trùng, Gạo ST25 thượng hạng",
      en: "Aseptically Packed Herbal Meat, Premium ST25 Rice",
      zh: "无菌真空包装草本肉类、顶级ST25大米",
      ar: "لحوم عشبية معبأة معقمًا، أرز ST25 ممتاز",
      tr: "Steril Paketlenmiş Bitkisel Et, Premium ST25 Pirinç",
      de: "Steril verpacktes Kräuterfleisch, Premium ST25 Reis",
      ja: "無菌パックハーブ肉、特選有機ST25米",
      fr: "Viande aux herbes emballée de manière aseptique, Riz ST25 premium"
    },
    customsRegs: {
      vi: "Đạt chuẩn kiểm soát dư lượng hóa chất và tiêu chuẩn an toàn của DEFRA (Anh).",
      en: "Requires compliance with DEFRA chemical residue controls and UK food standards.",
      zh: "需符合英国环境、食品与农村事务部 (DEFRA) 残留物控制和英国食品标准局准入。",
      ar: "تتطلب الامتثال لضوابط DEFRA لمتبقيات المواد الكيميائية ومعايير الأغذية في المملكة المتحدة.",
      tr: "DEFRA kimyasal kalıntı kontrolleri ve Birleşik Krallık gıda standartlarına uygunluk gerektirir.",
      de: "Erfordert die Einhaltung der DEFRA-Rückstandskontrollen und der britischen Lebensmittelstandards.",
      ja: "英国DEFRA残留化学物質規制、および英国食品基準局（FSA）安全基準への合致が必要。",
      fr: "Exige la conformité aux contrôles des résidus chimiques de la DEFRA et aux normes alimentaires britanniques."
    },
    sourceHub: {
      vi: "Tổng kho Đà Nẵng (Khu vực miền Trung)",
      en: "Da Nang Hub (Central Region)",
      zh: "岘港总仓 (中部地区)",
      ar: "مركز دا نانغ (المنطقة الوسطى)",
      tr: "Da Nang Hub (Merkez Bölge)",
      de: "Da Nang Hub (Zentralregion)",
      ja: "ダナンハブ（中部地域）",
      fr: "Hub de Da Nang (Région Centrale)"
    }
  }
];

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedCountry, setSelectedCountry] = useState<CountryData>(countryDataset[0]);
  const [animationTrigger, setAnimationTrigger] = useState(true);

  // Vietnam Origin Hubs (absolute visual % positions on the custom SVG projection)
  const vnHubs = [
    { name: { vi: "Hải Phòng", en: "Hai Phong", zh: "海防", ar: "هاي فونغ", tr: "Hai Phong", de: "Hai Phong", ja: "ハイフォン", fr: "Hai Phong" }, x: 69, y: 52 },
    { name: { vi: "Đà Nẵng", en: "Da Nang", zh: "大南", ar: "دا نانغ", tr: "Da Nang", de: "Da Nang", ja: "ダナン", fr: "Da Nang" }, x: 70, y: 56 },
    { name: { vi: "Long An", en: "Long An", zh: "龙安", ar: "لونغ آن", tr: "Long An", de: "Long An", ja: "ロンアン", fr: "Long An" }, x: 69, y: 60 }
  ];

  const handleCountryClick = (country: CountryData) => {
    setSelectedCountry(country);
    setAnimationTrigger(false);
    setTimeout(() => setAnimationTrigger(true), 50);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="supply-chain-map-container">
      {/* Map Board */}
      <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[460px] lg:min-h-[520px]">
        
        {/* Header decoration */}
        <div className="flex justify-between items-start z-10">
          <div>
            <h3 className="text-emerald-400 font-sans font-semibold tracking-wide text-xs uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              {t.mapTitle}
            </h3>
            <p className="text-slate-400 text-xs mt-1 max-w-md">
              {t.mapDesc}
            </p>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/50 rounded-lg px-2.5 py-1 text-[10px] text-slate-300 font-mono tracking-wider flex items-center gap-1.5 shadow-sm">
            <Globe className="w-3 h-3 text-emerald-400 animate-spin-slow" />
            LIVE CORRIDOR GPS
          </div>
        </div>

        {/* Map Canvas Visualizer */}
        <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[350px] my-4 border border-slate-800/80 rounded-xl bg-slate-950/80 flex items-center justify-center overflow-hidden">
          
          {/* Abstract World Grid lines */}
          <svg className="absolute inset-0 w-full h-full text-slate-800/30 select-none pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Latitude / longitude markers */}
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(16, 185, 129, 0.08)" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(16, 185, 129, 0.08)" strokeWidth="1" strokeDasharray="5,5" />
          </svg>

          {/* Logistics Route Connection paths */}
          <svg className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {countryDataset.map((country) => {
              // Connect country coordinates to nearest VN Hub for visual clean paths
              const origin = country.id === "JP" || country.id === "TR" 
                ? vnHubs[0] // Hải Phòng
                : country.id === "DE" || country.id === "UK" || country.id === "FR"
                ? vnHubs[1] // Đà Nẵng
                : vnHubs[2]; // Long An

              const isSelected = selectedCountry.id === country.id;

              return (
                <g key={`route-${country.id}`}>
                  {/* Dynamic pulse sea route path */}
                  <path
                    d={`M ${origin.x}% ${origin.y}% Q ${(origin.x + country.coordinates.x) / 2}% ${(origin.y + country.coordinates.y) / 2 - 10}% ${country.coordinates.x}% ${country.coordinates.y}%`}
                    fill="none"
                    stroke={isSelected ? "rgba(16, 185, 129, 0.65)" : "rgba(14, 165, 233, 0.2)"}
                    strokeWidth={isSelected ? 2.5 : 1}
                    className="transition-all duration-300"
                    strokeDasharray={isSelected ? "6,4" : "4,6"}
                  />
                  {/* Animated flow particle running along route */}
                  {isSelected && (
                    <path
                      d={`M ${origin.x}% ${origin.y}% Q ${(origin.x + country.coordinates.x) / 2}% ${(origin.y + country.coordinates.y) / 2 - 10}% ${country.coordinates.x}% ${country.coordinates.y}%`}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeDasharray="10 100"
                      className="animate-route-flow"
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Hub Nodes (Vietnam) */}
          {vnHubs.map((hub, idx) => (
            <div
              key={`hub-${idx}`}
              className="absolute group z-10"
              style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                <div className="relative w-3.5 h-3.5 bg-emerald-500 rounded-full border border-white flex items-center justify-center shadow-lg cursor-pointer">
                  <Anchor className="w-2 h-2 text-white" />
                </div>
                {/* Tooltip on hover */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-5 bg-slate-900/95 border border-slate-700 text-slate-100 text-[9px] rounded-md px-1.5 py-0.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-sans font-medium tracking-wide shadow-md">
                  HUB VN: {hub.name[lang]}
                </div>
              </div>
            </div>
          ))}

          {/* Destination Nodes (15 target countries / nodes on map) */}
          {countryDataset.map((country) => {
            const isSelected = selectedCountry.id === country.id;
            return (
              <button
                key={`node-${country.id}`}
                id={`btn-node-${country.id}`}
                onClick={() => handleCountryClick(country)}
                style={{ left: `${country.coordinates.x}%`, top: `${country.coordinates.y}%` }}
                className="absolute group z-20 cursor-pointer focus:outline-none"
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <motion.div
                    animate={{
                      scale: isSelected ? [1, 1.25, 1] : 1,
                    }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className={`w-5 h-5 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isSelected
                        ? "bg-emerald-400 border-white shadow-emerald-500/50 shadow-md scale-110"
                        : "bg-slate-900 border-sky-400/60 group-hover:border-emerald-400 shadow-sm"
                    }`}
                  >
                    <span className={`text-[8px] font-mono font-bold leading-none ${isSelected ? "text-slate-950" : "text-sky-300 group-hover:text-emerald-400"}`}>
                      {country.id}
                    </span>
                  </motion.div>
                  {/* Dynamic bottom label */}
                  <span className={`text-[8px] mt-1 px-1 rounded-sm py-0.5 font-sans font-medium select-none ${
                    isSelected ? "bg-emerald-500 text-slate-950" : "bg-slate-900/90 text-slate-400 group-hover:text-slate-200"
                  }`}>
                    {country.names[lang]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-[10px] text-slate-400 border-t border-slate-800/80 pt-3 z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse inline-block"></span>
            <span className="font-sans">Hạ tầng kho gốc/Cảng biển Việt Nam (Source Hubs)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-sky-400 rounded-full inline-block"></span>
            <span className="font-sans">Thị trường xuất khẩu đích (Destination Markets)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 border-t border-dashed border-emerald-500/80 inline-block"></span>
            <span className="font-sans">Hành trình bảo quản lạnh (Active Temp-controlled Corridor)</span>
          </div>
        </div>

      </div>

      {/* Detail Sidebar Panel */}
      <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
        
        <div>
          <div className="flex items-center gap-2.5 border-b border-slate-800 pb-4 mb-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">{t.mapSelectedCountry}</span>
              <h4 className="text-white font-sans font-bold text-lg leading-tight">
                {selectedCountry.names[lang]} ({selectedCountry.id})
              </h4>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {animationTrigger && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* Export Tonnage Card */}
                <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800">
                  <span className="text-slate-500 text-[10px] uppercase font-mono block tracking-wider">{t.mapExportVol}</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-mono font-bold text-emerald-400">
                      {selectedCountry.exportVolume.toLocaleString()}
                    </span>
                    <span className="text-slate-400 text-xs font-sans">
                      {t.mapTonsPerYear}
                    </span>
                  </div>
                </div>

                {/* Primary Products */}
                <div className="bg-slate-950/20 rounded-xl p-4 border border-slate-800/80">
                  <span className="text-slate-500 text-[10px] uppercase font-mono block tracking-wider mb-1.5">{t.mapMainProduct}</span>
                  <p className="text-slate-200 text-xs leading-relaxed font-sans font-medium">
                    {selectedCountry.mainProducts[lang]}
                  </p>
                </div>

                {/* Port source */}
                <div className="bg-slate-950/20 rounded-xl p-4 border border-slate-800/80">
                  <span className="text-slate-500 text-[10px] uppercase font-mono block tracking-wider mb-1.5">{t.mapWarehouseSource}</span>
                  <p className="text-slate-300 text-xs leading-relaxed font-sans">
                    {selectedCountry.sourceHub[lang]}
                  </p>
                </div>

                {/* Strict regulatory specifications */}
                <div className="bg-emerald-950/10 rounded-xl p-4 border border-emerald-900/30">
                  <span className="text-emerald-400 text-[10px] uppercase font-mono block tracking-wider mb-1.5">{t.mapCustomsRule}</span>
                  <p className="text-slate-300 text-xs leading-relaxed font-sans">
                    {selectedCountry.customsRegs[lang]}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Small interaction notice */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-slate-500 text-[11px] font-sans">
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          <span>{t.mapInstruction}</span>
        </div>

      </div>

      {/* Styled inline animation block injected safely for path animation */}
      <style>{`
        @keyframes routeFlow {
          0% {
            stroke-dashoffset: 110;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .animate-route-flow {
          animation: routeFlow 2.2s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 16s linear infinite;
        }
      `}</style>

    </div>
  );
};
