import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Map, 
  Mountain, 
  Truck, 
  Radio, 
  Droplets, 
  Home, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  Play
} from 'lucide-react';
import TerrainMap from './components/TerrainMap';
import TerrainProfile from './components/TerrainProfile';
import { SCENARIOS, Scenario } from './types';

import { getCommanderBriefing } from './services/gemini';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<'welcome' | 'playing' | 'feedback' | 'finished'>('welcome');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; explanation: string; consequence: string } | null>(null);
  const [score, setScore] = useState(0);
  const [briefing, setBriefing] = useState<string>("Đang kết nối với Chỉ huy trưởng...");

  useEffect(() => {
    const fetchBriefing = async () => {
      const text = await getCommanderBriefing();
      if (text) setBriefing(text);
    };
    if (gameState === 'welcome') {
      fetchBriefing();
    }
  }, [gameState]);

  const currentScenario = SCENARIOS[currentScenarioIndex];

  const handleStart = () => {
    setGameState('playing');
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOptionId(optionId);
  };

  const handleConfirm = () => {
    if (!selectedOptionId) return;

    const option = currentScenario.options.find(o => o.id === selectedOptionId);
    if (option) {
      if (option.isCorrect) setScore(s => s + 1);
      setFeedback({
        isCorrect: option.isCorrect,
        explanation: option.explanation,
        consequence: option.consequence
      });
      setGameState('feedback');
    }
  };

  const handleNext = () => {
    if (currentScenarioIndex < SCENARIOS.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setFeedback(null);
      setGameState('playing');
    } else {
      setGameState('finished');
    }
  };

  const handleRestart = () => {
    setCurrentScenarioIndex(0);
    setSelectedOptionId(null);
    setFeedback(null);
    setScore(0);
    setGameState('welcome');
  };

  const getIconForScenario = (id: number) => {
    switch (id) {
      case 1: return <Truck className="w-6 h-6" />;
      case 2: return <Radio className="w-6 h-6" />;
      case 3: return <Droplets className="w-6 h-6" />;
      case 4: return <Home className="w-6 h-6" />;
      default: return <Map className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-100">
      {/* Header */}
      <header className="bg-emerald-800 text-white py-4 px-6 shadow-lg flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Chỉ Huy Cứu Hộ Vùng Cao</h1>
            <p className="text-xs text-emerald-200 font-medium uppercase tracking-widest">
              Lực Lượng Cứu Hộ Khẩn Cấp
            </p>
          </div>
        </div>
        {gameState !== 'welcome' && (
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] uppercase text-emerald-300 font-bold">Tiến độ</p>
              <p className="text-sm font-bold">{currentScenarioIndex + 1} / {SCENARIOS.length}</p>
            </div>
            <div className="h-8 w-px bg-emerald-700 hidden sm:block" />
            <div className="text-right">
              <p className="text-[10px] uppercase text-emerald-300 font-bold">Điểm số</p>
              <p className="text-sm font-bold">{score * 100}</p>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-5xl mx-auto p-4 sm:p-8">
        <AnimatePresence mode="wait">
          {gameState === 'welcome' && (
            <motion.div 
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center text-center py-12"
            >
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-8 shadow-inner">
                <Mountain className="w-12 h-12 text-emerald-700" />
              </div>
              <h2 className="text-4xl font-black text-stone-800 mb-4">Chào mừng Phó chỉ huy!</h2>
              
              <p className="text-lg text-stone-600 max-w-2xl mb-12 leading-relaxed italic">
                "{briefing}"
              </p>
              <button 
                onClick={handleStart}
                className="group relative flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-emerald-200 active:scale-95"
              >
                Bắt đầu Nhiệm vụ
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {gameState === 'playing' && (
            <motion.div 
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            >
              {/* Left Side: Map/Profile */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Map className="w-5 h-5 text-emerald-700" />
                  <h3 className="font-bold text-stone-700 uppercase tracking-wider text-sm">
                    {currentScenario.mapType === 'contour' ? 'Lược đồ đường đồng mức' : 'Lát cắt địa hình'}
                  </h3>
                </div>
                {currentScenario.mapType === 'contour' ? <TerrainMap /> : <TerrainProfile />}
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3">
                  <Info className="w-5 h-5 text-blue-500 shrink-0" />
                  <p className="text-sm text-blue-700 leading-snug">
                    {currentScenario.mapType === 'contour' 
                      ? "Gợi ý: Các đường đồng mức càng gần nhau thì dốc càng đứng. Càng xa nhau thì dốc càng thoải."
                      : "Gợi ý: Quan sát độ dốc của các sườn núi trên lát cắt để phán đoán tốc độ dòng chảy của nước."}
                  </p>
                </div>
              </div>

              {/* Right Side: Scenario & Options */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                      {getIconForScenario(currentScenario.id)}
                    </div>
                    <h3 className="text-xl font-bold text-stone-800">{currentScenario.title}</h3>
                  </div>
                  <p className="text-stone-600 leading-relaxed mb-8 text-lg italic">
                    "{currentScenario.description}"
                  </p>

                  <div className="space-y-3">
                    {currentScenario.options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleOptionSelect(option.id)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                          selectedOptionId === option.id
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-md'
                            : 'border-stone-100 bg-stone-50 text-stone-600 hover:border-stone-300'
                        }`}
                      >
                        <span className="font-bold">{option.label}</span>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selectedOptionId === option.id ? 'border-emerald-600 bg-emerald-600' : 'border-stone-300'
                        }`}>
                          {selectedOptionId === option.id && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={!selectedOptionId}
                    onClick={handleConfirm}
                    className="w-full mt-8 bg-stone-800 hover:bg-stone-900 disabled:bg-stone-300 text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
                  >
                    Xác nhận Quyết định
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {gameState === 'feedback' && feedback && (
            <motion.div 
              key="feedback"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="max-w-2xl mx-auto"
            >
              <div className={`p-8 rounded-3xl shadow-2xl border-4 ${
                feedback.isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-center gap-4 mb-6">
                  {feedback.isCorrect ? (
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                      <AlertTriangle className="w-10 h-10" />
                    </div>
                  )}
                  <div>
                    <h3 className={`text-2xl font-black ${feedback.isCorrect ? 'text-emerald-800' : 'text-red-800'}`}>
                      {feedback.isCorrect ? 'TUYỆT VỜI, PHÓ CHỈ HUY!' : 'CẨN THẬN, PHÓ CHỈ HUY!'}
                    </h3>
                    <p className="text-stone-500 font-bold uppercase tracking-widest text-xs">Báo cáo kết quả nhiệm vụ</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/50 p-6 rounded-2xl">
                    <h4 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                      <Info className="w-4 h-4 text-stone-400" />
                      Phân tích địa lý:
                    </h4>
                    <p className="text-stone-600 leading-relaxed italic">
                      {feedback.explanation}
                    </p>
                  </div>

                  <div className={`p-6 rounded-2xl ${feedback.isCorrect ? 'bg-emerald-100/50' : 'bg-red-100/50'}`}>
                    <h4 className={`font-bold mb-2 ${feedback.isCorrect ? 'text-emerald-800' : 'text-red-800'}`}>
                      Hậu quả thực tế:
                    </h4>
                    <p className={feedback.isCorrect ? 'text-emerald-700' : 'text-red-700'}>
                      {feedback.consequence}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className={`w-full mt-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 ${
                    feedback.isCorrect 
                      ? 'bg-emerald-700 hover:bg-emerald-800 text-white' 
                      : 'bg-stone-800 hover:bg-stone-900 text-white'
                  }`}
                >
                  {currentScenarioIndex < SCENARIOS.length - 1 ? 'Tiếp tục Nhiệm vụ' : 'Xem Báo cáo Tổng kết'}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {gameState === 'finished' && (
            <motion.div 
              key="finished"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center py-12"
            >
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center shadow-inner">
                  <Shield className="w-16 h-16 text-emerald-700" />
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute -bottom-2 -right-2 bg-yellow-400 text-stone-900 font-black px-4 py-2 rounded-full shadow-lg border-4 border-white"
                >
                  {score * 100} ĐIỂM
                </motion.div>
              </div>
              
              <h2 className="text-4xl font-black text-stone-800 mb-4">Nhiệm vụ Hoàn tất!</h2>
              <p className="text-lg text-stone-600 max-w-2xl mb-12 leading-relaxed">
                {score === SCENARIOS.length 
                  ? `Xuất sắc, Phó chỉ huy! Bạn đã chứng minh mình là một chuyên gia địa hình thực thụ. Toàn bộ vùng cao đã được an toàn nhờ sự nhạy bén của bạn.`
                  : score >= SCENARIOS.length / 2
                  ? `Làm tốt lắm! Bạn đã cứu được nhiều người, nhưng vẫn còn một vài sai sót nhỏ trong việc đọc bản đồ. Hãy rèn luyện thêm nhé!`
                  : `Nhiệm vụ đầy thử thách. Đừng nản lòng, hãy quay lại quan sát kỹ các đường đồng mức và lát cắt để hiểu rõ hơn về địa hình.`}
              </p>

              <div className="flex gap-4">
                <button 
                  onClick={handleRestart}
                  className="flex items-center gap-2 bg-stone-200 hover:bg-stone-300 text-stone-700 px-8 py-4 rounded-2xl font-bold transition-all active:scale-95"
                >
                  <RotateCcw className="w-5 h-5" />
                  Làm lại từ đầu
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 px-6 border-t border-stone-200 text-center text-stone-400 text-sm">
        <p>© 2026 Lực Lượng Cứu Hộ Vùng Cao - Học liệu Địa lý Lớp 6</p>
      </footer>
    </div>
  );
};

export default App;
