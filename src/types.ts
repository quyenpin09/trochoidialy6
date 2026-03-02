export interface Scenario {
  id: number;
  title: string;
  description: string;
  options: {
    id: string;
    label: string;
    isCorrect: boolean;
    explanation: string;
    consequence: string;
  }[];
  mapType: 'contour' | 'profile';
}

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "Tình huống Vận tải",
    description: "Một xe tải chở nhu yếu phẩm nặng 10 tấn cần lên đỉnh A2. Có hai con đường: từ D1 lên A2 và từ D2 lên A2. Là người chỉ huy, bạn chọn đường nào để xe không bị lật hoặc cháy phanh?",
    mapType: 'contour',
    options: [
      {
        id: 'D1-A2',
        label: "Đường từ D1 lên A2",
        isCorrect: true,
        explanation: "Chính xác! Các đường đồng mức từ D1 đến A2 thưa nhau, chứng tỏ địa hình thoải, an toàn cho xe tải nặng.",
        consequence: "Xe tải đã cập bến an toàn. Nhu yếu phẩm đã đến tay người dân!"
      },
      {
        id: 'D2-A2',
        label: "Đường từ D2 lên A2",
        isCorrect: false,
        explanation: "Nguy hiểm! Các đường đồng mức từ D2 đến A2 rất dày, chứng tỏ dốc cực kỳ đứng. Xe tải nặng 10 tấn sẽ bị cháy phanh hoặc lật.",
        consequence: "Xe tải bị kẹt giữa dốc! Chúng ta phải điều xe cứu hộ đến kéo."
      }
    ]
  },
  {
    id: 2,
    title: "Tình huống Quan sát",
    description: "Chúng ta cần đặt một trạm phát sóng để phủ sóng toàn bộ vùng thung lũng phía dưới. Giữa đỉnh A1, A2 và A3, đỉnh nào là lựa chọn tối ưu nhất để có tầm nhìn xa nhất?",
    mapType: 'contour',
    options: [
      {
        id: 'A1',
        label: "Đỉnh A1 (900m)",
        isCorrect: false,
        explanation: "Chưa tối ưu. A1 chỉ cao 900m, tầm nhìn sẽ bị che khuất bởi các đỉnh cao hơn xung quanh.",
        consequence: "Sóng yếu ở các vùng xa. Người dân vẫn chưa nhận được thông báo cứu hộ."
      },
      {
        id: 'A2',
        label: "Đỉnh A2 (1200m)",
        isCorrect: true,
        explanation: "Tuyệt vời! A2 là đỉnh cao nhất vùng (1200m), cho phép trạm phát sóng phủ sóng rộng nhất và xa nhất.",
        consequence: "Toàn bộ thung lũng đã có sóng! Mọi người đều đã nhận được lệnh sơ tán."
      },
      {
        id: 'A3',
        label: "Đỉnh A3 (1000m)",
        isCorrect: false,
        explanation: "Khá tốt nhưng chưa phải tốt nhất. A3 cao 1000m, vẫn thấp hơn A2 200m.",
        consequence: "Tầm nhìn bị hạn chế về phía Tây do đỉnh A2 che khuất."
      }
    ]
  },
  {
    id: 3,
    title: "Tình huống Thủy văn",
    description: "Mưa lớn đang đổ xuống đỉnh Ngọc Linh trên lát cắt địa hình. Theo phán đoán của bạn, nước sẽ đổ về phía Sông Xê Xan hay Sông Đồng Nai nhanh hơn và dữ dội hơn?",
    mapType: 'profile',
    options: [
      {
        id: 'Xesan',
        label: "Sông Xê Xan",
        isCorrect: true,
        explanation: "Đúng vậy! Nhìn vào lát cắt, sườn núi Ngọc Linh đổ về phía Sông Xê Xan dốc hơn nhiều so với phía Sông Đồng Nai, khiến nước chảy xiết và mạnh hơn.",
        consequence: "Cảnh báo lũ quét đã được gửi kịp thời đến hạ lưu Sông Xê Xan. Không có thiệt hại về người!"
      },
      {
        id: 'Dongnai',
        label: "Sông Đồng Nai",
        isCorrect: false,
        explanation: "Sai rồi. Sườn núi phía Sông Đồng Nai thoải hơn, nước sẽ chảy chậm hơn và ít nguy hiểm hơn so với phía Xê Xan.",
        consequence: "Chúng ta đã đánh giá sai hướng lũ! Sông Xê Xan đang bị ngập lụt nghiêm trọng mà không có chuẩn bị."
      }
    ]
  },
  {
    id: 4,
    title: "Tình huống Quy hoạch",
    description: "Nếu muốn xây dựng một khu dân cư tránh lũ, bạn sẽ chọn khu vực quanh điểm C hay khu vực gần sườn núi B3? Hãy nhìn các đường đồng mức để quyết định.",
    mapType: 'contour',
    options: [
      {
        id: 'C',
        label: "Khu vực quanh điểm C",
        isCorrect: true,
        explanation: "Lựa chọn sáng suốt! Điểm C nằm ở vùng cao ráo, các đường đồng mức bao quanh cho thấy đây là một gò cao, tránh được nước dâng từ thung lũng.",
        consequence: "Khu dân cư mới rất an toàn. Người dân yên tâm sinh sống dù mùa mưa bão đến."
      },
      {
        id: 'B3',
        label: "Khu vực gần sườn núi B3",
        isCorrect: false,
        explanation: "Rất nguy hiểm! B3 nằm ngay chân sườn núi dốc đứng (các đường đồng mức rất dày), dễ xảy ra sạt lở đất khi mưa lớn.",
        consequence: "Một vụ sạt lở đất nhỏ đã xảy ra! May mắn là chúng ta mới chỉ đang khảo sát, chưa xây dựng."
      }
    ]
  },
  {
    id: 5,
    title: "Tình huống Tìm kiếm",
    description: "Một nhóm thám hiểm bị lạc trong rừng. Tín hiệu cuối cùng cho thấy họ đang ở vùng thung lũng giữa A1 và A2. Bạn sẽ tìm họ ở đâu?",
    mapType: 'contour',
    options: [
      {
        id: 'valley',
        label: "Vùng thung lũng thấp",
        isCorrect: true,
        explanation: "Đúng! Thung lũng là nơi nước tụ lại và kín gió, người lạc thường có xu hướng di chuyển xuống thấp để tìm nước.",
        consequence: "Nhóm thám hiểm đã được tìm thấy bên một con suối nhỏ trong thung lũng!"
      },
      {
        id: 'peak',
        label: "Đỉnh núi A1",
        isCorrect: false,
        explanation: "Không hợp lý. Đỉnh núi rất lạnh và gió mạnh, người lạc khó có thể trụ lại lâu nếu không có thiết bị chuyên dụng.",
        consequence: "Đội cứu hộ đã mất cả ngày trên đỉnh núi mà không thấy dấu vết nào."
      }
    ]
  },
  {
    id: 6,
    title: "Tình huống Nông nghiệp",
    description: "Chúng ta cần trồng rừng phòng hộ để ngăn xói mòn đất. Khu vực nào cần ưu tiên trồng rừng nhất dựa trên độ dốc?",
    mapType: 'contour',
    options: [
      {
        id: 'steep',
        label: "Sườn núi dốc (đường đồng mức dày)",
        isCorrect: true,
        explanation: "Chính xác! Nơi dốc đứng là nơi dễ bị xói mòn và sạt lở nhất, cần có rừng để giữ đất.",
        consequence: "Rừng phòng hộ đã phát triển, giúp bảo vệ các ngôi làng phía dưới khỏi sạt lở."
      },
      {
        id: 'flat',
        label: "Vùng bằng phẳng (đường đồng mức thưa)",
        isCorrect: false,
        explanation: "Chưa đúng. Vùng bằng phẳng ít bị xói mòn hơn, nên ưu tiên trồng rừng ở nơi dốc cao trước.",
        consequence: "Mưa lớn đã gây sạt lở ở sườn dốc vì chúng ta chỉ tập trung trồng cây ở vùng thung lũng."
      }
    ]
  },
  {
    id: 7,
    title: "Tình huống Thủy điện",
    description: "Để xây dựng một đập thủy điện nhỏ, ta cần chọn nơi dòng sông chảy qua khe núi hẹp nhất. Bạn chọn vị trí nào trên bản đồ?",
    mapType: 'contour',
    options: [
      {
        id: 'narrow',
        label: "Nơi hai đường đồng mức cao nhô sát vào nhau",
        isCorrect: true,
        explanation: "Đúng! Khe núi hẹp giúp giảm chi phí xây đập và tạo ra áp lực nước lớn hơn.",
        consequence: "Đập thủy điện đã hoàn thành, cung cấp điện cho toàn bộ vùng cao!"
      },
      {
        id: 'wide',
        label: "Nơi thung lũng mở rộng",
        isCorrect: false,
        explanation: "Không tốt. Thung lũng rộng đòi hỏi đập rất dài và tốn kém, áp lực nước cũng thấp hơn.",
        consequence: "Dự án bị đình trệ do chi phí xây dựng vượt quá ngân sách."
      }
    ]
  },
  {
    id: 8,
    title: "Tình huống Giao thông",
    description: "Trên lát cắt địa hình, nếu muốn xây một con đường từ Bạch Mã đến Phan Thiết ít tốn sức nhất cho xe cộ, ta nên làm gì?",
    mapType: 'profile',
    options: [
      {
        id: 'tunnel',
        label: "Xây hầm xuyên qua khối núi Ngọc Linh",
        isCorrect: true,
        explanation: "Tuyệt vời! Ngọc Linh quá cao và dốc, việc đi vòng hoặc leo đèo sẽ rất tốn xăng và nguy hiểm. Hầm là giải pháp tối ưu.",
        consequence: "Con đường mới đã rút ngắn thời gian di chuyển xuống còn một nửa!"
      },
      {
        id: 'over',
        label: "Làm đường đèo leo qua đỉnh Ngọc Linh",
        isCorrect: false,
        explanation: "Rất khó khăn. Độ dốc của Ngọc Linh trên lát cắt cho thấy việc làm đường đèo sẽ cực kỳ quanh co và nguy hiểm.",
        consequence: "Xe cộ thường xuyên gặp tai nạn và hỏng hóc khi cố gắng vượt đèo Ngọc Linh."
      }
    ]
  },
  {
    id: 9,
    title: "Tình huống Du lịch",
    description: "Một nhóm khách muốn cắm trại để ngắm bình minh trên biển Phan Thiết từ trên cao. Dựa vào lát cắt, khu vực nào là lý tưởng nhất?",
    mapType: 'profile',
    options: [
      {
        id: 'plateau',
        label: "Rìa các cao nguyên hướng về Phan Thiết",
        isCorrect: true,
        explanation: "Đúng! Các cao nguyên có độ cao ổn định và tầm nhìn thoáng về phía biển Phan Thiết.",
        consequence: "Khách du lịch rất hài lòng với khung cảnh bình minh tuyệt đẹp từ rìa cao nguyên!"
      },
      {
        id: 'lowland',
        label: "Vùng thấp sát biển Phan Thiết",
        isCorrect: false,
        explanation: "Không đúng. Ở vùng thấp, tầm nhìn sẽ bị che khuất và không thể thấy được toàn cảnh từ trên cao.",
        consequence: "Nhóm khách thất vọng vì không thấy được cảnh quan hùng vĩ như mong đợi."
      }
    ]
  },
  {
    id: 10,
    title: "Tình huống An ninh",
    description: "Để bảo vệ biên giới, ta cần đặt một trạm gác có thể quan sát được cả hai phía sườn núi. Vị trí nào là tốt nhất?",
    mapType: 'contour',
    options: [
      {
        id: 'saddle',
        label: "Yên ngựa (vùng thấp giữa hai đỉnh núi)",
        isCorrect: true,
        explanation: "Chính xác! Vị trí yên ngựa cho phép quan sát cả hai thung lũng ở hai bên sườn núi một cách dễ dàng.",
        consequence: "Trạm gác đã kiểm soát tốt mọi di động qua lại giữa hai vùng thung lũng."
      },
      {
        id: 'bottom',
        label: "Chân núi",
        isCorrect: false,
        explanation: "Không tốt. Ở chân núi, tầm nhìn bị hạn chế bởi chính khối núi đó, không thể quan sát được phía bên kia.",
        consequence: "Trạm gác thường xuyên bị bất ngờ bởi những kẻ xâm nhập từ phía bên kia núi."
      }
    ]
  }
];
