const IMG = id => `https://drive.google.com/thumbnail?id=${id}&sz=w400`;

const DESCS = {
  robotics: {
    "Level 1": [
      "Kiến thức: Làm quen lego wedo 2.0, bộ phận cơ bản, chuyển động bánh xe, lệnh tuần tự; hiểu ứng dụng robot trong khám phá và đời sống\nDự án: Lắp ráp và lập trình robot di chuyển, quay hướng theo yêu cầu trên nhiều bề mặt",
      "Kiến thức: Hiểu lực kéo, ma sát, điều chỉnh tốc độ động cơ, vòng lặp; hiểu ứng dụng robot trong vận chuyển và sản xuất\nDự án: Thiết kế robot kéo vật và thử nghiệm với các mức trọng lượng khác nhau",
      "Kiến thức: Hiểu cơ chế rung, ổn định, điều khiển động cơ; mô phỏng động đất và ứng dụng trong xây dựng an toàn\nDự án: Tạo robot mô phỏng động đất và thử nghiệm độ bền công trình trên mô hình",
      "Kiến thức: Hiểu thiết kế robot vững chắc, cảm biến, điều kiện; ứng dụng robot trong thiên tai và bảo vệ môi trường\nDự án: Thiết kế robot vượt địa hình hỗ trợ cứu hộ trong tình huống lũ lụt",
      "Kiến thức: Hiểu cơ cấu nâng hạ, trình tự lệnh, kết hợp hành động; ứng dụng robot trong phân loại rác và bảo vệ môi trường\nDự án: Lắp ráp xe ben robot và mô phỏng thu gom, phân loại rác theo nhóm vật liệu",
      "Kiến thức: Hiểu cơ cấu bánh xe, ma sát, điều chỉnh tốc độ; ứng dụng robot trong giao thông và kiểm soát tốc độ\nDự án: Thiết kế xe đua robot và tổ chức đua thử nghiệm so sánh tốc độ giữa các nhóm",
      "Kiến thức: Hiểu cơ cấu chuyển động bật nhảy, vòng lặp và điều chỉnh thời gian; liên hệ sinh học về cách ếch di chuyển và môi trường sống\nDự án: Lắp robot ếch và lập trình chuyển động nhảy, so sánh với chuyển động sinh học thực tế",
      "Kiến thức: Hiểu cơ cấu quay, nâng – thả, trình tự điều khiển; ứng dụng robot trong cứu hộ và các tình huống khẩn cấp\nDự án: Thiết kế robot trực thăng cứu hộ có thể thả vật và thực hiện nhiệm vụ cứu trợ theo kịch bản",
      "Kiến thức: Hiểu cơ chế chuyển động bay – tiếp cận mục tiêu, lập trình trình tự; mô phỏng sinh học về quá trình thụ phấn và vai trò của ong\nDự án: Lắp robot ong và lập trình di chuyển giữa các \"bông hoa\" để mô phỏng quá trình thụ phấn",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế\nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá\nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế\nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh"
    ],
    "Level 2": [
      "Kiến thức: Hiểu thiết kế robot trong môi trường đặc biệt (trọng lực thấp, ma sát nhỏ), cơ cấu di chuyển bánh xe – trục quay; lập trình vòng lặp, cảm biến nghiêng; liên hệ khoa học về điều kiện sống trên Mặt Trăng\nDự án: Thiết kế robot Moonbase di chuyển và vận chuyển vật liệu trên \"bề mặt Mặt Trăng\"",
      "Kiến thức: Hiểu cơ cấu tay gắp (đòn bẩy, lực kẹp), so sánh các kiểu kẹp; lập trình chuỗi hành động (start → move → grab → release); liên hệ ứng dụng robot trong nhà máy, y tế, logistics\nDự án: Lập trình robot gắp – di chuyển – thả vật theo quy trình tự động",
      "Kiến thức: Hiểu cơ cấu tay gắp, lập trình chuỗi hành động và điều khiển động cơ kết hợp cảm biến; liên hệ ứng dụng robot trong sản xuất và tự động hóa\nDự án: Lập trình robot gắp – di chuyển – thả vật theo quy trình tự động",
      "Kiến thức: Hiểu cơ cấu đẩy – phun, chuyển đổi chuyển động quay → tịnh tiến, lập trình chu kỳ; liên hệ khoa học về núi lửa, nguyên nhân và tác động thiên tai\nDự án: Lắp robot mô phỏng núi lửa phun trào theo chu kỳ",
      "Kiến thức: Hiểu cơ cấu chuyển động lặp (đi bộ, vẫy), chuyển đổi chuyển động quay → chuyển động chân; lập trình vòng lặp và điều chỉnh tốc độ; liên hệ sinh học về đặc điểm của vịt\nDự án: Lắp robot vịt mô phỏng chuyển động đi và vẫy cánh",
      "Kiến thức: Hiểu cơ cấu uốn – lắc, chuyển động dạng sóng trong môi trường nước; lập trình điều khiển tốc độ và nhịp; liên hệ sinh học về cá heo và bảo vệ hệ sinh thái biển\nDự án: Lắp robot cá heo mô phỏng chuyển động bơi",
      "Kiến thức: Hiểu cơ chế chuyển động uốn lượn nhiều khớp (lateral undulation), trục lệch tâm và điều chỉnh tần số/biên độ; liên hệ sinh học về chuyển động của rắn và ứng dụng robot trong cứu hộ\nDự án: Lắp robot rắn và thử nghiệm di chuyển trên nhiều bề mặt",
      "Kiến thức: Hiểu cơ chế cân bằng, trọng tâm và chuyển động hai/bốn chân; lập trình chuỗi hành động kết hợp cảm biến nghiêng; liên hệ khoa học về khủng long và tiến hóa\nDự án: Lắp robot khủng long có thể di chuyển và phản ứng khi va chạm",
      "Kiến thức: Hiểu cơ cấu tay – vai, lực và mô-men xoắn trong chuyển động mạnh; lập trình điều khiển động cơ theo chu kỳ; liên hệ sinh học về khỉ đột và bảo tồn động vật\nDự án: Lắp robot gorilla mô phỏng chuyển động tay và thân",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế\nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá\nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế\nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh"
    ],
    "Level 3": [
      "Kiến thức: Hiểu cơ cấu tay robot nhiều khớp, đòn bẩy và mô-men xoắn; vòng lặp và điều khiển động cơ theo cảm biến; liên hệ ứng dụng robot trong sản xuất, y tế và tự động hóa công nghiệp\nDự án: Lắp robot arm và lập trình gắp – nâng – đặt vật chính xác",
      "Kiến thức: Hiểu cơ cấu nâng hạ thẳng đứng, trọng tâm và tải trọng; lập trình chuỗi hành động liên tục, cảm biến va chạm; liên hệ ứng dụng robot trong logistics và kho thông minh\nDự án: Lắp robot forklift và mô phỏng quy trình lấy – nâng – di chuyển – đặt hàng",
      "Kiến thức: Hiểu cơ cấu đẩy – gạt, lực ma sát và va chạm, cảm biến nghiêng; liên hệ khoa học về thời tiết lạnh và ứng dụng robot trong môi trường khắc nghiệt\nDự án: Lắp robot snowplow và mô phỏng dọn tuyết tự động",
      "Kiến thức: Hiểu cơ cấu bật – nhún, chuyển đổi chuyển động quay → lên xuống, lực đàn hồi; lập trình vòng lặp, điều khiển motor; liên hệ ứng dụng robot trong vượt địa hình nguy hiểm\nDự án: Lắp xe Jumpy và lập trình robot nhảy vượt chướng ngại vật",
      "Kiến thức: Hiểu chuyển động tịnh tiến liên tục, ảnh hưởng của ma sát; lập trình vòng lặp, điều khiển tốc độ motor; liên hệ ứng dụng robot trong băng chuyền và tự động hóa sản xuất\nDự án: Lắp robot Skier và lập trình chuyển động trượt nhanh – chậm theo chu kỳ",
      "Kiến thức: Hiểu cơ cấu chuyển động leo – bám (grip & pull), phối hợp ma sát – lực kéo – trọng lượng; lập trình vòng lặp điều khiển lên/xuống; liên hệ sinh học về cách khỉ leo trèo\nDự án: Lắp robot Monkey và lập trình chuyển động leo lên – hạ xuống theo chu trình",
      "Kiến thức: Hiểu chuyển động tốc độ cao, độ bám và ổn định; lập trình kết hợp cảm biến với điều kiện để né vật cản; liên hệ ứng dụng robot trong an ninh và tuần tra\nDự án: Lắp xe Batman và lập trình robot chạy nhanh – né chướng ngại vật",
      "Kiến thức: Hiểu mối quan hệ giữa lực đẩy – ma sát – trọng lượng và ảnh hưởng của trọng tâm; lập trình sử dụng cảm biến khoảng cách và chiến thuật di chuyển\nDự án: Lắp robot Sumo và lập trình tìm – đẩy – giữ thăng bằng trước đối thủ",
      "Kiến thức: Hiểu cơ chế chuyển động mô phỏng sinh học, sự cân bằng và nhịp chuyển động; lập trình vòng lặp, điều khiển hướng và thời gian\nDự án: Lắp robot Dinosaur và lập trình di chuyển mô phỏng sinh vật",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế\nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá\nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế\nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh"
    ],
    "Level 4": [
      "Kiến thức: Hiểu cơ cấu xoay – nâng của cần cẩu và cách điều khiển bằng sự kiện trong Scratch kết hợp Lego WeDo 2.0\nDự án: Lập trình cần cẩu điều khiển bằng bàn phím (xoay trái/phải, nâng/hạ vật)",
      "Kiến thức: Hiểu chuyển động nhiều chân và mô phỏng bằng vòng lặp trong Scratch kết hợp Lego WeDo 2.0; điều chỉnh thời gian để thay đổi tốc độ; liên hệ sinh học về chuyển động của nhện\nDự án: Lập trình Spider robot di chuyển theo nhịp bằng vòng lặp",
      "Kiến thức: Hiểu cơ chế lực đẩy và chuyển động quay của cánh quạt; lập trình điều khiển motor bằng sự kiện trong Scratch; liên hệ ứng dụng drone và hàng không\nDự án: Lập trình máy bay điều khiển bằng bàn phím (tăng tốc – dừng – hạ cánh)",
      "Kiến thức: Hiểu cơ cấu chuyển động ngang (lệch trục) và cách giữ cân bằng; lập trình điều khiển robot bằng điều kiện if–then và sự kiện bàn phím; liên hệ sinh học cua\nDự án: Lập trình robot Crab di chuyển ngang bằng phím điều khiển",
      "Kiến thức: Hiểu cơ cấu đòn bẩy và chuyển động nâng – hạ; sử dụng cảm biến nghiêng (tilt sensor) làm input; lập trình if–then để robot phản ứng theo góc nghiêng\nDự án: Lập trình Scorpion robot nâng/hạ \"đuôi\" khi thay đổi góc nghiêng",
      "Kiến thức: Hiểu chuyển động bật nhảy và mô phỏng bằng vòng lặp + biến trong Scratch; sử dụng when key pressed, repeat, variable để điều khiển số lần nhảy; liên hệ chuyển động sinh học của thỏ\nDự án: Lập trình Rabbit robot nhảy theo số lần xác định khi nhấn phím",
      "Kiến thức: Hiểu cơ cấu cam và chuyển động nhịp nhàng; sử dụng cảm biến khoảng cách trong Scratch; lập trình if–then để phát hiện vật cản và thay đổi hành vi; liên hệ phản xạ sinh học của động vật\nDự án: Lập trình Deer robot tự động phản ứng khi có vật lại gần",
      "Kiến thức: Hiểu nguyên lý lực đẩy – phản lực và ảnh hưởng của tốc độ; sử dụng biến (variable) trong Scratch để điều khiển tốc độ motor; liên hệ tàu thuyền và vận tải đường thủy\nDự án: Lập trình Motor Boat điều chỉnh tốc độ chạy bằng biến Speed",
      "Kiến thức: Hiểu cơ chế chuyển động lặp và đồng bộ âm thanh; sử dụng broadcast và sự kiện trong Scratch để đồng bộ motor và âm thanh; liên hệ âm nhạc và công nghệ\nDự án: Lập trình Drumming Robot đánh trống theo nhịp và thay đổi tempo",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế\nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá\nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế\nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh"
    ]
  },
  ai1: {
    "Level 1": [
      "Kiến thức: Hiểu AI, cách AI học từ dữ liệu, làm quen Teachable Machine và model\nDự án: Thu thập hình ảnh và huấn luyện AI nhận diện đồ vật qua camera",
      "Kiến thức: Hiểu AI học từ hình ảnh, âm thanh, cử chỉ; làm quen nhận diện âm thanh và tư thế\nDự án: Huấn luyện AI nhận diện tiếng vỗ tay để kích hoạt hành động hiển thị trên màn hình",
      "Kiến thức: Làm quen Raise Playground, thêm nhân vật, phông nền; dùng khối lệnh di chuyển, hiển thị, âm thanh, điều kiện và kết hợp AI nhận diện\nDự án: Tạo sân khấu AI đổi trang phục, biểu cảm theo đồ vật nhận diện qua camera",
      "Kiến thức: Nhận diện âm thanh bằng AI, điều khiển thiết bị; dùng khối lệnh trang phục, phông nền, lặp, chờ và hiểu ứng dụng nhà thông minh\nDự án: Tạo ngôi nhà thông minh điều khiển bằng giọng nói bật/tắt đèn, TV, quạt trên màn hình",
      "Kiến thức: Nhận diện cử chỉ cơ thể bằng AI, điều khiển nhân vật; dùng khối lệnh sự kiện, phát âm thanh, lặp và hiểu ứng dụng tương tác cơ thể\nDự án: Tạo vũ điệu công nghệ điều khiển nhân vật nhảy, đổi trang phục theo cử chỉ cơ thể",
      "Kiến thức: Hiểu hệ tọa độ X–Y, di chuyển nhân vật bằng khối lệnh vị trí, điều kiện, cảm biến; liên hệ định vị bản đồ trong thực tế\nDự án: Lập trình truy tìm kho báu khi nhân vật di chuyển đúng tọa độ sẽ hiển thị thông báo và hiệu ứng",
      "Kiến thức: Sử dụng khối lệnh hỏi–đáp, biến, điều kiện; tạo hội thoại và hiểu cách máy xử lý thông tin trong giao tiếp thực tế\nDự án: Tạo robot trò chuyện hỏi tên, phản hồi và làm mini quiz tính điểm cho người chơi",
      "Kiến thức: Sử dụng khối lệnh di chuyển, lặp, điều kiện, cảm biến; mô phỏng hệ sinh thái và hiểu hành vi sinh vật, môi trường đại dương\nDự án: Tạo đại dương chuyển động với sinh vật tương tác, tránh vật cản và hiệu ứng sống động",
      "Kiến thức: Ôn tập khối lệnh, tư duy lập trình và hoàn thiện sản phẩm theo yêu cầu thực tế\nDự án: Hoàn thiện và nâng cấp các dự án đã học",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế\nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá\nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế\nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh"
    ],
    "Level 2": [
      "Kiến thức: Sử dụng Extension Pen, khối lệnh vẽ, di chuyển, lặp; hiểu hình học cơ bản và ứng dụng sáng tạo trong đời sống\nDự án: Lập trình AI vẽ tranh với hình học, màu sắc và hiệu ứng theo ý tưởng cá nhân",
      "Kiến thức: Sử dụng Text to Speech, Translate, khối lệnh phát âm, chờ, xử lý chuỗi; hiểu ứng dụng ngôn ngữ trong giao tiếp đa quốc gia\nDự án: Tạo AI thông dịch viên có thể dịch và đọc nhiều ngôn ngữ theo nội dung nhập vào",
      "Kiến thức: Sử dụng Hand Sensing, khối lệnh điều kiện, cảm biến, điểm số; hiểu phân loại rác và hành vi bảo vệ môi trường\nDự án: Tạo trò chơi điều khiển bằng tay để phân loại rác và làm sạch môi trường",
      "Kiến thức: Sử dụng Face Sensing, khối lệnh điều kiện, chuyển động, hiệu ứng; hiểu nhận diện cảm xúc và phản ứng trong đời sống\nDự án: Tạo nhân vật phản ứng theo biểu cảm khuôn mặt như cười, buồn, ngạc nhiên qua camera",
      "Kiến thức: Sử dụng Selfie Detector, Face Filter, khối lệnh điều kiện, vị trí, hiển thị; hiểu ứng dụng AI trong camera và AR thực tế\nDự án: Tạo camera AI tự gắn filter theo khuôn mặt và chuyển động người dùng",
      "Kiến thức: Sử dụng Body Sensing, khối lệnh điều kiện, tọa độ, tạo bản sao; hiểu chuyển động cơ thể và ứng dụng điều khiển trong game thực tế\nDự án: Tạo game điều khiển bằng cơ thể để hứng vật rơi và tính điểm",
      "Kiến thức: Sử dụng Body Sensing, biến số, điều kiện, hiển thị; hiểu quá trình phát triển của cây và yếu tố môi trường\nDự án: Tạo vườn cây AI phát triển theo cử chỉ, thay đổi trạng thái từ hạt đến trưởng thành",
      "Kiến thức: Sử dụng Body Sensing, biến số, điều kiện, chuyển động; hiểu hoạt động dọn dẹp và ý nghĩa văn hoá ngày Tết\nDự án: Tạo game AI dọn nhà đón Tết điều khiển bằng cử chỉ cơ thể và tính điểm nhiệm vụ",
      "Kiến thức: Ôn tập khối lệnh, tư duy lập trình và hoàn thiện sản phẩm theo yêu cầu thực tế\nDự án: Hoàn thiện và nâng cấp các dự án đã học",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế\nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá\nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế\nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh"
    ],
    "Level 3": [
      "Kiến thức: Sử dụng Object Detection, khối lệnh camera, điều kiện, vòng lặp; hiểu AI nhận diện vật thể và ứng dụng trong lớp học thông minh\nDự án: Tạo robot AI nhận diện đồ vật trong lớp và phản hồi bằng âm thanh hoặc tương tác",
      "Kiến thức: Sử dụng Face Recognition, khối lệnh điều kiện, danh sách, hiển thị; hiểu AI nhận diện khuôn mặt và ứng dụng quản lý lớp học\nDự án: Tạo hệ thống điểm danh AI nhận diện học sinh và tự động cập nhật danh sách",
      "Kiến thức: Sử dụng Number Detection, khối lệnh điều kiện, sự kiện, hiển thị; hiểu AI nhận diện số và ứng dụng trong giao thông thông minh\nDự án: Tạo hệ thống xe tự hành chọn làn đường dựa trên số nhận diện từ camera",
      "Kiến thức: Sử dụng Speech Recognition, biến, điều kiện, vòng lặp; hiểu AI nhận diện giọng nói và ứng dụng trợ lý ảo trong đời sống\nDự án: Tạo trợ lý ảo giao tiếp bằng giọng nói có thể nghe, trả lời và tương tác với người dùng",
      "Kiến thức: Sử dụng Face Detection, khối lệnh tọa độ, kích thước, broadcast; hiểu AI nhận diện khuôn mặt và ứng dụng filter AR\nDự án: Tạo ứng dụng camera AI gắn filter theo khuôn mặt và chuyển động thời gian thực",
      "Kiến thức: Sử dụng Image Recognition, biến, điều kiện, hỏi–đáp; hiểu AI phân tích hình ảnh và ứng dụng nhận diện thương hiệu\nDự án: Tạo game quiz AI nhận diện logo và chấm điểm tự động",
      "Kiến thức: Sử dụng Hand Detection, tọa độ, va chạm, biến, vòng lặp; hiểu điều khiển bằng cử chỉ và ứng dụng trong game\nDự án: Tạo game bắn phi thuyền điều khiển bằng tay và tính điểm, hiệu ứng va chạm",
      "Kiến thức: Sử dụng Hand Detection nâng cao, tọa độ, điều kiện, biến, va chạm; hiểu điều khiển đa hành động và ứng dụng AI trong game thực tế\nDự án: Nâng cấp game phi thuyền điều khiển bằng tay với bắn, né, tăng điểm và hiệu ứng chiến đấu",
      "Kiến thức: Ôn tập khối lệnh, tư duy lập trình và hoàn thiện sản phẩm theo yêu cầu thực tế\nDự án: Hoàn thiện và nâng cấp các dự án đã học",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế\nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá\nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế\nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh"
    ],
    "Level 4": [
      "Kiến thức: Sử dụng Data Logger, biến, điều kiện, vòng lặp; hiểu thu thập và lưu trữ dữ liệu trong ứng dụng thực tế\nDự án: Tạo game bắt chuột và ghi lại điểm số theo thời gian vào dữ liệu",
      "Kiến thức: Sử dụng Speech Recognition, Text-to-Speech, biến, điều kiện; hiểu AI xử lý ngôn ngữ và ứng dụng học ngoại ngữ\nDự án: Tạo AI luyện phát âm tiếng Anh có thể nghe, phản hồi và hướng dẫn người học",
      "Kiến thức: Sử dụng Body Detection, Pen Extension, tọa độ, điều khiển; hiểu AI theo dõi chuyển động cơ thể và ứng dụng vẽ tương tác\nDự án: Tạo ứng dụng vẽ bằng cử chỉ tay qua camera với màu sắc và hiệu ứng tùy chỉnh",
      "Kiến thức: Sử dụng Face Landmark, clone, vòng lặp, tọa độ; hiểu AI phân tích gương mặt và ứng dụng hiệu ứng AR thời gian thực\nDự án: Tạo filter AR với điểm landmark bám theo khuôn mặt và hiệu ứng chuyển động",
      "Kiến thức: Sử dụng Image Classification, điều kiện, vòng lặp, hiển thị; hiểu AI phân loại hình ảnh và ứng dụng trong y tế, an toàn\nDự án: Tạo hệ thống AI kiểm tra đeo khẩu trang và phản hồi theo từng trạng thái",
      "Kiến thức: Sử dụng Sound Classifier, sự kiện, điều kiện, âm thanh; hiểu AI nhận diện âm thanh và ứng dụng trong môi trường tự nhiên\nDự án: Tạo AI nhận diện tiếng chim và phản hồi tên loài theo âm thanh",
      "Kiến thức: Sử dụng Pose Recognition, điều kiện, biến, vòng lặp; hiểu AI nhận diện tư thế và ứng dụng trong sức khỏe, luyện tập\nDự án: Tạo huấn luyện viên AI hướng dẫn và kiểm tra tư thế yoga qua camera",
      "Kiến thức: Sử dụng Object Detection, ngưỡng nhận diện, hiển thị, điều kiện; hiểu độ chính xác AI và cách điều chỉnh mô hình\nDự án: Tạo hệ thống AI đếm số người và so sánh kết quả theo các mức độ nhận diện khác nhau",
      "Kiến thức: Ôn tập khối lệnh, tư duy lập trình và hoàn thiện sản phẩm theo yêu cầu thực tế\nDự án: Hoàn thiện và nâng cấp các dự án đã học",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế\nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá\nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế\nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh"
    ]
  },
  game: {
    "Level 1": [
      "Kiến thức: Làm quen giao diện Scratch (Stage, Sprite, Block Palette); hiểu khái niệm tuần tự (sequence) và sự kiện (when green flag clicked); sử dụng nhóm lệnh Motion + Looks (move, say, switch costume) để tạo hành động cơ bản; liên hệ cách máy tính thực hiện lệnh theo từng bước\nDự án: Tạo nhân vật Chú Mèo giới thiệu bản thân, di chuyển và tương tác đơn giản trên màn hình",
      "Kiến thức: Hiểu chuyển động trong game 2D; sử dụng Motion (move, turn, glide) kết hợp Control (repeat, forever, wait) và Looks + Sound trong Scratch để tạo animation; làm quen vòng lặp để tạo chuyển động liên tục; liên hệ ứng dụng animation trong game và truyền thông\nDự án: Tạo một đoạn animation 2D (10–20s) có nhân vật di chuyển, hiệu ứng và âm thanh",
      "Kiến thức: Sử dụng Event (when green flag clicked, when key pressed) để điều khiển nhân vật; tạo tương tác giữa player – enemy trong Scratch; kết hợp Motion + Control (forever) để tạo chuyển động liên tục; hiểu cơ chế input → phản hồi trong game\nDự án: Game mèo đuổi chuột cơ bản (mèo điều khiển bằng phím, chuột di chuyển tự động)",
      "Kiến thức: Sử dụng If–Else và Sensing (touching sprite) trong Scratch để xử lý va chạm; dùng Hide/Show, Wait để tạo trạng thái (bị bắt → biến mất → xuất hiện lại); làm quen biến (score) và điều kiện thắng cơ bản \nDự án: Nâng cấp game mèo đuổi chuột có tính điểm, chuột biến mất khi bị bắt và xuất hiện lại",
      "Kiến thức: Điều khiển nhân vật bằng phím (when key pressed), sử dụng Glide để di chuyển mượt; kết hợp If touching để thu thập vật phẩm; sử dụng biến (score) + nhiều sprite (item, obstacle) trong Scratch; tạo game loop hoàn chỉnh với tương tác liên tục\nDự án: Game thám hiểm dưới biển (thu thập vật phẩm, tránh chướng ngại, tính điểm)",
      "Kiến thức: Sử dụng biến (variable) để lưu điểm và dữ liệu trong Scratch; dùng Ask and Wait để nhận input từ người chơi; áp dụng Operators (+, −, ×, ÷) và If–Else để kiểm tra đúng/sai; tạo hệ thống câu hỏi liên tiếp và tính điểm; hiểu cơ chế game quiz (input → check → score)\nDự án: Game toán học tương tác (trả lời câu hỏi, tính điểm và hiển thị kết quả cuối)",
      "Kiến thức: Sử dụng hệ tọa độ (x, y) để điều khiển vị trí nhân vật trong Scratch; dùng when key pressed để điều khiển di chuyển; áp dụng If touching color để phát hiện va chạm với tường; sử dụng forever để kiểm tra liên tục và Go to để reset vị trí; hiểu cơ chế điều hướng trong game mê cung\nDự án: Game mê cung (điều khiển nhân vật tìm đường đến đích, chạm tường quay lại điểm xuất phát)",
      "Kiến thức: Ôn lại va chạm (touching color), tọa độ (x, y) và biến (score); sử dụng sự kiện when this sprite clicked và broadcast trong Scratch để tạo hệ thống màn hình (Start – Play – Game Over); thiết kế nút Play/Restart; quản lý trạng thái game (game state) và reset dữ liệu khi chơi lại\nDự án: Hoàn thiện game có màn hình Start, nút Play, Game Over và chức năng chơi lại",
      "Kiến thức: Sử dụng Pen (pen down, pen up, clear) trong Scratch để vẽ; kết hợp Motion (move, turn) và Repeat để tạo hình lặp (pattern); áp dụng tọa độ (x, y) để vẽ chính xác; hiểu ứng dụng lập trình trong vẽ đồ họa và sáng tạo số\nDự án: Tạo hình vẽ sáng tạo (hoa văn, hình học, hoặc logo đơn giản) bằng Pen",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế \nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá \nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế \nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh",
    ],
    "Level 2": [
      "Kiến thức: Sử dụng Clone (create clone of myself, delete this clone) trong Scratch để tạo nhiều đối tượng (enemy/obstacle); kết hợp If–Then và Sensing để xử lý va chạm; sử dụng biến (score/life) và change speed để tăng độ khó theo thời gian; hiểu cơ chế spawn liên tục trong game \nDự án: Game Space Survival (phi thuyền né thiên thạch rơi bằng clone, va chạm → giảm mạng, hết mạng → Game Over)",
      "Kiến thức: Sử dụng Broadcast để chuyển trạng thái và màn chơi trong Scratch; tạo biến Level và thay đổi độ khó theo từng màn (speed, số lượng enemy); quản lý background và reset vị trí khi qua màn; hiểu cấu trúc game nhiều level (progression system) \nDự án: Game nhiều màn (Level 1 → 3) với độ khó tăng dần và điều kiện thắng từng màn",
      "Kiến thức: Sử dụng If–Else nâng cao và Operators (<, >, =) trong Scratch để xây dựng hành vi tự động; áp dụng tọa độ (x, y) và biến để tạo AI đơn giản (enemy follow player); tính khoảng cách và điều kiện để thay đổi hành vi; hiểu cơ chế AI cơ bản trong game \nDự án: Game có bot tự động đuổi theo người chơi (enemy follow, đến gần → bắt)",
      "Kiến thức: Sử dụng Clone nâng cao (create/delete clone, when I start as a clone) trong Scratch để tạo hệ thống bắn đạn; kết hợp Sensing (touching sprite) và If–Else để xử lý trúng/không trúng; điều chỉnh tốc độ bắn bằng Wait và biến; quản lý nhiều đối tượng cùng lúc (bullet, enemy, score) \nDự án: Game Galaxy Shooter (di chuyển + bắn đạn + tiêu diệt mục tiêu + tính điểm + Game Over)",
      "Kiến thức: Sử dụng Clone kết hợp Random (Operators) để mô phỏng nhiều đối tượng (mưa, tuyết); dùng biến (Weather, Speed) để thay đổi trạng thái; áp dụng Broadcast để chuyển chế độ (Sunny/Rainy/Storm) trong Scratch; hiểu cơ chế simulation (mô phỏng hệ thống) \nDự án: Weather Simulation (chuyển đổi thời tiết, mưa/tuyết rơi bằng clone, thay đổi tốc độ và trạng thái)",
      "Kiến thức: Sử dụng nhiều biến (Money, Price, Quantity) trong Scratch để xây dựng hệ thống dữ liệu; áp dụng Operators và If–Else để xử lý logic giao dịch; dùng Ask and Wait để nhận input từ người chơi; tạo hệ thống kiểm tra điều kiện (đủ tiền/không đủ tiền) và cập nhật dữ liệu \nDự án: Game Smart Shop (mua bán sản phẩm, tính tiền, cập nhật số dư và điều kiện thắng)",
      "Kiến thức: Sử dụng biến (Stage, Water, Sunlight…) trong Scratch để quản lý trạng thái; dùng Broadcast để chuyển giai đoạn; áp dụng If–Else kiểm tra điều kiện phát triển và Repeat để mô phỏng theo thời gian; hiểu hệ thống nhiều trạng thái (state system) \nDự án: Mô phỏng cây phát triển theo giai đoạn (đủ điều kiện → lớn lên, thiếu → không phát triển)",
      "Kiến thức: Sử dụng biến (Speed, Distance) và Repeat Until trong Scratch để tạo vòng đua; áp dụng If–Else và Random để tạo yếu tố ngẫu nhiên; xây dựng logic thắng/thua dựa trên điều kiện; hiểu cơ chế game có yếu tố xác suất \nDự án: Game đua Rùa và Thỏ (Thỏ nhanh nhưng có xác suất dừng, Rùa chậm nhưng ổn định, chạm đích trước sẽ thắng)",
      "Kiến thức: Sử dụng biến (Score, Time) và Timer trong Scratch để quản lý thời gian và điểm; áp dụng If–Else để kiểm tra hành động đúng/sai; dùng Broadcast để thay đổi trạng thái (đèn xanh/đỏ); hiểu hệ thống luật chơi và phản hồi thời gian thực \nDự án: Game giao thông (đi đúng luật → cộng điểm, sai → trừ điểm, đạt mục tiêu → thắng)",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế \nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá \nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế \nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh",
    ],
    "Level 3": [
      "Kiến thức: Kết nối động cơ Lego WeDo 2.0 với Scratch; sử dụng Motor On/Off và điều chỉnh tốc độ; tạo biến (Speed, WindPower); dùng If – Else để thay đổi tốc độ quay theo mức gió; sử dụng Broadcast để đồng bộ chuyển động và hiển thị trên màn hình\nDự án: Lắp mô hình cối xay gió, khi nhấn phím tăng \"WindPower\" trên Scratch → động cơ quay nhanh hơn, hiển thị lượng điện tạo ra",
      "Kiến thức: Sử dụng Distance Sensor trong Scratch kết hợp Lego WeDo 2.0; tạo biến (Distance, Alert); dùng If – Else để phát hiện vật cản (khoảng cách nhỏ → dừng và cảnh báo, lớn → tiếp tục chạy); sử dụng Loop để kiểm tra liên tục; kết hợp âm thanh hoặc hiển thị cảnh báo trên Scratch \nDự án: Lắp xe robot, khi tiến gần vật cản → tự động dừng và phát cảnh báo trên Scratch, nếu đường trống → tiếp tục di chuyển",
      "Kiến thức: Sử dụng Tilt Sensor hoặc Motion Sensor trong Scratch kết hợp Lego WeDo 2.0; tạo biến (Weather, Temperature); dùng If – Else để thay đổi trạng thái thời tiết (nắng, mưa, gió); sử dụng Broadcast để cập nhật hình nền và hiệu ứng; kết hợp Motor để mô phỏng chuyển động (quạt khi có gió) \nDự án: Xây dựng trạm dự báo thời tiết mini, khi nghiêng cảm biến → thay đổi thời tiết hiển thị trên Scratch (nắng/mưa/gió), kết hợp quạt quay khi \"trời gió\"",
      "Kiến thức: Kết hợp Motor và Tilt Sensor trong Scratch với Lego WeDo 2.0; tạo biến (Type, Count); dùng If – Else để phân loại vật theo vị trí hoặc tín hiệu cảm biến; sử dụng Broadcast để hiển thị kết quả; dùng Loop để tự động hóa quy trình lặp lại\nDự án: Lắp cánh tay robot phân loại, khi phát hiện vật ở vị trí khác nhau → robot quay trái/phải để phân loại, hiển thị số lượng từng loại trên Scratch",
      "Kiến thức: Sử dụng Motor và Distance Sensor trong Scratch kết hợp Lego WeDo 2.0; tạo biến (Floor, TargetFloor); dùng If – Else để điều khiển thang máy lên/xuống đúng tầng; sử dụng Broadcast để cập nhật hiển thị tầng; kết hợp điều kiện dừng chính xác theo vị trí\nDự án: Lắp mô hình thang máy mini, chọn tầng trên Scratch → motor di chuyển lên/xuống, đến đúng vị trí thì dừng và hiển thị số tầng",
      "Kiến thức: Sử dụng Motion Sensor trong Scratch kết hợp Lego WeDo 2.0; tạo biến (Access, Count); dùng If – Else để mở/đóng cổng khi phát hiện chuyển động; sử dụng Timer để tự động đóng sau vài giây; dùng Broadcast để hiển thị trạng thái Open/Close và cập nhật số lượt ra vào\nDự án: Lắp cổng tự động, khi có người lại gần → cổng mở, sau vài giây → tự đóng, hiển thị trạng thái và số lượt trên Scratch",
      "Kiến thức: Sử dụng Motor và Timer trong Scratch kết hợp Lego WeDo 2.0; tạo biến (FoodCount, Time); dùng If – Else để kiểm tra thời gian cho ăn; sử dụng Repeat để hệ thống hoạt động liên tục; dùng Broadcast để hiển thị trạng thái \"đang cho ăn\" và số lần đã cho ăn\nDự án: Lắp máy cho thú ăn tự động, đến thời gian cài đặt → motor quay và thả thức ăn, hiển thị số lần cho ăn trong ngày trên Scratch",
      "Kiến thức: Sử dụng Distance Sensor hoặc Motion Sensor trong Scratch kết hợp Lego WeDo 2.0 để giả lập độ ẩm; tạo biến (WaterLevel, PlantStatus); dùng If – Else để bật/tắt motor tưới nước; sử dụng Loop để kiểm tra liên tục; hiển thị trạng thái cây theo điều kiện\nDự án: Xây hệ thống tưới cây thông minh, khi \"độ ẩm thấp\" → tự động tưới, khi đủ nước → dừng, hiển thị trạng thái cây \"Khỏe mạnh\" hoặc \"Thiếu nước\" trên Scratch",
      "Kiến thức: Sử dụng Motor và Motion Sensor trong Scratch kết hợp Lego WeDo 2.0; tạo biến (Alert, PatrolCount); dùng Repeat để robot di chuyển tuần tra; dùng If – Else để phát hiện chuyển động; sử dụng Broadcast để gửi tín hiệu cảnh báo và hiển thị số lần phát hiện\nDự án: Lắp robot tuần tra, di chuyển qua lại; khi phát hiện chuyển động → dừng lại và phát cảnh báo, hiển thị số lần phát hiện trên Scratch",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế \nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá \nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế \nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh",
    ],
    "Level 4": [
      "Kiến thức: Làm quen giao diện Tynker; sử dụng các khối lệnh di chuyển cơ bản (Move, Turn); dùng When Start để bắt đầu chương trình; hiểu khái niệm lập trình theo từng bước (sequence); rèn tư duy điều hướng đơn giản \nDự án: Lập trình chú mèo di chuyển từ điểm A đến B theo đường thẳng hoặc hình vuông, có thể thêm hiệu ứng nói \"Hello\" khi hoàn thành",
      "Kiến thức: Sử dụng các khối Move Up / Change Y trong Tynker để điều khiển chuyển động theo trục dọc; dùng Repeat để tạo chuyển động liên tục; sử dụng When Click để tạo tương tác; hiểu sự thay đổi vị trí theo tọa độ \nDự án: Tạo trò chơi bong bóng bay lên, khi người chơi nhấp vào bong bóng → bong bóng đổi màu hoặc phát âm thanh",
      "Kiến thức: Sử dụng When Click và Change Color/Effect trong Tynker; tạo nhiều sprite và điều khiển riêng từng đối tượng; kết hợp hiệu ứng màu sắc và âm thanh; làm quen tư duy thiết kế tương tác đa đối tượng\nDự án: Tạo khu vườn nhiều màu sắc, khi nhấp vào từng bông hoa → đổi màu và phát hiệu ứng, có thể thêm âm thanh vui nhộn",
      "Kiến thức: Tạo biến (Score) trong Tynker; sử dụng When Start để khởi tạo; dùng If – Else để xử lý va chạm (chạm người cần cứu / chướng ngại vật); kết hợp di chuyển và điều kiện để tăng/giảm điểm; hiểu cơ chế luật chơi cơ bản \nDự án: Điều khiển nhân vật di chuyển trong thành phố, chạm người cần cứu → tăng điểm, chạm vật cản → trừ điểm",
      "Kiến thức: Tạo biến (Energy) trong Tynker; sử dụng Repeat để tạo chuyển động tự động; dùng If – Else để kiểm tra trạng thái (còn năng lượng / hết năng lượng); hiểu cơ chế tài nguyên trong game \nDự án: Lập trình khủng long di chuyển trong công viên, khi ăn thức ăn → tăng năng lượng, khi hết năng lượng → dừng lại",
      "Kiến thức: Tạo biến (Score, Time) trong Tynker; sử dụng Countdown Timer; dùng If – Else để kết thúc game theo điều kiện (hết thời gian hoặc đủ điểm); kết hợp sự kiện bàn phím / click để điều khiển \nDự án: Tạo game săn kho báu trong thời gian giới hạn, thu thập kho báu để tăng điểm, đạt mục tiêu trước khi hết giờ để chiến thắng",
      "Kiến thức: Tạo biến (Score, OrderCount) trong Tynker; sử dụng When Click để chọn nguyên liệu; dùng If – Else để kiểm tra đúng/sai theo yêu cầu khách hàng; sử dụng Timer để giới hạn thời gian; rèn tư duy phản xạ và logic điều kiện \nDự án: Khách hàng đưa yêu cầu món ăn (ví dụ pizza), người chơi chọn đúng nguyên liệu trong thời gian quy định để ghi điểm",
      "Kiến thức: Tạo biến (Speed, Energy) trong Tynker; sử dụng Repeat để tạo chuyển động liên tục; dùng If – Else để kiểm tra trạng thái năng lượng; kết hợp Random để tạo yếu tố bất ngờ; hiểu chiến lược quản lý tài nguyên\nDự án: Lập trình thú cưng tham gia cuộc đua, tăng tốc bằng phím điều khiển, nếu chạy quá lâu sẽ hết năng lượng và chậm lại",
      "Kiến thức: Tạo biến (Score, TrashCount) trong Tynker; sử dụng va chạm (collision) để thu thập vật phẩm; dùng If – Else để phân loại đúng/sai (rác hữu cơ / tái chế); sử dụng Timer để tạo thử thách; xây dựng hệ thống điểm thưởng – phạt \nDự án: Điều khiển nhân vật thu gom rác trong thành phố, phân loại đúng để tăng điểm, phân loại sai bị trừ điểm",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế \nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá \nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế \nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh",
    ],
  },
  nghethuatcn: {
    "Level 1": [
      "Kiến thức: Làm quen giao diện Tinkercad; học cách kéo 7 hình khối cơ bản (hộp, cầu, trụ, nón, bánh donut, kim tự tháp, nêm) vào không gian 3D; kéo góc để phóng to/thu nhỏ và nhập số chính xác; xoay và di chuyển vật thể.\nDự án: Con vật từ 6 hình khối trở lên — ghép lại sao cho nhận ra được đây là con gì",
      "Kiến thức: Học cách căn chỉnh nhiều vật thể thẳng hàng, lật/đối xứng, nhân bản và dịch chuyển đều nhau; đặt tên và nhóm các vật lại với nhau cho gọn gàng; nghĩ về tỉ lệ — ngôi nhà cao hơn hàng rào, cây cao hơn xe.\nDự án: Khu phố nhỏ gồm 6 công trình: nhà ở, trường học, công viên, bệnh viện, chợ và đường phố — các công trình có tỉ lệ tương đối hợp lý",
      "Kiến thức: Học kỹ thuật khoét lỗ (Boolean Hole): đặt một hình khối vào vị trí cần khoét, chuyển sang màu đỏ xuyên suốt rồi nhóm lại — phần giao nhau sẽ bị đục; tạo chữ nổi 3D gắn tên lên sản phẩm; giữ đối xứng hai bên.\nDự án: Bộ 3 món trang sức gồm nhẫn, mặt dây chuyền và khuyên tai — cảm hứng từ thiên nhiên Việt Nam: hoa sen, lá tre, sóng biển",
      "Kiến thức: Thiết kế từng bộ phận riêng (đầu – thân – tay – chân) rồi lắp ghép lại; tạo khớp nối trụ-lỗ tháo lắp được; xoay chính xác theo góc 15°/30°/45° để tay chân có tư thế tự nhiên.\nDự án: Robot có khớp nối rõ ràng và 3 khuôn mặt thay đổi được: vui, buồn, ngạc nhiên",
      "Kiến thức: Thiết kế đồ vật đúng kích thước thực tế bằng cách đo thước rồi nhập số vào Tinkercad; chú ý đến sự tiện dụng: cạnh bo tròn để không sắc, tay cầm vừa bàn tay, dung tích đủ chứa đồ.\nDự án: Bộ 3 đồ dùng học tập: hộp bút, giá đỡ điện thoại và hộp kẹp giấy — kích thước đúng thực tế, giải thích được vì sao chọn hình dạng đó",
      "Kiến thức: Tái hiện vật phẩm từ ảnh thực: nhìn ảnh tham khảo, phân tích hình dạng chính, rồi ghép khối để tạo ra; thêm hoa văn nổi bằng hình mỏng đặt lên bề mặt; giữ đặc trưng nhận biết — đèn lồng phải ra đèn lồng, bánh chưng phải ra bánh chưng.\nDự án: Bộ 4 vật phẩm Tết: đèn lồng, bánh chưng, phong bao lì xì và cành hoa đào — nhìn vào nhận ra ngay",
      "Kiến thức: Phân tích cấu tạo phi thuyền gồm 5 bộ phận: thân chính, mũi, cánh ổn định, động cơ và khoang phi hành gia; mỗi bộ phận có chức năng riêng; lắp ghép sao cho nhìn vào biết ngay phần nào dùng để làm gì.\nDự án: Phi thuyền vũ trụ với đủ 5 bộ phận chức năng rõ ràng — nhìn vào biết ngay từng phần dùng để làm gì",
      "Kiến thức: Sắp xếp cảnh theo chiều sâu: vật ở gần đặt phía trước, vật ở xa đặt phía sau; tạo 4 khu sinh thái khác nhau; con vật phải phù hợp với môi trường sống của chúng — cá phải ở nước, đại bàng phải ở vùng cao.\nDự án: Vườn thú 4 khu sinh thái, mỗi khu có 2 con vật đặc trưng với môi trường sống khác nhau rõ ràng",
      "Kiến thức: Ôn tập toàn bộ kỹ thuật trong học kỳ, hoàn thiện và tinh chỉnh các sản phẩm theo checklist kỹ thuật.\nDự án: Học sinh tự chọn 1 tác phẩm yêu thích, phân tích điểm mạnh/yếu và nâng cấp",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế \nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá \nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế \nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh",
    ],
    "Level 2": [
      "Kiến thức: Thực hành khoét lỗ nhiều bước liên tiếp: khoét xong lại khoét tiếp, tạo hoa văn lõm bằng cách xếp nhiều hình trụ nhỏ thành lưới rồi khoét xuyên; tạo hoa văn nổi bằng hình mỏng đặt chồng lên bề mặt.\nDự án: Mặt nạ lễ hội 3 lớp: nền đặc — hoa văn nổi — lưới khoét xuyên, lấy cảm hứng văn hóa Việt Nam",
      "Kiến thức: Xây nhà theo đúng quy trình: vẽ mặt bằng trước, dựng tường, đặt mái, khoét cửa ra vào và cửa sổ; giữ tỉ lệ hợp lý — cửa cao hơn đầu người, tường đủ dày, trần đủ cao để đứng được.\nDự án: Ngôi nhà 2 tầng đúng tỉ lệ thực tế, có ghi chú kích thước từng phần và giải thích được vì sao hướng cửa chính chọn như vậy",
      "Kiến thức: Tìm hiểu 6 bộ phận máy cơ bản: đòn bẩy, ròng rọc, mặt phẳng nghiêng, bánh răng, trục vít và nêm; mỗi bộ phận giúp con người làm việc nhẹ hơn ra sao; thiết kế 3D đúng với cách bộ phận đó thực sự hoạt động.\nDự án: Chọn 1 trong 3: máy nghiền hạt / cần cẩu / xe kéo — có ít nhất 2 bộ phận máy đúng nguyên lý",
      "Kiến thức: Học quy trình thiết kế sản phẩm: viết yêu cầu trước (cần chở được bao nhiêu người, dùng năng lượng gì, tốc độ bao nhiêu), phác thảo tay, rồi mới dựng 3D; ghi chú giải thích từng bộ phận đã chọn.\nDự án: Phương tiện di chuyển năm 2060 kèm bảng giải thích 5 bộ phận — vì sao chọn thiết kế đó và nó hoạt động như thế nào",
      "Kiến thức: Thiết kế theo kiểu lắp ghép: mỗi module (khu sinh hoạt, phòng thí nghiệm, khu năng lượng, cổng cập bến) hoàn chỉnh độc lập và kết nối được với nhau qua cổng tiêu chuẩn; giữ cân bằng để trạm không bị lệch.\nDự án: Trạm không gian gồm 5 module kết nối được với nhau, có 6 tấm pin năng lượng mặt trời và tên từng module ghi rõ ràng",
      "Kiến thức: Quan sát một vấn đề môi trường thực tế xung quanh (rác thải, nước bẩn, không khí ô nhiễm...), đặt câu hỏi 'Nếu có thiết bị này thì sẽ giải quyết được gì?', phác thảo giải pháp và thiết kế thiết bị đó.\nDự án: Thiết bị giải quyết 1 vấn đề môi trường thực tế + tờ mô tả ngắn giải thích vấn đề là gì và thiết bị hoạt động ra sao",
      "Kiến thức: Tìm ảnh tham khảo từ nhiều góc khác nhau của một công trình lịch sử Việt Nam; phân tích hình dạng mái, cột, hành lang đặc trưng; tái hiện lại bằng 3D sao cho nhìn vào nhận ra được công trình đó là gì.\nDự án: Mô hình 3D phục dựng 1 công trình lịch sử Việt Nam theo ảnh tư liệu, kèm đoạn giới thiệu ngắn về công trình đó",
      "Kiến thức: Chọn 6 tác phẩm tốt nhất từ L1 và L2; chụp 3 góc ảnh đẹp cho mỗi tác phẩm (góc chính diện, góc 3/4, góc nhìn từ trên); viết 1-2 câu giải thích vì sao mình thích tác phẩm đó và nếu làm lại sẽ thêm gì.\nDự án: Bộ sưu tập 6 tác phẩm tốt nhất: mỗi tác phẩm có 3 ảnh chụp đẹp và lời giải thích của chính mình",
      "Kiến thức: Ôn tập toàn bộ kỹ thuật trong học kỳ, hoàn thiện và tinh chỉnh các sản phẩm theo checklist kỹ thuật.\nDự án: Học sinh tự chọn 1 tác phẩm yêu thích, phân tích điểm mạnh/yếu và nâng cấp",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế \nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá \nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế \nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh",
    ],
    "Level 3": [
      "Kiến thức: Làm quen giao diện DelightEx: tab Thư viện có sẵn hàng nghìn nhân vật, đồ vật, cây cối; kéo thả vào sân khấu 3D, xoay, phóng to/thu nhỏ và di chuyển; học cách đặt vật ở tiền cảnh – giữa – hậu cảnh để cảnh trông có chiều sâu.\nDự án: Cảnh đường phố nhỏ: 3–4 nhân vật đang làm việc khác nhau, có cây cối và 1–2 công trình — nhìn vào đoán được câu chuyện đang xảy ra",
      "Kiến thức: Khám phá danh mục Nhà ở: kéo thả đồ nội thất cho từng phòng (phòng khách, phòng ngủ, nhà bếp); chọn đồ vật phù hợp với từng căn phòng; dùng thêm đồ trang trí (Mục → Trang trí) để thêm nét cá nhân; phối màu sao cho các phòng trông hài hòa.\nDự án: Căn nhà 3D có ít nhất 3 phòng được bài trí đầy đủ — thể hiện phong cách riêng qua cách chọn đồ và màu sắc",
      "Kiến thức: Khám phá danh mục Động vật: phân loại Đất (chó, hươu...), Nước (cá, rùa...) và Không khí; kết hợp cây cối, đá và cỏ từ danh mục Thiên nhiên để tạo môi trường sống phù hợp cho từng con vật — cá phải có ao nước, hươu phải có đồng cỏ.\nDự án: Vườn thú mini với 3 khu (đất – nước – không khí): mỗi khu có 2 con vật và cảnh nền phù hợp với nơi chúng sống",
      "Kiến thức: Kết hợp tòa nhà thành phố (Nhà ở → Thành phố) với các loại phương tiện (Vận chuyển → Đất: xe đạp, xe máy, ô tô) và nhiều loại nghề nghiệp khác nhau (Nhân vật → Công việc); sắp xếp sao cho cảnh trông đông đúc, nhộn nhịp nhưng không rối mắt.\nDự án: Góc phố đông đúc: ít nhất 4 loại phương tiện, 5 nhân vật nghề khác nhau, 3–4 tòa nhà — người xem cảm nhận được sự sôi động",
      "Kiến thức: Khám phá tab Môi trường: đổi bầu trời (Skybox) từ sáng sang chiều tối sang đêm; bật hiệu ứng thời tiết (mưa, tuyết, lá rơi, bong bóng); thay bộ lọc màu (xanh lam tạo cảm giác lạnh, vàng tạo cảm giác ấm, tối tạo cảm giác huyền bí); thêm tiếng âm thanh nền phù hợp.\nDự án: Cùng 1 cảnh thiên nhiên nhưng 2 phiên bản hoàn toàn khác nhau: ban ngày nắng đẹp vs buổi tối mưa — chỉ thay đổi trời, hiệu ứng và màu bộ lọc",
      "Kiến thức: Trang trí lễ hội bằng Mục → Trang trí (đèn lồng, cờ, bóng bay, hoa); thêm Thức ăn và Biểu tượng đặc trưng; dùng Đặc biệt → Hiệu ứng hạt để tạo pháo hoa, lửa hoặc bông tuyết lung linh; đặt nhiều nhân vật nhưng chia theo nhóm để không bị rối.\nDự án: Cảnh lễ hội rực rỡ: 8+ nhân vật, trang trí đèn cờ hoa, pháo hoa hoặc lửa bừng sáng — người xem cảm nhận ngay không khí vui tươi",
      "Kiến thức: Dùng Thiên nhiên → Hành tinh để đặt các hành tinh có kích thước và màu sắc khác nhau; thêm hiệu ứng bụi vũ trụ và ánh sáng (Đặc biệt → Hiệu ứng hạt); đặt tên hành tinh bằng chữ nổi 3D (Xây dựng → Ba chiều); chỉnh bầu trời tối mịt (Skybox đêm) để ra không khí ngoài vũ trụ.\nDự án: Cảnh ngoài vũ trụ: 4–5 hành tinh khác nhau, tên hành tinh nổi 3D, phi hành gia đang khám phá và hiệu ứng bụi sao lung linh",
      "Kiến thức: Dựng cảnh chợ đêm lung linh bằng cách kết hợp tất cả những gì đã học trong cả học kỳ: đặt hàng chục nhân vật đang mua bán, thêm gian hàng thức ăn và đồ trang trí đầy màu sắc từ Mục, bật hiệu ứng pháo hoa hoặc đèn nháy từ Đặc biệt, chỉnh bầu trời đêm và bộ lọc ánh đèn vàng ấm để tạo cảm giác nhộn nhịp — đây là bài đầu tiên dùng cùng lúc tất cả danh mục trong thư viện.\nDự án: Cảnh chợ đêm sôi động: 10+ nhân vật đang mua bán và đi dạo, gian hàng thức ăn và đồ lưu niệm, đèn hoa trang trí rực rỡ, pháo hoa trên bầu trời đêm và tiếng nhạc chợ đêm làm nền",
      "Kiến thức: Ôn tập toàn bộ kỹ thuật trong học kỳ, hoàn thiện và tinh chỉnh các sản phẩm theo checklist kỹ thuật.\nDự án: Học sinh tự chọn 1 tác phẩm yêu thích, phân tích điểm mạnh/yếu và nâng cấp",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế \nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá \nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế \nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh",
    ],
    "Level 4": [
      "Kiến thức: Thiết kế nội thất tổng thể cho cả căn nhà: phối hợp màu sắc xuyên suốt giữa các phòng, chọn phong cách thống nhất (hiện đại / cổ điển / dễ thương...); thêm chi tiết nhỏ thể hiện cá tính chủ nhân — sở thích, màu yêu thích, vật phẩm đặc trưng; đặt nhạc nền phù hợp.\nDự án: Căn hộ hoàn chỉnh thể hiện cá tính của chủ nhân: chỉ nhìn vào đồ vật và màu sắc là đoán được chủ nhân là kiểu người như thế nào",
      "Kiến thức: Tìm hiểu mô hình nông trại: kết hợp Động vật (gà, bò, heo, cừu…) và Thực vật (rau, cây ăn quả) (Thiên nhiên); bố cục khu vực chuồng trại, vườn trồng, ao hồ; màu sắc tươi sáng (xanh lá, nâu đất, vàng nắng); hiệu ứng ánh sáng ban ngày, bầu trời trong xanh; thêm chi tiết hàng rào, máy móc nông nghiệp (xe kéo, cối xay); thể hiện hoạt động chăm sóc, thu hoạch.\n\nDự án: Thiết kế một nông trại sinh động: có chuồng động vật, ruộng rau, vườn cây, ao nhỏ; nhân vật nông dân đang làm việc (cho ăn, thu hoạch); thêm đường đi, hàng rào, cây cối xung quanh — tạo cảm giác yên bình, gần gũi và tràn đầy sức sống.",
      "Kiến thức: Tạo thế giới dưới nước: dùng Động vật → Nước (cá, rùa biển) kết hợp với Thiên nhiên → Đá (san hô, đá ngầm); bật hiệu ứng bong bóng nước (Đặc biệt → Hiệu ứng hạt); đặt bộ lọc màu Xanh lam để ra cảm giác sâu thẳm; phân bố sinh vật theo 3 tầng nước từ mặt biển xuống đáy.\nDự án: Cảnh đáy biển 3 tầng: mặt nước (cá nhỏ), giữa biển (rùa và cá lớn), đáy biển (san hô, sinh vật kỳ lạ) — bộ lọc xanh và bong bóng tạo cảm giác như đang lặn thật",
      "Kiến thức: Tạo bầu không khí huyền bí: chọn cây to um tùm từ Thiên nhiên; bật hiệu ứng sương mù và lá rơi (Đặc biệt → Hiệu ứng hạt); chỉnh bộ lọc màu tối hoặc xám; đặt bầu trời chiều tối; đặt nhân vật nhỏ bé giữa cây to khổng lồ để tạo cảm giác phiêu lưu; thêm tiếng rừng làm âm thanh nền.\nDự án: Khu rừng lúc hoàng hôn: cây cối um tùm, sương mù lan tỏa, 1–2 sinh vật ẩn hiện, nhân vật thám hiểm nhỏ bé — người xem cảm nhận được sự huyền bí và kỳ diệu",
      "Kiến thức: Sáng tạo thành phố năm 2100: chọn tòa nhà và địa danh làm nền, thêm phương tiện bay (Vận chuyển → Không khí: máy bay, phi thuyền); đặt tên công trình bằng chữ 3D nổi; chỉnh bầu trời về đêm rực rỡ và bật hiệu ứng ánh sáng; nghĩ xem năm 2100 con người sẽ sống như thế nào và thể hiện điều đó qua cảnh.\nDự án: Thành phố năm 2100: tòa nhà hiện đại, phương tiện bay, chữ tên công trình 3D nổi bật, bầu trời tương lai — người xem thấy được sự khác biệt hoàn toàn với thành phố hôm nay",
      "Kiến thức: Tái hiện nền văn minh Ai Cập cổ đại: Kim tự tháp (Mục → Kiến trúc), tượng Nhân Sư, sa mạc và sông Nile (Thiên nhiên), trang phục Pharaoh và người dân (Nhân vật); chữ tượng hình (Hieroglyph), thần thoại Ai Cập (Thần Ra, Anubis…) (Lịch sử); màu sắc đặc trưng vàng – cát – xanh lam; hiệu ứng ánh nắng sa mạc, bầu trời rộng lớn; nhấn mạnh sự bí ẩn, cổ kính và hùng vĩ.\n\nDự án: Cảnh Ai Cập cổ đại với kim tự tháp lớn giữa sa mạc, tượng Nhân Sư phía trước, dòng sông Nile chảy qua; nhân vật Pharaoh đứng uy nghi hoặc đoàn người di chuyển; thêm chi tiết chữ tượng hình trên tường, ánh nắng vàng rực – tạo cảm giác huyền bí, cổ xưa và đầy quyền lực.",
      "Kiến thức: Tìm hiểu cấu trúc sân bay: đường băng (Runway), nhà ga (Terminal), tháp điều khiển (Control Tower), khu check-in và khu chờ; phương tiện hàng không (máy bay, xe chở hành lý); quy trình hoạt động cơ bản (cất cánh – hạ cánh); bố cục không gian rộng, rõ ràng; màu sắc hiện đại (trắng, xám, xanh dương); hiệu ứng ánh sáng ban ngày/ban đêm, bảng điện tử hiển thị chuyến bay; thêm yếu tố chuyển động (máy bay cất cánh, xe di chuyển).\n\nDự án: Thiết kế một sân bay quốc tế hiện đại: có đường băng lớn với máy bay đang cất/hạ cánh, nhà ga với hành khách check-in, khu chờ và bảng thông tin chuyến bay; thêm tháp điều khiển, xe vận chuyển hành lý và hiệu ứng ánh sáng — tạo cảm giác nhộn nhịp, chuyên nghiệp và thực tế.",
      "Kiến thức: Thiết kế công viên giải trí năm 2100: có khu vực phi thuyền tàu lượn bay trên trời (Vận chuyển → Không khí), nhân vật robot phục vụ khách (Nhân vật → Công việc), cây cối phát sáng (Thiên nhiên + Hiệu ứng hạt), tòa tháp giải trí khổng lồ (Nhà ở → Thành phố); các robot nhân viên biết nói chào khách khi bấm vào; bầu trời tương lai rực rỡ và âm thanh công viên náo nhiệt.\nDự án: Công viên giải trí tương lai hoành tráng: ít nhất 4 khu vui chơi khác nhau, robot nhân viên biết nói chuyện khi bấm vào, phương tiện bay trên trời, hiệu ứng ánh sáng và âm thanh sôi động — cảnh nhìn vào là muốn vào chơi ngay",
      "Kiến thức: Ôn tập toàn bộ kỹ thuật trong học kỳ, hoàn thiện và tinh chỉnh các sản phẩm theo checklist kỹ thuật.\nDự án: Học sinh tự chọn 1 tác phẩm yêu thích, phân tích điểm mạnh/yếu và nâng cấp",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế \nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá \nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế \nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh",
    ],
  },
  pythonai: {
    "Level 1": [
      "Kiến thức: Cài Thonny IDE và chạy Python lần đầu tiên: dùng lệnh print() để in chữ ra màn hình, in số, in nhiều\n dòng; hiểu rằng máy tính đọc và chạy code từ trên xuống dưới từng dòng một; thêm chú thích bằng dấu # \nđể giải thích code.\n Dự án: Chương trình in ra màn hình bài tự giới thiệu bản thân: tên, tuổi, trường, sở thích — mỗi thông tin trên\n một dòng, in đẹp và rõ ràng",
      "Kiến thức: Tạo biến để lưu thông tin: tên biến, gán giá trị bằng dấu =; làm quen 3 kiểu dữ liệu thường gặp — số \nnguyên (int), số thập phân (float) và chuỗi ký tự (str); dùng type() để kiểm tra kiểu; nối chuỗi bằng dấu + và f-string.\n Dự án: Chương trình tính diện tích và chu vi hình chữ nhật: nhập chiều dài và chiều rộng dưới dạng biến, tính \ntoán và in kết quả ra màn hình kèm đơn vị",
      "Kiến thức: Dùng input() để nhận thông tin người dùng gõ vào; hiểu rằng input() luôn trả về chuỗi — cần dùng int()\n hoặc float() để đổi sang số khi muốn tính toán; kết hợp input() với print() và f-string để tạo hội thoại với người dùng.\n Dự án: Chương trình hỏi tên và tuổi người dùng, tính xem người đó sẽ bao nhiêu tuổi vào năm 2030 và in ra câu \ntrả lời cá nhân hóa",
      "Kiến thức: Sử dụng đầy đủ các phép tính trong Python: cộng (+), trừ (-), nhân (*), chia thập phân (/), chia lấy phần \nnguyên (//), lấy số dư (%), lũy thừa (**); hiểu thứ tự thực hiện phép tính; dùng round() để làm tròn số.\n Dự án: Máy tính chia hóa đơn nhà hàng: nhập tổng tiền và số người, tính phần mỗi người trả — hiển thị kết quả làm \ntròn đến nghìn đồng",
      "Kiến thức: Dùng if, elif, else để máy tính đưa ra quyết định khác nhau tùy theo điều kiện: so sánh bằng ==, khác !=, lớn \nhơn >, nhỏ hơn <; kết hợp nhiều điều kiện bằng and và or; hiểu rằng điều kiện luôn trả về True hoặc False.\n Dự án: Chương trình xếp loại học lực: nhập điểm trung bình, in ra Xuất Sắc / Giỏi / Khá / Trung Bình / Yếu đúng theo \nthang điểm thật của nhà trường",
      "Kiến thức: Dùng vòng lặp for để lặp lại một khối code nhiều lần: for i in range(n) lặp n lần; for item in list lặp qua từng \nphần tử danh sách; lồng vòng lặp trong vòng lặp để xây bảng cửu chương; tích lũy tổng và đếm số.\n Dự án: Bảng cửu chương đẹp từ 2 đến 9: in ra màn hình có dóng thẳng cột, tiêu đề từng bảng rõ ràng — dùng vòng \nlặp for lồng nhau",
      "Kiến thức: Dùng vòng lặp while để lặp khi điều kiện còn đúng: tạo menu chương trình lặp cho đến khi người dùng \nchọn thoát; làm quen với list (danh sách): tạo danh sách, thêm phần tử (append), xóa (remove), lấy theo vị trí; dùng\nlen() để đếm.\n Dự án: Chương trình quản lý danh sách việc cần làm (to-do list): thêm việc, xem danh sách, đánh dấu xong — chạy \ntrong vòng lặp menu đến khi chọn thoát",
      "Kiến thức: Tạo hàm bằng từ khóa def để đặt tên cho một khối code và dùng lại nhiều lần; hàm có thể nhận tham \nsố đầu vào và trả về kết quả bằng return; hiểu lợi ích của hàm: code ngắn hơn, dễ sửa hơn, không bị lặp đi lặp lại.\n Dự án: Bộ hàm tính toán hình học: hàm tính diện tích hình tròn, hình vuông, hình tam giác — gọi đúng hàm theo\n hình người dùng chọn, in kết quả kèm đơn vị",
      "Kiến thức: Ôn tập khối lệnh, tư duy lập trình và hoàn thiện sản phẩm theo yêu cầu thực tế \n Dự án: Hoàn thiện và nâng cấp các dự án đã học",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế \nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá \nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế \nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh",
    ],
    "Level 2": [
      "Kiến thức: Làm quen thư viện Turtle: tạo con rùa, điều khiển hướng đi bằng forward(), right(), left(), pencolor() và pensize(); vẽ hình vuông, tam giác, ngôi sao bằng vòng lặp; thay màu bút và màu nền; hiểu hệ tọa độ màn hình Turtle.\nDự án: Ngôi sao 6 cánh nhiều màu sắc vẽ bằng Turtle: mỗi cánh một màu khác nhau, nét vẽ đậm và rõ — dùng vòng lặp for để lặp lại động tác vẽ",
      "Kiến thức: Kết hợp vòng lặp for với Turtle để tạo hoa văn lặp đều: mỗi vòng lặp xoay một góc nhỏ để tạo hoa tròn, vòng tròn lồng nhau, hình tuyết (snowflake); dùng speed(0) để vẽ nhanh; thay đổi số cánh hoa bằng cách chỉnh một con số duy nhất.\nDự án: Hoa văn tuyết 8 cánh cân đối: mỗi cánh có 3 nhánh nhỏ, màu xanh lam trên nền đen — vẽ hoàn toàn bằng vòng lặp, thay 1 con số là đổi hẳn hình dạng",
      "Kiến thức: Dùng hàm def kết hợp Turtle để vẽ nhân vật phức tạp: tách từng phần (đầu, thân, tay, chân) thành hàm riêng; dùng penup() và pendown() để di chuyển con rùa mà không vẽ đường; dùng fillcolor() và begin_fill() để tô màu.\nDự án: Phong cảnh làng quê đơn giản: nhà, cây, mặt trời, mây và đường đi — mỗi vật thể là một hàm riêng, gọi hàm và truyền tọa độ để đặt vật thể đúng vị trí",
      "Kiến thức: Dùng thư viện random kết hợp Turtle để tạo bầu trời đầy sao ngẫu nhiên: random.randint() chọn vị trí và kích thước ngẫu nhiên; thêm ontimer() để làm sao nhấp nháy theo thời gian; hiểu vòng lặp sự kiện (event loop) của Turtle.\nDự án: Bầu trời đêm: 200 ngôi sao xuất hiện ngẫu nhiên ở vị trí và kích thước khác nhau, một số sao nhấp nháy luân phiên — chạy liên tục cho đến khi đóng cửa sổ",
      "Kiến thức: Chuyển sang Tkinter để xây ứng dụng cửa sổ thật: tạo cửa sổ Tk(), đặt tiêu đề và kích thước; thêm nhãn Label để hiển thị chữ, nút Button để bấm; hiểu mainloop() là vòng lặp giữ cửa sổ mở và lắng nghe sự kiện từ người dùng.\nDự án: Cửa sổ chào mừng: tiêu đề lớn, ảnh biểu tượng, nút Bắt Đầu và nút Thoát — bấm Thoát thì đóng cửa sổ, bấm Bắt Đầu thì đổi chữ tiêu đề",
      "Kiến thức: Kết nối nút bấm với hàm xử lý bằng tham số command=; tạo nhiều nút với các hành động khác nhau; đổi màu nền cửa sổ khi bấm nút; dùng bind() để bắt sự kiện bàn phím; hiểu rằng Tkinter là lập trình hướng sự kiện — chờ người dùng làm gì thì mới chạy.\nDự án: Bảng màu tương tác: 8 nút màu sắc khác nhau, bấm nút nào thì nền cửa sổ đổi sang màu đó — tên màu hiện ở nhãn bên dưới",
      "Kiến thức: Dùng Entry để tạo ô nhập văn bản, StringVar và IntVar để lấy giá trị từ ô nhập; dùng Label cập nhật nội dung động bằng .config(text=...); tạo ô chọn với Checkbutton và Radiobutton; xóa nội dung Entry sau khi xử lý xong.\nDự án: Ứng dụng đổi tên thú vị: nhập tên thật vào ô, bấm nút, hiện tên biệt danh ngẫu nhiên vui vẻ — mỗi lần bấm ra một tên khác từ danh sách biệt danh",
      "Kiến thức: Tổ chức giao diện bằng Frame để chia ứng dụng thành các khu vực chức năng; sử dụng pack() và grid() để bố trí widget hợp lý; áp dụng padding để tạo khoảng cách; tùy chỉnh font chữ, màu sắc để tăng tính trực quan; xây dựng giao diện theo bố cục rõ ràng, dễ sử dụng.\n\nDự án: Thiết kế ứng dụng đăng ký thông tin học sinh gồm các phần: nhập họ tên, lớp, lựa chọn môn học và nút gửi dữ liệu — giao diện chia bố cục rõ ràng, giống form đăng ký thực tế.",
      "Kiến thức: Ôn tập khối lệnh, tư duy lập trình và hoàn thiện sản phẩm theo yêu cầu thực tế \n Dự án: Hoàn thiện và nâng cấp các dự án đã học",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế \nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá \nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế \nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh",
    ],
    "Level 3": [
      "Kiến thức: Hiểu tại sao cần lập trình hướng đối tượng: nhóm dữ liệu và hành động liên quan vào một chỗ; tạo class đầu tiên, khởi tạo đối tượng; so sánh với ví dụ thực tế — class Hocsinh giống khuôn mẫu, từng học sinh cụ thể là đối tượng từ khuôn đó.\nDự án: Class HocSinh với các thông tin cơ bản: tạo 5 đối tượng học sinh khác nhau từ một class duy nhất, in thông tin từng học sinh ra màn hình theo định dạng đẹp",
      "Kiến thức: Tạo phương thức (method) trong class bằng def — hàm nằm trong class, luôn có tham số self đầu tiên; thuộc tính là thông tin (tên, tuổi, điểm), phương thức là hành động (giới thiệu, tính xếp loại, in báo cáo); hiểu self dùng để chỉ chính đối tượng đang gọi.\nDự án: Class NganHang: đối tượng tài khoản có số dư, phương thức gửi tiền và rút tiền — in thông báo khi rút thành công, báo lỗi khi số dư không đủ",
      "Kiến thức: Tạo class con kế thừa từ class cha: class con tự động có tất cả thuộc tính và phương thức của class cha; thêm thuộc tính và phương thức mới chỉ có ở class con; dùng super() để gọi __init__ của class cha; ghi đè phương thể (override) để thay đổi hành vi.\nDự án: Phân cấp động vật: class Động Vật → class Chó và class Mèo; mỗi loài có tiếng kêu riêng; gọi phương thức kêu() trên từng đối tượng ra kết quả khác nhau",
      "Kiến thức: Làm chủ list và dict: list comprehension để tạo danh sách nhanh; lọc phần tử bằng điều kiện trong list comprehension; dict để lưu dữ liệu dạng key-value — tìm, thêm, xóa, cập nhật; lồng dict trong list để lưu danh sách đối tượng phức tạp.\nDự án: Bảng điểm lớp học: danh sách 10 học sinh dạng list of dict, lọc ra học sinh giỏi, tính điểm trung bình lớp, tìm điểm cao nhất — in ra báo cáo đầy đủ",
      "Kiến thức: Đọc và ghi file văn bản với open(), read(), write(), readlines(); dùng from/to JSON để lưu và tải dữ liệu phức tạp (list, dict) ra file — dữ liệu được giữ lại sau khi tắt chương trình; xử lý lỗi khi file không tồn tại bằng try/except.\nDự án: Chương trình nhật ký cá nhân: ghi thêm ghi chú vào file, đọc và in ra tất cả ghi chú cũ, xóa ghi chú theo số thứ tự — dữ liệu lưu file JSON, không mất sau khi tắt",
      "Kiến thức: Dùng try/except để bắt lỗi và xử lý mà không làm chương trình crash: lỗi nhập chữ vào ô số (ValueError), lỗi chia cho 0 (ZeroDivisionError), lỗi không tìm thấy file (FileNotFoundError); kiểm tra hợp lệ đầu vào trước khi xử lý và thông báo lỗi rõ ràng.\nDự án: Ứng dụng đổi đơn vị chống lỗi: nhập sai kiểu dữ liệu thì hiện thông báo yêu cầu nhập lại, nhập số âm thì báo không hợp lệ — chương trình không bao giờ bị crash",
      "Kiến thức: Khám phá các thư viện Python có sẵn: random (xổ số, bốc thăm ngẫu nhiên), math (căn bậc hai, làm tròn nâng cao, hằng số pi), datetime (lấy ngày giờ hiện tại, tính số ngày giữa hai mốc thời gian); tạo module .py riêng và import vào file khác.\nDự án: Bộ công cụ ngẫu nhiên: rút tên học sinh ngẫu nhiên để trả lời câu hỏi, xổ số mini cho lớp, đếm ngược đến ngày thi — gộp vào một file tiện ích dùng mãi được",
      "Kiến thức: Kết hợp OOP và Tkinter: đặt toàn bộ code giao diện vào trong một class — __init__ khởi tạo cửa sổ và widget, các method xử lý từng sự kiện; giữ trạng thái ứng dụng (điểm số, danh sách, trang hiện tại) là thuộc tính của class; code gọn sạch hơn rất nhiều.\nDự án: Ứng dụng flashcard học tiếng Anh dạng OOP: bấm nút Tiếp Theo để xem từ mới, bấm Lật để xem nghĩa, đếm số từ đã học — tất cả trong một class App duy nhất",
      "Kiến thức: Ôn tập khối lệnh, tư duy lập trình và hoàn thiện sản phẩm theo yêu cầu thực tế \n Dự án: Hoàn thiện và nâng cấp các dự án đã học",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế \nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá \nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế \nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh",
    ],
    "Level 4": [
      "Kiến thức: Cài Pygame và tạo cửa sổ game đầu tiên: hiểu vòng lặp game (game loop) — mỗi vòng lặp là một khung hình; xử lý sự kiện thoát khi bấm nút X; đặt FPS (số khung hình/giây) bằng Clock; vẽ màu nền bằng fill(); hiểu pygame.display.flip() cập nhật màn hình.\nDự án: Cửa sổ game hoàn chỉnh: nền màu tím đêm, tiêu đề game ở trên thanh cửa sổ, chạy ổn định 60 FPS — nền tảng để thêm mọi thứ từ bài 2 trở đi",
      "Kiến thức: Dùng pygame.draw để vẽ các hình: hình chữ nhật (rect), hình tròn (circle), đường thẳng (line), đa giác (polygon); tô màu, vẽ viền; hiển thị chữ bằng pygame.font — đặt font, cỡ chữ, màu sắc; vẽ chữ lên màn hình đúng tọa độ.\nDự án: Màn hình trang trí: bầu trời gradient có nhiều ngôi sao tròn, mặt đất, mặt trăng — toàn bộ vẽ bằng lệnh pygame.draw, kèm chữ tên game ở giữa màn hình",
      "Kiến thức: Tạo chuyển động bằng cách cộng thêm vào tọa độ x, y mỗi khung hình; đặt tốc độ vx, vy; xử lý nảy lại khi chạm mép màn hình bằng cách đổi dấu vận tốc; hiểu tại sao mỗi khung hình phải xóa màn hình và vẽ lại từ đầu.\nDự án: Bóng nảy tự do: quả bóng tròn màu sắc chuyển động và nảy lại mỗi khi chạm 4 cạnh màn hình — tốc độ thay đổi theo phím bấm tăng/giảm",
      "Kiến thức: Đọc phím đang giữ bằng pygame.key.get_pressed() để nhân vật di chuyển mượt; phân biệt với KEYDOWN chỉ bắt lần nhấn đầu tiên; giới hạn nhân vật không ra khỏi màn hình bằng max()/min(); thêm hiệu ứng nghiêng hoặc đổi màu khi di chuyển trái/phải.\nDự án: Nhân vật phi thuyền điều khiển được: di chuyển lên xuống trái phải bằng phím mũi tên, không ra khỏi màn hình — tốc độ vừa phải và di chuyển mượt mà",
      "Kiến thức: Đọc vị trí chuột bằng pygame.mouse.get_pos(); bắt sự kiện click chuột MOUSEBUTTONDOWN; tạo danh sách đạn (list of rect) — mỗi lần bắn thêm một đạn vào danh sách, mỗi khung hình di chuyển và xóa đạn ra khỏi màn hình khi bay qua mép.\nDự án: Tàu vũ trụ bắn đạn: bấm Space để bắn, đạn bay thẳng lên; chuột di chuyển thì hiện ngắm; hiển thị số đạn còn lại ở góc màn hình",
      "Kiến thức: Phát hiện va chạm giữa hai hình chữ nhật bằng rect.colliderect(); va chạm giữa điểm và hình chữ nhật bằng rect.collidepoint(); khi va chạm: xóa đối tượng khỏi danh sách, cộng điểm, phát hiệu ứng; hiển thị điểm số cập nhật theo thời gian thật.\nDự án: Bắn kẻ thù cơ bản: 5 kẻ thù di chuyển ngang, bắn đạn trúng thì biến mất và cộng 10 điểm, điểm số hiện góc trên — khi tiêu diệt hết thì hiện thông báo chiến thắng",
      "Kiến thức: Tải file hình ảnh PNG/JPG bằng pygame.image.load() và vẽ lên màn hình bằng blit(); co giãn ảnh bằng pygame.transform.scale(); tải file âm thanh WAV/MP3 bằng pygame.mixer và phát khi có sự kiện; nhạc nền phát lặp liên tục bằng music.play(-1).\nDự án: Game có hình ảnh thật: nhân vật là sprite PNG, kẻ thù là ảnh PNG khác, phát tiếng nổ khi bắn trúng và nhạc nền nhẹ nhàng phát liên tục — trông như game thật hoàn toàn",
      "Kiến thức: Quản lý nhiều màn hình bằng biến trạng thái game (state): MENU, PLAYING, GAME_OVER, WIN; vẽ nội dung khác nhau tùy theo trạng thái; màn hình menu có nút Play và Thoát; màn hình thua hiện điểm cao nhất và nút chơi lại; chuyển trạng thái khi bấm phím hoặc click.\nDự án: Game hoàn chỉnh có 3 màn hình: Menu (tên game + nút Play), Game (chơi thật), Game Over (điểm + nút chơi lại) — chuyển đổi mượt mà, bấm R để chơi lại ngay",
      "Kiến thức: Ôn tập khối lệnh, tư duy lập trình và hoàn thiện sản phẩm theo yêu cầu thực tế \n Dự án: Hoàn thiện và nâng cấp các dự án đã học",
      "Kiến thức: Lên ý tưởng, lập kế hoạch dự án, xác định mục tiêu và cách xây dựng sản phẩm thực tế \nDự án: Thiết kế và bắt đầu xây dựng dự án cá nhân theo chủ đề",
      "Kiến thức: Hoàn thiện sản phẩm, tối ưu logic, kiểm tra và cải tiến dự án theo tiêu chí đánh giá \nDự án: Nâng cấp, chỉnh sửa và luyện tập trình bày sản phẩm",
      "Kiến thức: Kỹ năng trình bày, phản biện và kết nối sản phẩm với ứng dụng thực tế \nDự án: Trình bày, demo và chia sẻ sản phẩm trước lớp và phụ huynh",
    ],
  },
};

const COURSES = {
  robotics: {
    title: "Khám Phá Robotics",
    meta: [
      {icon:"👶", text:"7 – 9 tuổi"},
      {icon:"⏱️", text:"144 giờ học"},
      {icon:"🧱", text:"Lego Wedo 2.0"},
      {icon:"🎖️", text:"Chứng chỉ STEM.org"}
    ],
    levels: {
      "Level 1": [
        {bai:"Bài 1",  tieu_de:"MILO ROVER – Robot Thám Hiểm",              cong_cu:"Lego Wedo 2.0", anh:"1FmN1UG9ZUS42W4YxZCFMv05KE9inDRpg"},
        {bai:"Bài 2",  tieu_de:"ROBOT PULLING – Robot Kéo Vật",             cong_cu:"Lego Wedo 2.0", anh:"1lBkiVuPg8JFBgyWSn99xas0vZT5J0Z5e"},
        {bai:"Bài 3",  tieu_de:"Công Trình Mô Phỏng Động Đất",              cong_cu:"Lego Wedo 2.0", anh:"1yoK-qMvpTF4RaoIoir66gbAYr2EB0ZqQ"},
        {bai:"Bài 4",  tieu_de:"ROBUST – Robot Phòng Chống Lũ",             cong_cu:"Lego Wedo 2.0", anh:"1Qhb_0ELckwNQfpornITDk75nNngIqx9J"},
        {bai:"Bài 5",  tieu_de:"SORT TO RECYCLE – Xe Ben",                  cong_cu:"Lego Wedo 2.0", anh:"1vTyEvInC5MOkkNAiaLiJpZxTIlAO-fgs"},
        {bai:"Bài 6",  tieu_de:"SPEED – Xe Đua F1",                         cong_cu:"Lego Wedo 2.0", anh:"1wv4vgbIdPmIwCuJ6BfeDoLyJnIhfK6D6"},
        {bai:"Bài 7",  tieu_de:"FROG'S ROBOT – Ếch Robot",                  cong_cu:"Lego Wedo 2.0", anh:"1mo7zBDAmk7ki-yttLluv8Iw-VYbpHoOu"},
        {bai:"Bài 8",  tieu_de:"ROBOT DROP & RESCUE – Trực Thăng Cứu Hộ",  cong_cu:"Lego Wedo 2.0", anh:"1ZN4uGExrIN49hENOu20S3FpG1zBvnlm2"},
        {bai:"Bài 9",  tieu_de:"ROBOT CON ONG & THỰC VẬT",                  cong_cu:"Lego Wedo 2.0", anh:"1LmUOxcz10MpENCgptWuSbAi8w3jxARhj"},
        {bai:"Bài 10", tieu_de:"DỰ ÁN LỚN – Lập Kế Hoạch & Xây Dựng",      cong_cu:"Lego Wedo 2.0", anh:""},
        {bai:"Bài 11", tieu_de:"DỰ ÁN LỚN – Điều Chỉnh & Luyện Tập",       cong_cu:"Lego Wedo 2.0", anh:""},
        {bai:"Bài 12", tieu_de:"DỰ ÁN LỚN – Công Bố Sản Phẩm",             cong_cu:"Lego Wedo 2.0", anh:""}
      ],
      "Level 2": [
        {bai:"Bài 1",  tieu_de:"ROBOT MOONBASE – Căn Cứ Mặt Trăng",        cong_cu:"Lego Wedo 2.0", anh:"1pZTEow5bxbionTmOZJEl4_3pVp5Pjb2a"},
        {bai:"Bài 2",  tieu_de:"ROBOT GRABBING",                            cong_cu:"Lego Wedo 2.0", anh:"1poCR6fWY6W79pKqi3QDwuCdJDYcOWSur"},
        {bai:"Bài 3",  tieu_de:"SEND MESSAGES – Robot Gửi Tín Hiệu",       cong_cu:"Lego Wedo 2.0", anh:"1bT5fLmeSAiN0kGSwEkKKQTlsyH8_Y9RR"},
        {bai:"Bài 4",  tieu_de:"ROBOT VOLCANO – Núi Lửa",                  cong_cu:"Lego Wedo 2.0", anh:"1zvVoE-P-k4V417kIAtVPDFZjqdGV3ykz"},
        {bai:"Bài 5",  tieu_de:"ROBOT DUCK – Vịt Robot",                   cong_cu:"Lego Wedo 2.0", anh:"1BHksjKMV7I_DPv-8NMGYLY5w0gKY7rck"},
        {bai:"Bài 6",  tieu_de:"ROBOT DOLPHIN – Cá Heo Robot",             cong_cu:"Lego Wedo 2.0", anh:"1UgrMWu9Tar_8QBErS5SACwpkEF7RpR0J"},
        {bai:"Bài 7",  tieu_de:"ROBOT SNAKE – Rắn Robot",                  cong_cu:"Lego Wedo 2.0", anh:"1kBJJq6DOxI8NXAiE43h7I17NH03AjQJV"},
        {bai:"Bài 8",  tieu_de:"ROBOT DINOSAUR – Khủng Long",              cong_cu:"Lego Wedo 2.0", anh:"1kvldD8JMNSz874c2BkLX8VerxPpaCDju"},
        {bai:"Bài 9",  tieu_de:"ROBOT GORILLA – Khỉ Đột",                  cong_cu:"Lego Wedo 2.0", anh:"1cb2bYCrJdkW4fY1mXKo2U6keUokIWmK1"},
        {bai:"Bài 10", tieu_de:"DỰ ÁN LỚN – Lập Kế Hoạch & Xây Dựng",    cong_cu:"Lego Wedo 2.0", anh:""},
        {bai:"Bài 11", tieu_de:"DỰ ÁN LỚN – Điều Chỉnh & Luyện Tập",     cong_cu:"Lego Wedo 2.0", anh:""},
        {bai:"Bài 12", tieu_de:"DỰ ÁN LỚN – Công Bố Sản Phẩm",           cong_cu:"Lego Wedo 2.0", anh:""}
      ],
      "Level 3": [
        {bai:"Bài 1",  tieu_de:"ROBOT ARM – Cánh Tay Robot",               cong_cu:"Lego Wedo 2.0", anh:"1QQ_dfoONL72XPFhw5WBcNy4csKsaeJeA"},
        {bai:"Bài 2",  tieu_de:"ROBOT FORKLIFT – Xe Nâng",                 cong_cu:"Lego Wedo 2.0", anh:"1LI7xwd2sduutL9dsQcKurEBureILrbE3"},
        {bai:"Bài 3",  tieu_de:"ROBOT SNOWPLOW – Xe Ủi Tuyết",             cong_cu:"Lego Wedo 2.0", anh:"1SyEwL_bQWSAtXaU5EXcNlZGYBYat0i2p"},
        {bai:"Bài 4",  tieu_de:"Jumpy Car",                                 cong_cu:"Lego Wedo 2.0", anh:"1fRz12Qh_wgwI8sVK6uV9yHCh7eKXNuMO"},
        {bai:"Bài 5",  tieu_de:"Skier – Robot Trượt Tuyết",                cong_cu:"Lego Wedo 2.0", anh:"1kS63sk6uuaqNI7XD_A8cleZ26o-Imlf5"},
        {bai:"Bài 6",  tieu_de:"Monkey",                                    cong_cu:"Lego Wedo 2.0", anh:"1mLHBzfFAW9B-Zhu750Z-5WjKO83t5Vqh"},
        {bai:"Bài 7",  tieu_de:"Batman Car",                                cong_cu:"Lego Wedo 2.0", anh:"1rgfJMBgSbNL-_hhkdvat00gNPKwv5OlL"},
        {bai:"Bài 8",  tieu_de:"Sumo Robot",                                cong_cu:"Lego Wedo 2.0", anh:"1I_19Y2lcfZfSsSEk2P63lfVG10UyqBwq"},
        {bai:"Bài 9",  tieu_de:"Dinosaur Robot",                            cong_cu:"Lego Wedo 2.0", anh:"1WQfZuwM1aM99wo5uQsJBN21sgtq0Lp8n"},
        {bai:"Bài 10", tieu_de:"DỰ ÁN LỚN – Lập Kế Hoạch & Xây Dựng",    cong_cu:"Lego Wedo 2.0", anh:""},
        {bai:"Bài 11", tieu_de:"DỰ ÁN LỚN – Điều Chỉnh & Luyện Tập",     cong_cu:"Lego Wedo 2.0", anh:""},
        {bai:"Bài 12", tieu_de:"DỰ ÁN LỚN – Công Bố Sản Phẩm",           cong_cu:"Lego Wedo 2.0", anh:""}
      ],
      "Level 4": [
        {bai:"Bài 1",  tieu_de:"Revolving Crane",                           cong_cu:"Lego Wedo 2.0", anh:"1lXwNGUQaznr6YB_tQpNP_bMOJCqoUN9J"},
        {bai:"Bài 2",  tieu_de:"Spider Robot",                              cong_cu:"Lego Wedo 2.0", anh:"1O-56IhsxtAHxWHxRNQbvutbNpNOdj2No"},
        {bai:"Bài 3",  tieu_de:"Airplane",                                  cong_cu:"Lego Wedo 2.0", anh:"1LOKWeMcjoEmY4j8gmlBZSK6ZIMPzXNuL"},
        {bai:"Bài 4",  tieu_de:"Crab",                                      cong_cu:"Lego Wedo 2.0", anh:"1krq2GiUHAUlY1q6uVqvJ3sWM3qQ0Laiw"},
        {bai:"Bài 5",  tieu_de:"Scorpion",                                  cong_cu:"Lego Wedo 2.0", anh:"1beal_SaGWRx-R5I6V_DqwoinjP3VKDOQ"},
        {bai:"Bài 6",  tieu_de:"Rabbit",                                    cong_cu:"Lego Wedo 2.0", anh:"1qoMwunxkp_J-69B7TKGFLfHooTnUQGTS"},
        {bai:"Bài 7",  tieu_de:"Deer",                                      cong_cu:"Lego Wedo 2.0", anh:"1wuW_lEOBHtwuk5sjHmHtm9ASVn-oxXr7"},
        {bai:"Bài 8",  tieu_de:"MOTOR BOAT",                                cong_cu:"Lego Wedo 2.0", anh:"1UHMusunUcQQa_-UttXJ3Wo8IGG6g_5LH"},
        {bai:"Bài 9",  tieu_de:"DRUMMING ROBOT",                            cong_cu:"Lego Wedo 2.0", anh:"1HtYKT8tx3fH186O30y1SsjkxuBTfvQ-f"},
        {bai:"Bài 10", tieu_de:"DỰ ÁN LỚN – Lập Kế Hoạch & Xây Dựng",    cong_cu:"Lego Wedo 2.0", anh:""},
        {bai:"Bài 11", tieu_de:"DỰ ÁN LỚN – Điều Chỉnh & Luyện Tập",     cong_cu:"Lego Wedo 2.0", anh:""},
        {bai:"Bài 12", tieu_de:"DỰ ÁN LỚN – Công Bố Sản Phẩm",           cong_cu:"Lego Wedo 2.0", anh:""}
      ]
    }
  },
  ai1: {
    title: "Khám Phá Trí Tuệ Nhân Tạo Cấp 1",
    meta: [
      {icon:"👶", text:"7 – 9 tuổi"},
      {icon:"⏱️", text:"144 giờ học"},
      {icon:"🤖", text:"Teachable Machine / RAISE / PictobloxAI"},
      {icon:"🎖️", text:"Chứng chỉ STEM.org"}
    ],
    levels: {
      "Level 1": [
        {bai:"Bài 1",  tieu_de:"KHÁM PHÁ TRÍ TUỆ NHÂN TẠO",              cong_cu:"Teachable Machine", anh:"1I5oQGd4Vs-MvgcyweedHy0EuEXHxaHm8"},
        {bai:"Bài 2",  tieu_de:"AI HỌC TỪ ĐÂU",                          cong_cu:"Teachable Machine", anh:"1H3jW1FCRf9PGLbud8x76O4071Pv6RvKd"},
        {bai:"Bài 3",  tieu_de:"LẬP TRÌNH AI NHẬN DIỆN ĐỒ VẬT",          cong_cu:"RAISE Playground",  anh:"1vZSrjftELp4CSaAU-K325aOyRZYhjWnz"},
        {bai:"Bài 4",  tieu_de:"NGÔI NHÀ THÔNG MINH",                    cong_cu:"RAISE Playground",  anh:"1SfD3kY3yM9zk9QtdIEzA9Ngu3BqTByCJ"},
        {bai:"Bài 5",  tieu_de:"VŨ ĐIỆU CÔNG NGHỆ",                      cong_cu:"RAISE Playground",  anh:"1tYVSCRF5vqZjybKWqIiCfc4QxqOJAsIw"},
        {bai:"Bài 6",  tieu_de:"ĐI TÌM KHO BÁU TRÊN BẢN ĐỒ SỐ",        cong_cu:"RAISE Playground",  anh:"1H3gDXjXSvQXcw8gozPFReRmI8h-xqx-2"},
        {bai:"Bài 7",  tieu_de:"ROBOT BIẾT TRẢ LỜI!",                    cong_cu:"RAISE Playground",  anh:"19D4la7Y8V8pRbLJC_yJiUaw8NLMQCrdz"},
        {bai:"Bài 8",  tieu_de:"KHÁM PHÁ ĐẠI DƯƠNG",                     cong_cu:"RAISE Playground",  anh:"13tAG81VghFB7zx6GcevIkFDHp_n3zU-N"},
        {bai:"Bài 9",  tieu_de:"ÔN TẬP",                                 cong_cu:"RAISE Playground",  anh:""},
        {bai:"Bài 10", tieu_de:"DỰ ÁN LỚN – Lập Kế Hoạch & Xây Dựng",  cong_cu:"RAISE Playground",  anh:""},
        {bai:"Bài 11", tieu_de:"DỰ ÁN LỚN – Điều Chỉnh & Luyện Tập",   cong_cu:"RAISE Playground",  anh:""},
        {bai:"Bài 12", tieu_de:"DỰ ÁN LỚN – Công Bố Sản Phẩm",         cong_cu:"RAISE Playground",  anh:""}
      ],
      "Level 2": [
        {bai:"Bài 1",  tieu_de:"HỌA SĨ ROBOT",                           cong_cu:"RAISE Playground",  anh:"1G5tOvdZVZ6sH8mLka-2Dm-h7Faq9sS9Z"},
        {bai:"Bài 2",  tieu_de:"GIỌNG NÓI BIẾT DỊCH NHIỀU THỨ TIẾNG",   cong_cu:"RAISE Playground",  anh:"1YH88Ct47vxItWVK5kMWW_Iff_ikR44ga"},
        {bai:"Bài 3",  tieu_de:"PHÂN LOẠI RÁC VỚI AI",                   cong_cu:"RAISE Playground",  anh:"14PBQ1-I5TQ1J-Z9HhnrLK9wSNpj5zCJI"},
        {bai:"Bài 4",  tieu_de:"KHUÔN MẶT CẢM XÚC",                     cong_cu:"RAISE Playground",  anh:"1hT863RVKRQb8IkAYntH0iXRtR24Pg8yv"},
        {bai:"Bài 5",  tieu_de:"CAMERA PHÉP THUẬT",                      cong_cu:"RAISE Playground",  anh:"1Os-QcLsX1iW1-cEZhhAO0Wm4z0S493Cs"},
        {bai:"Bài 6",  tieu_de:"MÁY GẮP QUẢ THẦN KỲ",                   cong_cu:"RAISE Playground",  anh:"1L8UnB3OJCoFQ3iwuUwZ3dOkJXIY48XiG"},
        {bai:"Bài 7",  tieu_de:"CHU TRÌNH PHÁT TRIỂN CỦA CÂY",           cong_cu:"RAISE Playground",  anh:"12BsGu-7psMpeQ9dwWwKZdWi8RORq2ctb"},
        {bai:"Bài 8",  tieu_de:"NGÀY TẾT QUÊ EM",                        cong_cu:"RAISE Playground",  anh:"1uuZcHK6jf_9ioXhAASafKYgXV2Hr0Rn2"},
        {bai:"Bài 9",  tieu_de:"ÔN TẬP",                                 cong_cu:"RAISE Playground",  anh:""},
        {bai:"Bài 10", tieu_de:"DỰ ÁN LỚN – Lập Kế Hoạch & Xây Dựng",  cong_cu:"RAISE Playground",  anh:""},
        {bai:"Bài 11", tieu_de:"DỰ ÁN LỚN – Điều Chỉnh & Luyện Tập",   cong_cu:"RAISE Playground",  anh:""},
        {bai:"Bài 12", tieu_de:"DỰ ÁN LỚN – Công Bố Sản Phẩm",         cong_cu:"RAISE Playground",  anh:""}
      ],
      "Level 3": [
        {bai:"Bài 1",  tieu_de:"LỚP HỌC THÔNG MINH",                     cong_cu:"PictobloxAI", anh:"1TkMa6VecogRgrRW8EtklGMEJ8cAxLtiy"},
        {bai:"Bài 2",  tieu_de:"ỨNG DỤNG ĐIỂM DANH LỚP HỌC",            cong_cu:"PictobloxAI", anh:"1cyhPEB7FR7EkYeTA6yFXFJoF-lDOLKX2"},
        {bai:"Bài 3",  tieu_de:"GIAO THÔNG TỰ ĐỘNG",                     cong_cu:"PictobloxAI", anh:"1Q5JdXB_mSWO1qr7o-HuqSMhHTzovlBac"},
        {bai:"Bài 4",  tieu_de:"TRỢ LÝ ẢO GIAO TIẾP",                   cong_cu:"PictobloxAI", anh:"1pOfUE4u-8wMVvFzcCtmDAwnF4WvzcWzg"},
        {bai:"Bài 5",  tieu_de:"FACE FILTERS",                            cong_cu:"PictobloxAI", anh:"1I9E4OSAXd54fh81WtFrUW--PzN19Rx9E"},
        {bai:"Bài 6",  tieu_de:"Logo Quiz",                               cong_cu:"PictobloxAI", anh:"1M3c0Ay2o5mW-QQJSoAXa7KtWhnx3dmCy"},
        {bai:"Bài 7",  tieu_de:"CHIẾN BINH KHÔNG GIAN 1",                cong_cu:"PictobloxAI", anh:"1DzIeaZTxPy7vr-p1wuL0Q4WlvSpbS49k"},
        {bai:"Bài 8",  tieu_de:"CHIẾN BINH KHÔNG GIAN 2",                cong_cu:"PictobloxAI", anh:"1DzIeaZTxPy7vr-p1wuL0Q4WlvSpbS49k"},
        {bai:"Bài 9",  tieu_de:"ÔN TẬP",                                 cong_cu:"RAISE Playground", anh:""},
        {bai:"Bài 10", tieu_de:"DỰ ÁN LỚN – Lập Kế Hoạch & Xây Dựng",  cong_cu:"RAISE Playground", anh:""},
        {bai:"Bài 11", tieu_de:"DỰ ÁN LỚN – Điều Chỉnh & Luyện Tập",   cong_cu:"RAISE Playground", anh:""},
        {bai:"Bài 12", tieu_de:"DỰ ÁN LỚN – Công Bố Sản Phẩm",         cong_cu:"RAISE Playground", anh:""}
      ],
      "Level 4": [
        {bai:"Bài 1",  tieu_de:"DATA LOGGER & PHÂN TÍCH DỮ LIỆU",        cong_cu:"PictobloxAI", anh:"1kCAzlbL8hX3M5uUbiIbGTQVKM_t38T7Y"},
        {bai:"Bài 2",  tieu_de:"AI LANGUAGE TUTOR",                       cong_cu:"PictobloxAI", anh:"1ZOOi_97N7RjXz9HE9mCZEfByUN0-y_Qn"},
        {bai:"Bài 3",  tieu_de:"DRAW WITH AI",                            cong_cu:"PictobloxAI", anh:"1msZQABZXAWf7ySJr-kc7dsnPECuUhg-b"},
        {bai:"Bài 4",  tieu_de:"Face Landmark AR Filter",                  cong_cu:"PictobloxAI", anh:"1D0pOWAgb5ymXjYJCmSvsbFdIKs8fQKv5"},
        {bai:"Bài 5",  tieu_de:"AI Mask Checker",                          cong_cu:"PictobloxAI", anh:"1ypwG4zmypUZm0zJDiHeF0RbsUX1XJeV1"},
        {bai:"Bài 6",  tieu_de:"AI Bird Sound Identifier",                 cong_cu:"PictobloxAI", anh:"11hwvOg79zZNYtLGmqgImvXCR7fKpqWrh"},
        {bai:"Bài 7",  tieu_de:"AI Yoga Trainer",                          cong_cu:"PictobloxAI", anh:"1xuUkg8icHrtgUTNLpTIyBJaXTfURqL44"},
        {bai:"Bài 8",  tieu_de:"Điểm Tự Tin Của AI",                      cong_cu:"PictobloxAI", anh:"16z04JeFAyY6y5JIkFj6ONtuRUg0uoe8j"},
        {bai:"Bài 9",  tieu_de:"ÔN TẬP",                                  cong_cu:"RAISE Playground", anh:""},
        {bai:"Bài 10", tieu_de:"DỰ ÁN LỚN – Lập Kế Hoạch & Xây Dựng",   cong_cu:"RAISE Playground", anh:""},
        {bai:"Bài 11", tieu_de:"DỰ ÁN LỚN – Điều Chỉnh & Luyện Tập",    cong_cu:"RAISE Playground", anh:""},
        {bai:"Bài 12", tieu_de:"DỰ ÁN LỚN – Công Bố Sản Phẩm",          cong_cu:"RAISE Playground", anh:""}
      ]
    }
  },
  game: { title: "Game Creator Lab", meta: [{icon:"🎮",text:"7 – 11 tuổi"},{icon:"⏱️",text:"144 giờ học"},{icon:"🖥️",text:"Scratch / Tynker"},{icon:"🎖️",text:"Chứng chỉ STEM.org"}], levels: {
      "Level 1": [
        {bai:"Bài 1",  tieu_de:"Chú Mèo Máy Scratch",  cong_cu:"Scratch", anh:"1ottFuugKze1FoM0R45o-pVYrH7_01XnJ"},
        {bai:"Bài 2",  tieu_de:"Thế Giới Chuyển Động",  cong_cu:"Scratch", anh:"1HBLUkrMD6PRRamFaWKP6VgigiuTwIU2G"},
        {bai:"Bài 3",  tieu_de:"Truyện Mèo Đuổi Chuột 1",  cong_cu:"Scratch", anh:"1lpPbooSeEtSaCZUAPlHmL_7l20ib_-0E"},
        {bai:"Bài 4",  tieu_de:"Mèo Đuổi Chuột 2",  cong_cu:"Scratch", anh:"1PJMyFQwLQkH1nJAK64HoD5keF-Vzyrzw"},
        {bai:"Bài 5",  tieu_de:"Thám Hiểm Đáy Biển",  cong_cu:"Scratch", anh:"18vxlICfiE-rNL3cRMlDkriYYC_TWmz3D"},
        {bai:"Bài 6",  tieu_de:"Toán Học Vui Cùng Scratch",  cong_cu:"Scratch", anh:"1BBWyj239ifJ5QoLicB1cGRdh0XV-Uxrg"},
        {bai:"Bài 7",  tieu_de:"Làm Chủ Đường Đi",  cong_cu:"Scratch", anh:"1nh1KMpuBoJZrx3ILv_mOpwtuphBfCevd"},
        {bai:"Bài 8",  tieu_de:"Nâng cấp trò chơi",  cong_cu:"Scratch", anh:"15pBdl9nZxgb0e5K6nic5OwObAyZ-gY51"},
        {bai:"Bài 9",  tieu_de:"Vẽ Sáng Tạo Với Pen",  cong_cu:"Scratch", anh:"1hZx4OLhFhpE-R8ET8FZbwDQoxC2ihWAW"},
        {bai:"Bài 10",  tieu_de:"DỰ ÁN LỚN - LẬP KẾ HOẠCH & XÂY DỰNG",  cong_cu:"Scratch", anh:""},
        {bai:"Bài 11",  tieu_de:"DỰ ÁN LỚN - ĐIỀU CHỈNH & LUYỆN TẬP CHIA SẺ",  cong_cu:"Scratch", anh:""},
        {bai:"Bài 12",  tieu_de:"DỰ ÁN LỚN - CÔNG BỐ SẢN PHẨM",  cong_cu:"Scratch", anh:""},
      ],
      "Level 2": [
        {bai:"Bài 1",  tieu_de:"Space Survival",  cong_cu:"Scratch", anh:"18Bn5LnJ9Lmo_kL3girbf92C1NwqXRmwh"},
        {bai:"Bài 2",  tieu_de:"Vượt Qua Thử Thách",  cong_cu:"Scratch", anh:"16rvPGiEMlvc4MGVyBvFKn_0NQLJjyABQ"},
        {bai:"Bài 3",  tieu_de:"Bot Thông Minh",  cong_cu:"Scratch", anh:"1CksJycUUFAfdQD51N68fx388w8B6tUh8"},
        {bai:"Bài 4",  tieu_de:"Galaxy Shooter",  cong_cu:"Scratch", anh:"1nyDvM0hlRaGyGvEX2ATlrJKX_9ARpf1L"},
        {bai:"Bài 5",  tieu_de:"Weather Simulation",  cong_cu:"Scratch", anh:"18VoiofVuTAYrMKCg8EfgFowhfIjTTqw5"},
        {bai:"Bài 6",  tieu_de:"Smart Shop",  cong_cu:"Scratch", anh:"17ZWs5QObtddTgh0xeoJX1tyrxAwe_W1Y"},
        {bai:"Bài 7",  tieu_de:"Chu Trình Phát Triển Của Cây",  cong_cu:"Scratch", anh:"1cIzjm6a4YnFgP9C7fFlHPOrhnJ1_YBy4"},
        {bai:"Bài 8",  tieu_de:"Cuộc Đua Rùa Và Thỏ",  cong_cu:"Scratch", anh:"1NPwwIH8J4M6URT-xNC6A0g1C4xRymfeM"},
        {bai:"Bài 9",  tieu_de:"Giao Thông Đường Bộ",  cong_cu:"Scratch", anh:"1u1In-LdJnY-oAEVgceksdr0eDOHPT6om"},
        {bai:"Bài 10",  tieu_de:"DỰ ÁN LỚN - LẬP KẾ HOẠCH & XÂY DỰNG",  cong_cu:"Scratch", anh:""},
        {bai:"Bài 11",  tieu_de:"DỰ ÁN LỚN - ĐIỀU CHỈNH & LUYỆN TẬP CHIA SẺ",  cong_cu:"Scratch", anh:""},
        {bai:"Bài 12",  tieu_de:"DỰ ÁN LỚN - CÔNG BỐ SẢN PHẨM",  cong_cu:"Scratch", anh:""},
      ],
      "Level 3": [
        {bai:"Bài 1",  tieu_de:"Cối Xay Gió Thông Minh",  cong_cu:"Scratch + Wedo 2.0", anh:"1jdvjArRm4XJkygy-3MTlMlUAJRoX3prx"},
        {bai:"Bài 2",  tieu_de:"Xe Cảnh Báo Vật Cản",  cong_cu:"Scratch + Wedo 2.0", anh:"1mCI_RNh1XT84Z0ernDINteTZZK3CntwJ"},
        {bai:"Bài 3",  tieu_de:"Trạm Dự Báo Thời Tiết Mini",  cong_cu:"Scratch + Wedo 2.0", anh:"1CEfULRHPD8XtsSBFjaYzBmHzq8rIjv8M"},
        {bai:"Bài 4",  tieu_de:"Cánh Tay Robot Phân Loại",  cong_cu:"Scratch + Wedo 2.0", anh:"1G8z2aYFOR38bfYGI128h2IQZUtJ90OX7"},
        {bai:"Bài 5",  tieu_de:"Thang Máy Thông Minh",  cong_cu:"Scratch + Wedo 2.0", anh:"1w6rNI2cWnxN9ewOkEpieNbOOOTb30pnN"},
        {bai:"Bài 6",  tieu_de:"Cổng An Ninh Tự Động",  cong_cu:"Scratch + Wedo 2.0", anh:"11JPEpwOGuk14wVMlHC-gZ_-ODRk8S3Wu"},
        {bai:"Bài 7",  tieu_de:"Máy Cho Thú Ăn Tự Động",  cong_cu:"Scratch + Wedo 2.0", anh:"18uFPJ55gS4_9eqPowa-1r-Fb7ho5ZBAL"},
        {bai:"Bài 8",  tieu_de:"Hệ Thống Tưới Cây Thông Minh",  cong_cu:"Scratch + Wedo 2.0", anh:"1eAGgjbiPoMmvMMVDWHJdL5WICo-O8ENg"},
        {bai:"Bài 9",  tieu_de:"Robot Bảo Vệ Tuần Tra",  cong_cu:"Scratch + Wedo 2.0", anh:"1u-x7aj1s1261Uj37BohwldcTtrIH8wix"},
        {bai:"Bài 10",  tieu_de:"DỰ ÁN LỚN - LẬP KẾ HOẠCH & XÂY DỰNG",  cong_cu:"Scratch + Wedo 2.0", anh:""},
        {bai:"Bài 11",  tieu_de:"DỰ ÁN LỚN - ĐIỀU CHỈNH & LUYỆN TẬP CHIA SẺ",  cong_cu:"Scratch + Wedo 2.0", anh:""},
        {bai:"Bài 12",  tieu_de:"DỰ ÁN LỚN - CÔNG BỐ SẢN PHẨM",  cong_cu:"Scratch + Wedo 2.0", anh:""},
      ],
      "Level 4": [
        {bai:"Bài 1",  tieu_de:"Chú Mèo Của Tôi",  cong_cu:"Tynker", anh:"1zoLB-Z3OFVyQ5zuXocrqBAj2bhQMLC1_"},
        {bai:"Bài 2",  tieu_de:"Bong Bóng Bay Lên",  cong_cu:"Tynker", anh:"1fFbfEQeaCpy0gNWp_IsCfKXBFgSBbXYI"},
        {bai:"Bài 3",  tieu_de:"Vườn Hoa Nhiều Màu",  cong_cu:"Tynker", anh:"1UuLPyV7puFY6guKlA7AvtD-7BjWb9vUQ"},
        {bai:"Bài 4",  tieu_de:"Giải Cứu Thành Phố",  cong_cu:"Tynker", anh:"1SXY4ei7Ce8Z3iWWRC8osPJ1cqcTAznFj"},
        {bai:"Bài 5",  tieu_de:"Công Viên Khủng Long",  cong_cu:"Tynker", anh:"10aM486v1Xw9nC0zokFqb-9eeO-qlwJmj"},
        {bai:"Bài 6",  tieu_de:"Thợ Săn Kho Báu",  cong_cu:"Tynker", anh:"1SKbLQ9XaHo99addCJyzDlFJUntDaFzoE"},
        {bai:"Bài 7",  tieu_de:"Nhà Hàng Nhí",  cong_cu:"Tynker", anh:"1qPqt6t_SHPgazc-kT1r2ofsXEV1X-yXG"},
        {bai:"Bài 8",  tieu_de:"Cuộc Đua Thú Cưng",  cong_cu:"Tynker", anh:"1ZZE2IgPU4GjTqQm8rzmGwhGGjnv1zi0q"},
        {bai:"Bài 9",  tieu_de:"Thành Phố Xanh",  cong_cu:"Tynker", anh:"1ookOFvOqiKMEYIW7QwQHSzS5mAqOO3-j"},
        {bai:"Bài 10",  tieu_de:"DỰ ÁN LỚN - LẬP KẾ HOẠCH & XÂY DỰNG",  cong_cu:"Tynker", anh:""},
        {bai:"Bài 11",  tieu_de:"DỰ ÁN LỚN - ĐIỀU CHỈNH & LUYỆN TẬP CHIA SẺ",  cong_cu:"Tynker", anh:""},
        {bai:"Bài 12",  tieu_de:"DỰ ÁN LỚN - CÔNG BỐ SẢN PHẨM",  cong_cu:"Tynker", anh:""},
      ],
  } },
  nghethuatcn: { title: "Nghệ Thuật Công Nghệ", meta: [{icon:"🎨",text:"7 – 11 tuổi"},{icon:"⏱️",text:"144 giờ học"},{icon:"🖨️",text:"Tinkercad / Delightex"},{icon:"🎖️",text:"Chứng chỉ STEM.org"}], levels: {
      "Level 1": [
        {bai:"Bài 1",  tieu_de:"Mô Hình Đầu Tiên",  cong_cu:"Tinkercad", anh:"1IHGMGSe4lB0kz-8EGVAbMX3pglgT__7s"},
        {bai:"Bài 2",  tieu_de:"Thành Phố Của Em",  cong_cu:"Tinkercad", anh:"1whsj8ZptS1WLkUE3pnGOCZvvn7Q_ERdy"},
        {bai:"Bài 3",  tieu_de:"Trang Sức Thiên Nhiên",  cong_cu:"Tinkercad", anh:"15KredsWEKR6QWDj-IXcwTCSeTvuRm23c"},
        {bai:"Bài 4",  tieu_de:"Bạn Bè Robot",  cong_cu:"Tinkercad", anh:"1ii6JAby12FoIrmHdGTAJT-v15Daaguar"},
        {bai:"Bài 5",  tieu_de:"Đồ Vật Thông Dụng",  cong_cu:"Tinkercad", anh:"1fNwaxUcTG9FYZbACvTrTmlaqvXixS_Df"},
        {bai:"Bài 6",  tieu_de:"Tết Việt Nam 3D",  cong_cu:"Tinkercad", anh:"1KYNLWarIgrSMYpjInhwVHnEV4G5kWdkR"},
        {bai:"Bài 7",  tieu_de:"Phi Thuyền Vũ Trụ",  cong_cu:"Tinkercad", anh:"1DAygJ9z_SU14B_fqwgxCSg2YF7bNwxtl"},
        {bai:"Bài 8",  tieu_de:"Vườn Thú Kỳ Diệu",  cong_cu:"Tinkercad", anh:"1tqIXBO93nJmqOopOg7NKj6FYzBVjOZLS"},
        {bai:"Bài 9",  tieu_de:"ÔN TẬP",  cong_cu:"Tinkercad", anh:""},
        {bai:"Bài 10",  tieu_de:"DỰ ÁN LỚN – LẬP KẾ HOẠCH & XÂY DỰNG",  cong_cu:"Tinkercad", anh:""},
        {bai:"Bài 11",  tieu_de:"DỰ ÁN LỚN – ĐIỀU CHỈNH & LUYỆN TẬP CHIA SẺ",  cong_cu:"Tinkercad", anh:""},
        {bai:"Bài 12",  tieu_de:"DỰ ÁN LỚN – CÔNG BỐ SẢN PHẨM",  cong_cu:"Tinkercad", anh:""},
      ],
      "Level 2": [
        {bai:"Bài 1",  tieu_de:"Điêu Khắc Boolean",  cong_cu:"Tinkercad", anh:"1_swhz_yW--Clu7YKLXjybVLJNubFsVzw"},
        {bai:"Bài 2",  tieu_de:"Nhà Thông Minh",  cong_cu:"Tinkercad", anh:"1KFjT_LyYxq0uOzYLv1GfGT3DXo975y_R"},
        {bai:"Bài 3",  tieu_de:"Máy Móc Đơn Giản",  cong_cu:"Tinkercad", anh:"1CB4VVwk-i10h6AllYSII-6B-wFn-NLqh"},
        {bai:"Bài 4",  tieu_de:"Phương Tiện Tương Lai",  cong_cu:"Tinkercad", anh:"1Mpx2MNMNEj2bqr4dWJE9ehuiFLCQ9Ts7"},
        {bai:"Bài 5",  tieu_de:"Trạm Vũ Trụ",  cong_cu:"Tinkercad", anh:"16l5CONLmN-U7xcKzs4_9yhnTHaOX-zen"},
        {bai:"Bài 6",  tieu_de:"Thiết Bị Bảo Vệ Trái Đất",  cong_cu:"Tinkercad", anh:"1lGLzY_dglaQT8EBnkB3eQrAOBHBOe69w"},
        {bai:"Bài 7",  tieu_de:"Kiến Trúc Sư",  cong_cu:"Tinkercad", anh:"1QJKM8KImJMR5sn8kFwnmVciyDDnD6XCw"},
        {bai:"Bài 8",  tieu_de:"Tác Phẩm Nghệ Thuật",  cong_cu:"Tinkercad", anh:""},
        {bai:"Bài 9",  tieu_de:"ÔN TẬP",  cong_cu:"Tinkercad", anh:""},
        {bai:"Bài 10",  tieu_de:"DỰ ÁN LỚN – LẬP KẾ HOẠCH & XÂY DỰNG",  cong_cu:"Tinkercad", anh:""},
        {bai:"Bài 11",  tieu_de:"DỰ ÁN LỚN – ĐIỀU CHỈNH & LUYỆN TẬP CHIA SẺ",  cong_cu:"Tinkercad", anh:""},
        {bai:"Bài 12",  tieu_de:"DỰ ÁN LỚN – CÔNG BỐ SẢN PHẨM",  cong_cu:"Tinkercad", anh:""},
      ],
      "Level 3": [
        {bai:"Bài 1",  tieu_de:"Khám Phá DelightEx Edu",  cong_cu:"Delightex Edu", anh:"1YLThbXTJxxmBufjjx2KAFt7WrcSe6kmh"},
        {bai:"Bài 2",  tieu_de:"Ngôi Nhà Của Em",  cong_cu:"Delightex Edu", anh:"13uplvG3ahnJfymFJ6JPz4MfhRxxQFVvy"},
        {bai:"Bài 3",  tieu_de:"Vườn Thú Kỳ Diệu",  cong_cu:"Delightex Edu", anh:"1L9TVPAsQjiqoUy5QIM3Bxac_YDjh73sL"},
        {bai:"Bài 4",  tieu_de:"Phố Xá Nhộn Nhịp",  cong_cu:"Delightex Edu", anh:"1aKfeWjr04SHs1unwJZDeK1GfrAqrc4si"},
        {bai:"Bài 5",  tieu_de:"Thiên Nhiên Kỳ Diệu",  cong_cu:"Delightex Edu", anh:"1h9VEvJiIpDnomV2yRLnRkGjhFnI-5e97"},
        {bai:"Bài 6",  tieu_de:"Lễ Hội Rực Rỡ",  cong_cu:"Delightex Edu", anh:"1pZdGsC5AoYg3TsRU7uoL7gUcXrDeL-pn"},
        {bai:"Bài 7",  tieu_de:"Khám Phá Vũ Trụ",  cong_cu:"Delightex Edu", anh:"1ujrrLny_BKoruDcEzosgTJRqGp7mMKBn"},
        {bai:"Bài 8",  tieu_de:"Chợ Đêm Thần Kỳ",  cong_cu:"Delightex Edu", anh:"1KqLeFu8IgqFEIKObpNqa6qLlSI7PDwz1"},
        {bai:"Bài 9",  tieu_de:"ÔN TẬP",  cong_cu:"Delightex Edu", anh:""},
        {bai:"Bài 10",  tieu_de:"DỰ ÁN LỚN – LẬP KẾ HOẠCH & XÂY DỰNG",  cong_cu:"Delightex Edu", anh:""},
        {bai:"Bài 11",  tieu_de:"DỰ ÁN LỚN – ĐIỀU CHỈNH & LUYỆN TẬP CHIA SẺ",  cong_cu:"Delightex Edu", anh:""},
        {bai:"Bài 12",  tieu_de:"DỰ ÁN LỚN – CÔNG BỐ SẢN PHẨM",  cong_cu:"Delightex Edu", anh:""},
      ],
      "Level 4": [
        {bai:"Bài 1",  tieu_de:"Căn Phòng Trong Mơ",  cong_cu:"Delightex Edu", anh:"1K4zPyThQih6AK_iVPWGofXawbsItf2eT"},
        {bai:"Bài 2",  tieu_de:"Nông Trại Của Em",  cong_cu:"Delightex Edu", anh:"1R0UO668C7imguxlHI5ns6ymzd6pdm3uZ"},
        {bai:"Bài 3",  tieu_de:"Đại Dương Bí Ẩn",  cong_cu:"Delightex Edu", anh:"1l3PPpoH9-uBXiYxaDmDvisp70ccMnAoX"},
        {bai:"Bài 4",  tieu_de:"Khu Rừng Huyền Bí",  cong_cu:"Delightex Edu", anh:"1H0i1YZLh1fvZ7cS-vLadpwJ8TC61LLS1"},
        {bai:"Bài 5",  tieu_de:"Thành Phố Tương Lai",  cong_cu:"Delightex Edu", anh:"1zsC55VDkZ9FLkpH1EJ_wRwqh9o1hYWnB"},
        {bai:"Bài 6",  tieu_de:"Ai Cập Cổ Đại",  cong_cu:"Delightex Edu", anh:"1LK7XAlmhPICM9LtjAVmT01NKh3DDXCsD"},
        {bai:"Bài 7",  tieu_de:"Sân Bay Quốc Tế",  cong_cu:"Delightex Edu", anh:"1d5UqAUoGb33OKbzu7MPYCHAH-pVwugvi"},
        {bai:"Bài 8",  tieu_de:"Công Viên Giải Trí",  cong_cu:"Delightex Edu", anh:"1iXuvH2vJAUW01qFNw5BaPpqK2WeApgEN"},
        {bai:"Bài 9",  tieu_de:"ÔN TẬP",  cong_cu:"Delightex Edu", anh:""},
        {bai:"Bài 10",  tieu_de:"DỰ ÁN LỚN – LẬP KẾ HOẠCH & XÂY DỰNG",  cong_cu:"Delightex Edu", anh:""},
        {bai:"Bài 11",  tieu_de:"DỰ ÁN LỚN – ĐIỀU CHỈNH & LUYỆN TẬP CHIA SẺ",  cong_cu:"Delightex Edu", anh:""},
        {bai:"Bài 12",  tieu_de:"DỰ ÁN LỚN – CÔNG BỐ SẢN PHẨM",  cong_cu:"Delightex Edu", anh:""},
      ],
  } },
  pythonai: { title: "Khám Phá Python & AI Cấp 2&3", meta: [{icon:"🐍",text:"10 – 15 tuổi"},{icon:"⏱️",text:"144 giờ học"},{icon:"💻",text:"Python / VS Code"},{icon:"🎖️",text:"Chứng chỉ STEM.org"}], levels: {
      "Level 1": [
        {bai:"Bài 1",  tieu_de:"MÁY TÍNH CỦA EM BẮT ĐẦU BIẾT NÓI",  cong_cu:"Visual Studio/ Python IDE", anh:"19aJjo_-RSEO24AE2owQWCGrFvu58_q4D"},
        {bai:"Bài 2",  tieu_de:"HỘP BÍ MẬT — LƯU GIỮ MỌI THỨ",  cong_cu:"Visual Studio/ Python IDE", anh:"1LpIYHWeSqYsBFJDLg3pqOEYT0pIfZcVp"},
        {bai:"Bài 3",  tieu_de:"MÁY TÍNH BIẾT LẮNG NGHE EM",  cong_cu:"Visual Studio/ Python IDE", anh:"1ekhXwry_RHQIgaUOhhLKBqZwQ6UT_fSo"},
        {bai:"Bài 4",  tieu_de:"PYTHON LÀM TOÁN SIÊU TỐC",  cong_cu:"Visual Studio/ Python IDE", anh:"1ERiRRJou3346AFNaf2Wm0_H6he4Fqkkx"},
        {bai:"Bài 5",  tieu_de:"MÁY TÍNH BIẾT TỰ QUYẾT ĐỊNH",  cong_cu:"Visual Studio/ Python IDE", anh:"1LF_jMN516jRJMJhxdmheVtp7_L4Km41P"},
        {bai:"Bài 6",  tieu_de:"ROBOT LÀM VIỆC MÃI KHÔNG BIẾT MỆT",  cong_cu:"Visual Studio/ Python IDE", anh:"1zQiQ89P4V2ycjoFVQQJ6mwcVWq-jSBpL"},
        {bai:"Bài 7",  tieu_de:"THỦ KHO VÀ DANH SÁCH KỲ DIỆU",  cong_cu:"Visual Studio/ Python IDE", anh:"1wCINPeEtVVnb47-OCdx3wmrflQyDPMwC"},
        {bai:"Bài 8",  tieu_de:"CÔNG THỨC PHÙ PHÉP CÓ THỂ DÙNG LẠI",  cong_cu:"Visual Studio/ Python IDE", anh:"1wEzm4Ehg6J1C6OeBtGrt8C6d85MP9gl6"},
        {bai:"Bài 9",  tieu_de:"ÔN TẬP",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 10",  tieu_de:"DỰ ÁN LỚN - LẬP KẾ HOẠCH & XÂY DỰNG",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 11",  tieu_de:"DỰ ÁN LỚN - ĐIỀU CHỈNH & LUYỆN TẬP CHIA SẺ",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 12",  tieu_de:"DỰ ÁN LỚN - CÔNG BỐ SẢN PHẨM",  cong_cu:"Visual Studio/ Python IDE", anh:""},
      ],
      "Level 2": [
        {bai:"Bài 1",  tieu_de:"CON RÙA VẼ TRANH THẦN KỲ",  cong_cu:"Visual Studio/ Python IDE", anh:"1JwHOG_s87wdj5NfbYNb43DCF5wsM_aZU"},
        {bai:"Bài 2",  tieu_de:"HOA VĂN TINH XẢO TỰ SINH RA",  cong_cu:"Visual Studio/ Python IDE", anh:"1vy-3AlqYJ5DCdpXD-pvma9omTTZWNq6q"},
        {bai:"Bài 3",  tieu_de:"HỌA SĨ PYTHON THỨC GIẤC",  cong_cu:"Visual Studio/ Python IDE", anh:"1ZCqur9bicjBkM7SBMPHYKDfqqHUukNS7"},
        {bai:"Bài 4",  tieu_de:"BẦU TRỜI ĐÊM ĐẦY SAO NHẤP NHÁY",  cong_cu:"Visual Studio/ Python IDE", anh:"1OU1rPVdTi_sEFM-_tPBatcjP3Hbi9Bb5"},
        {bai:"Bài 5",  tieu_de:"CỬA SỔ ỨNG DỤNG ĐẦU TIÊN TRÊN ĐỜI",  cong_cu:"Visual Studio/ Python IDE", anh:"1LqVS0Utuf8ioQo0x4RqYWx31nvkP3UJs"},
        {bai:"Bài 6",  tieu_de:"NÚT BẤM CÓ MA LỰC",  cong_cu:"Visual Studio/ Python IDE", anh:"1BD_6x1LBrIzIFXYsJvq3102lWLYZxYAR"},
        {bai:"Bài 7",  tieu_de:"ỨNG DỤNG BIẾT TRÒ CHUYỆN VỚI EM",  cong_cu:"Visual Studio/ Python IDE", anh:"1iA301CtnEUN9qAArFXuyU1mJkwwjufUB"},
        {bai:"Bài 8",  tieu_de:"GIAO DIỆN ĐẸP NHƯ ỨNG DỤNG THẬT SỰ",  cong_cu:"Visual Studio/ Python IDE", anh:"1rDiDvJiV9dYthH3gLG0x0-siArAhn1tj"},
        {bai:"Bài 9",  tieu_de:"ÔN TẬP",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 10",  tieu_de:"DỰ ÁN LỚN - LẬP KẾ HOẠCH & XÂY DỰNG",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 11",  tieu_de:"DỰ ÁN LỚN - ĐIỀU CHỈNH & LUYỆN TẬP CHIA SẺ",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 12",  tieu_de:"DỰ ÁN LỚN - CÔNG BỐ SẢN PHẨM",  cong_cu:"Visual Studio/ Python IDE", anh:""},
      ],
      "Level 3": [
        {bai:"Bài 1",  tieu_de:"KHUÔN MẪU TẠO RA CẢ MỘT THẾ GIỚI",  cong_cu:"Visual Studio/ Python IDE", anh:"1EC99zK-duH8hUgErS-0CXYtAJNimzxp7"},
        {bai:"Bài 2",  tieu_de:"NHÂN VẬT CÓ TÊN CÓ KỸ NĂNG RIÊNG",  cong_cu:"Visual Studio/ Python IDE", anh:"1yGLflh3DnRqSESpdc7S5FWCI6U6ShH30"},
        {bai:"Bài 3",  tieu_de:"BÍ MẬT GEN DI TRUYỀN TRONG CODE",  cong_cu:"Visual Studio/ Python IDE", anh:"11upWwZGnc00WCGkz0Q9qyfold8lf-gPI"},
        {bai:"Bài 4",  tieu_de:"KHO DỮ LIỆU KHÔNG ĐÁY",  cong_cu:"Visual Studio/ Python IDE", anh:"15b0TedR8fan3L_kgbMDGo6PoajckJuDW"},
        {bai:"Bài 5",  tieu_de:"BỘ NHỚ KHÔNG BAO GIỜ QUÊN",  cong_cu:"Visual Studio/ Python IDE", anh:"1Fz5abOoJjpVVB5FpT8Rmwc3TzYBSTmuU"},
        {bai:"Bài 6",  tieu_de:"KHIÊN BẢO VỆ — CHƯƠNG TRÌNH KHÔNG BAO GIỜ VỠ",  cong_cu:"Visual Studio/ Python IDE", anh:"16Ufg01JJOU5-muV74jNMpL4V2gda91Lg"},
        {bai:"Bài 7",  tieu_de:"SIÊU THỊ CÔNG CỤ CỦA PYTHON",  cong_cu:"Visual Studio/ Python IDE", anh:"1J23pXvJnnWQYMnAgxf46W6AsIl3_PjvI"},
        {bai:"Bài 8",  tieu_de:"XÂY ỨNG DỤNG NHƯ LẬP TRÌNH VIÊN THẬT SỰ",  cong_cu:"Visual Studio/ Python IDE", anh:"1vI1v3uNCzm5QyWlXHxNLIsK-q8pjG8PF"},
        {bai:"Bài 9",  tieu_de:"ÔN TẬP",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 10",  tieu_de:"DỰ ÁN LỚN - LẬP KẾ HOẠCH & XÂY DỰNG",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 11",  tieu_de:"DỰ ÁN LỚN - ĐIỀU CHỈNH & LUYỆN TẬP CHIA SẺ",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 12",  tieu_de:"DỰ ÁN LỚN - CÔNG BỐ SẢN PHẨM",  cong_cu:"Visual Studio/ Python IDE", anh:""},
      ],
      "Level 4": [
        {bai:"Bài 1",  tieu_de:"KHAI SINH THẾ GIỚI GAME",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 2",  tieu_de:"VẼ SÂN KHẤU CHO GAME",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 3",  tieu_de:"MỌI THỨ BẮT ĐẦU CHUYỂN ĐỘNG",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 4",  tieu_de:"ĐIỀU KHIỂN NHÂN VẬT ANH HÙNG",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 5",  tieu_de:"BẮN! BẮN! BẮN!",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 6",  tieu_de:"CUỘC CHIẾN BẮT ĐẦU",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 7",  tieu_de:"GAME CÓ HỒN CÓ NHỊP",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 8",  tieu_de:"MÀN RA MẮT CHÍNH THỨC",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 9",  tieu_de:"ÔN TẬP",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 10",  tieu_de:"DỰ ÁN LỚN - LẬP KẾ HOẠCH & XÂY DỰNG",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 11",  tieu_de:"DỰ ÁN LỚN - ĐIỀU CHỈNH & LUYỆN TẬP CHIA SẺ",  cong_cu:"Visual Studio/ Python IDE", anh:""},
        {bai:"Bài 12",  tieu_de:"DỰ ÁN LỚN - CÔNG BỐ SẢN PHẨM",  cong_cu:"Visual Studio/ Python IDE", anh:""},
      ],
  } },
};

/* ── INTRO DATA ── */
const INTROS = {
  robotics: {
    meta: [
      {icon:"👶", label:"Độ tuổi",        val:"7 – 11 tuổi"},
      {icon:"⏱️", label:"Thời lượng",     val:"144 giờ (2 học kỳ ~ 2 năm)"},
      {icon:"🧱", label:"Công cụ",        val:"Lego Wedo 2.0"},
      {icon:"💬", label:"Ngôn ngữ",       val:"Block Coding"},
      {icon:"💻", label:"Thiết bị",       val:"Laptop / iPad"},
      {icon:"👥", label:"Lớp học",        val:"4 – 16 học sinh"},
      {icon:"📋", label:"Điều kiện",      val:"Không yêu cầu"},
      {icon:"🎖️", label:"Chứng chỉ",     val:"STEM.org (USA)"}
    ],
    gioi_thieu: `Khoá học khơi dậy đam mê khám phá khoa học công nghệ, kiến thức STEM. Giúp học sinh hiểu và áp dụng được các cơ cấu của robot, xây dựng và phát triển kỹ năng lập trình từ đơn giản đến phức tạp.\n\nHọc sinh sẽ tiếp cận, làm quen và phát triển tư duy sáng tạo lắp ráp robot thông qua chuỗi các bài học với công cụ Lego Wedo 2.0 vô cùng thú vị.\n\nỞ học kỳ đầu, học sinh tiến sâu vào chủ đề Robotics và thiết kế kiến trúc — giúp các em hình thành tư duy khoa học máy tính và các nguyên tắc kỹ thuật theo cách hấp dẫn. Các bài học được tích hợp kiến thức Toán, Khoa học và xã hội, thiết kế theo chuẩn STEM của Mỹ.`,
    hoc_vien: [
      {
        title: "Phát triển Tư duy & Khái niệm",
        items: [
          "Các khái niệm lập trình điều khiển robot đơn giản",
          "Cấu trúc các robot đơn giản",
          "Chức năng, hoạt động của cảm biến và động cơ",
          "Các khái niệm cơ bản về kỹ thuật: tốc độ, gia tốc, cảm biến...",
          "Lập trình điều khiển robot qua phần mềm với khối câu lệnh kéo thả",
          "Xử lý logics Nếu – Thì, thuật toán cơ bản"
        ]
      },
      {
        title: "Kỹ năng Phần cứng & Phần mềm",
        items: [
          "LEGO Wedo 2.0 & Phần mềm Scratch",
          "Lắp ráp và kết nối các module robot",
          "Lập trình các ứng dụng điều khiển phần cứng",
          "Khắc phục sự cố cơ bản"
        ]
      },
      {
        title: "Kỹ năng Thế kỷ 21",
        items: [
          "Giao tiếp (Communication): Thuyết trình, trình bày ý tưởng",
          "Tư duy phản biện (Critical Thinking): Phân tích vấn đề, đưa ra giải pháp",
          "Sáng tạo (Creativity): Tự tin kiến tạo sản phẩm công nghệ",
          "Hợp tác (Collaboration): Làm việc nhóm hiệu quả"
        ]
      }
    ]
  },
  ai1: {
    meta: [
      {icon:"👶", label:"Độ tuổi",        val:"7 – 11 tuổi"},
      {icon:"⏱️", label:"Thời lượng",     val:"144 giờ (2 học kỳ ~ 2 năm)"},
      {icon:"🤖", label:"Công cụ",        val:"Teachable Machine, RAISE Playground, PictobloxAI"},
      {icon:"💬", label:"Ngôn ngữ",       val:"Block Coding"},
      {icon:"💻", label:"Thiết bị",       val:"Laptop"},
      {icon:"👥", label:"Lớp học",        val:"8 – 16 học sinh"},
      {icon:"📋", label:"Điều kiện",      val:"Không yêu cầu"},
      {icon:"🎖️", label:"Chứng chỉ",     val:"STEM.org (USA)"}
    ],
    gioi_thieu: `"Khám Phá Trí Tuệ Nhân Tạo" là chương trình được thiết kế dành cho các bạn từ 7–11 tuổi, khơi dậy niềm đam mê công nghệ và trang bị hành trang kiến thức vững chắc để chinh phục thế giới lập trình AI đầy sáng tạo.\n\nChương trình học bài bản, bám sát thực tiễn: Giúp con tiếp thu kiến thức mới dễ dàng, hiệu quả thông qua các dự án thực tế và hấp dẫn. Phát triển toàn diện kỹ năng thế kỷ 21: tư duy logic, giải quyết vấn đề, làm việc nhóm và thuyết trình.\n\n🎯 Học kỳ 1: Làm quen lập trình kéo–thả, biến, điều kiện, vòng lặp. Hiểu nguyên lý AI qua camera, âm thanh, hình ảnh. Xây dựng các dự án: Nhận diện hình ảnh, Game cử chỉ, Robot ảo phản hồi giọng nói.\n\n🎯 Học kỳ 2: AI extensions nâng cao — Body Sensing, Hand/Face Detection, Image Classification. Thu thập & phân tích dữ liệu. Hoàn thiện 1 dự án lớn cuối kỳ và thuyết minh sản phẩm.`,
    hoc_vien: [
      {
        title: "Phát triển Tư duy & Khái niệm",
        items: [
          "Nắm vững khái niệm lập trình cơ bản: biến, hàm, điều kiện, vòng lặp",
          "Hiểu quy trình xây dựng sản phẩm công nghệ từ ý tưởng đến hoàn thiện",
          "Phát triển tư duy logic, giải quyết vấn đề và phản biện",
          "Hiểu cách AI hoạt động: nhận diện hình ảnh, phân tích dữ liệu"
        ]
      },
      {
        title: "Kiến thức Chuyên môn",
        items: [
          "Lập trình AI Extensions: nhận diện hình ảnh, phân tích cơ thể người",
          "Xây dựng ứng dụng tương tác: vẽ bằng AI, game mini, Data Logger",
          "Tư duy thiết kế (Design Thinking): xác định vấn đề – phác thảo – tạo nguyên mẫu",
          "Kết nối phần mềm với phần cứng: cảm biến, camera, micro..."
        ]
      },
      {
        title: "Kỹ năng Phần cứng & Phần mềm",
        items: [
          "Sử dụng camera AI, Body Detection, Hand/Face Sensing",
          "Thu thập dữ liệu bằng cảm biến (ánh sáng, gia tốc, chuyển động)",
          "Kiểm thử, sửa lỗi (debug) và tối ưu chương trình"
        ]
      },
      {
        title: "Kỹ năng Thế kỷ 21",
        items: [
          "Giao tiếp (Communication): Thuyết trình, trình bày ý tưởng",
          "Tư duy phản biện (Critical Thinking): Phân tích vấn đề, đưa ra giải pháp",
          "Sáng tạo (Creativity): Khơi dậy đam mê, tự tin kiến tạo sản phẩm AI",
          "Hợp tác (Collaboration): Làm việc nhóm, chia sẻ và hỗ trợ lẫn nhau"
        ]
      }
    ]
  }  ,
  game: {
    meta: [
      {icon:"👶", label:"Độ tuổi",        val:"7 – 11 tuổi"},
      {icon:"⏱️", label:"Thời lượng",     val:"144 giờ (2 học kỳ ~ 2 năm)"},
      {icon:"🎮", label:"Công cụ",        val:"Scratch / Tynker / WeDo 2.0"},
      {icon:"💬", label:"Ngôn ngữ",       val:"Block Coding"},
      {icon:"💻", label:"Thiết bị",       val:"Laptop"},
      {icon:"👥", label:"Lớp học",        val:"8 – 16 học sinh"},
      {icon:"📋", label:"Điều kiện",      val:"Không yêu cầu"},
      {icon:"🎖️", label:"Chứng chỉ",     val:"STEM.org (USA)"}
    ],
    gioi_thieu: `Game Creator Lab là chương trình lập trình game chuyên biệt dành cho trẻ 7–11 tuổi, giúp các em xây dựng tư duy lập trình sáng tạo thông qua việc thiết kế và phát triển game thực thụ.\n\nHọc sinh bắt đầu với Scratch — công cụ lập trình kéo–thả trực quan, từng bước làm chủ các khái niệm lập trình cốt lõi: biến, vòng lặp, điều kiện, sự kiện. Lên cấp với WeDo 2.0 để kết hợp phần cứng thật, rồi chuyển sang Tynker để tạo game chuyên nghiệp hơn.\n\n🎯 Học kỳ 1 & 2 (Scratch): Thiết kế nhân vật, tạo animation, xây dựng game 2D hoàn chỉnh với logic điều khiển và điểm số.\n\n🎯 Học kỳ 3 (Scratch + WeDo): Tích hợp phần cứng thật — cảm biến, động cơ — vào dự án game vật lý.\n\n🎯 Học kỳ 4 (Tynker): Lập trình game nâng cao với Tynker, hoàn thiện kỹ năng thiết kế game chuyên nghiệp.`,
    hoc_vien: [
      {
        title: "Tư duy Lập trình",
        items: [
          "Nắm vững tư duy lập trình: tuần tự, điều kiện, vòng lặp, sự kiện",
          "Hiểu cách thiết kế game: vật lý, va chạm, điểm số, màn chơi",
          "Phát triển tư duy thuật toán và giải quyết vấn đề qua game",
          "Học cách lập kế hoạch và chia nhỏ dự án lớn thành các bước nhỏ"
        ]
      },
      {
        title: "Kỹ năng Lập trình",
        items: [
          "Scratch: lập trình kéo–thả, sprite, stage, event, animation",
          "WeDo 2.0: tích hợp phần cứng cảm biến và động cơ vào dự án",
          "Tynker: lập trình game nâng cao với đồ hoạ và logic phức tạp",
          "Debug, kiểm thử và tối ưu game"
        ]
      },
      {
        title: "Kỹ năng Thế kỷ 21",
        items: [
          "Giao tiếp (Communication): Thuyết trình và giới thiệu sản phẩm game",
          "Tư duy phản biện (Critical Thinking): Phân tích và cải thiện gameplay",
          "Sáng tạo (Creativity): Thiết kế nhân vật, thế giới và câu chuyện trong game",
          "Hợp tác (Collaboration): Làm việc nhóm để hoàn thiện dự án game"
        ]
      }
    ]
  },
  nghethuatcn: {
    meta: [
      {icon:"👶", label:"Độ tuổi",        val:"7 – 11 tuổi"},
      {icon:"⏱️", label:"Thời lượng",     val:"144 giờ (2 học kỳ ~ 2 năm)"},
      {icon:"🎨", label:"Công cụ",        val:"Tinkercad / Delightex Edu"},
      {icon:"💬", label:"Ngôn ngữ",       val:"3D Thiết kế"},
      {icon:"💻", label:"Thiết bị",       val:"Laptop"},
      {icon:"👥", label:"Lớp học",        val:"8 – 16 học sinh"},
      {icon:"📋", label:"Điều kiện",      val:"Không yêu cầu"},
      {icon:"🎖️", label:"Chứng chỉ",     val:"STEM.org (USA)"}
    ],
    gioi_thieu: `Nghệ Thuật Công Nghệ (Sáng Tạo Số) là chương trình kết hợp nghệ thuật và công nghệ số, dành cho trẻ 7–11 tuổi yêu thích thiết kế và sáng tạo.\n\nTừ mô hình 3D đơn giản đến những cảnh vật ảo phức tạp, học sinh được khám phá thế giới thiết kế số theo cách vừa vui vẻ vừa chuyên nghiệp. Chương trình sử dụng Tinkercad (thiết kế 3D) và Delightex Edu (dựng cảnh 3D ảo).\n\n🎯 Học kỳ 1 & 2 (Tinkercad): Làm quen thiết kế 3D, tạo mô hình đồ vật, nhân vật, kiến trúc. Học kỹ thuật Boolean, biến hình, kết hợp các khối cơ bản.\n\n🎯 Học kỳ 3 & 4 (Delightex Edu): Dựng cảnh 3D ảo sống động — ngôi nhà, vườn thú, thành phố tương lai. Thêm ánh sáng, vật liệu, hoạt cảnh để tạo tác phẩm hoàn chỉnh.`,
    hoc_vien: [
      {
        title: "Tư duy Thiết kế",
        items: [
          "Hiểu không gian 3D: trục XYZ, tỷ lệ, góc nhìn, phối cảnh",
          "Tư duy thiết kế (Design Thinking): từ ý tưởng đến sản phẩm 3D",
          "Hiểu cách ánh sáng, màu sắc và vật liệu tạo ra hiệu ứng thị giác",
          "Phát triển thẩm mỹ số và khả năng hình dung không gian"
        ]
      },
      {
        title: "Kỹ năng Công nghệ",
        items: [
          "Tinkercad: tạo, chỉnh sửa và kết hợp các khối 3D, thao tác Boolean",
          "Delightex Edu: dựng cảnh 3D ảo, thêm vật liệu và ánh sáng",
          "Xuất và trình bày sản phẩm thiết kế 3D chuyên nghiệp",
          "Ứng dụng tư duy kỹ thuật vào thiết kế thực tế"
        ]
      },
      {
        title: "Kỹ năng Thế kỷ 21",
        items: [
          "Giao tiếp (Communication): Thuyết trình tác phẩm và ý tưởng thiết kế",
          "Tư duy phản biện (Critical Thinking): Đánh giá và cải thiện thiết kế",
          "Sáng tạo (Creativity): Tự do sáng tạo tác phẩm nghệ thuật số độc đáo",
          "Hợp tác (Collaboration): Chia sẻ cảm hứng và cùng phát triển ý tưởng"
        ]
      }
    ]
  },
  pythonai: {
    meta: [
      {icon:"👶", label:"Độ tuổi",        val:"10 – 15 tuổi"},
      {icon:"⏱️", label:"Thời lượng",     val:"144 giờ (2 học kỳ ~ 2 năm)"},
      {icon:"🐍", label:"Công cụ",        val:"Python / VS Code / Tkinter / Pygame"},
      {icon:"💬", label:"Ngôn ngữ",       val:"Python"},
      {icon:"💻", label:"Thiết bị",       val:"Laptop"},
      {icon:"👥", label:"Lớp học",        val:"8 – 16 học sinh"},
      {icon:"📋", label:"Điều kiện",      val:"Đã biết lập trình cơ bản"},
      {icon:"🎖️", label:"Chứng chỉ",     val:"STEM.org (USA)"}
    ],
    gioi_thieu: `Khám Phá Python & AI Cấp 2&3 là chương trình lập trình Python chuyên sâu dành cho học sinh 10–15 tuổi đã có kiến thức lập trình cơ bản, sẵn sàng chinh phục ngôn ngữ lập trình thực chiến số một thế giới.\n\nTừ những dòng lệnh Python đầu tiên đến xây dựng ứng dụng GUI hoàn chỉnh và game 2D với Pygame — học sinh được trải nghiệm lập trình như một lập trình viên thực thụ.\n\n🎯 Học kỳ 1 (Python Cơ bản): Biến, điều kiện, vòng lặp, hàm, danh sách. Xây dựng chương trình console tương tác.\n\n🎯 Học kỳ 2 (Python + Turtle + Tkinter): Vẽ đồ hoạ với Turtle, tạo giao diện GUI với Tkinter. Ứng dụng có cửa sổ, nút bấm, form nhập liệu.\n\n🎯 Học kỳ 3 (OOP + File + Modules): Lập trình hướng đối tượng, đọc/ghi file, sử dụng thư viện. Xây dựng ứng dụng phức tạp.\n\n🎯 Học kỳ 4 (Pygame): Phát triển game 2D hoàn chỉnh với Pygame — sprite, va chạm, âm thanh, điểm số.`,
    hoc_vien: [
      {
        title: "Tư duy Lập trình Python",
        items: [
          "Nắm vững cú pháp Python: biến, kiểu dữ liệu, toán tử, điều kiện, vòng lặp",
          "Hiểu lập trình hướng đối tượng (OOP): class, object, kế thừa",
          "Tư duy module hóa: chia chương trình thành các hàm và class",
          "Hiểu cách đọc/ghi file, xử lý ngoại lệ và debug chuyên nghiệp"
        ]
      },
      {
        title: "Kỹ năng Lập trình",
        items: [
          "Python thuần: lập trình console, xử lý dữ liệu, thuật toán",
          "Tkinter: xây dựng ứng dụng GUI có giao diện thực thụ",
          "Pygame: phát triển game 2D với sprite, vật lý và âm thanh",
          "Sử dụng thư viện Python và quản lý dự án thực tế"
        ]
      },
      {
        title: "Kỹ năng Thế kỷ 21",
        items: [
          "Giao tiếp (Communication): Thuyết trình sản phẩm phần mềm chuyên nghiệp",
          "Tư duy phản biện (Critical Thinking): Phân tích yêu cầu và thiết kế giải pháp",
          "Sáng tạo (Creativity): Xây dựng ứng dụng và game theo ý tưởng riêng",
          "Hợp tác (Collaboration): Làm việc nhóm theo quy trình phát triển phần mềm"
        ]
      }
    ]
  }
};

let currentCourse    = null;
let currentCourseKey = null;
let currentView      = 'intro'; // 'intro' | 'Level 1' | 'Level 2' | ...