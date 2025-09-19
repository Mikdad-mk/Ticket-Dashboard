'use client';

import { useState } from 'react';
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
  ShoppingCart,
  Package,
  Store,
  Users,
  Megaphone,
  BarChart3,
  PieChart,
  Headphones,
  Grid3X3,
  ChevronsRight,
  Menu,
  MessageSquare,
  BookOpen
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  // Mobile navigation state
  const [currentPage, setCurrentPage] = useState<'chat' | 'tickets' | 'knowledge'>('tickets');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  // Pagination state
  const [visibleTickets, setVisibleTickets] = useState(5);
  const [visibleKbItems, setVisibleKbItems] = useState(5);
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
    { from: "customer", name: "Jonson", text: "yes , Tomorrow Morning is good", time: "09:51 am", channel: "Whatsapp", avatar: "M" },
    { from: "agent", name: "Agent", text: "Greate! i'll arrange it for tomorrow afternoon and send you the confirmation. Thanks!", time: "09:51 am", channel: "Whatsapp", avatar: "M" },
    { from: "customer", name: "Jonson", text: "yes , Tomorrow Morning is good", time: "09:51 am", channel: "Whatsapp", avatar: "M" },
    { from: "agent", name: "Agent", text: "Greate! i'll arrange it for tomorrow afternoon and send you the confirmation. Thanks!", time: "09:51 am", channel: "Whatsapp", avatar: "M" },
    { from: "customer", name: "Jonson", text: "Thanks ❤️", time: "09:51 am", channel: "Whatsapp", avatar: "M" },
    { from: "agent", name: "Agent", text: "Before call i have some article, you can read for your information", time: "09:51 am", channel: "Whatsapp", avatar: "M" },
    { from: "customer", name: "Jonson", text: "Thanks ❤️", time: "09:51 am", channel: "Whatsapp", avatar: "M" },
    { from: "agent", name: "Agent", text: "Before call i have some article, you can read for your information", time: "09:51 am", channel: "Whatsapp", avatar: "M" },
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
    <div className="h-[100dvh] bg-gray-100 overflow-hidden">
      {/* Main Layout Container - Responsive */}
      <div className="flex h-full overflow-hidden">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="hidden"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        {/* Mobile Menu Overlay */}
        {showMobileMenu && (
          <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setShowMobileMenu(false)}>
            <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
                  <button onClick={() => setShowMobileMenu(false)}>
                    <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

              <div className="p-4 space-y-2">
                <button 
                  onClick={() => { setCurrentPage('chat'); setShowMobileMenu(false); }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    currentPage === 'chat' ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat Messages</span>
                </button>
                
                <button 
                  onClick={() => { setCurrentPage('tickets'); setShowMobileMenu(false); }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    currentPage === 'tickets' ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Ticket className="w-5 h-5" />
                  <span>All Tickets</span>
            </button>
                
                <button 
                  onClick={() => { setCurrentPage('knowledge'); setShowMobileMenu(false); }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    currentPage === 'knowledge' ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Knowledge Base</span>
                </button>
            </div>
            </div>
          </div>
        )}
        {/* Left Sidebar - Fully Responsive Navigation */}
        <div className="hidden lg:flex w-14 xl:w-16 bg-white border-r border-gray-200 flex-col items-center gap-1 lg:gap-2 xl:gap-4">
          {/* Top Section - Ticket Logo */}
          <div className="flex flex-col items-center gap-1 lg:gap-2 pt-1 lg:pt-2 xl:pt-4">
            <div className="w-5 h-6 lg:w-6 lg:h-8 xl:w-8 xl:h-12 flex items-center justify-center">
              <Ticket className="w-3 h-3 lg:w-4 lg:h-4 xl:w-6 xl:h-6 text-orange-500" />
        </div>
      </div>

          {/* Orange Add Button */}
          <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
            <Plus className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-white" />
          </button>

          {/* Navigation Icons */}
          <div className="flex flex-col gap-1 lg:gap-2 xl:gap-4">
            <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <HomeIcon className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gray-600" />
            </button>
            <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <FileText className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gray-600" />
            </button>
            <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <Package className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gray-600" />
            </button>
            <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <Store className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gray-600" />
            </button>
            <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <Users className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gray-600" />
            </button>
            <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <Megaphone className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gray-600" />
            </button>
            <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <BarChart3 className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gray-600" />
            </button>
            <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <PieChart className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gray-600" />
            </button>
              </div>

          {/* Highlighted Support Icon */}
          <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Headphones className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gray-600" />
          </button>

          {/* Bottom Section - Settings and Apps */}
          <div className="mt-auto flex flex-col gap-1 lg:gap-2 xl:gap-4 pb-1 lg:pb-2 xl:pb-4">
            <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gray-600" />
            </button>
            <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <Grid3X3 className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gray-600" />
            </button>
            <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronsRight className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-gray-600" />
            </button>
          </div>
          </div>

        {/* Main Content Area with Integrated Header */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Header Bar - Ultra Mobile Responsive - Sticky */}
          <div className="flex items-center justify-between px-1 min-[375px]:px-1.5 sm:px-4 md:px-6 py-3 min-[375px]:py-4 sm:py-5 md:py-4 lg:py-4 bg-white border-b border-gray-200 flex-shrink-0 sticky top-0 z-20">
            {/* Left Section */}
            <div className="flex items-center gap-0.5 min-[375px]:gap-1 sm:gap-2 md:gap-4 min-w-0 flex-1">
              <button onClick={() => setCurrentPage('tickets')} className="h-5 w-5 min-[375px]:h-6 min-[375px]:w-6 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0">
                <ArrowLeft className="h-2.5 w-2.5 min-[375px]:h-3 min-[375px]:w-3 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-4 lg:w-4 text-gray-600" />
              </button>
              <div className="flex flex-col min-w-0 flex-1">
                <h1 className="font-bold text-gray-900 text-[10px] min-[375px]:text-xs sm:text-sm md:text-sm lg:text-base truncate">#TC-0001</h1>
                <p className="text-[8px] min-[375px]:text-[10px] sm:text-xs md:text-sm text-gray-500 truncate">Request for Additional Storage and more server</p>
              </div>
            </div>
            
            {/* Right Section - Actions */}
            <div className="flex items-center gap-0.5 min-[375px]:gap-0.5 sm:gap-1 md:gap-2 flex-shrink-0">
              {/* Icon Buttons */}
              <button className="h-5 w-5 min-[375px]:h-6 min-[375px]:w-6 sm:h-8 sm:w-8 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-sm min-[375px]:rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Star className="h-2.5 w-2.5 min-[375px]:h-3 min-[375px]:w-3 sm:h-4 sm:w-4 md:h-3 md:w-3 lg:h-4 lg:w-4 text-gray-600" />
              </button>
              <button className="h-5 w-5 min-[375px]:h-6 min-[375px]:w-6 sm:h-8 sm:w-8 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-sm min-[375px]:rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <MoreHorizontal className="h-2.5 w-2.5 min-[375px]:h-3 min-[375px]:w-3 sm:h-4 sm:w-4 md:h-3 md:w-3 lg:h-4 lg:w-4 text-gray-600" />
              </button>
              
              {/* Action Buttons */}
              <button className="h-5 px-1 min-[375px]:h-6 min-[375px]:px-1.5 sm:h-8 sm:px-2 md:h-7 md:px-2 lg:h-8 lg:px-3 rounded-sm min-[375px]:rounded-md border border-gray-300 text-[8px] min-[375px]:text-[10px] sm:text-xs md:text-sm flex items-center gap-0.5 sm:gap-1 md:gap-1 lg:gap-2 hover:bg-gray-50 text-black transition-colors">
                <Phone className="h-2.5 w-2.5 min-[375px]:h-3 min-[375px]:w-3 sm:h-4 sm:w-4 md:h-3 md:w-3 lg:h-4 lg:w-4" />
                <span className="hidden sm:inline">Call</span>
              </button>
              <button className="h-5 px-1 min-[375px]:h-6 min-[375px]:px-1.5 sm:h-8 sm:px-2 md:h-7 md:px-2 lg:h-8 lg:px-3 rounded-sm min-[375px]:rounded-md border border-gray-300 text-[8px] min-[375px]:text-[10px] sm:text-xs md:text-sm flex items-center gap-0.5 sm:gap-1 md:gap-1 lg:gap-2 hover:bg-gray-50 text-black transition-colors">
                <Clock className="h-2.5 w-2.5 min-[375px]:h-3 min-[375px]:w-3 sm:h-4 sm:w-4 md:h-3 md:w-3 lg:h-4 lg:w-4" />
                <span className="hidden sm:inline">Snooze</span>
              </button>
              <button className="hidden sm:flex h-5 px-1 min-[375px]:h-6 min-[375px]:px-1.5 sm:h-8 sm:px-2 md:h-7 md:px-2 lg:h-8 lg:px-3 rounded-sm min-[375px]:rounded-md bg-orange-500 text-white text-[8px] min-[375px]:text-[10px] sm:text-xs md:text-sm hover:bg-orange-600 transition-colors">
                <span className="hidden sm:inline">Close</span>
                <X className="h-2.5 w-2.5 min-[375px]:h-3 min-[375px]:w-3 sm:h-4 sm:w-4 md:h-3 md:w-3 md:hidden" />
              </button>
            </div>
          </div>

          {/* Content Area - Mobile First */}
          <div className="flex flex-1 overflow-hidden flex-col lg:flex-row min-h-0">
            {/* Mobile: Show only current page, Desktop: Show all panels */}
            
            {/* Ticket List Panel - Hidden on mobile unless selected */}
            <div className={`${currentPage === 'chat' ? 'hidden' : 'flex'} lg:flex w-full lg:w-72 xl:w-80 bg-white border-r border-gray-200 flex-col min-h-0 h-full`}>
              {/* Header - Mobile Responsive */}
              <div className="px-2 min-[375px]:px-3 sm:px-4 md:px-4 py-2 min-[375px]:py-2.5 sm:py-3 border-b border-gray-200 flex items-center justify-between flex-shrink-0 bg-white">
                <span className="text-xs min-[375px]:text-sm sm:text-sm font-medium text-gray-900">Total ticket 24</span>
                <button className="h-6 min-[375px]:h-7 sm:h-7 md:h-8 px-1.5 min-[375px]:px-2 sm:px-2 md:px-3 rounded-lg border border-gray-300 text-xs min-[375px]:text-sm sm:text-sm hover:bg-gray-50 transition-colors flex items-center gap-1 min-[375px]:gap-1 text-black">
                  <span>Newest</span>
                  <ChevronDown className="w-2.5 h-2.5 min-[375px]:w-3 min-[375px]:h-3 sm:w-4 sm:h-4 text-gray-500" />
                </button>
              </div>
              
              {/* Search - Mobile Responsive */}
              <div className="p-2 min-[375px]:p-2.5 sm:p-2 md:p-3 flex-shrink-0 bg-white border-b border-gray-200">
                <div className="relative">
                  <input 
                    className="w-full h-7 min-[375px]:h-8 sm:h-8 md:h-10 rounded-md min-[375px]:rounded-lg border border-gray-300 pl-6 min-[375px]:pl-7 sm:pl-8 md:pl-9 pr-2 min-[375px]:pr-2.5 sm:pr-3 text-xs min-[375px]:text-sm sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-black" 
                    placeholder="Search" 
                  />
                  <Search className="absolute left-2 min-[375px]:left-2.5 sm:left-2 md:left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 min-[375px]:w-3.5 min-[375px]:h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                </div>
                      </div>
              
              {/* Ticket List - Scrollable Content */}
              <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">
                {tickets.slice(0, visibleTickets).map((ticket, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setCurrentPage('chat')}
                    className={`px-2 min-[375px]:px-2.5 sm:px-2 md:px-4 py-2 min-[375px]:py-2.5 sm:py-2 md:py-3 flex items-start gap-2 min-[375px]:gap-2.5 sm:gap-2 md:gap-3 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${
                      ticket.selected ? 'bg-gray-50' : ''
                    }`}
                  >
                    <div className="h-6 w-6 min-[375px]:h-7 min-[375px]:w-7 sm:h-7 sm:w-7 md:h-9 md:w-9 rounded-md min-[375px]:rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Ticket className="w-3 h-3 min-[375px]:w-3.5 min-[375px]:h-3.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs min-[375px]:text-sm sm:text-xs text-gray-500 truncate">{ticket.id}</div>
                      <div className="text-xs min-[375px]:text-sm sm:text-xs md:text-sm font-medium text-gray-900 truncate" title={ticket.name}>{ticket.name}</div>
                      <div className="text-xs min-[375px]:text-sm sm:text-xs text-gray-500 truncate" title={ticket.desc}>{ticket.desc}</div>
                    </div>
                    <div className="text-[8px] min-[375px]:text-[9px] sm:text-xs text-gray-500 flex flex-col items-end gap-0.5 min-[375px]:gap-0.5 sm:gap-1 flex-shrink-0">
                      <div className="whitespace-nowrap">{ticket.time}</div>
                      {ticket.unread > 0 && (
                        <span className="inline-flex h-3 w-3 min-[375px]:h-3.5 min-[375px]:w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-full bg-red-500 text-white text-[8px] min-[375px]:text-[9px] sm:text-xs items-center justify-center">
                          {ticket.unread}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Load More Button for Tickets */}
                {visibleTickets < tickets.length && (
                  <div className="px-2 min-[375px]:px-2.5 sm:px-2 md:px-4 py-3 flex justify-center">
                    <button 
                      onClick={() => setVisibleTickets(prev => Math.min(prev + 5, tickets.length))}
                      className="px-3 py-2 text-xs min-[375px]:text-sm sm:text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Load More ({tickets.length - visibleTickets} remaining)
                    </button>
                  </div>
                )}
              </div>
            </div>

        {/* Chat Panel - Mobile First */}
        <div className={`${currentPage === 'chat' ? 'flex' : 'hidden'} lg:flex flex-1 bg-gray-50 flex-col relative min-h-0`}>
          {/* Chat Messages - Ultra Mobile Scrollable area */}
          <div className="flex-1 overflow-y-auto p-1 min-[375px]:p-1.5 sm:p-2 md:p-4 space-y-2 min-[375px]:space-y-2.5 sm:space-y-3 md:space-y-4 pb-16 min-[375px]:pb-20 sm:pb-24 md:pb-32 scrollbar-hide [padding-bottom:calc(theme(spacing.16)+env(safe-area-inset-bottom))]">
            {messages.map((message, idx) => {
              const isAgent = message.from === 'agent';
              const isCustomer = message.from === 'customer';

              return (
                <div key={idx} className={`flex w-full items-start gap-0.5 min-[375px]:gap-1 sm:gap-2 md:gap-3 ${
                  isAgent ? 'justify-end' : 'justify-start'
                }`}>
                  {/* Avatar */}
                  <div className={`flex-shrink-0 ${
                    isAgent ? 'order-2' : 'order-1'
                  }`}>
                    <div className={`w-4 h-4 min-[375px]:w-5 min-[375px]:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white text-[8px] min-[375px]:text-[10px] sm:text-xs md:text-sm font-semibold ${
                      isAgent ? 'bg-orange-500' : 'bg-blue-500'
                    }`}>
                      {message.avatar}
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className={`max-w-[85%] sm:max-w-[75%] md:max-w-[65%] lg:max-w-[60%] xl:max-w-[55%] ${
                    isAgent ? 'order-1' : 'order-2'
                  }`}>
                    {/* Message Bubble */}
                    <div className={`rounded-sm min-[375px]:rounded-md sm:rounded-lg md:rounded-xl px-1.5 min-[375px]:px-2 sm:px-3 md:px-4 py-1 min-[375px]:py-1.5 sm:py-2 md:py-3 mb-0.5 min-[375px]:mb-0.5 sm:mb-1 md:mb-2 shadow-sm ${
                      isAgent 
                        ? 'bg-blue-100 text-gray-900' 
                        : 'bg-white text-gray-900 border border-gray-200'
                    }`}>
                      <div className="text-[9px] min-[375px]:text-[10px] sm:text-xs md:text-sm leading-tight min-[375px]:leading-tight sm:leading-normal md:leading-normal break-words whitespace-pre-wrap">{message.text}</div>
                    </div>

                    {/* Time and Channel */}
                    <div className={`flex items-center gap-0.5 min-[375px]:gap-0.5 sm:gap-1 text-[8px] min-[375px]:text-[9px] sm:text-xs text-gray-500 ${isAgent ? 'justify-end text-right' : 'justify-start text-left'}` }>
                      <span>{message.time}</span>
                      <span>via</span>
                      <FaWhatsapp className="w-1 h-1 min-[375px]:w-1.5 min-[375px]:h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 text-green-500" />
                      <span className="text-green-500">whatsapp</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chat Input - Ultra Mobile fixed at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-200 p-1 min-[375px]:p-1.5 sm:p-2 md:p-4 [padding-bottom:env(safe-area-inset-bottom)]">
            <div className="rounded-sm min-[375px]:rounded-md sm:rounded-lg md:rounded-xl bg-white border border-gray-200 p-1 min-[375px]:p-1.5 sm:p-1.5 md:p-2 lg:p-4 relative">
              {/* Top controls */}
              <div className="flex items-center justify-between mb-1 min-[375px]:mb-1.5 sm:mb-2 md:mb-3">
                <div className="flex items-center gap-1 min-[375px]:gap-1 sm:gap-2 md:gap-3">
                  <button className="h-5 min-[375px]:h-6 sm:h-6 md:h-7 lg:h-8 px-1 min-[375px]:px-1.5 sm:px-1.5 md:px-2 lg:px-3 rounded-sm min-[375px]:rounded-md sm:rounded-lg border border-gray-300 flex items-center gap-0.5 min-[375px]:gap-0.5 sm:gap-1 md:gap-2">
                    <FaWhatsapp className="w-2 h-2 min-[375px]:w-2.5 min-[375px]:h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-green-500" />
                    <span className="font-medium text-[9px] min-[375px]:text-[10px] sm:text-[10px] md:text-xs lg:text-sm">Whatsapp</span>
                    <ChevronDown className="w-2 h-2 min-[375px]:w-2.5 min-[375px]:h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-gray-500" />
                  </button>
                  <div className="flex items-center gap-0.5 min-[375px]:gap-0.5 sm:gap-1 md:gap-2 text-gray-500">
                    <span className="text-[8px] min-[375px]:text-[9px] sm:text-[9px] md:text-xs lg:text-sm">from</span>
                    <button className="h-5 min-[375px]:h-6 sm:h-6 md:h-7 lg:h-8 px-1 min-[375px]:px-1.5 sm:px-1.5 md:px-2 lg:px-3 rounded-sm min-[375px]:rounded-md sm:rounded-lg border border-gray-300 flex items-center gap-0.5 min-[375px]:gap-0.5 sm:gap-1 md:gap-2">
                      <span className="font-semibold text-[9px] min-[375px]:text-[10px] sm:text-[10px] md:text-xs lg:text-sm">CSFILK</span>
                      <ChevronDown className="w-2 h-2 min-[375px]:w-2.5 min-[375px]:h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-sm text-gray-800">
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
              <div className="mb-0.5 min-[375px]:mb-1 sm:mb-2 md:mb-3">
                <textarea 
                  className="w-full min-h-[20px] min-[375px]:min-h-[24px] sm:min-h-[28px] md:min-h-[32px] lg:min-h-[40px] rounded-sm min-[375px]:rounded-md sm:rounded-lg md:rounded-xl border-0 px-0.5 min-[375px]:px-0.5 sm:px-1 md:px-1 py-0.5 min-[375px]:py-0.5 sm:py-1 md:py-2 text-[8px] min-[375px]:text-[9px] sm:text-[10px] md:text-sm lg:text-base leading-tight min-[375px]:leading-tight sm:leading-tight md:leading-5 lg:leading-6 resize-none focus:outline-none placeholder:text-gray-500 text-black"
                  placeholder="HI, please check this article for more information https://meelad-quiz.vercel.app/"
                  defaultValue="HI, please check this article for more information https://meelad-quiz.vercel.app/"
                />
              </div>

              {/* Bottom toolbar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5 min-[375px]:gap-1 sm:gap-2 md:gap-3 text-gray-700">
                  <button className="h-4 w-4 min-[375px]:h-5 min-[375px]:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-sm min-[375px]:rounded-md sm:rounded-lg border border-gray-300 grid place-items-center">
                    <span className="text-[8px] min-[375px]:text-[9px] sm:text-[10px] md:text-sm lg:text-base font-semibold">AA</span>
                  </button>
                  <button className="h-4 w-4 min-[375px]:h-5 min-[375px]:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-sm min-[375px]:rounded-md sm:rounded-lg text-gray-700 grid place-items-center hover:bg-gray-100">
                    <Paperclip className="w-2 h-2 min-[375px]:w-2.5 min-[375px]:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  </button>
                  <button className="h-4 w-4 min-[375px]:h-5 min-[375px]:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-sm min-[375px]:rounded-md sm:rounded-lg text-gray-700 grid place-items-center hover:bg-gray-100">
                    <Link className="w-2 h-2 min-[375px]:w-2.5 min-[375px]:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  </button>
                  <button className="h-4 w-4 min-[375px]:h-5 min-[375px]:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-sm min-[375px]:rounded-md sm:rounded-lg text-gray-700 grid place-items-center hover:bg-gray-100">
                    <Smile className="w-2 h-2 min-[375px]:w-2.5 min-[375px]:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  </button>
                  <button className="h-4 w-4 min-[375px]:h-5 min-[375px]:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-sm min-[375px]:rounded-md sm:rounded-lg text-gray-700 grid place-items-center hover:bg-gray-100">
                    <Mic className="w-2 h-2 min-[375px]:w-2.5 min-[375px]:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  </button>
                </div>
                <button className="h-5 w-5 min-[375px]:h-6 min-[375px]:w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 rounded-sm min-[375px]:rounded-md sm:rounded-lg md:rounded-xl bg-black text-white grid place-items-center">
                  <Send className="w-2 h-2 min-[375px]:w-2.5 min-[375px]:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Base Panel - Mobile First */}
        <div className={`${currentPage === 'chat' ? 'hidden' : 'flex'} xl:flex w-full xl:w-80 2xl:w-[360px] bg-white border-l border-gray-200 flex-col min-h-0 h-full`}>
          {/* Header */}
          <div className="px-3 xl:px-4 2xl:px-5 py-3 xl:py-3 2xl:py-4 border-b border-gray-200 flex-shrink-0 bg-white">
            <div className="text-sm xl:text-base 2xl:text-[18px] font-semibold text-gray-900 mb-2 xl:mb-3">Knowledge base</div>
            <div className="flex items-center gap-1.5 xl:gap-2">
              <div className="relative flex-1">
                <input
                  className="w-full h-8 xl:h-9 2xl:h-11 rounded-md xl:rounded-lg 2xl:rounded-xl border border-gray-300 pl-6 xl:pl-8 2xl:pl-10 pr-2 xl:pr-3 text-xs xl:text-xs 2xl:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Server capacity"
                  defaultValue="Server capacity"
                />
                <Search className="absolute left-1.5 xl:left-2 2xl:left-3 top-1/2 -translate-y-1/2 w-3 h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-gray-500" />
              </div>
              <button className="h-8 w-8 xl:h-9 xl:w-9 2xl:h-11 2xl:w-11 rounded-md xl:rounded-lg 2xl:rounded-xl border border-gray-300 grid place-items-center hover:bg-gray-50">
                <SlidersHorizontal className="w-3 h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-gray-700" />
              </button>
              <button className="h-8 w-8 xl:h-9 xl:w-9 2xl:h-11 2xl:w-11 rounded-md xl:rounded-lg 2xl:rounded-xl bg-black text-white grid place-items-center hover:opacity-90">
                <Plus className="w-3 h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
              </button>
            </div>
          </div>

          {/* Knowledge Base Items - Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-3 xl:px-3 2xl:px-4 scrollbar-hide min-h-0">
            {kbItems.slice(0, visibleKbItems).map((item, idx) => (
              <div key={idx} className="py-3 xl:py-3 2xl:py-4 flex items-start gap-2 xl:gap-2 2xl:gap-3 border-b border-gray-100">
                <div className="h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 rounded-lg xl:rounded-xl 2xl:rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-200 grid place-items-center text-sm xl:text-lg 2xl:text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1 xl:gap-2">
                    <div className="font-semibold text-xs xl:text-sm 2xl:text-[15px] text-gray-900 truncate" title={item.title}>{item.title}</div>
                    <button className="h-6 w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 grid place-items-center rounded-md hover:bg-gray-100 flex-shrink-0">
                      <MoreHorizontal className="w-2.5 h-2.5 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="text-xs xl:text-xs 2xl:text-sm text-gray-600 mt-1 xl:mt-1 leading-tight xl:leading-4 2xl:leading-5 line-clamp-2" title={item.desc}>{item.desc}</div>
                  <div className="flex items-center gap-1 xl:gap-2 2xl:gap-3 mt-1 xl:mt-2">
                    <span className="text-[8px] xl:text-[10px] 2xl:text-[11px] px-1 xl:px-1.5 2xl:px-2 py-0.5 xl:py-0.5 2xl:py-1 rounded-md bg-gray-100 text-gray-800">{item.type}</span>
                    <span className="text-[8px] xl:text-[10px] 2xl:text-[11px] text-gray-500">Last Edited {item.edited}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Load More Button for Knowledge Base */}
            {visibleKbItems < kbItems.length && (
              <div className="py-3 xl:py-3 2xl:py-4 flex justify-center">
                <button 
                  onClick={() => setVisibleKbItems(prev => Math.min(prev + 5, kbItems.length))}
                  className="px-4 py-2 text-xs xl:text-sm 2xl:text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Load More ({kbItems.length - visibleKbItems} remaining)
                </button>
              </div>
            )}
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
