export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
      {/* pointer-events-none: 背景をクリックできないようにする
        -z-10: コンテンツより後ろに配置する
        fixed: スクロールしても背景が動かないようにする
      */}

      {/* --- 左上のエリア --- */}
      {/* ピンクの斜めストライプ（CSSグラデーションで表現） */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[repeating-linear-gradient(45deg,#FCE7F3,#FCE7F3_10px,#fff_10px,#fff_20px)] rounded-br-full opacity-60"></div>
      {/* 青い丸 */}
      <div className="absolute top-10 left-10 w-6 h-6 rounded-full border-4 border-blue-800"></div>
      {/* 黄緑の四角 */}
      <div className="absolute top-32 left-10 w-8 h-8 bg-lime-200 transform rotate-12"></div>
      {/* 紫の三角（SVGで描画） */}
      <svg className="absolute top-20 left-32 w-8 h-8 text-purple-300 transform -rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0 L100 100 L0 100 Z" />
      </svg>
      {/* 濃い青の棒 */}
      <div className="absolute top-40 left-[-10px] w-24 h-6 bg-blue-900 rounded-full transform rotate-45"></div>


      {/* --- 右上のエリア --- */}
      {/* 薄紫の四角エリア */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-100 rounded-bl-full opacity-50"></div>
      {/* ドット模様（CSSのbackground-imageで表現） */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-30" style={{ backgroundImage: 'radial-gradient(#8B5CF6 2px, transparent 2px)', backgroundSize: '10px 10px' }}></div>
      {/* ピンクの丸 */}
      <div className="absolute top-20 right-20 w-10 h-10 border-4 border-pink-200 rounded-full"></div>
      {/* 黄緑の棒 */}
      <div className="absolute top-10 right-40 w-20 h-5 bg-lime-300 rounded-full transform -rotate-45"></div>


      {/* --- 左下のエリア --- */}
      {/* 黄緑の三角エリア */}
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-lime-100 opacity-50" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}></div>
      {/* ギザギザ線（SVG） */}
      <svg className="absolute bottom-32 left-10 w-24 h-6 text-blue-900" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="5">
        <path d="M0 10 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10 L90 0 L100 10" />
      </svg>
      {/* ピンクの四角 */}
      <div className="absolute bottom-10 left-32 w-12 h-12 bg-pink-200 transform rotate-45 rounded-lg"></div>


      {/* --- 右下のエリア --- */}
      {/* ピンクの斜め背景 */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-100 transform rotate-12 translate-y-20 translate-x-20 rounded-tl-[80px]"></div>
      {/* 青い丸 */}
      <div className="absolute bottom-20 right-40 w-12 h-12 border-4 border-blue-900 rounded-full"></div>
      {/* 紫の四角 */}
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-300 transform rotate-12 rounded-lg opacity-80"></div>
      {/* ストライプの丸 */}
      <div className="absolute bottom-40 right-10 w-12 h-12 rounded-full bg-[repeating-linear-gradient(0deg,#333,#333_2px,transparent_2px,transparent_6px)] opacity-20"></div>

    </div>
  );
}