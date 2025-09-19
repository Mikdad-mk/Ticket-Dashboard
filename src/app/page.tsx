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
      {/* Top Header Bar - Exact match to image */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
        <button className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <ArrowLeft className="w-4 h-4 text-gray-600" />
        </button>
        <div className="ml-3 text-sm text-gray-700 font-medium truncate">
          #TC-0001 Request for Additional Storage and more server
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <MoreHorizontal className="w-4 h-4 text-gray-600" />
          </button>
          <button className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Phone className="w-4 h-4 text-gray-600" />
          </button>
          <button className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Bell className="w-4 h-4 text-gray-600" />
          </button>
          <button className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <X className="w-4 h-4 text-gray-600" />
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
                className="w-full h-10 rounded-lg border border-gray-300 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
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
                  <span className="text-gray-500 text-lg font-bold">#</span>
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

          {/* Chat Input - Exact match */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-600 font-medium">Whatsapp</span>
                <span className="text-xs text-gray-500">From</span>
                <button className="h-7 px-3 rounded-full border border-gray-300 text-xs hover:bg-gray-50 transition-colors">
                  CSFikri ▾
                </button>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
                <span>Instant reply with AI</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-9 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition-colors">
                    <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white peer-checked:left-4 transition-all"></span>
                  </div>
                </label>
              </div>
            </div>
            
            <div className="relative">
              <textarea 
                className="w-full h-12 rounded-xl border border-gray-300 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Hi, please check this article for more information https://help.fikristudio.com/hc/en-us/articles/44088388454656-adding-agent-seats-to-your-subscription"
                defaultValue="Hi, please check this article for more information https://help.fikristudio.com/hc/en-us/articles/44088388454656-adding-agent-seats-to-your-subscription"
              />
              <div className="absolute right-2 top-2 flex items-center gap-1">
                <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
                  <span className="text-sm font-bold">A</span>
                </button>
                <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
                  <Paperclip className="w-4 h-4 text-gray-600" />
                </button>
                <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
                  <Link className="w-4 h-4 text-gray-600" />
                </button>
                <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
                  <Image className="w-4 h-4 text-gray-600" />
                </button>
                <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
                  <CalendarIcon className="w-4 h-4 text-gray-600" />
                </button>
                <button className="h-8 w-8 flex items-center justify-center bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Base Panel - Exact match */}
        <div className="hidden xl:flex w-80 bg-white border-l border-gray-200 flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="text-lg font-semibold text-gray-900 mb-3">Knowledge base</div>
            <div className="relative">
              <input 
                className="w-full h-9 rounded-lg border border-gray-300 pl-9 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Server capacity" 
                defaultValue="Server capacity"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                <button className="h-7 w-7 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                  <SlidersHorizontal className="w-4 h-4 text-gray-600" />
                </button>
                <button className="h-7 w-7 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
                <button className="h-7 w-7 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                  <Folder className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Knowledge Base Items */}
          <div className="flex-1 overflow-y-auto">
            {kbItems.map((item, idx) => (
              <div key={idx} className="px-4 py-4 border-b border-gray-100 flex gap-3 items-start hover:bg-gray-50 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-pink-100 flex items-center justify-center text-lg">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-gray-900">{item.title}</div>
                  <div className="text-xs text-gray-600 mt-1">{item.desc}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{item.type}</span>
                    <span className="text-xs text-gray-500">Last Edited {item.edited}</span>
                  </div>
                </div>
                <button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
                  <MoreHorizontal className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
