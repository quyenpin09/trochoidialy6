import React from 'react';

const TerrainMap: React.FC = () => {
  return (
    <div className="relative w-full aspect-square bg-stone-100 rounded-2xl border-2 border-stone-300 overflow-hidden shadow-inner">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Background Grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Contour Lines - Peak A2 (Highest: 1200m) */}
        {/* Shifting inner circles down towards D2 to make it steep there, and gentle towards D1 */}
        <g stroke="rgba(139, 69, 19, 0.4)" fill="none" strokeWidth="1.5">
          <ellipse cx="200" cy="150" rx="150" ry="100" /> {/* 200m */}
          <ellipse cx="200" cy="160" rx="120" ry="80" />  {/* 400m */}
          <ellipse cx="200" cy="175" rx="90" ry="60" />   {/* 600m */}
          <ellipse cx="200" cy="190" rx="60" ry="40" />   {/* 800m */}
          <ellipse cx="200" cy="200" rx="40" ry="25" />   {/* 1000m */}
          <ellipse cx="200" cy="205" rx="20" ry="12" fill="rgba(139, 69, 19, 0.1)" /> {/* 1200m */}
        </g>

        {/* Peak A1 (900m) - Slightly asymmetric */}
        <g stroke="rgba(139, 69, 19, 0.4)" fill="none" strokeWidth="1.5">
          <ellipse cx="80" cy="280" rx="60" ry="40" />  {/* 200m */}
          <ellipse cx="85" cy="285" rx="40" ry="25" />  {/* 500m */}
          <ellipse cx="90" cy="290" rx="20" ry="12" fill="rgba(139, 69, 19, 0.1)" /> {/* 900m */}
        </g>

        {/* Peak A3 (1000m) - Slightly asymmetric */}
        <g stroke="rgba(139, 69, 19, 0.4)" fill="none" strokeWidth="1.5">
          <ellipse cx="320" cy="280" rx="70" ry="45" />  {/* 200m */}
          <ellipse cx="315" cy="285" rx="45" ry="30" />  {/* 600m */}
          <ellipse cx="310" cy="290" rx="25" ry="15" fill="rgba(139, 69, 19, 0.1)" /> {/* 1000m */}
        </g>

        {/* Labels for Peaks */}
        <g className="font-sans font-bold text-xs fill-stone-800">
          <text x="185" y="210">A2 (1200m)</text>
          <text x="75" y="305">A1 (900m)</text>
          <text x="295" y="305">A3 (1000m)</text>
        </g>

        {/* Points D1, D2 (Routes to A2) */}
        {/* D1 to A2: Gentle Slope (Far apart) */}
        <circle cx="200" cy="30" r="4" fill="#ef4444" />
        <text x="210" y="35" className="text-xs font-bold fill-red-600">D1</text>
        
        {/* D2 to A2: Steep Slope (Close together) */}
        <circle cx="200" cy="260" r="4" fill="#ef4444" />
        <text x="210" y="265" className="text-xs font-bold fill-red-600">D2</text>

        {/* Points B1, B2, B3 */}
        <circle cx="100" cy="150" r="3" fill="#3b82f6" />
        <text x="105" y="145" className="text-[10px] fill-blue-600">B1</text>
        
        <circle cx="300" cy="150" r="3" fill="#3b82f6" />
        <text x="305" y="145" className="text-[10px] fill-blue-600">B2</text>
        
        <circle cx="200" cy="220" r="3" fill="#3b82f6" />
        <text x="205" y="215" className="text-[10px] fill-blue-600">B3</text>

        {/* Point C (Safe area) */}
        <circle cx="350" cy="50" r="4" fill="#10b981" />
        <text x="360" y="55" className="text-xs font-bold fill-emerald-600">C</text>

        {/* Legend */}
        <rect x="10" y="10" width="120" height="60" rx="4" fill="white" fillOpacity="0.8" stroke="#ccc" />
        <text x="20" y="25" className="text-[10px] font-bold fill-stone-600">CHÚ GIẢI</text>
        <line x1="20" y1="35" x2="40" y2="35" stroke="rgba(139, 69, 19, 0.6)" strokeWidth="1" />
        <text x="45" y="38" className="text-[8px] fill-stone-500">Đường đồng mức</text>
        <circle cx="25" cy="48" r="2" fill="#ef4444" />
        <text x="45" y="51" className="text-[8px] fill-stone-500">Điểm xuất phát</text>
        <text x="20" y="63" className="text-[8px] italic fill-stone-400">Khoảng cách 200m</text>
      </svg>
    </div>
  );
};

export default TerrainMap;
