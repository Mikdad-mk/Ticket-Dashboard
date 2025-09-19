import {
  ArrowLeft,
  Phone,
  Bell,
  X,
  Plus,
  Home as HomeIcon,
  FileText,
  User,
  Settings,
  Bell as BellIcon,
  Calendar,
  ChevronRight,
  Search,
  MoreHorizontal,
  Paperclip,
  Link,
  Image,
  Calendar as CalendarIcon,
  Send,
  SlidersHorizontal,
  Folder,
  Hash,
  Clock,
  Star,
  Smile,
  Mic,
  ChevronDown,
  Ticket,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const tickets = [
    { id: "#TC-0004", name: "David Newman", desc: "System Login Failure", time: "10:06 am", unread: 2 },
    { id: "#TC-0001", name: "Emily Johnson", desc: "Request for Additional Storage and mor...", time: "09:46 am", unread: 0, selected: true },
    { id: "#TC-0003", name: "(747) 246-9411", desc: "Unable to access report", time: "09:36 am", unread: 0 },
    { id: "#TC-0004", name: "Brooklyn Simmons", desc: "File Upload Error", time: "09:10 am", unread: 1 },
    { id: "#TC-0007", name: "(44) 1342 351", desc: "Unable to access report", time: "08:36 am", unread: 1 },
    { id: "#TC-0008", name: "Guy Hawkins", desc: "Unexpected App Crash", time: "08:10 am", unread: 0 },
    { id: "#TC-0009", name: "(44) 1342-664]", desc: "Unable to access report", time: "07:46 am", unread: 0 },
    { id: "#TC-0010", name: "Jacob Jones", desc: "Incorrect Billing Information", time: "07:30 am", unread: 0 },
    { id: "#TC-0011", name: "Courtney Henry", desc: "System Login Failure", time: "07:16 am", unread: 0 },
    { id: "#TC-0012", name: "Arlene McCoy", desc: "Password Reset Issue", time: "07:00 am", unread: 0 },
  ];

  const messages = [
    { from: "customer", name: "Emily Johnson", text: "Hi, I need help with additional storage and server capacity for my business.", time: "09:44 am", channel: "Whatsapp", avatar: "E" },
    { from: "system", name: "EcomiqAI", text: "Reply by EcomiqAI Connecting you now... please hold for a moment.", time: "09:51 am", channel: "Whatsapp", avatar: "G" },
    { from: "system", name: "Raihan Fikri", text: "has connected to take over ticket", time: "09:52 AM", channel: "", avatar: "", isSystem: true },
    { from: "system", name: "Raihan Fikri", text: "Ticket change priority to Medium", time: "09:52 AM", channel: "", avatar: "", priority: "Medium", isSystem: true },
    { from: "agent", name: "Raihan Fikri", text: "Hi, thanks for waiting! I see you're looking for more storage and server capacity. Can we schedule a quick assessment to recommend the right solution for you?", time: "09:51 am", channel: "Whatsapp", avatar: "R" },
    { from: "customer", name: "Emily Johnson", text: "Yes, please. Tomorrow morning is good.", time: "09:44 am", channel: "Whatsapp", avatar: "E" },
    { from: "agent", name: "Raihan Fikri", text: "Great! I'll arrange it for tomorrow afternoon and send you the confirmation. Thanks!", time: "09:51 am", channel: "Whatsapp", avatar: "R" },
    { from: "agent", name: "Raihan Fikri", text: "Before call i have some article, you can read for your information.", time: "09:51 am", channel: "Whatsapp", avatar: "R" },
  ];

  const kbItems = [
    { title: "Account Creation and Mana...", desc: "A better way to tell which species are vulnerable", type: "Article", edited: "March 17, 2022", icon: "📄" },
    { title: "Adding Products to the Cart", desc: "Designing the cities of tomorrow", type: "User guide", edited: "Mar 16, 2022", icon: "🛒" },
    { title: "Applying Discount Codes an...", desc: "Honoring work to support innovation in aging", type: "Tutorial", edited: "March 14, 2022", icon: "🎁" },
    { title: "Billing and Payment Methods", desc: "Simplifying the production of lithium-ion batteries", type: "FAQ", edited: "March 8, 2022", icon: "🔋" },
    { title: "Buying as a Guest vs. Creati...", desc: "A faster experiment to find and study topological materials", type: "Tutorial", edited: "March 6, 2022", icon: "🛍️" },
    { title: "Canceling an Order", desc: "Exploring education from all angles", type: "Article", edited: "March 2, 2022", icon: "📄" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Header Bar - Updated to match SupportHeader design */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 h-14">
        <div className="flex items-center gap-4">
          <button className="h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ArrowLeft className="h-4 w-4 text-gray-600" />
          </button>
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded bg-blue-600 text-white text-xs font-medium">1</span>
            <div className="truncate">
              <h1 className="font-semibold text-gray-900 text-sm">#TC-0001</h1>
              <p className="text-xs text-gray-500 truncate">Request for Additional Storage and more server</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-8 w-8 rounded-md hover:bg-gray-100 flex items-center justify-center transition-colors">
            <Star className="h-4 w-4 text-gray-600" />
          </button>
          <button className="h-8 w-8 rounded-md hover:bg-gray-100 flex items-center justify-center transition-colors">
            <MoreHorizontal className="h-4 w-4 text-gray-600" />
          </button>
          <button className="h-8 w-8 rounded-md hover:bg-gray-100 flex items-center justify-center transition-colors">
            <Settings className="h-4 w-4 text-gray-600" />
          </button>
          <button className="h-8 px-3 rounded-md border border-gray-300 text-sm flex items-center gap-2 hover:bg-gray-50 text-black transition-colors">
            <Phone className="h-4 w-4" />
            <span>Call</span>
          </button>
          <button className="h-8 px-3 rounded-md border border-gray-300 text-sm flex items-center gap-2 hover:bg-gray-50 text-black transition-colors">
            <Clock className="h-4 w-4" />
            <span>Snooze</span>
          </button>
          <button className="h-8 px-3 rounded-md bg-orange-500 text-white text-sm hover:bg-orange-600 transition-colors">
            Close
          </button>
        </div>
      </div>

      {/* Main Layout Container - Responsive */}
      <div className="flex h-[calc(100vh-56px)]">
        {/* Mobile Menu Button */}
        <button className="lg:hidden fixed top-16 left-4 z-50 h-10 w-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow-lg">
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </button>
        {/* Left Sidebar - Exact match */}
        <div className="hidden lg:flex w-16 bg-white border-r border-gray-200 flex-col items-center py-4">
          {/* Orange Plus Button */}
          <button className="h-10 w-10 rounded-lg bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors mb-4">
            <Plus className="w-5 h-5" />
          </button>
          
          {/* Navigation Icons */}
          <div className="flex flex-col gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
              <HomeIcon className="w-5 h-5 text-gray-600" />
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100">
              <FileText className="w-5 h-5 text-gray-600" />
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
              <BellIcon className="w-5 h-5 text-gray-600" />
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
              <Calendar className="w-5 h-5 text-gray-600" />
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Ticket List Panel - Exact match */}
        <div className="hidden md:flex lg:w-80 md:w-72 bg-white border-r border-gray-200 flex-col">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">Total ticket 24</span>
            <button className="h-8 px-3 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors">
              Newest ▾
            </button>
          </div>
          
          {/* Search */}
          <div className="p-3">
            <div className="relative">
              <input 
                className="w-full h-10 rounded-lg border border-gray-300 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-black" 
                placeholder="Search" 
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          {/* Ticket List */}
          <div className="flex-1 overflow-y-auto">
            {tickets.map((ticket, idx) => (
              <div 
                key={idx} 
                className={`px-4 py-3 flex items-start gap-3 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${
                  ticket.selected ? 'bg-gray-50' : ''
                }`}
              >
                <div className="h-9 w-9 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Ticket className="w-4 h-4 text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500">{ticket.id}</div>
                  <div className="text-sm font-medium text-gray-900">{ticket.name}</div>
                  <div className="text-xs text-gray-500">{ticket.desc}</div>
                </div>
                <div className="text-xs text-gray-500 flex flex-col items-end gap-1">
                  <div>{ticket.time}</div>
                  {ticket.unread > 0 && (
                    <span className="inline-flex h-5 w-5 rounded-full bg-red-500 text-white text-xs items-center justify-center">
                      {ticket.unread}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Panel - Exact match */}
        <div className="flex-1 bg-white flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            {messages.map((message, idx) => {
              const isAgent = message.from === 'agent';
              const isSystem = message.isSystem;
              
              if (isSystem) {
                // System messages centered
                return (
                  <div key={idx} className="flex justify-center">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-500">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="text-sm text-gray-700">{message.text}</div>
                      {message.priority && (
                        <span className="px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded-full">
                          {message.priority}
                        </span>
                      )}
                    </div>
                  </div>
                );
              }
              
              return (
                <div key={idx} className={`flex ${isAgent ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] flex gap-3 ${isAgent ? 'flex-row-reverse' : ''}`}>
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
                        message.from === 'customer' ? 'bg-green-500' : 'bg-blue-500'
                      }`}>
                        {message.avatar}
                      </div>
                    </div>
                    
                    {/* Message Content */}
                    <div className="flex-1 min-w-0">
                      {/* Name */}
                      <div className="text-sm font-medium text-gray-900 mb-1">{message.name}</div>
                      
                      {/* Message Bubble */}
                      <div className={`rounded-xl px-4 py-3 mb-1 ${
                        isAgent 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-white text-gray-700 border border-gray-200'
                      }`}>
                        <div className="text-sm">{message.text}</div>
                      </div>
                      
                      {/* Time and Channel */}
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <span>{message.time}</span>
                        {message.channel && (
                          <>
                            <span>•</span>
                            <span>Via</span>
                            <FaWhatsapp className="w-3 h-3 text-green-500" />
                            <span>{message.channel}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chat Input - Redesigned to match screenshot */}
          <div className="border-t border-gray-200 p-3">
            <div className="rounded-2xl bg-white border border-gray-200 p-3 relative">
              {/* Top controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="h-8 px-3 rounded-lg border border-gray-300 flex items-center gap-2">
                    <FaWhatsapp className="w-4 h-4 text-green-500" />
                    <span className="font-medium">Whatsapp</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-sm">from</span>
                    <button className="h-8 px-3 rounded-lg border border-gray-300 flex items-center gap-2">
                      <span className="font-semibold">CSFILK</span>
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-800">
                  <span>instant reply with AI</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-black transition-colors">
                      <span className="absolute left-0.5 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white peer-checked:left-5 transition-all"></span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Message field */}
              <div className="mt-3">
                <textarea
                  className="w-full min-h-[36px] rounded-xl border-0 px-1 py-0 text-base leading-6 resize-none focus:outline-none placeholder:text-black text-black"
                  placeholder="Hi, please check this article for more information https://meelad-quiz.vercel.app/"
                  defaultValue="Hi, please check this article for more information https://meelad-quiz.vercel.app/"
                />
              </div>

              {/* Bottom toolbar */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-3 text-gray-700">
                  <button className="h-8 w-8 rounded-lg border border-gray-300 grid place-items-center">
                    <span className="text-base font-semibold">Aa</span>
                  </button>
                  <button className="h-8 w-8 rounded-lg text-gray-700 grid place-items-center hover:bg-gray-100">
                    <Link className="w-5 h-5" />
                  </button>
                  <button className="h-8 w-8 rounded-lg text-gray-700 grid place-items-center hover:bg-gray-100">
                    <Smile className="w-5 h-5" />
                  </button>
                  <button className="h-8 w-8 rounded-lg text-gray-700 grid place-items-center hover:bg-gray-100">
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
                <button className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Base Panel - refined to match screenshot */}
        <div className="hidden lg:flex w-[360px] bg-white border-l border-gray-200 flex-col">
          {/* Header */}
          <div className="px-5 py-4 border-b border-gray-200">
            <div className="text-[18px] font-semibold text-gray-900 mb-3">Knowledge base</div>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  className="w-full h-11 rounded-xl border border-gray-300 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Server capacity"
                  defaultValue="Server capacity"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
              <button className="h-11 w-11 rounded-xl border border-gray-300 grid place-items-center hover:bg-gray-50">
                <SlidersHorizontal className="w-5 h-5 text-gray-700" />
              </button>
              <button className="h-11 w-11 rounded-xl bg-black text-white grid place-items-center hover:opacity-90">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Knowledge Base Items */}
          <div className="flex-1 overflow-y-auto px-4">
            {kbItems.map((item, idx) => (
              <div key={idx} className="py-4 flex items-start gap-3 border-b border-gray-100">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-200 grid place-items-center text-xl">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-semibold text-[15px] text-gray-900 truncate">{item.title}</div>
                    <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-gray-100">
                      <MoreHorizontal className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="text-sm text-gray-600 mt-1 leading-5">{item.desc}</div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[11px] px-2 py-1 rounded-md bg-gray-100 text-gray-800">{item.type}</span>
                    <span className="text-[11px] text-gray-500">Last Edited {item.edited}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
