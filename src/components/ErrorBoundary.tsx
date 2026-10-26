import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  private handleClearCacheAndReset = () => {
    try {
      localStorage.removeItem('autocars_scanned_history');
      sessionStorage.clear();
    } catch {}
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 text-center space-y-4 shadow-2xl">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-['Padauk',sans-serif]">
                မျက်နှာပြင် ပြန်လည်စတင်ရန် လိုအပ်ပါသည်
              </h2>
              <p className="text-xs text-slate-400 font-['Padauk',sans-serif] mt-1 leading-relaxed">
                ဖုန်းဘရောက်ဇာ သို့မဟုတ် မမ်မိုရီ ခေတ္တရပ်တန့်သွားခဲ့ပါသည်။ အောက်ပါခလုတ်ကို နှိပ်၍ အဆင်ပြေစွာ ဆက်လက် အသုံးပြုနိုင်ပါသည်ခင်ဗျာ။
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm rounded-xl transition cursor-pointer flex items-center justify-center gap-2 font-['Padauk',sans-serif] shadow-lg shadow-amber-500/25"
              >
                <RefreshCw className="w-4 h-4" />
                <span>အက်ပ်ကို ပြန်လည်စတင်မည် (Restart)</span>
              </button>

              <button
                type="button"
                onClick={this.handleClearCacheAndReset}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl transition cursor-pointer flex items-center justify-center gap-2 font-['Padauk',sans-serif] border border-slate-700"
              >
                <span>ယာယီမှတ်ဉာဏ် အသစ်ရှင်းလင်းပြီး ပြန်ဖွင့်မည် (Clear Cache & Reload)</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
