import {
  ArrowLeft,
  Phone,
  AlarmClock,
  X,
  Plus,
  Home as HomeIcon,
  MessageSquare,
  Mail,
  Megaphone,
  Grid3X3,
  Folder,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Search,
  Ticket as TicketIcon,
  Smile,
  Image as ImageIcon,
  Paperclip,
  FileText,
  Camera,
  Mic,
  Send,
  SlidersHorizontal,
  MoreHorizontal,
  BookOpenText,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export default function Home() {
  const tickets = Array.from({ length: 9 }).map((_, i) => ({
    id: `#TC-${(i + 1).toString().padStart(4, "0")}`,
    name: i % 2 === 0 ? "Guy Hawkins" : "Theresa Webb",
    desc: "Unexpected App Crash",
    time: "07:10 AM",
    unread: i % 3 === 0 ? 1 : 0,
  }));

  const messages = [
    { from: "other", name: "Jonson", text: "yes , Tomorrow Morning is good", meta: "09:51 am via whatsapp" },
    { from: "me", name: "M", text: "Greate! i’ll arrange it for tomorrow afternoon and send you the confirmation. Thanks!", meta: "09:51 am via whatsapp" },
    { from: "me", name: "M", text: "Before call i have some article, you can read for your information", meta: "09:51 am via whatsapp" },
    { from: "other", name: "Jonson", text: "Thanks", meta: "09:51 am via whatsapp" },
  ];

  const kbItems = [
    { title: "Canceling an Order", tag: "Article", edited: "March 6,2022" },
    { title: "Account Creation", tag: "Article", edited: "March 6,2022" },
    { title: "Canceling an Order", tag: "Article", edited: "March 6,2022" },
    { title: "Billing and Payment", tag: "Article", edited: "March 6,2022" },
    { title: "Adding Product to cart", tag: "Article", edited: "March 6,2022" },
    { title: "Applying Descount Codes", tag: "Article", edited: "March 6,2022" },
  ];

  return (
    <div className="min-h-svh bg-[#f5f6f8] text-[#0e1328] anim-fade-in">
      {/* Top bar */}
      <div className="h-14 border-b border-black/5 flex items-center px-4 gap-2 bg-white sticky top-0 z-10">
        <button className="h-8 w-8 rounded-full border border-black/10 grid place-items-center hover:shadow-sm transition-shadow" aria-label="Back">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="text-sm text-black/60">#TC-0001 - Request for Additional Storage and more server</div>
        <div className="ml-auto flex items-center gap-2">
          <button className="h-8 px-3 rounded-full border border-black/10 hover:bg-black/5 transition-colors flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">call</span>
          </button>
          <button className="h-8 px-3 rounded-full border border-black/10 hover:bg-black/5 transition-colors flex items-center gap-1">
            <AlarmClock className="w-4 h-4" />
            <span className="hidden sm:inline">Snooze</span>
          </button>
          <button className="h-8 px-3 rounded-full bg-[#ff6b4a] text-white hover:brightness-95 transition flex items-center gap-1">
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">close</span>
          </button>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-[64px_360px_1fr] xl:grid-cols-[64px_340px_1fr_360px] gap-0 h-[calc(100svh-56px)]">
        {/* Left nav */}
        <aside className="hidden md:flex bg-white border-r border-black/5 flex-col items-center py-3 gap-4 anim-slide-up" style={{animationDelay:'.05s'}}>
          <button className="h-10 w-10 rounded-lg bg-[#ff6b4a] text-white hover:scale-105 transition-transform anim-pop grid place-items-center" aria-label="New">
            <Plus className="w-5 h-5" />
          </button>
          <div className="flex flex-col gap-3 mt-2 text-black/60">
            {[
              HomeIcon,
              MessageSquare,
              Mail,
              Megaphone,
              Grid3X3,
              Folder,
              Users,
              BarChart3,
            ].map((Icon, i) => (
              <div key={i} className={`h-10 w-10 grid place-items-center rounded-lg ${i===1?"bg-black/5":"hover:bg-black/5"} transition-colors`}>
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3 text-black/60">
            <div className="h-10 w-10 grid place-items-center rounded-lg hover:bg-black/5 transition-colors" aria-label="Settings">
              <Settings className="w-5 h-5" />
            </div>
            <div className="h-10 w-10 grid place-items-center rounded-lg hover:bg-black/5 transition-colors" aria-label="Logout">
              <LogOut className="w-5 h-5" />
            </div>
          </div>
        </aside>

        {/* Ticket list */}
        <section className="hidden md:flex bg-white border-r border-black/5 flex-col anim-slide-up" style={{animationDelay:'.1s'}}>
          <div className="px-4 py-3 flex items-center gap-2 border-b border-black/5">
            <div className="text-sm">Total ticket 24</div>
            <div className="ml-auto flex items-center gap-2">
              <button className="h-8 px-3 rounded-lg border border-black/10 text-sm">Newest ▾</button>
            </div>
          </div>
          <div className="p-3">
            <div className="relative">
              <input className="w-full h-10 rounded-lg border border-black/10 pl-9 pr-3 text-sm" placeholder="Search" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40 w-4 h-4" />
            </div>
          </div>
          <div className="overflow-auto">
            {tickets.map((t, idx) => (
              <div key={t.id} className="px-4 py-4 flex items-start gap-3 border-t border-black/5 hover:bg-black/2 transition-colors anim-slide-up" style={{animationDelay: `${0.12 + idx*0.03}s`}}>
                <div className="h-9 w-9 rounded-lg bg-black/5 grid place-items-center">
                  <TicketIcon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-black/60">{t.id}</div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-black/50">{t.desc}</div>
                </div>
                <div className="text-xs text-black/50 flex flex-col items-end gap-1">
                  <div>{t.time}</div>
                  {t.unread ? (
                    <span className="inline-flex h-5 min-w-5 rounded-full bg-[#ff6b4a] text-white text-[10px] items-center justify-center px-1 anim-pop">{t.unread}</span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chat */}
        <section className="flex flex-col anim-slide-up md:col-start-auto" style={{animationDelay:'.15s'}}>
          <div className="flex-1 overflow-auto p-3 sm:p-4 md:p-6 space-y-6">
            {messages.map((m, idx) => {
              const [timeLabel, channel] = m.meta.split(" via ");
              return (
                <div key={idx} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"} anim-slide-up`} style={{animationDelay: `${0.18 + idx*0.05}s`}}>
                  <div className={`max-w-[90%] sm:max-w-[70%] md:max-w-[560px] ${m.from === "me" ? "items-end text-right" : "items-start"}`}>
                    <div className={`flex items-center gap-2 mb-2 ${m.from === "me" ? "flex-row-reverse" : "flex-row"}`}>
                      <div className="h-8 w-8 rounded-full bg-black/10 grid place-items-center text-xs">{m.from === "me" ? "M" : "J"}</div>
                      <div className="text-sm font-medium">{m.name}</div>
                    </div>
                    <div className={`${m.from === "me" ? "bg-[#e7f0ff]" : "bg-white"} rounded-2xl p-4 shadow-sm border border-black/5 transition-transform hover:-translate-y-0.5`}>{m.text}</div>
                    <div className={`text-[11px] text-black/40 mt-2 flex items-center gap-1.5 ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                      <span>{timeLabel} via</span>
                      <FaWhatsapp className="w-3.5 h-3.5 text-[#25d366]" />
                      <span className="capitalize">{channel}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="border-t border-black/5 bg-white p-3">
            <div className="flex items-center gap-2">
              <span className="text-[#25d366] text-sm">Whatsapp</span>
              <span className="text-xs text-black/40">from</span>
              <button className="h-8 px-2 rounded-lg border border-black/10 text-sm">CSFILK ▾</button>
              <div className="ml-auto flex items-center gap-2 text-xs text-black/50">
                <span>instant reply with AI</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-10 h-5 bg-black/20 rounded-full peer-checked:bg-[#0ea5e9] transition-colors relative overflow-hidden">
                    <span className="absolute left-1 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white/70 peer-checked:left-7 transition-all anim-pulse-dot"></span>
                  </div>
                </label>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-black/10 bg-white flex items-center px-2 sm:px-3 focus-within:ring-2 focus-within:ring-[#0ea5e9]/30 transition-shadow">
              <input className="flex-1 h-12 outline-none text-sm" placeholder="Hi, please check this article for more information https://meelad-quiz.vercel.app/" />
              <div className="hidden sm:flex items-center gap-1.5 pr-2 text-black/60">
                <button title="Emoji" aria-label="Emoji" className="h-8 w-8 grid place-items-center hover:bg-black/5 rounded-md"><Smile className="w-4 h-4" /></button>
                <button title="Image" aria-label="Image" className="h-8 w-8 grid place-items-center hover:bg-black/5 rounded-md"><ImageIcon className="w-4 h-4" /></button>
                <button title="File" aria-label="File" className="h-8 w-8 grid place-items-center hover:bg-black/5 rounded-md"><Paperclip className="w-4 h-4" /></button>
                <button title="Document" aria-label="Document" className="h-8 w-8 grid place-items-center hover:bg-black/5 rounded-md"><FileText className="w-4 h-4" /></button>
                <button title="Camera" aria-label="Camera" className="h-8 w-8 grid place-items-center hover:bg-black/5 rounded-md"><Camera className="w-4 h-4" /></button>
                <button title="Mic" aria-label="Mic" className="h-8 w-8 grid place-items-center hover:bg-black/5 rounded-md"><Mic className="w-4 h-4" /></button>
              </div>
              <button className="h-8 w-8 grid place-items-center hover:scale-110 transition-transform text-[#0ea5e9]" aria-label="Send">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="sm:hidden flex items-center gap-3 px-1 py-2 text-black/60">
              <Smile className="w-5 h-5" />
              <ImageIcon className="w-5 h-5" />
              <Paperclip className="w-5 h-5" />
              <FileText className="w-5 h-5" />
              <Camera className="w-5 h-5" />
              <Mic className="w-5 h-5" />
            </div>
          </div>
        </section>

        {/* Knowledge base */}
        <aside className="hidden xl:flex bg-white border-l border-black/5 flex-col anim-slide-up" style={{animationDelay:'.2s'}}>
          <div className="p-4 border-b border-black/5">
            <div className="text-lg font-semibold">knowledge base</div>
            <div className="mt-3 relative">
              <input className="w-full h-9 rounded-lg border border-black/10 pl-9 pr-10 text-sm" placeholder="Server Capacity" defaultValue="Server Capacity" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40 w-4 h-4" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <button className="h-7 w-7 grid place-items-center rounded-md border border-black/10 hover:bg-black/5 transition-colors" aria-label="Add">
                  <Plus className="w-4 h-4" />
                </button>
                <button className="h-7 w-7 grid place-items-center rounded-md border border-black/10 hover:bg-black/5 transition-colors" aria-label="Filters">
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-auto">
            {kbItems.map((k, i) => (
              <div key={i} className="px-4 py-4 border-b border-black/5 flex gap-3 items-start hover:bg-black/[0.02] transition-colors anim-slide-up" style={{animationDelay: `${0.22 + i*0.04}s`}}>
                <div className="h-10 w-10 rounded-xl bg-[#e7f0ff] grid place-items-center">
                  <BookOpenText className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm">{k.title}</div>
                  <div className="text-xs text-black/60">Exploring Education from all angels</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/5">{k.tag}</span>
                    <span className="text-[11px] text-black/40">Last Edited {k.edited}</span>
                  </div>
                </div>
                <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-black/5 transition-colors" aria-label="More">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
