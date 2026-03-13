import { useState, useRef, useEffect, useCallback } from 'react'
import './Chatbot.css'

// ─── Knowledge base ─────────────────────────────────────────────────────────
const CONTACT = {
  phone: '+971 50 786 4162',
  email: 'admin@signden.ae',
  address: 'P.O. Box: 553242, Dubai, UAE',
  whatsapp: 'https://wa.me/971507864162',
}

const RULES = [
  {
    patterns: [/\b(hi|hello|hey|salaam|salam|howdy|good\s*(morning|afternoon|evening))\b/i],
    reply: () =>
      `👋 Hello! Welcome to **Sign Den Advertising**. I'm here to help you with any questions about our signage services.\n\nYou can ask me about:\n• Our services\n• Pricing & quotes\n• Location & contact\n• Working hours\n• Types of signs we make`,
  },
  {
    patterns: [/\b(service|offer|provide|make|produce|fabricat|speciali)/i],
    reply: () =>
      `🎨 **Our Services include:**\n\n• 3D Aluminium & Acrylic Signage\n• LED & Neon Displays\n• Outdoor Hoardings & Billboards\n• Vehicle Wraps & Fleet Branding\n• Shop Fronts & Fascia Signs\n• Wayfinding & Directional Signs\n• Exhibition Stands & Displays\n• Digital Printing & Vinyl Graphics\n\nNeed a custom solution? I can connect you with our team!`,
  },
  {
    patterns: [/\b(3d|three.?d|alumin|acrylic|dimensional)/i],
    reply: () =>
      `✨ **3D Signage** is one of our flagship services! We craft:\n- 3D Aluminium letters & logos\n- Backlit & front-lit 3D signs\n- Acrylic 3D signage with premium finishes\n\nThese make a bold statement for reception areas, shopfronts, and offices. Want a quote? 👇`,
  },
  {
    patterns: [/\b(led|neon|light|illuminat|backlit|glow)/i],
    reply: () =>
      `💡 **LED & Illuminated Signs** — we design and install:\n- LED channel letters\n- Neon-effect flex signs\n- Backlit / Halo-lit boards\n- Digital LED display panels\n\nPerfect for grabbing attention day and night! Shall I connect you with our team for a custom quote?`,
  },
  {
    patterns: [/\b(vehicle|car|van|fleet|wrap|branding\s*on\s*(car|van|truck))/i],
    reply: () =>
      `🚗 **Vehicle Branding & Wraps** — turn your fleet into moving billboards!\n- Full & partial vehicle wraps\n- Fleet branding & livery\n- Magnetic signs\n- Window graphics\n\nWe cover cars, vans, trucks, and buses. Get in touch for a site survey!`,
  },
  {
    patterns: [/\b(hoarding|billboard|outdoor|banner|large\s*format)/i],
    reply: () =>
      `🏙️ **Outdoor & Large Format** solutions include:\n- Hoardings & construction site graphics\n- Billboard fabrication & installation\n- PVC banners & flex prints\n- Gantry signs\n\nWe handle permits and installation across the UAE.`,
  },
  {
    patterns: [/\b(price|cost|quote|budget|how\s*much|rate|charges?|expensive)/i],
    reply: () =>
      `💰 **Pricing** depends on the size, material, and complexity of your project — every sign is custom-made!\n\nFor a **free quote**, our team will be happy to discuss your requirements:\n📞 **${CONTACT.phone}**\n📧 **${CONTACT.email}**\n💬 [WhatsApp Us](${CONTACT.whatsapp})\n\nWe usually respond within a few hours during business days.`,
  },
  {
    patterns: [/\b(location|address|where|find\s*you|office|showroom|dubai|visit)/i],
    reply: () =>
      `📍 **Our Location:**\n${CONTACT.address}\n\nWe serve clients across **Dubai, Abu Dhabi, Sharjah**, and the wider UAE.\n\nFeel free to call or WhatsApp us to schedule a visit:\n📞 ${CONTACT.phone}`,
  },
  {
    patterns: [/\b(contact|reach|call|whatsapp|phone|number|email|mail|get\s*in\s*touch)/i],
    reply: () =>
      `📬 **Contact Sign Den Advertising:**\n\n📞 Phone: **${CONTACT.phone}**\n📧 Email: **${CONTACT.email}**\n📍 Address: ${CONTACT.address}\n💬 [Chat on WhatsApp](${CONTACT.whatsapp})\n\nOur team is ready to help you!`,
  },
  {
    patterns: [/\b(hour|timing|open|close|work|available|when)/i],
    reply: () =>
      `🕘 **Working Hours:**\n\nMonday – Saturday: **9:00 AM – 6:00 PM**\nSunday: Closed\n\nFor urgent enquiries outside working hours, send us a WhatsApp message and we'll get back to you shortly:\n💬 [${CONTACT.whatsapp}](${CONTACT.whatsapp})`,
  },
  {
    patterns: [/\b(about|company|who\s*(are|you)|sign\s*den|history|founded|since|how\s*long)/i],
    reply: () =>
      `🏢 **About Sign Den Advertising LLC**\n\nWe are a leading signage and outdoor media company based in **Dubai, UAE**, established since **2010**.\n\nWith 15+ years of expertise, we specialize in designing, manufacturing, and installing custom signage tailored to businesses across industries — from retail and hospitality to construction and corporate.\n\nOur promise: **Quality. Creativity. Customer Satisfaction.**`,
  },
  {
    patterns: [/\b(portfolio|gallery|project|sample|example|previous\s*work|past\s*work)/i],
    reply: () =>
      `🖼️ Check out our **Project Gallery** on this page — scroll up to see our recent installations!\n\nYou can also visit our website: [signden.ae](https://signden.ae) for the full portfolio.\n\nLike what you see? Let's create something amazing for your brand! 🚀`,
  },
  {
    patterns: [/\b(uae|emirates|abu\s*dhabi|sharjah|ajman|ras\s*al\s*khaimah|deliver|install|nationwide)/i],
    reply: () =>
      `🇦🇪 Yes! We operate across the **UAE**, serving:\n- Dubai\n- Abu Dhabi\n- Sharjah\n- Ajman & Northern Emirates\n\nWe handle delivery and professional installation at your site. Contact us to discuss your project location!`,
  },
  {
    patterns: [/\b(thank|thanks|thx|appreciate|great|awesome|perfect|good|helpful)/i],
    reply: () =>
      `😊 You're very welcome! It was a pleasure helping you.\n\nIf you have any more questions or want to get started on a project, don't hesitate to reach out:\n📞 ${CONTACT.phone}\n📧 ${CONTACT.email}\n\nHave a wonderful day! ✨`,
  },
  {
    patterns: [/\b(bye|goodbye|see\s*you|later|ciao|tata)/i],
    reply: () => `👋 Goodbye! Feel free to chat anytime. We'd love to work with you! 😊`,
  },
]

const FALLBACK = `I'm not sure about that specific query, but our team can definitely help you! 🤝\n\nFor complex questions or custom requirements, please reach out directly:\n\n📞 **${CONTACT.phone}**\n📧 **${CONTACT.email}**\n💬 [WhatsApp](${CONTACT.whatsapp})\n\nOr you can also ask me about our **services**, **pricing**, **location**, or **working hours**!`

const GREETING = `👋 Hi there! I'm **Sign Den's** virtual assistant.\n\nHow can I help you today? You can ask me about:\n• Our services & products\n• Pricing & free quotes\n• Our location & contact\n• Working hours\n• Past projects & gallery`

function getReply(input) {
  const text = input.trim()
  for (const rule of RULES) {
    if (rule.patterns.some(p => p.test(text))) {
      return rule.reply()
    }
  }
  return FALLBACK
}

// ─── Markdown-lite renderer ──────────────────────────────────────────────────
function renderMessage(text) {
  // Bold: **text**
  let html = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Links: [label](url)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Newlines → <br>
    .replace(/\n/g, '<br>')
  return html
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: GREETING, id: 0 },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [unread, setUnread] = useState(1)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  const idRef = useRef(1)

  useEffect(() => {
    if (open) {
      setUnread(0)
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendMessage = useCallback(() => {
    const text = input.trim()
    if (!text) return

    const userMsg = { from: 'user', text, id: idRef.current++ }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const reply = getReply(text)
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: reply, id: idRef.current++ }])
      if (!open) setUnread(n => n + 1)
    }, 800)
  }, [input, open])

  const handleKey = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }, [sendMessage])

  const quickReplies = ['Our Services', 'Get a Quote', 'Our Location', 'Working Hours']

  const sendQuick = (text) => {
    setInput(text)
    // Use a microtask so state is updated before sendMessage reads it
    setTimeout(() => {
      const userMsg = { from: 'user', text, id: idRef.current++ }
      setMessages(prev => [...prev, userMsg])
      setTyping(true)
      setTimeout(() => {
        setTyping(false)
        setMessages(prev => [...prev, { from: 'bot', text: getReply(text), id: idRef.current++ }])
      }, 800)
      setInput('')
    }, 0)
  }

  return (
    <>
      {/* FAB Stack (WhatsApp + Chatbot) */}
      <div className="chatbot-fab-stack">

        {/* WhatsApp FAB */}
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-fab"
          aria-label="Chat on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        {/* Chatbot FAB */}
        <button
          className={`chatbot-fab ${open ? 'chatbot-fab--open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close chat' : 'Open chat'}
        >
          {unread > 0 && !open && (
            <span className="chatbot-badge">{unread}</span>
          )}
          <span className="chatbot-fab-icon chatbot-fab-icon--chat">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.73V7h3a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1v-1a3 3 0 0 1 3-3h3V5.73A2 2 0 0 1 12 2zm-3 9a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm-6 5h6v1H9v-1z"/>
            </svg>
          </span>
          <span className="chatbot-fab-icon chatbot-fab-icon--close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </span>
        </button>
      </div>

      {/* Chat Window */}
      <div className={`chatbot-window ${open ? 'chatbot-window--open' : ''}`} role="dialog" aria-label="Sign Den Chat Support">
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-avatar">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.73V7h3a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1v-1a3 3 0 0 1 3-3h3V5.73A2 2 0 0 1 12 2zm-3 9a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm-6 5h6v1H9v-1z"/>
            </svg>
          </div>
          <div className="chatbot-header-info">
            <p className="chatbot-header-name">Sign Den Support</p>
            <p className="chatbot-header-status">
              <span className="chatbot-status-dot" />
              Online
            </p>
          </div>
          <button className="chatbot-header-close" onClick={() => setOpen(false)} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`chatbot-msg chatbot-msg--${msg.from}`}>
              {msg.from === 'bot' && (
                <div className="chatbot-msg-avatar">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.73V7h3a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1v-1a3 3 0 0 1 3-3h3V5.73A2 2 0 0 1 12 2zm-3 9a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm-6 5h6v1H9v-1z"/>
                  </svg>
                </div>
              )}
              <div
                className="chatbot-bubble"
                dangerouslySetInnerHTML={{ __html: renderMessage(msg.text) }}
              />
            </div>
          ))}

          {typing && (
            <div className="chatbot-msg chatbot-msg--bot">
              <div className="chatbot-msg-avatar">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.73V7h3a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1v-1a3 3 0 0 1 3-3h3V5.73A2 2 0 0 1 12 2zm-3 9a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm-6 5h6v1H9v-1z"/>
                </svg>
              </div>
              <div className="chatbot-bubble chatbot-bubble--typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick Replies */}
        <div className="chatbot-quick">
          {quickReplies.map(q => (
            <button key={q} className="chatbot-quick-btn" onClick={() => sendQuick(q)}>
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="chatbot-input-row">
          <input
            ref={inputRef}
            type="text"
            className="chatbot-input"
            placeholder="Type your message…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            aria-label="Chat message"
          />
          <button
            className="chatbot-send"
            onClick={sendMessage}
            disabled={!input.trim()}
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
