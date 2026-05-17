import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "ABOUT",
        experience: "EXPERIENCE",
        projects: "PROJECTS",
        skills: "SKILLS",
        achievements: "ACHIEVEMENTS",
      },
      hero: {
        tagline: "ADVANCED PERSISTENT THREAT",
        title1: "SHAKER",
        title2: "MAHMOOD",
        role: "SECURITY ENGINEER — AI DEVELOPER — STARTUP FOUNDER",
        download: "DOWNLOAD CV",
        explore: "EXPLORE WORK",
        scroll: "SCROLL"
      },
      about: {
        origins: "ORIGINS",
        mission: "/ The Mission",
        hl1: "Founder of Nurunim.",
        hl2: "Architecting AI-driven security.",
        hl3: "Empowering the regional digital community.",
        p1: "Security Engineer with strong <strong class='text-white font-semibold'>offensive security</strong> capabilities, specializing in <strong class='text-white font-semibold'>reverse engineering, binary exploitation, cryptography</strong>, and Windows/Linux privilege escalation.",
        p2: "Founder of <strong class='text-white font-semibold'>Nurunim</strong>, a tech startup delivering B2B solutions. Proven high-level performance in national and international cybersecurity competitions.",
        p3: "Hands-on experience developing <strong class='text-white font-semibold'>AI-driven security agents</strong> and automated penetration testing systems. Combines deep system-level understanding with modern AI tooling to build next-generation security solutions.",
      },
      experience: {
        tag: "/ EXPERIENCE",
        title: "Combat Logs",
        roles: [
          {
            role: "Founder & CEO",
            company: "Nurunim Tech Startup",
            period: "2025 — Present",
            points: [
              "Architecting AI-powered security platforms from concept to deployment",
              "End-to-end product strategy, technical leadership, and team building",
              "Bridging offensive security research with production-grade AI systems"
            ]
          },
          {
            role: "IT Specialist",
            company: "BPlus Network",
            period: "2026 — Present",
            points: [
              "Enterprise infrastructure support, hardening, and lifecycle management",
              "Endpoint security configuration, monitoring, and incident triage",
              "Operational continuity planning and cross-team technical support"
            ]
          },
          {
            role: "IT Support & Technical Lead",
            company: "Mustafa Printing",
            period: "2023 — 2024",
            points: [
              "Network administration, device provisioning, and topology documentation",
              "OS-level troubleshooting across Windows and Linux environments",
              "Internal systems security hardening and vulnerability mitigation"
            ]
          },
          {
            role: "Trainer & Co-Founder",
            company: "AFDE",
            period: "2025 — Present",
            points: [
              "Designed and delivered digital empowerment curriculum at scale",
              "Co-founded the Digital Knowledge Club for youth tech education",
              "Regional advocacy for digital literacy and inclusion"
            ]
          },
          {
            role: "Credited Trainer",
            company: "Iraqi Trainers Union",
            period: "2025 — Present",
            points: [
              "Certified cybersecurity training programs for professional audiences",
              "AI education tracks designed for non-technical stakeholders",
              "Officially accredited as a national trainer by the union"
            ]
          }
        ]
      },
      projects: {
        tag: "/ SELECTED WORKS",
        items: [
          {
            title: "Mirai",
            subtitle: "AI Personality-Adaptive LLM",
            desc: "Modular AI system with adaptive personality and contextual behavior, designed for security workflows. Personality modules shift based on operational context — from analytical to adversarial."
          },
          {
            title: "Pentest Agents",
            subtitle: "Autonomous Penetration Testing",
            desc: "Autonomous agents for reconnaissance, enumeration, and exploitation logic chaining with mass scalability. Orchestrates multi-stage attack paths with minimal human input."
          },
          {
            title: "Packet Oracle",
            subtitle: "AI Packet Analysis Platform",
            desc: "Robust system that ingests PCAP files, deeply analyzes network protocols, and generates structured threat intelligence. Surfaces anomalies invisible to standard inspection tools."
          }
        ]
      },
      skills: {
        tag: "/ CAPABILITIES",
        title1: "System",
        title2: "Overview",
        items: [
          {
            title: "OFFENSIVE",
            subtitle: "SECURITY",
            desc: "Advanced persistent threat simulations, red teaming operations, and deep binary exploitation workflows. Simulating real-world adversarial tactics to harden enterprise defenses."
          },
          {
            title: "INTEL",
            subtitle: "& RECON",
            desc: "Gathering actionable intelligence from raw network traffic and OSINT. Identifying blind spots and invisible attack surfaces."
          },
          {
            title: "SYSTEMS",
            subtitle: "ENGINEERING",
            desc: "Building robust, scalable, and secure systems architecture. From AI models to backend services."
          }
        ]
      },
      achievements: {
        tag: "/ ACHIEVEMENTS",
        title: "Hall of Fame",
        globally: "Globally",
        in_iraq: "In Iraq",
        middle_east: "Middle East",
        finalist: "Finalist",
        cred_title: "Credentials"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        about: "حول",
        experience: "الخبرات",
        projects: "المشاريع",
        skills: "المهارات",
        achievements: "الإنجازات",
      },
      hero: {
        tagline: "تهديد متقدم ومستمر",
        title1: "شاكر",
        title2: "محمود",
        role: "مهندس أمن سيبراني — مطور ذكاء اصطناعي — مؤسس",
        download: "تحميل السيرة الذاتية",
        explore: "استكشاف الأعمال",
        scroll: "تمرير"
      },
      about: {
        origins: "الجذور",
        mission: "/ المهمة",
        hl1: "مؤسس شركة نورنيم.",
        hl2: "هندسة أمنية مدعومة بالذكاء الاصطناعي.",
        hl3: "تمكين المجتمع الرقمي الإقليمي.",
        p1: "مهندس أمن يمتلك قدرات عالية في <strong class='text-white font-semibold'>الأمن الهجومي</strong>، متخصص في <strong class='text-white font-semibold'>الهندسة العكسية، استغلال الثغرات، التشفير</strong>، وتصعيد الصلاحيات في أنظمة ويندوز ولينكس.",
        p2: "مؤسس شركة <strong class='text-white font-semibold'>نورنيم</strong>، شركة تقنية ناشئة تقدم حلول أعمال. أداء متميز ومثبت في مسابقات الأمن السيبراني الوطنية والدولية.",
        p3: "خبرة عملية في تطوير <strong class='text-white font-semibold'>وكلاء أمان يعتمدون على الذكاء الاصطناعي</strong> وأنظمة اختبار اختراق مؤتمتة. يجمع بين الفهم العميق للأنظمة وأدوات الذكاء الاصطناعي الحديثة لبناء حلول أمنية من الجيل القادم.",
      },
      experience: {
        tag: "/ الخبرات",
        title: "سجلات المعارك",
        roles: [
          {
            role: "المدير التنفيذي والمؤسس",
            company: "شركة نورنيم التقنية الناشئة",
            period: "2025 — الحاضر",
            points: [
              "تصميم منصات أمان مدعومة بالذكاء الاصطناعي من المفهوم إلى النشر",
              "استراتيجية المنتجات الشاملة، والقيادة الفنية، وبناء الفريق",
              "ربط أبحاث الأمن الهجومي بأنظمة الذكاء الاصطناعي المخصصة للإنتاج"
            ]
          },
          {
            role: "أخصائي تكنولوجيا المعلومات",
            company: "شبكة BPlus",
            period: "2026 — الحاضر",
            points: [
              "دعم البنية التحتية للمؤسسة، تقويتها، وإدارة دورة حياتها",
              "تكوين أمن نقاط النهاية، المراقبة، وفرز الحوادث",
              "تخطيط استمرارية العمل والدعم الفني عبر الفِرق"
            ]
          },
          {
            role: "دعم تكنولوجيا المعلومات وقائد فني",
            company: "مطبعة المصطفى",
            period: "2023 — 2024",
            points: [
              "إدارة الشبكات، تزويد الأجهزة، وتوثيق الطوبولوجيا",
              "استكشاف الأخطاء وإصلاحها على مستوى نظام التشغيل في بيئات Windows و Linux",
              "تقوية أمن الأنظمة الداخلية والتخفيف من الثغرات"
            ]
          },
          {
            role: "مدرب وشريك مؤسس",
            company: "AFDE",
            period: "2025 — الحاضر",
            points: [
              "تصميم وتقديم مناهج التمكين الرقمي على نطاق واسع",
              "المشاركة في تأسيس نادي المعرفة الرقمية لتعليم التكنولوجيا للشباب",
              "المناصرة الإقليمية لمحو الأمية الرقمية والإدماج"
            ]
          },
          {
            role: "مدرب معتمد",
            company: "نقابة المدربين العراقيين",
            period: "2025 — الحاضر",
            points: [
              "برامج تدريب معتمدة في الأمن السيبراني للجمهور المهني",
              "مسارات تعليم الذكاء الاصطناعي المصممة لأصحاب المصلحة غير التقنيين",
              "معتمد رسمياً كمدرب وطني من قبل النقابة"
            ]
          }
        ]
      },
      projects: {
        tag: "/ أعمال مختارة",
        items: [
          {
            title: "ميراي",
            subtitle: "نموذج لغوي متكيف الشخصية",
            desc: "نظام ذكاء اصطناعي معياري ذو شخصية وسلوك سياقي متكيف، مصمم لسير عمل الأمان. تتغير وحدات الشخصية بناءً على السياق التشغيلي — من التحليلي إلى العدائي."
          },
          {
            title: "وكلاء الاختراق",
            subtitle: "اختبار اختراق مستقل",
            desc: "وكلاء مستقلون لربط منطق الاستطلاع والتعداد والاستغلال مع قابلية التوسع الشامل. ينسق مسارات هجوم متعددة المراحل بأقل تدخل بشري."
          },
          {
            title: "وسيط الحزم",
            subtitle: "منصة تحليل حزم البيانات بالذكاء الاصطناعي",
            desc: "نظام قوي يستوعب ملفات PCAP، يحلل بروتوكولات الشبكة بعمق، ويولد استخبارات تهديدات مهيكلة. يبرز الحالات الشاذة غير المرئية لأدوات الفحص القياسية."
          }
        ]
      },
      skills: {
        tag: "/ القدرات",
        title1: "نظرة عامة",
        title2: "على النظام",
        items: [
          {
            title: "الأمن",
            subtitle: "الهجومي",
            desc: "محاكاة التهديدات المتقدمة المستمرة، وعمليات الفريق الأحمر، وسير عمل الاستغلال الثنائي العميق. محاكاة التكتيكات المعادية في العالم الحقيقي لتقوية دفاعات المؤسسات."
          },
          {
            title: "الاستخبارات",
            subtitle: "والاستطلاع",
            desc: "جمع استخبارات قابلة للتنفيذ من حركة مرور الشبكات واستخبارات المصادر المفتوحة. تحديد النقاط العمياء وأسطح الهجوم غير المرئية."
          },
          {
            title: "هندسة",
            subtitle: "الأنظمة",
            desc: "بناء معماريات أنظمة قوية وقابلة للتطوير وآمنة. من نماذج الذكاء الاصطناعي إلى الخدمات الخلفية."
          }
        ]
      },
      achievements: {
        tag: "/ الإنجازات",
        title: "لوحة الشرف",
        globally: "عالمياً",
        in_iraq: "في العراق",
        middle_east: "الشرق الأوسط",
        finalist: "المتأهل للنهائيات",
        cred_title: "الشهادات"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
