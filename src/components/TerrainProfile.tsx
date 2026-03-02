import React from 'react';

const TerrainProfile: React.FC = () => {
  return (
    <div className="relative w-full aspect-video bg-sky-50 rounded-2xl border-2 border-sky-200 overflow-hidden shadow-inner">
      <svg viewBox="0 0 600 300" className="w-full h-full">
        {/* Background Grid */}
        <defs>
          <pattern id="grid-profile" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-profile)" />

        {/* Axis Labels */}
        <g className="font-sans text-[10px] fill-stone-500">
          <text x="10" y="20">Cao độ (m)</text>
          <text x="540" y="280">Khoảng cách</text>
          
          <text x="10" y="250">0</text>
          <text x="10" y="200">500</text>
          <text x="10" y="150">1000</text>
          <text x="10" y="100">1500</text>
          <text x="10" y="50">2000</text>
        </g>

        {/* Terrain Profile Path */}
        {/* From Bach Ma (left) to Phan Thiet (right) */}
        {/* Ngoc Linh is the highest peak */}
        <path 
          d="M 0 250 
             L 50 220 
             L 100 240 
             L 150 50 
             L 180 180 
             L 250 150 
             L 350 160 
             L 450 220 
             L 550 245 
             L 600 250" 
          fill="rgba(34, 197, 94, 0.2)" 
          stroke="#15803d" 
          strokeWidth="3" 
          strokeLinejoin="round"
        />

        {/* Specific Points */}
        {/* Ngoc Linh Peak (x=150, y=50) */}
        <circle cx="150" cy="50" r="4" fill="#ef4444" />
        <text x="140" y="40" className="text-xs font-bold fill-red-600">Đỉnh Ngọc Linh</text>

        {/* Rivers */}
        {/* Se San (x=120, y=230) - Steep Slope from Ngoc Linh */}
        <g>
          <path d="M 115 230 Q 120 240 125 230 T 135 230" fill="none" stroke="#2563eb" strokeWidth="2" />
          <text x="100" y="265" className="text-[10px] font-bold fill-blue-600">Sông Xê Xan</text>
          {/* Steepness Indicator */}
          <path d="M 150 50 L 120 230" stroke="rgba(239, 68, 68, 0.3)" strokeDasharray="4" strokeWidth="1" />
        </g>

        {/* Dong Nai (x=450, y=220) - Gentle Slope from Ngoc Linh */}
        <g>
          <path d="M 445 220 Q 450 230 455 220 T 465 220" fill="none" stroke="#2563eb" strokeWidth="2" />
          <text x="430" y="255" className="text-[10px] font-bold fill-blue-600">Sông Đồng Nai</text>
          {/* Steepness Indicator */}
          <path d="M 150 50 L 450 220" stroke="rgba(239, 68, 68, 0.3)" strokeDasharray="4" strokeWidth="1" />
        </g>

        {/* Labels for Regions */}
        <g className="font-sans text-[10px] fill-stone-600 italic">
          <text x="20" y="275">Bạch Mã</text>
          <text x="250" y="185">Các Cao Nguyên</text>
          <text x="530" y="275">Phan Thiết</text>
        </g>

        {/* Legend */}
        <rect x="450" y="10" width="140" height="50" rx="4" fill="white" fillOpacity="0.8" stroke="#ccc" />
        <text x="460" y="25" className="text-[10px] font-bold fill-stone-600">CHÚ GIẢI</text>
        <line x1="460" y1="35" x2="480" y2="35" stroke="#15803d" strokeWidth="2" />
        <text x="485" y="38" className="text-[8px] fill-stone-500">Đường lát cắt địa hình</text>
        <circle cx="465" cy="48" r="2" fill="#ef4444" />
        <text x="485" y="51" className="text-[8px] fill-stone-500">Đỉnh núi cao nhất</text>
      </svg>
    </div>
  );
};

export default TerrainProfile;
