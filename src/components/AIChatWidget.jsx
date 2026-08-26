import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, X, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import confetti from "canvas-confetti";

export default function AIChatWidget() {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        id: 1,
        sender: "ai",
        text: t.aiWidget.responses.greeting,
      },
    ]);
  }, [lang]);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const generateAIResponse = (query) => {
    const q = query.toLowerCase().trim();

    // 1. Greetings
    if (
      q.includes("salom") ||
      q.includes("assalom") ||
      q.includes("hello") ||
      q.includes("hi") ||
      q.includes("hey") ||
      q.includes("privet") ||
      q.includes("привет") ||
      q.includes("qalay") ||
      q.includes("zormisiz") ||
      q.includes("добрый")
    ) {
      if (lang === "EN") return "Hello! I am Islom's AI Assistant. How can I help you today? Feel free to ask about programming, projects, or contact details!";
      if (lang === "RU") return "Привет! Я ИИ-помощник Ислома. Чем могу помочь? Спрашивайте о программировании, проектах или контактах!";
      return "Salom! Men Rustamov Islomning AI Yordamchisiman. Sizga qanday yordam bera olaman? Dasturlash, loyihalar yoki savollaringiz bo'lsa bemalol so'rashingiz mumkin! 😊";
    }

    // 2. React questions
    if (q.includes("react")) {
      if (lang === "EN") return "React.js is a popular JavaScript library created by Meta for building fast, interactive user interfaces using reusable components.";
      if (lang === "RU") return "React.js — это популярная JavaScript библиотека от Meta для создания быстрых и интерактивных интерфейсов на основе компонентов.";
      return "React.js — bu interaktiv va zamonaviy foydalanuvchi interfeyslarini (UI) yaratish uchun Meta (Facebook) tomonidan ishlab chiqilgan mashhur JavaScript kutubxonasi.";
    }

    // 3. JavaScript questions
    if (q.includes("javascript") || q.includes(" js ")) {
      if (lang === "EN") return "JavaScript is the core programming language of the web, enabling dynamic interactive behavior for websites and applications.";
      if (lang === "RU") return "JavaScript — это основной язык программирования веб-разработки, обеспечивающий динамику и интерактивность сайтов.";
      return "JavaScript — bu veb-sahifalarga dinamiklik va interaktivlik bag'ishlovchi eng ommabop dasturlash tili. U barcha zamonaviy saytlarning asosiy dvigateli hisoblanadi.";
    }

    // 4. HTML & CSS
    if (q.includes("html") || q.includes("css")) {
      if (lang === "EN") return "HTML structures the content of web pages, while CSS styles it with colors, layouts, and responsive designs.";
      if (lang === "RU") return "HTML создает структуру веб-страницы, а CSS отвечает за дизайн, цвета и адаптивность.";
      return "HTML veb-sahifaning karkasi va strukturasini belgilaydi, CSS esa unga dizayn, ranglar, shriftlar va moslashuvchan ko'rinish beradi.";
    }

    // 5. Tailwind CSS
    if (q.includes("tailwind")) {
      if (lang === "EN") return "Tailwind CSS is a utility-first CSS framework for rapidly building custom, responsive UI designs without leaving your HTML.";
      if (lang === "RU") return "Tailwind CSS — это utility-first фреймворк для быстрой верстки адаптивных интерфейсов.";
      return "Tailwind CSS — bu tayyor utility-classlar yordamida alohida CSS fayllar yozmasdan tezkor va chiroyli dizaynlar yaratish imkonini beruvchi freymvork.";
    }

    // 6. Hackathon / Mars
    if (q.includes("hackathon") || q.includes("mars") || q.includes("хакатон") || q.includes("top 1")) {
      if (lang === "EN") return "Mars Hackathon is a competitive programming event. Islom won 1st Place (Top 1) in Mars Hackathon August 2026 for excellence in React UI development!";
      if (lang === "RU") return "Марс Хакатон — это соревнование по разработке. Ислом занял 1-е место (Top 1) в Mars Hackathon Август 2026!";
      return "Mars Hackathon — bu qisqa vaqt ichida eng yaxshi loyihalarni yaratish musobaqasi. Islom Mars Hackathon Avgust 2026 tanlovida Top 1 darajali Sertifikat bilan taqdirlangan!";
    }

    // 7. How to learn coding / Advice
    if (q.includes("o'rgan") || q.includes("organ") || q.includes("boshla") || q.includes("kurs") || q.includes("maslahat") || q.includes(" learn") || q.includes("учить")) {
      if (lang === "EN") return "To start web development, master HTML & CSS fundamentals first, learn core JavaScript logic, and then build real-world React projects!";
      if (lang === "RU") return "Чтобы начать программирование, сначала изучите HTML и CSS, затем освойте JavaScript и стройте проекты на React!";
      return "Dasturlashni o'rganish uchun avval HTML va CSS asoslarini puxta egallab, keyin JavaScript mantiqini chuqur o'rganish va amaliy loyihalar yaratish tavsiya etiladi!";
    }

    // 8. Projects
    if (q.includes("loyiha") || q.includes("project") || q.includes("проект") || q.includes("ishlar") || q.includes("работы")) {
      return t.aiWidget.responses.projects;
    }

    // 9. Age & Profile
    if (q.includes("yosh") || q.includes("age") || q.includes("возраст") || q.includes("skolko")) {
      return t.aiWidget.responses.age;
    }

    // 10. Skills
    if (q.includes("ko'nikma") || q.includes("konikma") || q.includes("skill") || q.includes("навык") || q.includes("texnologiya")) {
      return t.aiWidget.responses.skills;
    }

    // 11. Contact / Phone / Telegram
    if (q.includes("nomer") || q.includes("phone") || q.includes("telegram") || q.includes("email") || q.includes("contact") || q.includes("aloqa") || q.includes("bog'lanish") || q.includes("связь") || q.includes("телефон")) {
      return t.aiWidget.responses.contact;
    }

    // 12. Thanks
    if (q.includes("rahmat") || q.includes("thanks") || q.includes("спасибо") || q.includes("zo'r") || q.includes("zor") || q.includes("super")) {
      return t.aiWidget.responses.thanks;
    }

    // 13. Smart Natural Fallback for any other custom question
    if (lang === "EN") {
      return `Great question about "${query}"! Islom is an expert frontend React developer. If you want to discuss this project or need frontend services, contact Islom via Telegram @rustamov_islom or Phone +998 90 010 66 53!`;
    }
    if (lang === "RU") {
      return `Отличный вопрос о "${query}"! Ислом — опытный frontend React разработчик. Для обсуждения проектов пишите в Telegram @rustamov_islom или звоните +998 90 010 66 53!`;
    }
    return `"${query}" bo'yicha ajoyib savol! Islom tajribali React va Frontend dasturchi bo'lib, har qanday murakkab veb-loyihalarni sifatli tayyorlaydi. Bog'lanish uchun Telegram: @rustamov_islom | Tel: +998 90 010 66 53`;
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue.trim();
    if (!query) return;

    const userMsg = { id: Date.now(), sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");

    setIsTyping(true);

    setTimeout(() => {
      const aiText = generateAIResponse(query);
      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: "ai", text: aiText }]);
      setIsTyping(false);
    }, 500);
  };

  const handleToggle = (e) => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 35,
        spread: 45,
        origin: { x, y },
        colors: ["#06B6D4", "#8B5CF6", "#3B82F6"],
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Floating Circular AI Orb Button */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-primary via-secondary to-accent p-0.5 shadow-glow-cyan focus-ring"
        aria-label={t.aiWidget.tooltip}
      >
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-60 blur transition group-hover:opacity-100" />
        <div className="relative flex h-full w-full items-center justify-center rounded-full bg-base-950 text-accent backdrop-blur-md dark:bg-base-950 dark:text-accent light:bg-slate-900 light:text-cyan-400">
          {isOpen ? <X size={24} /> : <Bot size={26} className="animate-pulse" />}
          <span className="absolute top-1 right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
          </span>
        </div>
      </motion.button>

      {/* Floating Chat Modal Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[9999] w-[360px] max-w-[calc(100vw-2rem)] h-[460px] rounded-3xl border border-white/15 p-4 shadow-2xl overflow-hidden flex flex-col glass-strong dark:bg-base-950/95 dark:text-white light:bg-white light:text-slate-900 light:border-slate-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 dark:border-white/10 light:border-slate-200 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-accent text-white shadow-md">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold flex items-center gap-1.5 dark:text-white light:text-slate-900">
                    {t.aiWidget.title}
                    <Sparkles size={12} className="text-accent" />
                  </h4>
                  <span className="text-[10px] font-mono text-accent">
                    ● {t.aiWidget.onlineStatus}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white dark:text-white/60 dark:hover:text-white light:text-slate-500 light:hover:text-slate-900 transition-colors p-1 focus-ring rounded-lg"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto py-3 space-y-3 pr-1 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "ai" && (
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent mt-0.5">
                      <Bot size={12} />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-primary to-secondary text-white rounded-br-none"
                        : "glass border border-white/10 dark:text-white light:bg-slate-100 light:text-slate-900 light:border-slate-200 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-white/50 dark:text-white/50 light:text-slate-500 font-mono text-[10px]">
                  <Bot size={12} className="animate-bounce text-accent" />
                  AI javob yozmoqda...
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestion Chips */}
            <div className="flex flex-wrap gap-1.5 py-2 border-t border-white/10 dark:border-white/10 light:border-slate-200">
              {t.aiWidget.suggestions.map((sug, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(sug)}
                  className="glass hover:border-accent/40 rounded-full px-2.5 py-1 text-[10px] text-white/70 dark:text-white/70 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors focus-ring"
                >
                  {sug}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <div className="flex items-center gap-2 pt-2 border-t border-white/10 dark:border-white/10 light:border-slate-200">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={t.aiWidget.placeholder}
                className="flex-1 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 px-3.5 py-2 text-xs text-white dark:text-white light:text-slate-900 placeholder-white/40 dark:placeholder-white/40 light:placeholder-slate-400 border border-white/10 dark:border-white/10 light:border-slate-300 focus:border-accent focus:outline-none"
              />
              <button
                onClick={() => handleSend()}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-base-950 font-bold hover:scale-105 transition-transform focus-ring"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
