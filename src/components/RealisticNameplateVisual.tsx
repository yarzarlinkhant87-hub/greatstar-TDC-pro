import React from 'react';

interface RealisticNameplateVisualProps {
  plateId: string;
  className?: string;
}

export const RealisticNameplateVisual: React.FC<RealisticNameplateVisualProps> = ({
  plateId,
  className = '',
}) => {
  // Rivet component for the corners of metal nameplates
  const Rivet = ({ position }: { position: string }) => (
    <div
      className={`absolute ${position} w-3.5 h-3.5 rounded-full bg-gradient-to-br from-slate-300 via-slate-500 to-slate-800 border border-slate-600 shadow-inner flex items-center justify-center`}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-slate-900/80 shadow-inner" />
    </div>
  );

  switch (plateId) {
    case 'sample-wish-blue':
      return (
        <div
          className={`relative bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 text-slate-900 p-4 sm:p-5 rounded-xl border-2 border-slate-400 font-mono shadow-2xl select-none ${className}`}
        >
          <Rivet position="top-2 left-2" />
          <Rivet position="top-2 right-2" />
          <Rivet position="bottom-2 left-2" />
          <Rivet position="bottom-2 right-2" />

          {/* Toyota JDM Stamped Plate */}
          <div className="text-center border-b-2 border-slate-500 pb-1.5 mb-2.5">
            <div className="text-[10px] tracking-widest text-slate-700 font-bold uppercase">
              TOYOTA MOTOR CORPORATION
            </div>
            <div className="text-xs sm:text-sm font-black tracking-wider text-slate-950">
              MADE IN JAPAN
            </div>
          </div>

          <div className="space-y-1.5 text-[11px] sm:text-xs">
            <div className="flex justify-between items-center bg-slate-100/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">MODEL</span>
              <span className="font-black text-slate-950 font-mono tracking-wider">
                DBA-ZGE20G-HPXNP
              </span>
            </div>

            <div className="flex justify-between items-center bg-slate-100/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">ENGINE</span>
              <span className="font-black text-slate-950 font-mono">
                2ZR-FAE 1797cc (VALVEMATIC)
              </span>
            </div>

            <div className="flex justify-between items-center bg-slate-100/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">FRAME NO.</span>
              <span className="font-black text-blue-950 font-mono tracking-wider">
                ZGE20-0147194
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-slate-100/90 px-2 py-0.5 rounded border border-slate-300 flex justify-between">
                <span className="text-slate-600 font-bold">COLOR</span>
                <span className="font-black text-blue-700 font-mono">8V9 FA42</span>
              </div>
              <div className="bg-slate-100/90 px-2 py-0.5 rounded border border-slate-300 flex justify-between">
                <span className="text-slate-600 font-bold">TRANS/AXLE</span>
                <span className="font-black text-amber-700 font-mono">K311 -02A</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-600 pt-1 border-t border-slate-400">
              <span>PLANT / BUILT: A54</span>
              <span className="text-blue-800 font-bold font-['Padauk',sans-serif]">
                ★ ပုံထဲရှိ ကားပြာ မူရင်းနိမ်းပြား
              </span>
            </div>
          </div>
        </div>
      );

    case 'sample-wish-sport':
      return (
        <div
          className={`relative bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 text-slate-900 p-4 sm:p-5 rounded-xl border-2 border-slate-400 font-mono shadow-2xl select-none ${className}`}
        >
          <Rivet position="top-2 left-2" />
          <Rivet position="top-2 right-2" />
          <Rivet position="bottom-2 left-2" />
          <Rivet position="bottom-2 right-2" />

          <div className="text-center border-b-2 border-slate-500 pb-1 mb-2">
            <div className="text-[10px] tracking-widest text-slate-700 font-bold">
              TOYOTA MOTOR CORPORATION
            </div>
            <div className="text-xs sm:text-sm font-black text-slate-950">
              WISH 1.8S SPORT PADDLE SHIFT
            </div>
          </div>

          <div className="space-y-1.5 text-[11px] sm:text-xs">
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">MODEL</span>
              <span className="font-black text-indigo-950 font-mono">DBA-ZGE20W-HPXSP</span>
            </div>
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">ENGINE</span>
              <span className="font-black text-slate-950 font-mono">2ZR-FAE 1797cc</span>
            </div>
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">FRAME NO.</span>
              <span className="font-black text-indigo-950 font-mono">ZGE20-0032285</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-white/90 px-2 py-0.5 rounded border border-slate-300 flex justify-between">
                <span className="text-slate-600 font-bold">COLOR</span>
                <span className="font-black text-indigo-700 font-mono">8S6 FB12</span>
              </div>
              <div className="bg-white/90 px-2 py-0.5 rounded border border-slate-300 flex justify-between">
                <span className="text-slate-600 font-bold">TRANS/AXLE</span>
                <span className="font-black text-amber-700 font-mono">K311 -02A</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-600 pt-1 border-t border-slate-400">
              <span>PLANT: A54</span>
              <span className="text-indigo-800 font-bold">CVT-i 7-Speed Paddle Shift</span>
            </div>
          </div>
        </div>
      );

    case 'sample-revo':
      return (
        <div
          className={`relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-slate-100 p-4 sm:p-5 rounded-xl border-2 border-neutral-700 font-mono shadow-2xl select-none ${className}`}
        >
          <Rivet position="top-2 left-2" />
          <Rivet position="top-2 right-2" />
          <Rivet position="bottom-2 left-2" />
          <Rivet position="bottom-2 right-2" />

          {/* Thai VIN Barcode Plate */}
          <div className="border-b border-neutral-700 pb-1.5 mb-2.5 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-neutral-400 font-bold">
                TOYOTA MOTOR THAILAND CO., LTD.
              </div>
              <div className="text-xs sm:text-sm font-black text-amber-400">
                HILUX REVO 2.8D 4WD
              </div>
            </div>
            <div className="text-[9px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded font-mono border border-neutral-600">
              VIN TYPE
            </div>
          </div>

          <div className="space-y-1.5 text-[11px] sm:text-xs">
            <div className="bg-neutral-900/90 px-2 py-1 rounded border border-neutral-700 flex justify-between">
              <span className="text-neutral-400">VIN (CHASSIS)</span>
              <span className="font-black text-amber-300 tracking-wider">
                MROHA3CD6J0123456
              </span>
            </div>

            <div className="flex justify-between items-center bg-neutral-900/90 px-2 py-0.5 rounded border border-neutral-700">
              <span className="text-neutral-400">MODEL</span>
              <span className="font-bold text-white">GUN126R-DTTHXT</span>
            </div>

            <div className="flex justify-between items-center bg-neutral-900/90 px-2 py-0.5 rounded border border-neutral-700">
              <span className="text-neutral-400">ENGINE</span>
              <span className="font-bold text-emerald-400">1GD-FTV 2755cc 2200bar</span>
            </div>

            <div className="bg-neutral-900/90 px-2 py-0.5 rounded border border-neutral-700 flex justify-between">
              <span className="text-neutral-400">C/TR/A/TM</span>
              <span className="font-black text-amber-400">070 / LA20 / B02A / AC60F</span>
            </div>

            <div className="flex justify-between items-center text-[10px] text-neutral-400 pt-1 border-t border-neutral-800">
              <span>VIN 10th Digit: 'J' (2018)</span>
              <span className="text-amber-400 font-bold">6-Speed Auto 4WD</span>
            </div>
          </div>
        </div>
      );

    case 'sample-alphard':
      return (
        <div
          className={`relative bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 text-slate-900 p-4 sm:p-5 rounded-xl border-2 border-slate-400 font-mono shadow-2xl select-none ${className}`}
        >
          <Rivet position="top-2 left-2" />
          <Rivet position="top-2 right-2" />
          <Rivet position="bottom-2 left-2" />
          <Rivet position="bottom-2 right-2" />

          <div className="text-center border-b-2 border-slate-500 pb-1 mb-2">
            <div className="text-[10px] tracking-widest text-slate-700 font-bold">
              TOYOTA MOTOR CORPORATION
            </div>
            <div className="text-xs sm:text-sm font-black text-rose-900">
              ALPHARD 2.4 240S (ANH20W)
            </div>
          </div>

          <div className="space-y-1.5 text-[11px] sm:text-xs">
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">MODEL</span>
              <span className="font-black text-slate-950 font-mono">DBA-ANH20W-PFXSK</span>
            </div>
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">ENGINE</span>
              <span className="font-black text-slate-950 font-mono">2AZ-FE 2362cc 170PS</span>
            </div>
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">FRAME NO.</span>
              <span className="font-black text-rose-950 font-mono">ANH20-8012345</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-white/90 px-2 py-0.5 rounded border border-slate-300 flex justify-between">
                <span className="text-slate-600 font-bold">COLOR</span>
                <span className="font-black text-rose-700 font-mono">070 FG01</span>
              </div>
              <div className="bg-white/90 px-2 py-0.5 rounded border border-slate-300 flex justify-between">
                <span className="text-slate-600 font-bold">TRANS/AXLE</span>
                <span className="font-black text-amber-700 font-mono">K112 -01A</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-600 pt-1 border-t border-slate-400">
              <span>PLANT: B11</span>
              <span className="text-rose-800 font-bold font-['Padauk',sans-serif]">
                CVT FE သီးသန့် (TC မသုံးရ)
              </span>
            </div>
          </div>
        </div>
      );

    case 'sample-crown':
      return (
        <div
          className={`relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-slate-100 p-4 sm:p-5 rounded-xl border-2 border-slate-600 font-mono shadow-2xl select-none ${className}`}
        >
          <Rivet position="top-2 left-2" />
          <Rivet position="top-2 right-2" />
          <Rivet position="bottom-2 left-2" />
          <Rivet position="bottom-2 right-2" />

          <div className="text-center border-b border-slate-700 pb-1 mb-2">
            <div className="text-[10px] tracking-widest text-slate-400 font-bold">
              TOYOTA MOTOR CORPORATION
            </div>
            <div className="text-xs sm:text-sm font-black text-amber-400">
              CROWN ATHLETE 2.5 V6 (GRS200)
            </div>
          </div>

          <div className="space-y-1.5 text-[11px] sm:text-xs">
            <div className="flex justify-between items-center bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
              <span className="text-slate-400">MODEL</span>
              <span className="font-black text-white font-mono">DBA-GRS200-AETXH</span>
            </div>
            <div className="flex justify-between items-center bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
              <span className="text-slate-400">ENGINE</span>
              <span className="font-black text-amber-300 font-mono">
                4GR-FSE 2499cc D-4 V6
              </span>
            </div>
            <div className="flex justify-between items-center bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
              <span className="text-slate-400">FRAME NO.</span>
              <span className="font-black text-slate-200 font-mono">GRS200-0012345</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-slate-900 px-2 py-0.5 rounded border border-slate-700 flex justify-between">
                <span className="text-slate-400">COLOR</span>
                <span className="font-black text-slate-200 font-mono">202 LB20</span>
              </div>
              <div className="bg-slate-900 px-2 py-0.5 rounded border border-slate-700 flex justify-between">
                <span className="text-slate-400">TRANS/AXLE</span>
                <span className="font-black text-amber-400 font-mono">A960E B01A</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-slate-800">
              <span>PLANT: A11</span>
              <span className="text-amber-400 font-bold">ATF WS 6-Speed RWD</span>
            </div>
          </div>
        </div>
      );

    case 'sample-probox':
      return (
        <div
          className={`relative bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 text-slate-900 p-4 sm:p-5 rounded-xl border-2 border-slate-400 font-mono shadow-2xl select-none ${className}`}
        >
          <Rivet position="top-2 left-2" />
          <Rivet position="top-2 right-2" />
          <Rivet position="bottom-2 left-2" />
          <Rivet position="bottom-2 right-2" />

          <div className="text-center border-b-2 border-slate-500 pb-1 mb-2">
            <div className="text-[10px] tracking-widest text-slate-700 font-bold">
              TOYOTA MOTOR CORPORATION
            </div>
            <div className="text-xs sm:text-sm font-black text-cyan-900">
              PROBOX VAN 1.5 DX (NCP51V)
            </div>
          </div>

          <div className="space-y-1.5 text-[11px] sm:text-xs">
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">MODEL</span>
              <span className="font-black text-slate-950 font-mono">DBE-NCP51V-EXPDK</span>
            </div>
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">ENGINE</span>
              <span className="font-black text-slate-950 font-mono">1NZ-FE 1496cc</span>
            </div>
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">FRAME NO.</span>
              <span className="font-black text-cyan-950 font-mono">NCP51-0123456</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-white/90 px-2 py-0.5 rounded border border-slate-300 flex justify-between">
                <span className="text-slate-600 font-bold">COLOR</span>
                <span className="font-black text-slate-700 font-mono">058 FB10</span>
              </div>
              <div className="bg-white/90 px-2 py-0.5 rounded border border-slate-300 flex justify-between">
                <span className="text-slate-600 font-bold">TRANS/AXLE</span>
                <span className="font-black text-amber-700 font-mono">U340E -05A</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-600 pt-1 border-t border-slate-400">
              <span>PLANT: M21</span>
              <span className="text-cyan-800 font-bold">ATF Type T-IV (4-Speed)</span>
            </div>
          </div>
        </div>
      );

    case 'sample-honda-fit':
      return (
        <div
          className={`relative bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 text-slate-900 p-4 sm:p-5 rounded-xl border-2 border-slate-400 font-mono shadow-2xl select-none ${className}`}
        >
          <Rivet position="top-2 left-2" />
          <Rivet position="top-2 right-2" />
          <Rivet position="bottom-2 left-2" />
          <Rivet position="bottom-2 right-2" />

          <div className="text-center border-b-2 border-slate-500 pb-1 mb-2">
            <div className="text-[10px] tracking-widest text-slate-700 font-bold">
              HONDA MOTOR CO., LTD.
            </div>
            <div className="text-xs sm:text-sm font-black text-teal-950">
              HONDA FIT 1.3G (DBA-GE6)
            </div>
          </div>

          <div className="space-y-1.5 text-[11px] sm:text-xs">
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">TYPE</span>
              <span className="font-black text-slate-950 font-mono">DBA-GE6</span>
            </div>
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">ENGINE</span>
              <span className="font-black text-slate-950 font-mono">L13A 1339cc i-VTEC</span>
            </div>
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">CHASSIS NO.</span>
              <span className="font-black text-teal-950 font-mono">GE6-1045678</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-white/90 px-2 py-0.5 rounded border border-slate-300 flex justify-between">
                <span className="text-slate-600 font-bold">COLOR</span>
                <span className="font-black text-slate-800 font-mono">NH700M</span>
              </div>
              <div className="bg-white/90 px-2 py-0.5 rounded border border-slate-300 flex justify-between">
                <span className="text-slate-600 font-bold">TRANS</span>
                <span className="font-black text-teal-700 font-mono">MULTIMATIC CVT</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-600 pt-1 border-t border-slate-400">
              <span>MADE IN JAPAN</span>
              <span className="text-red-700 font-bold font-['Padauk',sans-serif]">
                Honda HMMF ဆီ သီးသန့်
              </span>
            </div>
          </div>
        </div>
      );

    case 'sample-fielder':
      return (
        <div
          className={`relative bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 text-slate-900 p-4 sm:p-5 rounded-xl border-2 border-slate-400 font-mono shadow-2xl select-none ${className}`}
        >
          <Rivet position="top-2 left-2" />
          <Rivet position="top-2 right-2" />
          <Rivet position="bottom-2 left-2" />
          <Rivet position="bottom-2 right-2" />

          <div className="text-center border-b-2 border-slate-500 pb-1 mb-2">
            <div className="text-[10px] tracking-widest text-slate-700 font-bold">
              TOYOTA MOTOR CORPORATION
            </div>
            <div className="text-xs sm:text-sm font-black text-emerald-950">
              COROLLA FIELDER 1.5G (NZE141)
            </div>
          </div>

          <div className="space-y-1.5 text-[11px] sm:text-xs">
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">MODEL</span>
              <span className="font-black text-slate-950 font-mono">DBA-NZE141G-AWXEK</span>
            </div>
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">ENGINE</span>
              <span className="font-black text-slate-950 font-mono">1NZ-FE 1496cc VVT-i</span>
            </div>
            <div className="flex justify-between items-center bg-white/90 px-2 py-0.5 rounded border border-slate-300">
              <span className="text-slate-600 font-bold">FRAME NO.</span>
              <span className="font-black text-emerald-950 font-mono">NZE141-9041234</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-white/90 px-2 py-0.5 rounded border border-slate-300 flex justify-between">
                <span className="text-slate-600 font-bold">COLOR</span>
                <span className="font-black text-slate-700 font-mono">070 FA20</span>
              </div>
              <div className="bg-white/90 px-2 py-0.5 rounded border border-slate-300 flex justify-between">
                <span className="text-slate-600 font-bold">TRANS/AXLE</span>
                <span className="font-black text-amber-700 font-mono">K310 -02A</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-600 pt-1 border-t border-slate-400">
              <span>PLANT: A54</span>
              <span className="text-emerald-800 font-bold">Super CVT-i (FE Fluid)</span>
            </div>
          </div>
        </div>
      );

    case 'sample-hino':
      return (
        <div
          className={`relative bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-slate-100 p-4 sm:p-5 rounded-xl border-2 border-slate-500 font-mono shadow-2xl select-none ${className}`}
        >
          <Rivet position="top-2 left-2" />
          <Rivet position="top-2 right-2" />
          <Rivet position="bottom-2 left-2" />
          <Rivet position="bottom-2 right-2" />

          <div className="text-center border-b border-slate-600 pb-1 mb-2">
            <div className="text-[10px] tracking-widest text-slate-300 font-bold">
              HINO MOTORS, LTD. TOKYO JAPAN
            </div>
            <div className="text-xs sm:text-sm font-black text-purple-300">
              HINO PROFIA 700 12.9L HEAVY DUTY
            </div>
          </div>

          <div className="space-y-1.5 text-[11px] sm:text-xs">
            <div className="flex justify-between items-center bg-slate-800 px-2 py-0.5 rounded border border-slate-600">
              <span className="text-slate-400">MODEL</span>
              <span className="font-black text-white font-mono">QKG-FR1EXEG</span>
            </div>
            <div className="flex justify-between items-center bg-slate-800 px-2 py-0.5 rounded border border-slate-600">
              <span className="text-slate-400">ENGINE</span>
              <span className="font-black text-purple-300 font-mono">
                E13C-TL 12,913cc (410 PS)
              </span>
            </div>
            <div className="flex justify-between items-center bg-slate-800 px-2 py-0.5 rounded border border-slate-600">
              <span className="text-slate-400">CHASSIS NO.</span>
              <span className="font-black text-slate-200 font-mono">FR1EXE-10258</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-slate-800 px-2 py-0.5 rounded border border-slate-600 flex justify-between">
                <span className="text-slate-400">TRANS</span>
                <span className="font-black text-amber-400 font-mono">M009 (7-SPD)</span>
              </div>
              <div className="bg-slate-800 px-2 py-0.5 rounded border border-slate-600 flex justify-between">
                <span className="text-slate-400">GVW</span>
                <span className="font-black text-slate-200 font-mono">24,980 kg</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-slate-700">
              <span>INJECTION: EUI (Cam-Driven)</span>
              <span className="text-purple-300 font-bold">၁၀ ဘီး ကုန်တင်ယာဉ်</span>
            </div>
          </div>
        </div>
      );

    case 'sample-bmw':
      return (
        <div
          className={`relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-slate-100 p-4 sm:p-5 rounded-xl border-2 border-neutral-700 font-mono shadow-2xl select-none ${className}`}
        >
          <div className="border-b border-neutral-700 pb-1 mb-2 flex items-center justify-between">
            <div className="text-[10px] text-neutral-400 font-bold tracking-widest">
              BAYERISCHE MOTOREN WERKE AG
            </div>
            <span className="text-[9px] bg-sky-900/60 text-sky-300 px-2 py-0.5 rounded border border-sky-600/50">
              EURO B-PILLAR
            </span>
          </div>

          <div className="space-y-1.5 text-[11px] sm:text-xs">
            <div className="bg-neutral-900 px-2 py-1 rounded border border-neutral-700 flex justify-between">
              <span className="text-neutral-400">VIN</span>
              <span className="font-black text-sky-400 tracking-wider">
                WBA8A12080K123456
              </span>
            </div>
            <div className="flex justify-between items-center bg-neutral-900 px-2 py-0.5 rounded border border-neutral-700">
              <span className="text-neutral-400">TYPE</span>
              <span className="font-bold text-white">BMW 320i Sedan (F30)</span>
            </div>
            <div className="flex justify-between items-center bg-neutral-900 px-2 py-0.5 rounded border border-neutral-700">
              <span className="text-neutral-400">ENGINE</span>
              <span className="font-bold text-sky-300">B48B20 1998cc Turbo</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-700 flex justify-between">
                <span className="text-neutral-400">PAINT</span>
                <span className="font-black text-slate-200">300 (White)</span>
              </div>
              <div className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-700 flex justify-between">
                <span className="text-neutral-400">GEARBOX</span>
                <span className="font-black text-amber-400">ZF 8HP50 8AT</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-neutral-400 pt-1 border-t border-neutral-800">
              <span>MADE IN GERMANY</span>
              <span className="text-sky-400 font-bold">ZF Lifeguard 8 ဆီသီးသန့်</span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div
          className={`relative bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 text-slate-900 p-4 rounded-xl border-2 border-slate-400 font-mono shadow-xl ${className}`}
        >
          <div className="text-center font-bold text-xs uppercase">AUTOMOTIVE NAMEPLATE</div>
          <div className="text-center font-mono text-[11px] text-slate-700 mt-2">
            MODEL: DBA-ZGE20G-HPXNP
          </div>
        </div>
      );
  }
};
