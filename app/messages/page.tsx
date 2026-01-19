"use client"

/**
 * Messages Page
 *
 * @description
 * Real-time messaging interface with contacts, chat history,
 * and message management.
 *
 * @features
 * - Contact list with online status
 * - Real-time chat interface
 * - Message read receipts
 * - File and image attachments
 * - Search and filter
 * - Video and voice call integration
 */

import { useState } from "react"
import Link from "next/link"
import {
  Sparkles, ArrowLeft, Search, Send, Paperclip, Phone, Video,
  MoreVertical, Check, CheckCheck, Image, File, Smile, MapPin,
  Clock, Star, Archive, Trash2, Plus,
} from "lucide-react"

type Contact = {
  id: string
  name: string
  role: string
  company?: string
  avatar: string
  online: boolean
  lastMessage: string
  lastMessageTime: string
  unread: number
  property?: string
}

type Message = {
  id: string
  senderId: string
  content: string
  time: string
  read: boolean
  type: "text" | "image" | "file"
}

const contacts: Contact[] = [
  {
    id: "1",
    name: "Mike Ross",
    role: "Mortgage Broker",
    company: "Spectra Finance",
    avatar: "https://i.pravatar.cc/150?u=mike",
    online: true,
    lastMessage: "I've updated the pre-approval documents for you",
    lastMessageTime: "10:41 AM",
    unread: 2,
    property: "128 Crown Street",
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Real Estate Agent",
    company: "Ray White",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    online: true,
    lastMessage: "The viewing is confirmed for tomorrow at 10am",
    lastMessageTime: "Yesterday",
    unread: 0,
    property: "45 Pacific Highway",
  },
  {
    id: "3",
    name: "Jessica Pearson",
    role: "Solicitor",
    company: "Pearson Law",
    avatar: "https://i.pravatar.cc/150?u=jessica",
    online: false,
    lastMessage: "Contract review is complete. Please see attached",
    lastMessageTime: "Oct 22",
    unread: 1,
  },
  {
    id: "4",
    name: "David Miller",
    role: "Building Inspector",
    company: "ProInspect",
    avatar: "https://i.pravatar.cc/150?u=david",
    online: false,
    lastMessage: "Inspection report attached",
    lastMessageTime: "Oct 20",
    unread: 0,
  },
]

const initialMessages: Message[] = [
  { id: "1", senderId: "1", content: "Hi! I've reviewed your application and everything looks good.", time: "9:30 AM", read: true, type: "text" },
  { id: "2", senderId: "me", content: "That's great news! What are the next steps?", time: "9:35 AM", read: true, type: "text" },
  { id: "3", senderId: "1", content: "I'll need a few more documents from you. Can you send me your latest payslip and bank statements?", time: "9:40 AM", read: true, type: "text" },
  { id: "4", senderId: "me", content: "Sure, I'll get those to you today.", time: "9:45 AM", read: true, type: "text" },
  { id: "5", senderId: "1", content: "Perfect! Once I have those, I can submit the pre-approval application.", time: "10:00 AM", read: true, type: "text" },
  { id: "6", senderId: "1", content: "I've updated the pre-approval documents for you. The new borrowing capacity is $1.2M.", time: "10:41 AM", read: false, type: "text" },
]

export default function MessagesPage() {
  const [selectedContact, setSelectedContact] = useState<Contact>(contacts[0])
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const sendMessage = () => {
    if (!newMessage.trim()) return
    const message: Message = {
      id: Date.now().toString(),
      senderId: "me",
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      read: false,
      type: "text",
    }
    setMessages([...messages, message])
    setNewMessage("")
  }

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.company?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="landing-page h-screen flex flex-col">
      {/* Navigation */}
      <nav className="shrink-0 px-4 py-3 flex items-center justify-between border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-white/80" />
            </div>
            <span className="text-base font-semibold tracking-tight">HAUS</span>
          </Link>
        </div>
        <span className="text-sm font-medium text-white">Messages</span>
        <button className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        {/* Contacts Sidebar */}
        <div className="w-80 border-r border-white/10 flex flex-col bg-[#0A0A0A]">
          {/* Search */}
          <div className="p-4 border-b border-white/10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/20 transition-colors"
              />
            </div>
          </div>

          {/* Contact List */}
          <div className="flex-1 overflow-y-auto">
            {filteredContacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`w-full p-4 flex gap-3 border-b border-white/5 transition-colors ${
                  selectedContact.id === contact.id ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                <div className="relative shrink-0">
                  <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full object-cover" />
                  {contact.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0A0A0A]" />
                  )}
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-white text-sm">{contact.name}</span>
                    <span className="text-[10px] text-neutral-500">{contact.lastMessageTime}</span>
                  </div>
                  <p className="text-xs text-neutral-400 truncate">{contact.lastMessage}</p>
                  {contact.property && (
                    <div className="flex items-center gap-1 mt-1 text-[10px] text-neutral-600">
                      <MapPin className="w-2.5 h-2.5" />{contact.property}
                    </div>
                  )}
                </div>
                {contact.unread > 0 && (
                  <div className="w-5 h-5 rounded-full bg-indigo-500 text-[10px] font-bold text-white flex items-center justify-center">
                    {contact.unread}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-[#050505]">
          {/* Chat Header */}
          <div className="shrink-0 p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={selectedContact.avatar} alt={selectedContact.name} className="w-10 h-10 rounded-full object-cover" />
                {selectedContact.online && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#050505]" />
                )}
              </div>
              <div>
                <h2 className="font-medium text-white text-sm">{selectedContact.name}</h2>
                <p className="text-xs text-neutral-500">
                  {selectedContact.online ? "Online" : "Offline"} • {selectedContact.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
                <Video className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.senderId === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2.5 ${
                    message.senderId === "me"
                      ? "bg-indigo-500 text-white rounded-br-sm"
                      : "bg-white/10 text-white rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <div className={`flex items-center justify-end gap-1 mt-1 ${
                    message.senderId === "me" ? "text-indigo-200" : "text-neutral-500"
                  }`}>
                    <span className="text-[10px]">{message.time}</span>
                    {message.senderId === "me" && (
                      message.read ? <CheckCheck className="w-3 h-3" /> : <Check className="w-3 h-3" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="shrink-0 p-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
                <Image className="w-5 h-5" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type a message..."
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/20 transition-colors pr-12"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={sendMessage}
                disabled={!newMessage.trim()}
                className="p-3 rounded-xl bg-indigo-500 text-white hover:bg-indigo-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
