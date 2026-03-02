"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BackgroundPattern from "./components/BackgroundPattern";
// import Image from "next/image"; // 使っていない場合は削除可
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  
  // ★AOSの初期化
  useEffect(() => {
    AOS.init({
      duration: 800, // ふわっとする速度
      once: true,    // 1回だけ再生
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-gray-700 flex items-center justify-center py-24 px-4">
      
      <BackgroundPattern />

      <div className="max-w-5xl w-full mx-auto grid grid-cols-12 gap-8">
        
        {/* === 左側: プロフィール === */}
        <div 
          className="col-span-12 lg:col-span-4 h-fit lg:sticky lg:top-10"
          data-aos="fade-right"
        >
          <div className="bg-white rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.2)] p-6 text-center">
            <div className="relative w-48 h-48 mx-auto -mt-16 mb-6 rounded-3xl shadow-md bg-gray-200">
               <img 
                 src="/IMG_2883.jpeg" 
                 alt="Profile" 
                 className="object-cover w-full h-full rounded-3xl"
               />
            </div>
            {/* ふりがな（少し小さく薄い文字で） */}
              <p className="text-sm text-gray-400 font-medium mb-1 tracking-wider">たにぐち かお</p>

              {/* 名前（漢字で大きく） */}
              <h2 className="text-3xl font-bold text-gray-800 mb-2">谷口 香央</h2>

              {/* 職種タグ（下の余白 mb-8 をつけて、次のリストとの間隔を確保） */}
              <p className="text-gray-500 mb-8 bg-gray-100 inline-block px-4 py-1.5 rounded-lg text-sm">
                  大阪公立大学 <br />
                  工学部情報工学科 4年生
              </p>

            <div className="bg-gray-50 rounded-2xl p-6 text-left space-y-4">
              <InfoItem icon={<FaPhoneAlt />} title="Phone" value="090-9288-3182" color="text-pink-500" />
              <InfoItem icon={<FaEnvelope />} title="Email" value="se23466a@st.omu.ac.jp" color="text-green-500" />
              <InfoItem icon={<FaMapMarkerAlt />} title="Location" value="Osaka, Japan" color="text-purple-500" />
            </div>

          </div>
        </div>

        {/* === 右側: コンテンツエリア === */}
        <div className="col-span-12 lg:col-span-8 space-y-8">

          {/* About Me: 下からふわっと (fade-up) */}
          <div 
            className="bg-white rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.2)] p-10"
            data-aos="fade-up"
            data-aos-delay="100" // 少し遅れて出る
          >
            <SectionTitle title="自己紹介" />

              <div className="space-y-6 text-gray-700 leading-loose">
                {/* 1段落目：基本情報と研究 */}
                <p>
                  大阪公立大学工学部情報工学科4年生の谷口香央です。<br />
                  スマートプラットフォーム研究室に所属しており、<span className="font-bold text-gray-900">屋内測位システムの開発やデータ解析</span>に関わっています。
                </p>

                {/* 2段落目：デザインの実績（ここが一番の強み！） */}
                <p>
                  また、1年生のときに白鷺祭実行委員の情報部でポスターや大弾幕のデザインに関わり、2年生以降はアカペラサークルのライブにてデザイン部としてフライヤーやバンドパンフレットページのデザインを担当してきました。<br />
                  大学生活を通して、<span className="font-bold border-b-2 border-orange-400">「頭の中のデザインを形にする能力」</span>を実践的に養っています。
                </p>

                {/* 3段落目：将来のビジョン（背景色をつけて目立たせる） */}
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-orange-500 mt-8">
                  <p className="font-medium text-gray-900 m-0">
                    将来は<span className="text-orange-600 font-bold">技術とデザインの両方を活かして</span>、ユーザーに喜ばれるサービスを作りたいと考えています。
                  </p>
                </div>
              </div>

            <div className="mt-12">
              <SectionTitle title="使える言語フレームワーク・ツール" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <ServiceCard title="Web Development" desc="モダンな技術を使った高速なサイト構築" icon="💻" color="bg-orange-50" />
                 <ServiceCard title="UI/UX Design" desc="使いやすく美しいデザインの設計" icon="🎨" color="bg-blue-50" />
                 <ServiceCard title="App Development" desc="スマホアプリの開発もお任せください" icon="📱" color="bg-pink-50" />
                 <ServiceCard title="Photography" desc="写真撮影も趣味で行っています" icon="📷" color="bg-green-50" />
              </div>
            </div>
          </div>

          {/* Portfolio: 下からふわっと (fade-up) */}
          <div 
            className="bg-white rounded-3xl shadow-lg p-10"
            data-aos="fade-up"
            data-aos-delay="200" // さらに遅れて出る
          >
             <SectionTitle title="Portfolio" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-100 h-48 rounded-xl flex items-center justify-center text-orange-400 font-bold hover:scale-105 transition duration-300">Project 1</div>
                <div className="bg-blue-100 h-48 rounded-xl flex items-center justify-center text-blue-400 font-bold hover:scale-105 transition duration-300">Project 2</div>
             </div>
          </div>
          
           <footer className="text-center text-gray-400 text-sm py-4">
             © 2026 All Rights Reserved by Me.
           </footer>

        </div>
      </div>
    </div>
  );
}

// --- コンポーネント群 ---

const SocialIcon = ({ color, icon }: { color: string, icon: React.ReactNode }) => (
  <a href="#" className={`w-10 h-10 flex items-center justify-center rounded-lg transition hover:-translate-y-1 ${color}`}>
    {icon}
  </a>
);

const InfoItem = ({ icon, title, value, color }: { icon: React.ReactNode, title: string, value: string, color: string }) => (
  <div className="flex items-center gap-4 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
    <div className={`text-xl ${color} bg-white shadow-sm p-2 rounded-lg`}>{icon}</div>
    <div>
      <p className="text-xs text-gray-400">{title}</p>
      <p className="text-sm font-medium text-gray-700">{value}</p>
    </div>
  </div>
);

const MenuLink = ({ text, active = false }: { text: string, active?: boolean }) => (
  <a href="#" className={`px-4 py-2 rounded-lg transition ${active ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md' : 'hover:bg-gray-100'}`}>
    {text}
  </a>
);

const SectionTitle = ({ title }: { title: string }) => (
    <div className="relative mb-8 w-fit">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-rose-500 rounded mt-2"></div>
    </div>
);

const ServiceCard = ({ title, desc, icon, color }: { title: string, desc: string, icon: string, color: string }) => (
    <div className={`${color} p-6 rounded-2xl flex gap-4 items-start`}>
        <div className="text-3xl">{icon}</div>
        <div>
            <h4 className="font-bold text-gray-800 text-lg mb-1">{title}</h4>
            <p className="text-gray-500 text-sm">{desc}</p>
        </div>
    </div>
);