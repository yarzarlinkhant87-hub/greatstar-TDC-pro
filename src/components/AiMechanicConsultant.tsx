import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Wrench, 
  HelpCircle, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  RefreshCw,
  Lightbulb
} from 'lucide-react';

interface AiMechanicConsultantProps {
  initialPrompt?: string;
  initialVehicle?: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AiMechanicConsultant: React.FC<AiMechanicConsultantProps> = ({
  initialPrompt,
  initialVehicle,
}) => {
  const [vehicleInfo, setVehicleInfo] = useState<string>(
    initialVehicle || 'Toyota Probox 1NZ-FE (U340E Automatic)'
  );
  const [question, setQuestion] = useState<string>(initialPrompt || '');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `မင်္ဂလာပါ ဆရာ။ ကျွန်တော်သည် မြန်မာကားဝပ်ရှော့များအတွက် ကား Error Code (OBD-II DTC) စစ်ဆေးဖတ်ရှုခြင်းနှင့် အော်တို/CVT ဂီယာဝိုင်ယာ၊ Solenoid Resistance (Ohm) တိုင်းတာစစ်ဆေးနည်းများကို ကူညီလမ်းညွှန်ပေးသည့် **ဆရာကြီး AI** ဖြစ်ပါသည်။

မိမိစစ်ဆေးလိုသော ကားအမျိုးအစား၊ ပေါ်နေသော Error Code သို့မဟုတ် ဖြစ်ပွားနေသော ဂီယာ/အင်ဂျင် ပြဿနာကို မြန်မာလို အသေးစိတ် မေးမြန်းနိုင်ပါသည်ခင်ဗျာ။`
    }
  ]);

  const quickQuestions = [
    'Toyota Probox ဂီယာ ၃ မဝင်ဘဲ စက်သံကျယ်နေတယ် ဘာစစ်ရမလဲ?',
    'P0705 Range sensor ကုတ်ပေါ်နေတယ် ဝိုင်ယာကြိုး စစ်ဆေးနည်း ပြောပြပေးပါ',
    'Toyota Fielder CVT ဆီလဲပြီးနောက် စထွက်ချိန် ဘာကြောင့် တဆတ်ဆတ် တုန်တာလဲ?',
    'P0750 Shift Solenoid 1 ပျက်ရင် မာတီမီတာနဲ့ ဘယ်လို အွမ်တိုင်းရမလဲ?',
    'P0171 System Too Lean ကုတ်အတွက် လေဆင်ဆာနဲ့ လေခိုး ဘယ်လိုစစ်ရမလဲ?'
  ];

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || question;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setQuestion('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/diagnostic/ask-mechanic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: textToSend,
          vehicleInfo: vehicleInfo,
        }),
      });

      const data = await res.json();
      if (data.success && data.answer) {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: data.answer }
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          { 
            role: 'assistant', 
            content: 'ဆာဗာမှ ဖြေကြားရာတွင် အခက်အခဲရှိနေပါသည်။ ကျေးဇူးပြု၍ ပြန်လည်မေးမြန်းကြည့်ပါ။' 
          }
        ]);
      }
    } catch (err: any) {
      setMessages(prev => [
        ...prev,
        { 
          role: 'assistant', 
          content: 'ကွန်ရက်ချိတ်ဆက်မှု မအောင်မြင်ပါ။ အင်တာနက်ချိတ်ဆက်မှုကို စစ်ဆေးပြီး ပြန်လည်ကြိုးစားပါ။' 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              AI MECHANIC SPECIALIST (GEMINI 3.8 FLASH)
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-['Chakra_Petch',sans-serif]">
              ဆရာကြီး AI - ကားဝိုင်ယာနှင့် မက္ကင်းနစ် အကြံပေး
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-['Padauk',sans-serif]">
              မည်သည့် ကားချွတ်ယွင်းချက်၊ ဂီယာဝိုင်ယာကြိုးအရောင်၊ ဘားဘော်ဒီ ဆလိုးနွိုက် အွမ်တန်ဖိုးနှင့် ပြုပြင်စစ်ဆေးနည်းများကိုမဆို မြန်မာဘာသာဖြင့် တိုက်ရိုက် မေးမြန်းနိုင်ပါသည်
            </p>
          </div>
        </div>
      </div>

      {/* Vehicle Info Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-medium">စစ်ဆေးနေသော ယာဉ်:</span>
          <input
            type="text"
            value={vehicleInfo}
            onChange={(e) => setVehicleInfo(e.target.value)}
            placeholder="ဥပမာ- Toyota Probox, Honda Fit, Nissan Note..."
            className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-amber-500 w-64 font-['Padauk',sans-serif]"
          />
        </div>

        <div className="text-[11px] text-slate-400 font-['Padauk',sans-serif]">
          💡 ယာဉ်အချက်အလက် ပိုမိုတိကျလေ ပိုမိုမှန်ကန်သော အဖြေ ရရှိလေဖြစ်ပါသည်
        </div>
      </div>

      {/* Chat Messages Container */}
      <div className="bg-slate-950 border-2 border-slate-800 rounded-2xl shadow-xl flex flex-col h-[520px]">
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-slate-950 font-bold flex items-center justify-center shrink-0 shadow mt-0.5">
                  <Bot className="w-5 h-5 text-slate-950" />
                </div>
              )}

              <div
                className={`max-w-2xl rounded-2xl p-4 text-xs sm:text-sm font-['Padauk',sans-serif] leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-md rounded-tr-none'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 shadow-md rounded-tl-none whitespace-pre-line'
                }`}
              >
                {msg.content}
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 border border-slate-700 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-slate-950 font-bold flex items-center justify-center shrink-0 shadow">
                <Bot className="w-5 h-5 text-slate-950" />
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 text-xs text-amber-300 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                <span className="font-['Padauk',sans-serif]">ဆရာကြီး AI စဉ်းစားတွေးခေါ် ဖြေကြားနေပါသည်...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Question Suggestions */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-900/60 overflow-x-auto scrollbar-none flex items-center gap-2">
          <span className="text-[11px] text-slate-500 shrink-0 font-['Padauk',sans-serif]">မေးလေ့ရှိသည်များ:</span>
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="text-[11px] whitespace-nowrap bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded-lg border border-slate-700 transition cursor-pointer font-['Padauk',sans-serif]"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3.5 border-t border-slate-800 bg-slate-900 rounded-b-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="မေးမြန်းလိုသည့် Error Code သို့မဟုတ် ကားပြဿနာကို ရိုက်ထည့်ပါ..."
              className="flex-1 bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition font-['Padauk',sans-serif]"
            />
            <button
              type="submit"
              disabled={isLoading || !question.trim()}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50 shadow"
            >
              <span>မေးမည်</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
