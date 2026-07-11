export interface TranslationSet {
  title: string;
  subtitle: string;
  tagline: string;
  statsTitle: string;
  statsCoverage: string;
  statsInvestment: string;
  statsInvestmentSub: string;
  partnerSearch: string;
  partnerSearchDesc: string;
  learnMore: string;
  contactBtn: string;

  // Tabs
  tabMap: string;
  tabPillars: string;
  tabCalculator: string;
  tabPartner: string;
  tabTimeline: string;

  // Map
  mapTitle: string;
  mapDesc: string;
  mapInstruction: string;
  mapSelectedCountry: string;
  mapExportVol: string;
  mapMainProduct: string;
  mapCustomsRule: string;
  mapWarehouseSource: string;
  mapTonsPerYear: string;

  // Pillars & IoT
  pillarsTitle: string;
  pillarsDesc: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar1Specs: string[];
  pillar2Title: string;
  pillar2Desc: string;
  pillar2Specs: string[];
  pillar3Title: string;
  pillar3Desc: string;
  pillar3Specs: string[];
  iotTitle: string;
  iotDesc: string;
  iotStatusActive: string;
  iotStatusWarning: string;
  iotTemp: string;
  iotHumidity: string;
  iotO2: string;
  iotLastUpdate: string;
  iotSecureChain: string;

  // Calculator
  calcTitle: string;
  calcDesc: string;
  calcRegion: string;
  calcVolume: string;
  calcStorageTime: string;
  calcResultTitle: string;
  calcSavings: string;
  calcCO2: string;
  calcShelfLife: string;
  calcPreservation: string;
  chartLegendLoss: string;
  chartLegendFreight: string;
  chartLegendFta: string;

  // Form & NDA
  formTitle: string;
  formDesc: string;
  formCompany: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formMarketInterest: string;
  formProposedValue: string;
  formSubmit: string;
  formSubmitting: string;
  formSuccess: string;
  formHistory: string;
  formNoHistory: string;
  formStatusReview: string;
  formDelete: string;

  // Timeline & Footer
  timelineTitle: string;
  timelineDesc: string;
  docDownload: string;
  docBrochure: string;
  docNda: string;
  officeVN: string;
  officeDE: string;
  officeJP: string;
  officeSG: string;
  supportUrgent: string;
}

export const translations: Record<string, TranslationSet> = {
  vi: {
    title: "Global Agri-Logistics Chain",
    subtitle: "Cung ứng & Logistics Nông Sản Toàn Cầu",
    tagline: "Hệ thống kho lạnh thông minh và phân phối thực phẩm chế biến sâu, đưa sản phẩm thịt hảo hạng và gạo hữu cơ Việt Nam ra toàn cầu.",
    statsTitle: "Mục Tiêu Quy Mô",
    statsCoverage: "Độ phủ 15 quốc gia",
    statsInvestment: "Đầu tư 80 triệu USD",
    statsInvestmentSub: "Hạ tầng chuỗi lạnh & phân phối",
    partnerSearch: "Tìm kiếm đối tác liên doanh chiến lược",
    partnerSearchDesc: "Mở rộng chuỗi cung ứng sang các thị trường khó tính nhất tại khu vực Bắc Mỹ và châu Âu. Chúng tôi cần các chuyên gia về thủ tục hải quan và vận tải quốc tế cùng hệ thống quản lý logistics thời gian thực và giám sát chất lượng sản phẩm nghiêm ngặt.",
    learnMore: "Tìm Hiểu Chi Tiết",
    contactBtn: "Kết Nối Ngay",

    tabMap: "Sơ Đồ Hành Lang 15 Quốc Gia",
    tabPillars: "Trụ Cột Cốt Lõi & IoT Telemetry",
    tabCalculator: "Mô Phỏng ROI & ESG",
    tabPartner: "Đăng Ký Đối Tác JV",
    tabTimeline: "Quy Hoạch Chiến Lược & Tài Liệu",

    mapTitle: "Độ Phủ Hành Lang Cung Ứng Toàn Cầu",
    mapDesc: "Trực quan hóa luồng vận tải đa phương thức nối từ các tổng kho gốc tại Hải Phòng, Đà Nẵng, Long An đi khắp thế giới. Đường chỉ hải vận lạnh hoạt họa theo thời gian thực.",
    mapInstruction: "Nhấp vào các quốc gia đích trên bản đồ để xem chi tiết sản lượng, mặt hàng và quy định hải quan tương ứng.",
    mapSelectedCountry: "Quốc gia đối tác:",
    mapExportVol: "Sản lượng xuất khẩu:",
    mapMainProduct: "Mặt hàng chủ lực:",
    mapCustomsRule: "Quy định kiểm định:",
    mapWarehouseSource: "Tổng kho xuất phát:",
    mapTonsPerYear: "tấn / năm",

    pillarsTitle: "Ba Trụ Cột Nông Nghiệp & Công Nghệ Chuỗi Lạnh",
    pillarsDesc: "Sự kết hợp giữa nông sản hảo hạng chuẩn cao nhất Việt Nam và công nghệ giám sát bảo quản thông minh.",
    pillar1Title: "Hạ Tầng Kho Lạnh Thông Minh",
    pillar1Desc: "Hệ thống kho tự động hóa ASRS, công nghệ điều chỉnh khí quyển CA-Storage kéo dài độ tươi gấp 3 lần.",
    pillar1Specs: [
      "Chuẩn cấp đông nhanh IQF -40°C",
      "Hệ thống giá đỡ thông minh tự động hóa robot",
      "Tiêu chuẩn xanh tiết kiệm 30% điện năng"
    ],
    pillar2Title: "Chuỗi Thịt Hảo Hạng",
    pillar2Desc: "Thịt heo thảo mộc và thịt bò nuôi dưỡng hữu cơ, chế biến sâu và đóng gói vô trùng chuẩn Châu Âu.",
    pillar2Specs: [
      "Kiểm soát nhiệt độ liên tục từ 0 - 4°C",
      "Truy xuất nguồn gốc bằng Blockchain",
      "Chứng nhận an toàn quốc tế HACCP & ISO 22000"
    ],
    pillar3Title: "Gạo Hữu Cơ Việt Thượng Hạng",
    pillar3Desc: "Gạo đặc sản ST25 và gạo lứt đỏ hữu cơ đạt chuẩn USDA/JAS, lưu kho kiểm soát độ ẩm khắt khe.",
    pillar3Specs: [
      "Độ ẩm lưu trữ tối ưu dưới 14%",
      "Không sử dụng hóa chất bảo quản",
      "Đóng gói hút chân không xuất khẩu cao cấp"
    ],
    iotTitle: "Bảng Giám Sát IoT Real-Time Telemetry",
    iotDesc: "Dữ liệu đo đạc thời gian thực từ mạng cảm biến tại 3 tổng kho đầu mối lớn của Việt Nam.",
    iotStatusActive: "Đang Hoạt Động",
    iotStatusWarning: "Cảnh Báo Độ Ẩm Cao",
    iotTemp: "Nhiệt độ",
    iotHumidity: "Độ ẩm",
    iotO2: "Nồng độ Oxy (CA)",
    iotLastUpdate: "Cập nhật vừa xong",
    iotSecureChain: "Chuỗi cung ứng khép kín hoạt động ổn định",

    calcTitle: "Bộ Tính Toán Hiệu Quả Đầu Tư & ESG",
    calcDesc: "Nhập thông số vận chuyển để ước tính lượng chi phí tiết kiệm và giảm khí thải carbon khi áp dụng giải pháp Agri-Logistics thông minh.",
    calcRegion: "Khu Vực Thương Mại",
    calcVolume: "Sản lượng vận chuyển dự kiến (tấn / tháng):",
    calcStorageTime: "Thời gian lưu kho trung bình (ngày):",
    calcResultTitle: "Kết Quả Mô Phỏng Hiệu Quả Hàng Năm",
    calcSavings: "Chi phí tiết kiệm ước tính",
    calcCO2: "Khí thải carbon cắt giảm (Chứng chỉ xanh ESG)",
    calcShelfLife: "Hệ số kéo dài hạn dùng",
    calcPreservation: "Tỷ lệ bảo toàn thực phẩm",
    chartLegendLoss: "Giảm hao hụt bảo quản",
    chartLegendFreight: "Tối ưu hóa cước vận tải",
    chartLegendFta: "Ưu đãi thuế quan FTA",

    formTitle: "Cổng Đăng Ký Liên Doanh Chiến Lược",
    formDesc: "Gửi đề xuất ban đầu và yêu cầu tài liệu NDA. Hệ thống sẽ ghi nhận và phản hồi trong 48 giờ làm việc.",
    formCompany: "Tên Doanh Nghiệp / Quỹ Đầu Tư",
    formName: "Người Đại Diện Liên Hệ",
    formEmail: "Email Công Việc",
    formPhone: "Số Điện Thoại (Zalo/WhatsApp)",
    formMarketInterest: "Thị Trường Liên Kết Mục Tiêu",
    formProposedValue: "Thế Mạnh Hợp Tác Góp Vốn / Hải Quan / Logistics",
    formSubmit: "Gửi Đề Xuất Đối Tác & NDA",
    formSubmitting: "Đang xử lý đề xuất...",
    formSuccess: "Gửi đề xuất thành công! Chúng tôi đã lưu trữ yêu cầu của bạn.",
    formHistory: "Lịch Sử Đề Xuất Của Bạn (Lưu LocalStorage)",
    formNoHistory: "Chưa có đề xuất nào được gửi từ trình duyệt này.",
    formStatusReview: "Chờ duyệt cấp F1",
    formDelete: "Xóa",

    timelineTitle: "Lịch Trình Quy Hoạch Đầu Tư 80M$ (2024 - 2028)",
    timelineDesc: "Kế hoạch phân bổ ngân sách chiến lược nhằm thiết lập hệ sinh thái hạ tầng logistics nông sản lạnh hoàn chỉnh.",
    docDownload: "Tài Liệu Bổ Trợ Dự Án (Tải Bản Mockup)",
    docBrochure: "Brochure Quy Hoạch Dự Án Tổng Thể (PDF - Song ngữ)",
    docNda: "Mẫu Thỏa Thuận Bảo Mật Thông Tin NDA (DOCX - Việt / Anh)",
    officeVN: "Trụ sở chính: Hà Nội & TP. Hồ Chí Minh, Việt Nam",
    officeDE: "Văn phòng Châu Âu: Frankfurt, Đức",
    officeJP: "Văn phòng Đông Á: Tokyo, Nhật Bản",
    officeSG: "Văn phòng Đông Nam Á: Singapore",
    supportUrgent: "Hỗ trợ trực tuyến & Thông tin liên hệ khẩn cấp 24/7"
  },
  en: {
    title: "Global Agri-Logistics Chain",
    subtitle: "Global Agricultural Supply Chain & Cold Logistics",
    tagline: "Smart cold chain storage and deep-processed food distribution system, delivering premium Vietnamese organic rice and exquisite meats globally.",
    statsTitle: "Strategic Goals",
    statsCoverage: "15 countries coverage",
    statsInvestment: "Investment of $80M",
    statsInvestmentSub: "Cold chain infrastructure & network",
    partnerSearch: "Seeking Strategic Joint Venture Partners",
    partnerSearchDesc: "Expanding supply chain networks to strict North American and European markets. We are seeking partners specializing in international customs clearance and global freight, backed by real-time logistics management and rigorous product quality control.",
    learnMore: "Learn More Details",
    contactBtn: "Connect Now",

    tabMap: "15 Countries Corridor Map",
    tabPillars: "Core Pillars & IoT Telemetry",
    tabCalculator: "ROI & ESG Simulator",
    tabPartner: "JV Partner Registration",
    tabTimeline: "Strategic Roadmap & Documents",

    mapTitle: "Global Supply Corridor Coverage",
    mapDesc: "Visualizing the multimodal transport corridor connecting primary hub warehouses in Hai Phong, Da Nang, and Long An to global destinations. Pulse marine cold-freight routes in real-time.",
    mapInstruction: "Click on destination countries on the map to view export volume, primary products, and strict regulatory standards.",
    mapSelectedCountry: "Partner Country:",
    mapExportVol: "Export Volume:",
    mapMainProduct: "Primary Commodities:",
    mapCustomsRule: "Customs Inspection & Rules:",
    mapWarehouseSource: "Source Warehouse:",
    mapTonsPerYear: "tons / year",

    pillarsTitle: "Three Pillars of Agriculture & Cold Chain Tech",
    pillarsDesc: "Synergy of premium Vietnamese organic agricultural produce and high-tech smart preservation monitors.",
    pillar1Title: "Smart Cold Warehouse Infrastructure",
    pillar1Desc: "ASRS automated racking systems, Controlled Atmosphere (CA) storage technology extending freshness by 3x.",
    pillar1Specs: [
      "IQF ultra-fast freezing at -40°C",
      "Robotic automated retrieval & racks",
      "Green standards saving 30% power"
    ],
    pillar2Title: "Premium Processed Meat Chain",
    pillar2Desc: "Organic herbal pork and pasture-raised beef, deep-processed and sterile-packed under European specifications.",
    pillar2Specs: [
      "Continuous cold monitoring at 0 - 4°C",
      "Blockchain-based origin traceability",
      "HACCP & ISO 22000 international certifications"
    ],
    pillar3Title: "Premium Vietnamese Organic Rice",
    pillar3Desc: "Award-winning ST25 organic rice and red brown rice certified USDA/JAS, kept in strict humidity controls.",
    pillar3Specs: [
      "Optimal storage humidity below 14%",
      "Zero artificial preservatives or chemical sprays",
      "Vacuum-sealed high-end export packaging"
    ],
    iotTitle: "Real-Time IoT Telemetry Monitor",
    iotDesc: "Live sensory diagnostics from sensor meshes at Vietnam's three main regional logistics hubs.",
    iotStatusActive: "Active & Secure",
    iotStatusWarning: "High Humidity Alert",
    iotTemp: "Temperature",
    iotHumidity: "Humidity",
    iotO2: "Oxygen Level (CA)",
    iotLastUpdate: "Just updated",
    iotSecureChain: "Closed supply loop operating securely",

    calcTitle: "Investment ROI & ESG Efficiency Calculator",
    calcDesc: "Input shipping volume to simulate financial savings and ESG carbon offset credits through our integrated smart supply solutions.",
    calcRegion: "Trade Region Corridor",
    calcVolume: "Estimated Shipping Volume (tons / month):",
    calcStorageTime: "Average Storage Duration (days):",
    calcResultTitle: "Simulated Annualized Outcomes",
    calcSavings: "Estimated Cost Savings",
    calcCO2: "Carbon Emissions Offset (ESG Credits)",
    calcShelfLife: "Shelf-Life Extension Multiplier",
    calcPreservation: "Food Preservation Safeguard Rate",
    chartLegendLoss: "Spoilage Prevention",
    chartLegendFreight: "Freight Tariff Optimizations",
    chartLegendFta: "FTA Customs Duty Exemptions",

    formTitle: "Strategic Joint Venture Portal",
    formDesc: "Submit an initial expression of interest and request the official bilingual NDA. Our legal desk will respond within 48 business hours.",
    formCompany: "Enterprise / Investment Fund Name",
    formName: "Authorized Contact Person",
    formEmail: "Business Email Address",
    formPhone: "Direct Phone / WhatsApp / Zalo",
    formMarketInterest: "Target Trade Corridor",
    formProposedValue: "Key Collaboration Strengths (Equity / Customs / Transport / Storage)",
    formSubmit: "Submit Proposal & Request NDA",
    formSubmitting: "Processing joint-venture proposal...",
    formSuccess: "Proposal submitted successfully! Your data is archived locally.",
    formHistory: "Your Saved Proposals (LocalStorage)",
    formNoHistory: "No proposals submitted from this browser yet.",
    formStatusReview: "Under Review (Phase 1)",
    formDelete: "Remove",

    timelineTitle: "Strategic $80M Capital Roadmap (2024 - 2028)",
    timelineDesc: "Phased capital allocation layout designed to deploy complete deep-freezing warehouses and distribution networks.",
    docDownload: "Project Supporting Resources (Mock Downloads)",
    docBrochure: "Comprehensive Masterplan Brochure (PDF - Bilingual)",
    docNda: "Bilingual Confidentiality Agreement Template (DOCX - VN/EN)",
    officeVN: "Headquarters: Hanoi & Ho Chi Minh City, Vietnam",
    officeDE: "Europe Branch: Frankfurt, Germany",
    officeJP: "East Asia Office: Tokyo, Japan",
    officeSG: "ASEAN Regional Hub: Singapore",
    supportUrgent: "24/7 Digital Support & Direct Emergency Lines"
  },
  zh: {
    title: "Global Agri-Logistics Chain",
    subtitle: "全球农产品供应链与智能冷链物流",
    tagline: "智能冷链物流仓储与精深食品分销系统，致力于将越南顶级有机大米与精品肉类销往全球。",
    statsTitle: "战略规划目标",
    statsCoverage: "覆盖全球15个国家",
    statsInvestment: "总投资8000万美元",
    statsInvestmentSub: "冷链基础设施与分销网络",
    partnerSearch: "寻找战略合资伙伴",
    partnerSearchDesc: "将供应链网络拓展至北美和欧洲的高壁垒市场。我们正在寻找专注于国际清关、海陆多式联运的合作伙伴，以实时物流数字系统和严苛的食品质量监管为支撑。",
    learnMore: "了解更多细节",
    contactBtn: "立即取得联系",

    tabMap: "15国供应走廊地图",
    tabPillars: "核心支柱与物联网遥测",
    tabCalculator: "ROI与绿色ESG模拟器",
    tabPartner: "合资伙伴注册通道",
    tabTimeline: "战略规划路线图与文献",

    mapTitle: "全球供应走廊覆盖版图",
    mapDesc: "直观展示连接海防、大南和龙安主枢纽港至全球目的地的多式联运网络。蓝色海运线路实时闪烁动画。",
    mapInstruction: "点击地图上的目标国家，查看其进口量、核心出口商品及特定检疫清关规范。",
    mapSelectedCountry: "合作伙伴国:",
    mapExportVol: "年出口量:",
    mapMainProduct: "主导出口商品:",
    mapCustomsRule: "海关检疫与合规要求:",
    mapWarehouseSource: "始发总仓:",
    mapTonsPerYear: "吨 / 年",

    pillarsTitle: "三大农业支柱与智能冷链技术",
    pillarsDesc: "越南顶级天然有机农产品与物联网智能化保鲜监控技术的完美协同。",
    pillar1Title: "智能化冷库基础设施",
    pillar1Desc: "ASRS全自动高位货架，可控气氛（CA）冷藏技术，可延长保鲜期3倍以上。",
    pillar1Specs: [
      "IQF超快速冷冻技术（-40°C）",
      "工业机器人自动存取系统",
      "绿色低碳标准，省电30%"
    ],
    pillar2Title: "高端精深加工肉类链",
    pillar2Desc: "草本有机猪肉及天然放牧牛肉，符合欧洲标准的精深加工与无菌包装。",
    pillar2Specs: [
      "全程冷链精准控温 0 - 4°C",
      "区块链原产地溯源保障",
      "通过HACCP与ISO 22000国际食品安全认证"
    ],
    pillar3Title: "越南顶级有机高质大米",
    pillar3Desc: "荣获国际大奖的ST25有机大米与红糙米，已获得美/日（USDA/JAS）有机双认证，实行极其严苛的控温控湿仓储。",
    pillar3Specs: [
      "最佳储藏湿度低于14%",
      "零化学添加剂与防腐防虫药剂",
      "出口级高端真空抽气包装"
    ],
    iotTitle: "实时物联网冷链数据监控中心",
    iotDesc: "来自越南三大区域性核心物流枢纽感应网络实时传送的运行指标。",
    iotStatusActive: "安全运行中",
    iotStatusWarning: "高湿度异常警报",
    iotTemp: "当前温度",
    iotHumidity: "相对湿度",
    iotO2: "氧气浓度 (CA气体)",
    iotLastUpdate: "刚刚更新",
    iotSecureChain: "闭环冷链系统运转一切正常",

    calcTitle: "投资收益率（ROI）与ESG碳减排测算",
    calcDesc: "输入航运货量，模拟由智慧冷链物流解决方案带来的运营成本缩减及ESG绿色碳积分额度。",
    calcRegion: "自贸区/经贸合作走廊",
    calcVolume: "预估运输货量 (吨 / 月):",
    calcStorageTime: "平均仓储周期 (天):",
    calcResultTitle: "年度测算模拟指标",
    calcSavings: "预计节省的运营开支",
    calcCO2: "二氧化碳减排估值 (ESG绿色认证)",
    calcShelfLife: "食品保质期延长系数",
    calcPreservation: "农副产品完好保存保障率",
    chartLegendLoss: "防止保鲜腐烂流失",
    chartLegendFreight: "国际海运物流优化",
    chartLegendFta: "自由贸易协定免税红利",

    formTitle: "合资（JV）战略意向注册登记",
    formDesc: "提交初步合作申请意向，并获取官方双语保密协议（NDA）范本。法务团队将在48小时内回复。",
    formCompany: "企业 / 投资机构法定名称",
    formName: "授权联络人姓名",
    formEmail: "业务电子邮箱",
    formPhone: "联络电话 / Zalo / WhatsApp",
    formMarketInterest: "目标经贸航线",
    formProposedValue: "核心合作优势 (资本实力 / 清关资源 / 货运航线 / 冷链仓储)",
    formSubmit: "提交意向书并获取双语NDA",
    formSubmitting: "正在处理合资意向材料...",
    formSuccess: "合资申请意向提交成功！数据已在本地归档。",
    formHistory: "您已保存的申请草稿 (LocalStorage)",
    formNoHistory: "当前浏览器尚未提交过任何申请意向。",
    formStatusReview: "初步资质审核中 (一期)",
    formDelete: "移除",

    timelineTitle: "8000万美元战略资金五年规划 (2024 - 2028)",
    timelineDesc: "合理的五年资金预算配比图，用于建成完全自主可控的大型超低温智能仓储分销链。",
    docDownload: "项目补充资料区 (模拟下载链接)",
    docBrochure: "项目主规划综合手册 (PDF - 双语版)",
    docNda: "双语商业机密保护协议文本 (DOCX - 越/英双语)",
    officeVN: "全球总部：越南 河内与胡志明市",
    officeDE: "欧洲联络处：德国 法兰克福",
    officeJP: "东亚联络处：日本 东京",
    officeSG: "东盟区域枢纽：新加坡",
    supportUrgent: "24/7 在线业务支持与紧急紧急联络通道"
  },
  ar: {
    title: "Global Agri-Logistics Chain",
    subtitle: "سلسلة التوريد والخدمات اللوجستية الزراعية العالمية",
    tagline: "نظام ذكي لتخزين سلاسل التبريد وتوزيع الأغذية المعالجة بعمق، لإيصال الأرز العضوي الفيتنامي الفاخر واللحوم الممتازة إلى العالم.",
    statsTitle: "الأهداف الاستراتيجية",
    statsCoverage: "تغطية 15 دولة",
    statsInvestment: "استثمار بقيمة 80 مليون دولار",
    statsInvestmentSub: "البنية التحتية وشبكة سلسلة التبريد",
    partnerSearch: "البحث عن شركاء لمشروع مشترك استراتيجي",
    partnerSearchDesc: "توسيع شبكات سلسلة التوريد إلى الأسواق الصارمة في أمريكا الشمالية وأوروبا. نحن نبحث عن خبراء في التخليص الجمركي والنقل الدولي مدعومين بنظام لوجستي ذكي لإدارة الجودة الفائقة في الوقت الفعلي.",
    learnMore: "معرفة المزيد من التفاصيل",
    contactBtn: "اتصل بنا الآن",

    tabMap: "خريطة ممرات 15 دولة",
    tabPillars: "الركائز الأساسية والقياس عن بعد لـ IoT",
    tabCalculator: "محاكي ROI و ESG",
    tabPartner: "تسجيل الشركاء في المشروع المشترك",
    tabTimeline: "خارطة الطريق الاستراتيجية والوثائق",

    mapTitle: "تغطية ممرات الإمداد العالمية",
    mapDesc: "تصوير ممر النقل متعدد الوسائط الذي يربط المستودعات المحورية الرئيسية في هاي فونغ، دا نانغ، ولونغ آن بوجهات عالمية. مسارات الشحن البحري المبردة تنبض في الوقت الفعلي.",
    mapInstruction: "انقر فوق بلدان الوجهات على الخريطة لعرض حجم الصادرات والمنتجات الرئيسية والمعايير التنظيمية الصارمة.",
    mapSelectedCountry: "بلد الشريك:",
    mapExportVol: "حجم الصادرات:",
    mapMainProduct: "السلع الرئيسية:",
    mapCustomsRule: "قواعد التفتيش الجمركي:",
    mapWarehouseSource: "مستودع المصدر:",
    mapTonsPerYear: "طن / سنة",

    pillarsTitle: "الركائز الثلاث للزراعة وتكنولوجيا سلسلة التبريد",
    pillarsDesc: "التآزر بين المنتجات الزراعية العضوية الفيتنامية الفاخرة وشاشات مراقبة الحفظ الذكية عالية التقنية.",
    pillar1Title: "البنية التحتية للمستودعات الباردة الذكية",
    pillar1Desc: "أنظمة التخزين الآلية ASRS وتكنولوجيا التحكم في الغلاف الجوي (CA) التي تمد فترة الصلاحية 3 مرات أطول.",
    pillar1Specs: [
      "تجميد فائق السرعة IQF عند -40 درجة مئوية",
      "استرداد آلي عبر الروبوتات",
      "معايير خضراء توفر 30% من الطاقة"
    ],
    pillar2Title: "سلسلة اللحوم المعالجة الممتازة",
    pillar2Desc: "لحم الخنزير العشبي العضوي ولحم البقر المغذى على المراعي، معالجة عميقة ومعبأة بشكل معقم وفقًا للمواصفات الأوروبية.",
    pillar2Specs: [
      "مراقبة مستمرة للتبريد عند 0 - 4 درجات مئوية",
      "تتبع المنشأ القائم على البلوكشين",
      "شهادات HACCP و ISO 22000 الدولية"
    ],
    pillar3Title: "الأرز العضوي الفيتنامي الفاخر",
    pillar3Desc: "أرز ST25 العضوي الحائز على جوائز والأرز البني الأحمر المعتمد من USDA/JAS، والمخزن في رطوبة صارمة.",
    pillar3Specs: [
      "رطوبة تخزين مثالية أقل من 14%",
      "خالٍ تمامًا من المواد الحافظة الكيميائية",
      "تغليف للتصدير عالي الجودة مفرغ من الهواء"
    ],
    iotTitle: "مراقبة القياس عن بعد لـ IoT في الوقت الفعلي",
    iotDesc: "التشخيصات الحسية الحية من شبكات الاستشعار في المراكز اللوجستية الإقليمية الثلاثة الرئيسية في فيتنام.",
    iotStatusActive: "نشط وآمن",
    iotStatusWarning: "تنبيه رطوبة عالية",
    iotTemp: "درجة الحرارة",
    iotHumidity: "الرطوبة",
    iotO2: "مستوى الأكسجين (CA)",
    iotLastUpdate: "تم التحديث الآن",
    iotSecureChain: "سلسلة التوريد المغلقة تعمل بأمان",

    calcTitle: "حاسبة العائد الاستثماري وكفاءة ESG",
    calcDesc: "أدخل حجم الشحن لمحاكاة التوفير المالي وائتمانات تعويض الكربون ESG من خلال حلول الإمداد الذكية المتكاملة لدينا.",
    calcRegion: "منطقة التجارة الحرة / الممر",
    calcVolume: "حجم الشحن المتوقع (طن / شهر):",
    calcStorageTime: "متوسط فترة التخزين (أيام):",
    calcResultTitle: "النتائج السنوية المحاكية",
    calcSavings: "الوفورات المالية المقدرة",
    calcCO2: "انبعاثات الكربون التي تم تقليلها (ائتمانات ESG الخضراء)",
    calcShelfLife: "مضاعف تمديد فترة الصلاحية",
    calcPreservation: "معدل الحفاظ على سلامة الأغذية",
    chartLegendLoss: "منع التلف",
    chartLegendFreight: "تحسين تكاليف الشحن",
    chartLegendFta: "إعفاءات الرسوم الجمركية FTA",

    formTitle: "بوابة المشاريع المشتركة الاستراتيجية",
    formDesc: "أرسل تعبيرًا أوليًا عن الاهتمام واطلب اتفاقية عدم الإفصاح الثنائية اللغة. سيرد مكتبنا القانوني في غضون 48 ساعة عمل.",
    formCompany: "اسم الشركة / صندوق الاستثمار",
    formName: "الشخص المفوض للاتصال",
    formEmail: "بريد العمل الإلكتروني",
    formPhone: "الهاتف المباشر / واتساب / زالو",
    formMarketInterest: "ممر التجارة المستهدف",
    formProposedValue: "نقاط القوة للتعاون المشترك (رأس المال / الجمارك / النقل / التخزين)",
    formSubmit: "إرسال الاقتراح وطلب NDA",
    formSubmitting: "جاري معالجة اقتراح المشروع المشترك...",
    formSuccess: "تم تقديم الاقتراح بنجاح! تم حفظ البيانات محلياً.",
    formHistory: "مقترحاتك المحفوظة (LocalStorage)",
    formNoHistory: "لم يتم تقديم أي مقترحات من هذا المتصفح بعد.",
    formStatusReview: "تحت المراجعة (المرحلة الأولى)",
    formDelete: "إزالة",

    timelineTitle: "خارطة الطريق الاستراتيجية لرأس المال 80M$ (2024 - 2028)",
    timelineDesc: "تخطيط تخصيص الميزانية الاستراتيجية لإنشاء مستودعات تجميد عميق متكاملة وشبكات توزيع لوجستية.",
    docDownload: "موارد المشروع المساعدة (تنزيل تجريبي)",
    docBrochure: "كتيب المخطط الرئيسي الشامل (PDF - ثنائي اللغة)",
    docNda: "نموذج اتفاقية السرية ثنائية اللغة (DOCX - فيتنامي/إنجليزي)",
    officeVN: "المقر الرئيسي: هانوي ومدينة هو شي مينه، فيتنام",
    officeDE: "فرع أوروبا: فرانكفورت، ألمانيا",
    officeJP: "مكتب شرق آسيا: طوكيو، اليابان",
    officeSG: "المركز الإقليمي لآسيان: سنغافورة",
    supportUrgent: "دعم رقمي على مدار الساعة وطرق اتصال مباشرة بالطوارئ"
  },
  tr: {
    title: "Global Agri-Logistics Chain",
    subtitle: "Küresel Tarım Tedarik Zinciri ve Soğuk Lojistik",
    tagline: "Vietnam'ın üstün kaliteli organik pirincini ve işlenmiş et ürünlerini dünyaya sunmak için geliştirilmiş akıllı soğuk zincir deposu ve dağıtım sistemi.",
    statsTitle: "Stratejik Hedefler",
    statsCoverage: "15 ülke kapsama alanı",
    statsInvestment: "80M$ Yatırım Hacmi",
    statsInvestmentSub: "Soğuk zincir altyapısı ve dağıtım ağı",
    partnerSearch: "Stratejik Ortaklıklar & Joint Venture Arayışı",
    partnerSearchDesc: "Tedarik zincirimizi Kuzey Amerika ve Avrupa gibi regülasyonları sıkı pazarlara genişletiyoruz. Gümrükleme, uluslararası nakliye uzmanları ve gerçek zamanlı IoT takip sistemleri işleten ortaklar aramaktayız.",
    learnMore: "Detayları İnceleyin",
    contactBtn: "Hemen İletişime Geçin",

    tabMap: "15 Ülke Koridor Haritası",
    tabPillars: "Temel Sütunlar & IoT Telemetrisi",
    tabCalculator: "ROI ve ESG Simülatörü",
    tabPartner: "JV Ortaklık Başvurusu",
    tabTimeline: "Stratejik Yol Haritası & Belgeler",

    mapTitle: "Küresel Tedarik Koridoru Kapsamı",
    mapDesc: "Hai Phong, Da Nang ve Long An ana liman depolarından küresel varış noktalarına uzanan çok modlu lojistik hattı. Gerçek zamanlı deniz nakliye rotaları.",
    mapInstruction: "Ülkelerin ihracat miktarını, ürün kategorilerini ve özel gümrük kurallarını görmek için haritada bir ülkeye tıklayın.",
    mapSelectedCountry: "Ortak Ülke:",
    mapExportVol: "İhracat Miktarı:",
    mapMainProduct: "Ana Ürünler:",
    mapCustomsRule: "Gümrük Denetim Kuralları:",
    mapWarehouseSource: "Çıkış Deposu:",
    mapTonsPerYear: "ton / yıl",

    pillarsTitle: "Üç Tarım Sütunu & Soğuk Zincir Teknolojisi",
    pillarsDesc: "Vietnam'ın en yüksek kaliteli organik tarım ürünleri ile akıllı telemetri denetim teknolojisinin entegrasyonu.",
    pillar1Title: "Akıllı Soğuk Depo Altyapısı",
    pillar1Desc: "ASRS otonom raf sistemleri, kontrollü atmosfer (CA) teknolojisi ile 3 kat daha uzun taze depolama.",
    pillar1Specs: [
      "-40°C'de IQF şoklama teknolojisi",
      "Robotik otonom raf ve istifleyiciler",
      "%30 enerji tasarruflu yeşil standartlar"
    ],
    pillar2Title: "Premium İşlenmiş Et Zinciri",
    pillar2Desc: "Avrupa standartlarında steril paketlenmiş ve işlenmiş organik bitkisel besili domuz ve sığır eti.",
    pillar2Specs: [
      "0 - 4°C aralığında kesintisiz soğuk takibi",
      "Blockchain tabanlı orijin izlenebilirliği",
      "HACCP & ISO 22000 gıda güvenliği sertifikaları"
    ],
    pillar3Title: "Premium Vietnam Organik Pirinci",
    pillar3Desc: "Ödüllü ST25 organik pirinci ve USDA/JAS sertifikalı kırmızı pirinç, yüksek nem korumalı silolarda muhafaza edilir.",
    pillar3Specs: [
      "%14'ün altında optimum nem seviyesi",
      "Kimyasal koruyucu ve ilaçsız koruma",
      "Vakumlu ihracat kalitesinde lüks paketleme"
    ],
    iotTitle: "Gerçek Zamanlı IoT Telemetri Paneli",
    iotDesc: "Vietnam'ın üç büyük bölgesel lojistik merkezindeki sensörlerden gelen anlık ölçüm verileri.",
    iotStatusActive: "Aktif ve Güvenli",
    iotStatusWarning: "Yüksek Nem Uyarısı",
    iotTemp: "Sıcaklık",
    iotHumidity: "Nem Oranı",
    iotO2: "Oksijen Seviyesi (CA)",
    iotLastUpdate: "Yeni güncellendi",
    iotSecureChain: "Kapalı devre soğuk tedarik zinciri stabil çalışıyor",

    calcTitle: "ROI ve ESG Karbon Azaltım Hesaplayıcı",
    calcDesc: "Tedarik hacmini girerek finansal tasarruf ve ESG yeşil karbon kredisi kazanımlarınızı simüle edin.",
    calcRegion: "Serbest Ticaret Anlaşması Koridoru",
    calcVolume: "Tahmini Nakliye Miktarı (ton / ay):",
    calcStorageTime: "Ortalama Depolama Süresi (gün):",
    calcResultTitle: "Yıllık Simülasyon Sonuçları",
    calcSavings: "Tahmini Maliyet Tasarrufu",
    calcCO2: "Karbon Salınımı Azaltımı (ESG Yeşil Kredi)",
    calcShelfLife: "Raf Ömrü Uzama Katsayısı",
    calcPreservation: "Gıda Koruma ve Güvence Oranı",
    chartLegendLoss: "Tazelik Kaybının Önlenmesi",
    chartLegendFreight: "Navlun Tarifesi Optimizasyonu",
    chartLegendFta: "FTA Gümrük Vergisi Muafiyetleri",

    formTitle: "Stratejik Joint Venture (JV) Başvuru Portalı",
    formDesc: "Ön işbirliği talebi gönderin ve iki dilli gizlilik sözleşmesi (NDA) şablonunu isteyin. Hukuk departmanımız 48 saat içinde dönüş sağlayacaktır.",
    formCompany: "Kurum / Yatırım Fonu Ticari Adı",
    formName: "Yetkili İrtibat Kişisi",
    formEmail: "Kurumsal E-posta Adresi",
    formPhone: "Direkt Telefon / WhatsApp / Zalo",
    formMarketInterest: "Hedef Lojistik Hattı",
    formProposedValue: "İşbirliği Güçleri (Sermaye / Gümrük / Lojistik / Depolama)",
    formSubmit: "Başvuruyu Gönder & NDA Talep Et",
    formSubmitting: "Başvurunuz işleniyor...",
    formSuccess: "Başvurunuz başarıyla iletildi! Veriler yerel olarak arşivlendi.",
    formHistory: "Kayıtlı Başvurularınız (LocalStorage)",
    formNoHistory: "Bu tarayıcıdan henüz bir başvuru yapılmadı.",
    formStatusReview: "Ön Değerlendirme Aşamasında (F1)",
    formDelete: "Sil",

    timelineTitle: "80 Milyon Dolar Yatırım Yol Haritası (2024 - 2028)",
    timelineDesc: "Soğuk hava depolarının ve dağıtım lojistik altyapısının kurulumunu finanse edecek stratejik bütçe dağılımı.",
    docDownload: "Proje Destek Belgeleri (Simüle İndirmeler)",
    docBrochure: "Kapsamlı Masterplan Broşürü (PDF - İki Dilli)",
    docNda: "İki Dilli Bilgi Gizliliği Sözleşmesi (DOCX - VN/EN)",
    officeVN: "Genel Merkez: Hanoi & Ho Chi Minh City, Vietnam",
    officeDE: "Avrupa Ofisi: Frankfurt, Almanya",
    officeJP: "Doğu Asya Ofisi: Tokyo, Japonya",
    officeSG: "ASEAN Bölgesel Hub: Singapur",
    supportUrgent: "7/24 Dijital Teknik Destek ve Acil İletişim Hatları"
  },
  de: {
    title: "Global Agri-Logistics Chain",
    subtitle: "Globale Agrarlieferkette & Kühllogistik",
    tagline: "Intelligente Kühllagerung und tiefverarbeitetes Lebensmittel-Vertriebssystem, das erstklassigen vietnamesischen Bio-Reis und exquisites Fleisch weltweit liefert.",
    statsTitle: "Strategische Ziele",
    statsCoverage: "Abdeckung von 15 Ländern",
    statsInvestment: "Investitionsvolumen von 80 Mio. USD",
    statsInvestmentSub: "Kühlketteninfrastruktur & Vertriebsnetzwerk",
    partnerSearch: "Suche nach strategischen Joint-Venture-Partnern",
    partnerSearchDesc: "Ausbau unseres Lieferkettennetzwerks in die anspruchsvollen Märkte Nordamerikas und Europas. Wir suchen Partner mit Spezialisierung auf internationale Zollabwicklung, Fracht und Logistiküberwachung in Echtzeit.",
    learnMore: "Weitere Details erfahren",
    contactBtn: "Jetzt verbinden",

    tabMap: "15-Länder-Korridor-Karte",
    tabPillars: "Kernkomponenten & IoT-Telemetrie",
    tabCalculator: "ROI- & ESG-Simulator",
    tabPartner: "JV-Partnerregistrierung",
    tabTimeline: "Strategische Roadmap & Dokumente",

    mapTitle: "Globale Lieferkorridor-Abdeckung",
    mapDesc: "Visualisierung des multimodalen Transportkorridors von den Hauptlagern in Hai Phong, Da Nang und Long An zu globalen Zielen. Echtzeit-Seekühlrouten.",
    mapInstruction: "Klicken Sie auf ein Zielland auf der Karte, um Exportvolumen, Hauptprodukte und spezifische Zollbestimmungen anzuzeigen.",
    mapSelectedCountry: "Partnerland:",
    mapExportVol: "Exportvolumen:",
    mapMainProduct: "Hauptprodukte:",
    mapCustomsRule: "Zoll- & Prüfvorschriften:",
    mapWarehouseSource: "Ausgangslager:",
    mapTonsPerYear: "Tonnen / Jahr",

    pillarsTitle: "Drei Säulen der Landwirtschaft & Kühlkettentechnologie",
    pillarsDesc: "Synergie von erstklassigen vietnamesischen Bio-Agrarprodukten und hochentwickelter intelligenter Lagerungsüberwachung.",
    pillar1Title: "Intelligente Kühllager-Infrastruktur",
    pillar1Desc: "Automatisiertes Hochregallager (ASRS), Technologie für kontrollierte Atmosphäre (CA) verlängert die Haltbarkeit um das 3-fache.",
    pillar1Specs: [
      "IQF-Schockgefrierung bei -40°C",
      "Robotische Einlagerung & Entnahme",
      "Grüne Standards mit 30% Stromeinsparung"
    ],
    pillar2Title: "Premium-Fleischkette",
    pillar2Desc: "Kräuter-Bio-Schweinefleisch und Weiderindfleisch, tiefverarbeitet und steril verpackt nach europäischen Richtlinien.",
    pillar2Specs: [
      "Kontinuierliche Temperaturkontrolle bei 0 - 4°C",
      "Blockchain-basierte Herkunftsrückverfolgbarkeit",
      "HACCP- und ISO-22000-Zertifizierung"
    ],
    pillar3Title: "Premium vietnamesischer Bio-Reis",
    pillar3Desc: "Prämierter Bio-Reis ST25 und roter Naturreis nach USDA/JAS-Standard, gelagert unter strenger Feuchtigkeitskontrolle.",
    pillar3Specs: [
      "Optimale Lagerfeuchtigkeit unter 14%",
      "Absolut frei von chemischen Konservierungsmitteln",
      "Hochwertige vakuumversiegelte Exportverpackung"
    ],
    iotTitle: "Echtzeit-IoT-Telemetriemonitor",
    iotDesc: "Direkte Messwerte aus dem Sensornetzwerk an den drei wichtigsten Logistik-Hubs in Vietnam.",
    iotStatusActive: "Aktiv & Sicher",
    iotStatusWarning: "Warnung: Hohe Feuchtigkeit",
    iotTemp: "Temperatur",
    iotHumidity: "Feuchtigkeit",
    iotO2: "Sauerstoffgehalt (CA)",
    iotLastUpdate: "Gerade aktualisiert",
    iotSecureChain: "Geschlossene Kühlkette arbeitet stabil",

    calcTitle: "ROI- und ESG-Effizienzrechner",
    calcDesc: "Geben Sie das Transportvolumen ein, um finanzielle Einsparungen und ESG-Carbon-Credits durch unsere intelligenten Lösungen zu simulieren.",
    calcRegion: "Handelskorridor",
    calcVolume: "Voraussichtliches Frachtvolumen (Tonnen / Monat):",
    calcStorageTime: "Durchschnittliche Lagerdauer (Tage):",
    calcResultTitle: "Simulierte jährliche Ergebnisse",
    calcSavings: "Geschätzte Kosteneinsparungen",
    calcCO2: "CO2-Emissionseinsparung (ESG-Zertifikate)",
    calcShelfLife: "Haltbarkeits-Verlängerungsfaktor",
    calcPreservation: "Sicherungsquote für Lebensmittel",
    chartLegendLoss: "Vermeidung von Verderb",
    chartLegendFreight: "Frachttarif-Optimierungen",
    chartLegendFta: "FTA-Zollbefreiungen",

    formTitle: "Strategisches Joint-Venture-Portal",
    formDesc: "Senden Sie eine Interessensbekundung und fordern Sie die NDA-Vorlage an. Unsere Rechtsabteilung antwortet innerhalb von 48 Stunden.",
    formCompany: "Name des Unternehmens / Investmentfonds",
    formName: "Bevollmächtigter Ansprechpartner",
    formEmail: "Geschäftliche E-Mail-Adresse",
    formPhone: "Direktkontakt / WhatsApp / Zalo",
    formMarketInterest: "Ziel-Handelskorridor",
    formProposedValue: "Kooperationsstärken (Eigenkapital / Zoll / Transport / Lagerung)",
    formSubmit: "Vorschlag einreichen & NDA anfordern",
    formSubmitting: "Vorschlag wird bearbeitet...",
    formSuccess: "Erfolgreich übermittelt! Ihre Daten wurden lokal archiviert.",
    formHistory: "Gespeicherte Vorschläge (LocalStorage)",
    formNoHistory: "Noch keine Vorschläge von diesem Browser gesendet.",
    formStatusReview: "In Prüfung (Phase 1)",
    formDelete: "Löschen",

    timelineTitle: "Strategischer 80M$-Kapitalplan (2024 - 2028)",
    timelineDesc: "Phasenweise Verteilung des Budgets zur Etablierung des kompletten Tiefkühllager- und Distributionsnetzwerks.",
    docDownload: "Ergänzende Projektmaterialien (Simulation)",
    docBrochure: "Umfassende Masterplan-Broschüre (PDF - Zweisprachig)",
    docNda: "Zweisprachige Geheimhaltungsvereinbarung (DOCX - VN/EN)",
    officeVN: "Hauptsitz: Hanoi & Ho-Chi-Minh-Stadt, Vietnam",
    officeDE: "Niederlassung Europa: Frankfurt, Deutschland",
    officeJP: "Niederlassung Ostasien: Tokio, Japan",
    officeSG: "ASEAN Regional Hub: Singapur",
    supportUrgent: "Digitale 24/7-Unterstützung und direkte Notfall-Kontaktleitungen"
  },
  ja: {
    title: "Global Agri-Logistics Chain",
    subtitle: "グローバル農産物サプライチェーン＆コールドロジスティクス",
    tagline: "越南が誇る最高級有機米と深加工肉製品を世界へ届ける、インテリジェント低温保管・グローバル流通システム。",
    statsTitle: "戦略規模目標",
    statsCoverage: "世界15ヶ国をカバー",
    statsInvestment: "投資総額 8,000万ドル",
    statsInvestmentSub: "コールドチェーンインフラ＆流通網整備",
    partnerSearch: "戦略的合弁（JV）パートナーの募集",
    partnerSearchDesc: "北米および欧州の厳格な市場へのサプライチェーン展開を進めています。通関手続き、国際輸送、リアルタイムなロジスティクス管理および厳格な品質管理を担当する戦略的パートナーを必要としています。",
    learnMore: "詳細情報を確認",
    contactBtn: "今すぐ接続",

    tabMap: "15ヶ国輸送回廊マップ",
    tabPillars: "核心ピラー＆IoTテレメトリー",
    tabCalculator: "ROI＆ESGシミュレーター",
    tabPartner: "JVパートナー登録ポータル",
    tabTimeline: "戦略ロードマップ＆資料ダウンロード",

    mapTitle: "グローバル供給回廊のカバー範囲",
    mapDesc: "ハイフォン、ダナン、ロンアンの主要拠点倉庫から世界各地を結ぶ複合輸送網を可視化。コールド海上輸送ルートをリアルタイムで波状アニメーション化。",
    mapInstruction: "地図上の目的地国をクリックすると、輸出量、主要取扱品目、および特定の検疫通関規制の詳細が表示されます。",
    mapSelectedCountry: "パートナー国:",
    mapExportVol: "輸出規模:",
    mapMainProduct: "主要製品:",
    mapCustomsRule: "通関検疫規制:",
    mapWarehouseSource: "出荷元総倉庫:",
    mapTonsPerYear: "トン / 年",

    pillarsTitle: "農業の3大ピラー＆先端コールドチェーン技術",
    pillarsDesc: "ベトナム最高基準の特選有機農産物と、インテリジェントIoT遠隔環境監視技術の融合。",
    pillar1Title: "インテリジェント自動化倉庫インフラ",
    pillar1Desc: "ASRSロボット自動ラックシステム、貯蔵鮮度を3倍延長するCA（調整雰囲気）技術を搭載。",
    pillar1Specs: [
      "-40°C急速IQF凍結技術",
      "ロボット搬送による自動仕分け・保管棚",
      "消費電力を30%削減するグリーン建築基準"
    ],
    pillar2Title: "高級加工肉サプライチェーン",
    pillar2Desc: "ハーブ飼育の有機豚肉および放牧牧草牛、欧州基準に準拠した高度加工と無菌パック梱包。",
    pillar2Specs: [
      "0〜4°Cの徹底した継続コールド維持管理",
      "ブロックチェーン技術による原産地・流通追跡",
      "HACCPおよびISO 22000国際食品安全認証取得"
    ],
    pillar3Title: "ベトナム産プレミアム有機大米",
    pillar3Desc: "世界最高峰に輝いた有機ST25米および赤米、USDA/JAS有機認証を完備。高精度調湿サイロ保管。",
    pillar3Specs: [
      "最適な保管湿度14%以下を維持",
      "化学添加物・保存薬剤一切不使用",
      "プレミアム輸出用真空パック包装仕様"
    ],
    iotTitle: "リアルタイムIoTテレメトリー監視センター",
    iotDesc: "ベトナム国内3大ロジスティクスハブに設置されたセンサー群からのダイレクト計測データ。",
    iotStatusActive: "安全稼働中",
    iotStatusWarning: "高湿度警告",
    iotTemp: "現在の温度",
    iotHumidity: "相対湿度",
    iotO2: "酸素濃度（CA調整ガス）",
    iotLastUpdate: "今しがた更新",
    iotSecureChain: "完全密閉コールドチェーンは極めて安定して稼働しています",

    calcTitle: "投資収益率（ROI）およびESG環境価値算出",
    calcDesc: "想定される貨物輸送量を入力し、スマートコールドソリューションの導入により得られるコスト削減額とESG炭素クレジット価値を算出します。",
    calcRegion: "適用自由貿易協定 (FTA)",
    calcVolume: "想定輸送量 (トン / 月):",
    calcStorageTime: "平均保管期間 (日):",
    calcResultTitle: "年間シミュレーション結果",
    calcSavings: "見込み削減コスト",
    calcCO2: "CO2排出削減量 (ESG環境認定)",
    calcShelfLife: "消費期限延長倍率",
    calcPreservation: "農産物品質保護率",
    chartLegendLoss: "鮮度低下による損失削減",
    chartLegendFreight: "国際運賃配船の最適化",
    chartLegendFta: "自由貿易協定による関税免除効果",

    formTitle: "合弁（JV）戦略パートナー意向書提出",
    formDesc: "初期のご意向提出および双語NDA契約書の請求を行えます。法務デスクより48営業時間内に返答いたします。",
    formCompany: "企業 / 投資ファンド正式名称",
    formName: "権限授与連絡窓口氏名",
    formEmail: "法人用メールアドレス",
    formPhone: "直通電話番号 / WhatsApp / Zalo",
    formMarketInterest: "進出目標の貿易航路",
    formProposedValue: "協業可能な強み（自己資本力 / 通関リソース / 国際輸送 / コールド倉庫）",
    formSubmit: "提案を送信してNDAを請求する",
    formSubmitting: "提案データを処理中...",
    formSuccess: "提案の送信が完了しました。ブラウザのローカル領域に保存されました。",
    formHistory: "保存済みの提出履歴 (LocalStorage)",
    formNoHistory: "このブラウザから送信された履歴はまだありません。",
    formStatusReview: "一次審査中（F1ステージ）",
    formDelete: "削除",

    timelineTitle: "8,000万ドル戦略資本計画ロードマップ (2024 - 2028)",
    timelineDesc: "完全統合された超低温倉庫およびスマート流通ネットワークを配備するための、5ヶ年予算配分図。",
    docDownload: "補足プロジェクト資料 (シミュレート版)",
    docBrochure: "包括マスタープランパンフレット (PDF - 日英バイリンガル)",
    docNda: "二ヶ国語対応秘密保持契約書ドラフト (DOCX - 越/英)",
    officeVN: "グローバル本社：ベトナム ハノイ＆ホーチミン",
    officeDE: "欧州拠点：ドイツ フランクフルト",
    officeJP: "東アジア拠点：日本 東京",
    officeSG: "ASEANハブ：シンガポール",
    supportUrgent: "24時間365日 オンライン業務サポート＆緊急連絡先"
  },
  fr: {
    title: "Global Agri-Logistics Chain",
    subtitle: "Chaîne d'Approvisionnement Agricole Globale & Logistique du Froid",
    tagline: "Système d'entrepôt frigorifique intelligent et de distribution de produits hautement transformés, exportant le riz biologique et les viandes de qualité supérieure du Vietnam à l'échelle mondiale.",
    statsTitle: "Objectifs Stratégiques",
    statsCoverage: "Couverture de 15 pays",
    statsInvestment: "Investissement de 80M$",
    statsInvestmentSub: "Infrastructure de chaîne du froid & distribution",
    partnerSearch: "Recherche de partenaires de coentreprise stratégique",
    partnerSearchDesc: "Extension de notre chaîne logistique vers les marchés rigoureux d'Amérique du Nord et d'Europe. Nous recherchons des experts en douane internationale, fret multimodal et systèmes IoT de contrôle en temps réel.",
    learnMore: "En Savoir Plus",
    contactBtn: "Se Connecter",

    tabMap: "Carte du Couloir des 15 Pays",
    tabPillars: "Piliers Centraux & Télémétrie IoT",
    tabCalculator: "Simulateur ROI & ESG",
    tabPartner: "Portail Partenaire Coentreprise",
    tabTimeline: "Feuille de Route & Documents",

    mapTitle: "Couverture du Couloir Logistique Global",
    mapDesc: "Visualisation du corridor de transport multimodal reliant les entrepôts principaux de Hai Phong, Da Nang et Long An aux destinations mondiales. Lignes maritimes froides animées en temps réel.",
    mapInstruction: "Cliquez sur un pays de destination sur la carte pour voir son volume d'exportation, ses produits phares et ses normes douanières.",
    mapSelectedCountry: "Pays Partenaire:",
    mapExportVol: "Volume d'Exportation:",
    mapMainProduct: "Produits Principaux:",
    mapCustomsRule: "Réglementations Douanières & Contrôles:",
    mapWarehouseSource: "Entrepôt d'Origine:",
    mapTonsPerYear: "tonnes / an",

    pillarsTitle: "Trois Piliers Agricoles & Technologie de Chaîne du Froid",
    pillarsDesc: "Synergie entre les meilleurs produits biologiques du Vietnam et la technologie intelligente de surveillance de conservation.",
    pillar1Title: "Infrastructures d'Entreposage Intelligent",
    pillar1Desc: "Systèmes de stockage automatisés ASRS, technologie d'Atmosphère Contrôlée (CA) prolongeant la fraîcheur par 3.",
    pillar1Specs: [
      "Surgélation rapide IQF à -40°C",
      "Stockage robotisé et automatisé",
      "Normes écologiques réduisant l'électricité de 30%"
    ],
    pillar2Title: "Chaîne de Viandes de Qualité Supérieure",
    pillar2Desc: "Viande de porc biologique nourri aux herbes et bœuf de pâturage, hautement transformés et emballés sous vide stérile aux normes européennes.",
    pillar2Specs: [
      "Contrôle frigorifique continu de 0 à 4°C",
      "Traçabilité de l'origine par la Blockchain",
      "Certifications internationales HACCP & ISO 22000"
    ],
    pillar3Title: "Riz Biologique Vietnamien Premium",
    pillar3Desc: "Riz biologique de spécialité ST25 et riz rouge complet certifiés USDA/JAS, conservés sous contrôle d'humidité strict.",
    pillar3Specs: [
      "Humidité de stockage optimale sous 14%",
      "Zéro conservateur chimique ni pesticide",
      "Emballage haut de gamme sous vide pour l'exportation"
    ],
    iotTitle: "Moniteur de Télémétrie IoT en Temps Réel",
    iotDesc: "Données sensorielles en direct issues des réseaux de capteurs de nos trois grands pôles logistiques au Vietnam.",
    iotStatusActive: "Actif & Sécurisé",
    iotStatusWarning: "Alerte : Humidité Élevée",
    iotTemp: "Température",
    iotHumidity: "Humidité",
    iotO2: "Niveau d'Oxygène (CA)",
    iotLastUpdate: "Mis à jour à l'instant",
    iotSecureChain: "Chaîne du froid en circuit fermé stable",

    calcTitle: "Calculateur de Rendement ROI & ESG",
    calcDesc: "Saisissez les volumes pour simuler les économies financières et la réduction de l'empreinte carbone ESG grâce à nos solutions intégrées.",
    calcRegion: "Couloir de Libre-Échange",
    calcVolume: "Volume de fret estimé (tonnes / mois) :",
    calcStorageTime: "Durée moyenne de stockage (jours) :",
    calcResultTitle: "Résultats Annuels Simulés",
    calcSavings: "Économies financières estimées",
    calcCO2: "Réduction des émissions de CO2 (Crédits ESG Verts)",
    calcShelfLife: "Facteur d'extension de conservation",
    calcPreservation: "Taux de préservation alimentaire garanti",
    chartLegendLoss: "Prévention des pertes de fraîcheur",
    chartLegendFreight: "Optimisation des frais de transport",
    chartLegendFta: "Exonérations de droits de douane (ALE)",

    formTitle: "Portail Stratégique de Coentreprise",
    formDesc: "Soumettez une déclaration d'intérêt initiale et demandez l'accord de confidentialité (NDA) bilingue. Notre service juridique répondra sous 48h ouvrées.",
    formCompany: "Nom de l'Entreprise / Fonds d'Investissement",
    formName: "Représentant Autorisé",
    formEmail: "Adresse E-mail Professionnelle",
    formPhone: "Téléphone direct / WhatsApp / Zalo",
    formMarketInterest: "Couloir Commercial Visé",
    formProposedValue: "Forces de coopération (Capital / Douane / Transport / Entreposage)",
    formSubmit: "Soumettre la Proposition & Demander le NDA",
    formSubmitting: "Traitement de la proposition en cours...",
    formSuccess: "Proposition soumise avec succès ! Les données sont archivées localement.",
    formHistory: "Vos Propositions Enregistrées (LocalStorage)",
    formNoHistory: "Aucune proposition soumise depuis ce navigateur.",
    formStatusReview: "En cours d'examen (Phase 1)",
    formDelete: "Supprimer",

    timelineTitle: "Feuille de Route en Capital Stratégique de 80M$ (2024 - 2028)",
    timelineDesc: "Allocation budgétaire stratégique par phases pour déployer des entrepôts de surgélation et un réseau de distribution complet.",
    docDownload: "Ressources Annexes du Projet (Téléchargements Simulés)",
    docBrochure: "Brochure du Plan Directeur Général (PDF - Bilingue)",
    docNda: "Modèle d'Accord de Confidentialité Bilingue (DOCX - VN/EN)",
    officeVN: "Siège social: Hanoi & Ho Chi Minh-Ville, Vietnam",
    officeDE: "Bureau Europe: Francfort, Allemagne",
    officeJP: "Bureau Asie de l'Est: Tokyo, Japon",
    officeSG: "Hub Régional ASEAN: Singapour",
    supportUrgent: "Assistance en ligne 24h/24 & Lignes directes d'urgence"
  }
};
