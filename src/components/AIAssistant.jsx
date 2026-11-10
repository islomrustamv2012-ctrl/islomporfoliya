import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, X, Send, RotateCcw, MessageSquare } from "./Icons";
import { useLanguage } from "../context/LanguageContext";
import { profile } from "../data/portfolioData";
import { playClickSound, playHoverSound, playSuccessSound } from "../utils/sound";

export default function AIAssistant() {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Initialize greeting on mount or language switch
  useEffect(() => {
    setMessages([
      {
        id: "msg-welcome",
        sender: "ai",
        text: t.ai.welcome,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  }, [lang]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Intelligent built-in knowledge engine (EN, UZ, RU)
  const getPredefinedResponse = (query) => {
    const q = query.toLowerCase().trim();

    // 1. Who is Islom?
    if (
      q.includes("who is") ||
      q.includes("kim") ||
      q.includes("кто такой") ||
      q.includes("islom") ||
      q.includes("ислом")
    ) {
      if (lang === "EN") {
        return `Islom Rustamov is a frontend developer based in Tashkent, Uzbekistan, specializing in React.js and modern web technologies. He is passionate about building fast, accessible, and visually stunning digital experiences using clean code and AI tools.`;
      }
      if (lang === "RU") {
        return `Ислом Рустамов — frontend-разработчик из Ташкента, Узбекистан, специализирующийся на React.js и современных веб-технологиях. Он разрабатывает быстрые, адаптивные и визуально впечатляющие интерфейсы.`;
      }
      return `Islom Rustamov — Toshkent shahrida yashovchi frontend dasturchi. U React.js, Tailwind CSS va zamonaviy veb-texnologiyalardan foydalanib, tezkor, qulay va chiroyli veb-ilovalarni yaratishga ixtisoslashgan.`;
    }

    // 2. Technologies / Skills
    if (
      q.includes("tech") ||
      q.includes("skill") ||
      q.includes("stack") ||
      q.includes("texnologiya") ||
      q.includes("ko'nikma") ||
      q.includes("технологи") ||
      q.includes("навык") ||
      q.includes("react")
    ) {
      if (lang === "EN") {
        return `Islom works with:
• Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Responsive Web Design
• Tools: Git, GitHub, VS Code, Vite
• Interests & Innovation: AI Coding Tools, UI/UX Design, and interactive 3D Web experiences.`;
      }
      if (lang === "RU") {
        return `Ислом использует следующий стек:
• Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, адаптивная верстка
• Инструменты: Git, GitHub, VS Code, Vite
• Интересы: AI-инструменты для разработки, UI/UX дизайн и интерактивный 3D Web.`;
      }
      return `Islom quyidagi texnologiyalar bilan ishlaydi:
• Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Moslashuvchan dizayn
• Vositalar: Git, GitHub, VS Code, Vite
• Qiziqishlar: AI vositalari, UI/UX dizayn va interaktiv 3D tajribalar.`;
    }

    // 3. Projects
    if (
      q.includes("project") ||
      q.includes("loyiha") ||
      q.includes("проект") ||
      q.includes("build") ||
      q.includes("toystore") ||
      q.includes("foodtruck") ||
      q.includes("time") ||
      q.includes("texlogiya")
    ) {
      if (lang === "EN") {
        return `Islom has developed several featured projects:
1. Toystore — Vibrant e-commerce storefront with dynamic filtering & interactive cart.
2. Foodtruck — Street-food brand experience with dietary menus and location tracker.
3. Time — Dark-mode productivity studio with world clocks and precision stopwatch.
4. Texlogiya — Modern technology showcase portal with cyber Bento Grid layouts.
You can explore them in the Projects section above!`;
      }
      if (lang === "RU") {
        return `Ислом создал ключевые проекты:
1. Toystore — E-commerce витрина с фильтрацией каталога и интерактивной корзиной.
2. Foodtruck — Сайт стритфуд бренда с меню и трекером локации.
3. Time — Продуктивная студия с мировыми часами и точным секундомером.
4. Texlogiya — Портал современных технологий с Bento Grid интерфейсом.
Вы можете изучить их в разделе «Проекты» выше!`;
      }
      return `Islom quyidagi asosiy loyihalarni yaratgan:
1. Toystore — Dinamik mahsulotlar filtri va qulay savatchaga ega e-commerce do'koni.
2. Foodtruck — Ko'cha taomlari brendi uchun interaktiv menyu va buyurtma sayti.
3. Time — Jahon soatlari va aniq sekundomerga ega unumdorlik ilovasi.
4. Texlogiya — Zamonaviy IT va texnologiyalar portali.
Ularni yuqoridagi «Loyihalar» bo'limida batafsil ko'rishingiz mumkin!`;
    }

    // 4. Learning Journey
    if (
      q.includes("journey") ||
      q.includes("path") ||
      q.includes("story") ||
      q.includes("tarix") ||
      q.includes("yo'l") ||
      q.includes("путь") ||
      q.includes("опыт") ||
      q.includes("hackathon") ||
      q.includes("xakaton")
    ) {
      if (lang === "EN") {
        return `Islom's journey began in 2024 by mastering HTML5 and CSS3. In 2025, he advanced into JavaScript ES6+ and modern React.js. In August 2026, he achieved 1st Place (Top 1 Sertifikat) at the Mars Hackathon selection stage. Today, he is deeply invested in AI tools, 3D Web experiences, and modern UI/UX design.`;
      }
      if (lang === "RU") {
        return `Путь Ислома начался в 2024 году с изучения HTML5 и CSS3. В 2025 году он освоил JavaScript и React.js. В августе 2026 года завоевал диплом 1-го места (Top 1) на отборочном этапе Mars Hackathon. Сейчас активно исследует AI-инструменты и 3D веб-технологии.`;
      }
      return `Islomning dasturlash yo'li 2024-yilda HTML5 va CSS3 asoslarini o'rganishdan boshlangan. 2025-yilda u chuqur JavaScript va React.js arxitekturasini egalladi. 2026-yil avgust oyida Mars Hackathon tanlovida faxrli 1-o'rin (Top 1 Sertifikati) sohibi bo'ldi. Hozirda AI va 3D texnologiyalarini o'rganmoqda.`;
    }

    // 5. Contact
    if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("phone") ||
      q.includes("aloqa") ||
      q.includes("bog'lan") ||
      q.includes("telefon") ||
      q.includes("контакт") ||
      q.includes("почта") ||
      q.includes("telegram")
    ) {
      if (lang === "EN") {
        return `You can reach Islom directly via:
• Email: ${profile.email}
• Phone: ${profile.phone}
• Telegram: @rustamov_islom
• Or by filling out the Contact transmission form at the bottom of the page!`;
      }
      if (lang === "RU") {
        return `Вы можете связаться с Исломом:
• Email: ${profile.email}
• Телефон: ${profile.phone}
• Telegram: @rustamov_islom
• Или отправьте сообщение через форму в разделе «Контакты» внизу страницы!`;
      }
      return `Islom bilan quyidagi vositalar orqali bog'lanishingiz mumkin:
• Email: ${profile.email}
• Telefon: ${profile.phone}
• Telegram: @rustamov_islom
• Yoki sahifa pastidagi aloqa shakli orqali xabar yuboring!`;
    }

    // Default friendly response
    if (lang === "EN") {
      return `Thanks for asking! Islom is an enthusiastic React frontend developer based in Tashkent. You can ask me about his skills, projects, learning journey, or how to contact him!`;
    }
    if (lang === "RU") {
      return `Спасибо за вопрос! Ислом — увлеченный React frontend-разработчик из Ташкента. Вы можете спросить меня о его навыках, проектах, пути развития или контактах!`;
    }
    return `Savolingiz uchun rahmat! Islom — Toshkentlik iqtidorli frontend dasturchi. Men orqali uning ko'nikmalari, loyihalari, dasturlash yo'li yoki aloqa ma'lumotlari haqida bilib olishingiz mumkin!`;
  };

  const handleSendMessage = (customText = null) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isTyping) return;

    playClickSound();

    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: textToSend.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate realistic AI neural processing
    setTimeout(() => {
      const aiReplyText = getPredefinedResponse(userMsg.text);
      const aiMsg = {
        id: `msg-${Date.now() + 1}`,
        sender: "ai",
        text: aiReplyText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
      playSuccessSound();
    }, 750);
  };

  const handleClear = () => {
    playClickSound();
    setMessages([
      {
        id: "msg-welcome-new",
        sender: "ai",
        text: t.ai.welcome,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <>
      {/* Floating Futuristic AI Orb Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => {
            playClickSound();
            setIsOpen(!isOpen);
          }}
          onMouseEnter={playHoverSound}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative group h-14 w-14 rounded-full bg-gradient-to-tr from-cyber-cyan via-cyber-blue to-cyber-purple p-[2px] shadow-glow-cyan"
        >
          {/* Pulsing orbital ring */}
          <span className="absolute -inset-1 rounded-full bg-cyber-cyan/30 blur-sm group-hover:bg-cyber-cyan/50 animate-pulse transition-all pointer-events-none" />

          <div className="relative h-full w-full rounded-full bg-cyber-dark/90 backdrop-blur-md flex items-center justify-center text-cyber-cyan">
            {isOpen ? <X size={22} /> : <Bot size={24} />}
          </div>

          {/* AI Status Badge */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-cyber-cyan text-[9px] font-mono font-bold text-slate-950 items-center justify-center">
                AI
              </span>
            </span>
          )}
        </motion.button>
      </div>

      {/* Modern Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-[94vw] sm:w-[410px] max-h-[580px] h-[520px] rounded-3xl glass-panel border border-cyber-cyan/35 shadow-2xl flex flex-col overflow-hidden bg-cyber-card/95"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-cyber-cyan/20 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan shadow-sm">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                    {t.ai.title}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30">
                      {t.ai.badge}
                    </span>
                  </h4>
                  <p className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {t.ai.status}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleClear}
                  title={t.ai.clear}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  onClick={() => {
                    playClickSound();
                    setIsOpen(false);
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Suggested Question Chips */}
            <div className="px-4 py-2 border-b border-white/5 bg-cyber-dark/40 overflow-x-auto flex gap-1.5 no-scrollbar">
              {t.ai.quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  onMouseEnter={playHoverSound}
                  className="whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-mono bg-white/5 hover:bg-cyber-cyan/15 hover:text-cyber-cyan border border-white/10 hover:border-cyber-cyan/30 text-slate-300 transition-colors shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 terminal-scanlines">
              {messages.map((m) => {
                const isAI = m.sender === "ai";
                return (
                  <div
                    key={m.id}
                    className={`flex flex-col ${isAI ? "items-start" : "items-end"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                        isAI
                          ? "bg-white/10 text-slate-200 border border-white/10 rounded-tl-sm shadow-sm"
                          : "bg-gradient-to-r from-cyber-cyan to-cyber-blue text-slate-950 font-medium rounded-tr-sm shadow-glow-cyan"
                      }`}
                    >
                      {m.text}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 mt-1 px-1">
                      {m.time}
                    </span>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white/5 border border-white/10 max-w-[120px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan animate-bounce" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan animate-bounce [animation-delay:0.2s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 border-t border-white/10 bg-white/5 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.ai.inputPlaceholder}
                className="flex-1 rounded-xl bg-cyber-dark/80 border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan/50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                onMouseEnter={playHoverSound}
                className="p-2.5 rounded-xl bg-cyber-cyan text-slate-950 hover:bg-cyan-300 disabled:opacity-40 transition-colors shadow-glow-cyan"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
