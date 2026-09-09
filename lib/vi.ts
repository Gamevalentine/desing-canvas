export const VI_SEED_TEXT = { favorite: "Yêu thích", share: "Chia sẻ", inbox: "Hộp thư đến", starred: "Đã gắn sao", archive: "Lưu trữ", supporting: "Văn bản phụ", start: "Bắt đầu" };

export const VI_TEXT_TOKEN_TEXT = {
  onSurface: "Văn bản trên bề mặt", onSurfaceVariant: "Văn bản phụ trên bề mặt", primary: "Màu chính", secondary: "Màu phụ",
  onPrimaryContainer: "Văn bản trên vùng màu chính", onSecondaryContainer: "Văn bản trên vùng màu phụ",
  onTertiaryContainer: "Văn bản trên vùng màu thứ ba", inverseOnSurface: "Văn bản đảo trên bề mặt",
};

export const VI_COLOR_TOKEN_TEXT = {
  surface: "Bề mặt", surfaceContainerLow: "Vùng chứa thấp", surfaceContainer: "Vùng chứa", surfaceContainerHigh: "Vùng chứa cao",
  surfaceContainerHighest: "Vùng chứa cao nhất", primaryContainer: "Vùng màu chính", secondaryContainer: "Vùng màu phụ",
  tertiaryContainer: "Vùng màu thứ ba", primary: "Màu chính", inverseSurface: "Bề mặt đảo",
};

export const VI_UI = {
  frameSize: "Kích thước màn hình", phoneFrame: "Điện thoại", desktopFrame: "Máy tính", columnWidth: "Một cột điện thoại", cornerLeft: "Góc bên trái", cornerRight: "Góc bên phải", cornersEach: "Từng góc", cornerTl: "Trên trái", cornerTr: "Trên phải", cornerBl: "Dưới trái", cornerBr: "Dưới phải",
  filled: "Tô đầy", tonal: "Tông màu", elevated: "Nổi", outlined: "Viền", standard: "Tiêu chuẩn", vibrant: "Rực rỡ",
  parts: "Thành phần", layers: "Lớp", edit: "Chỉnh sửa", prompt: "Lời nhắc", closePanel: "Đóng bảng",
  search: "Tìm kiếm", favorites: "Yêu thích", addFavorite: "Thêm vào yêu thích", removeFavorite: "Bỏ khỏi yêu thích", clear: "Xóa", language: "Ngôn ngữ",
  select: "Chọn (V)", hand: "Bàn tay (H / Space)", blank: "Khung trống", phone: "Màn hình điện thoại", addFrame: "Thêm màn hình", preview: "Xem trước (P)",
  zoomIn: "Phóng to (+)", zoomOut: "Thu nhỏ (-)", fit: "Vừa khung (0)", undo: "Hoàn tác (Ctrl+Z)", redo: "Làm lại (Ctrl+Shift+Z)",
  clearAll: "Xóa tất cả", clearAllTitle: "Xóa toàn bộ khung vẽ?", clearAllBody: "Tất cả màn hình và thành phần sẽ bị xóa. Có thể khôi phục bằng Hoàn tác (Ctrl+Z).",
  screen: "Màn hình", screenName: "Tên màn hình", name: "Tên", background: "Nền", defaultColor: "Màu mặc định", export: "Xuất", project: "Dự án",
  saveProject: "Lưu dự án", openProject: "Mở dự án", replaceProjectTitle: "Mở dự án này?", replaceProject: "Khung vẽ hiện tại sẽ bị thay thế. Có thể khôi phục bằng Hoàn tác (Ctrl+Z).",
  askAi: "Nhờ AI", askAiGenerate: "Tạo bằng AI", askAiGenerating: "Đang tạo…", askAiPasted: "Dán vào tác nhân AI của bạn", askAiTitle: "Nhờ AI thiết kế", askAiCopyTitle: "Hướng dẫn cho tác nhân AI", askAiGenerateTitle: "Dùng khóa trong thẻ AI", aiSetup: "Cài đặt AI", aiSetupHint: "Thêm khóa để tạo trực tiếp tại đây", aiSetupTitle: "Mở thẻ AI",
  askAiHint: "Mô tả thứ bạn muốn tạo rồi nhấn ‘Tạo bằng AI’: mô hình trong thẻ AI sẽ vẽ thiết kế lên khung. Bạn cũng có thể sao chép hướng dẫn cho một tác nhân AI như Claude Code, mở liên kết nó trả về hoặc lưu JSON rồi mở bằng ‘Mở dự án’.",
  askAiIdea: "Thứ muốn tạo (ví dụ: ứng dụng lưu và tìm kiếm công thức)", askAiIdeaFallback: "(mô tả thứ muốn tạo tại đây)", askAiCopy: "Sao chép hướng dẫn",
  askAiText: "Hãy tạo một bản phác thảo M3E Canvas. Trước tiên đọc {url} rồi làm theo hướng dẫn: xây dựng thiết kế bằng JSON và trả lời bằng liên kết chia sẻ. Nếu không thể chạy mã, hãy trả JSON trong khối mã để có thể lưu thành tệp và mở lại. Không cần xác minh.\n\nThứ muốn tạo: {idea}",
  draftKeep: "Dùng thiết kế này", draftUndo: "Quay lại thiết kế trước", selectedTab: "Đặt làm mục được chọn", shareLinkCopy: "Sao chép liên kết", shareLinkHint: "Liên kết mở thiết kế này (không gồm ảnh)",
  invalidProject: "Không thể mở tệp dự án.", readOnlyTitle: "Đang chỉnh sửa ở thẻ khác", readOnlyBody: "Khung vẽ này đang được chỉnh sửa ở một thẻ khác. Đóng thẻ đó rồi tải lại trang này để chỉnh sửa.", reload: "Tải lại",
  copied: "Đã sao chép", saveImage: "Lưu thành ảnh", saving: "Đang lưu…", previewFrom: "Xem trước từ màn hình này",
  duplicate: "Nhân bản", duplicateKey: "Nhân bản (Ctrl+D)", delete: "Xóa (Delete)", deleteSelection: "Xóa phần đã chọn",
  text: "Văn bản", label: "Nhãn", bold: "In đậm", action: "Hành động", supporting: "Văn bản phụ", tabs: "Mục", changeIcon: "Đổi biểu tượng",
  options: "Tùy chọn", addOption: "Thêm tùy chọn", removeOption: "Xóa tùy chọn này", selectedOption: "Đặt làm giá trị ban đầu (nhấn lại để bỏ chọn)", image: "Ảnh", pickImage: "Chọn ảnh", removeImage: "Bỏ ảnh", imageUrl: "URL ảnh", imageTop: "Phía trên", imageLeading: "Bên trái", imageTrailing: "Bên phải", cardLayout: "Bố cục", noImageLayout: "Không có ảnh", textPosition: "Vị trí văn bản", textTop: "Trên", textMiddle: "Giữa", textBottom: "Dưới", textColor: "Màu chữ", autoColor: "Tự động", autoWidth: "Theo độ rộng chữ", icon: "Biểu tượng", noIcon: "Không có biểu tượng", searchIcons: "Tìm biểu tượng",
  style: "Kiểu", state: "Trạng thái", selected: "Đã chọn", handle: "Tay nắm (bottom sheet)", listSwitch: "Công tắc cuối mục", on: "Bật", container: "Vùng chứa", wavy: "Gợn sóng", determinate: "Xác định",
  railState: "Trạng thái thanh điều hướng", railCollapsed: "Thu gọn", railExpanded: "Mở rộng", railLegacy: "Thanh điều hướng cũ · rộng 80dp", railUpgrade: "Dùng Expressive (96dp)", railStandalone: "Hãy tách thanh điều hướng khỏi nhóm để dùng chế độ phủ.", railPresentation: "Kiểu mở rộng", railStandard: "Trong bố cục", railModal: "Phủ dạng modal", expandNavigation: "Mở rộng điều hướng", collapseNavigation: "Thu gọn điều hướng", trackThickness: "Độ dày rãnh",
  size: "Kích thước", width: "Chiều rộng", height: "Chiều cao", fontSize: "Cỡ chữ", cornerRadius: "Bo góc", cornerTop: "Góc trên", cornerBottom: "Góc dưới", screenWidth: "Rộng toàn màn hình", contentWidth: "Lề hai bên 16dp", halfWidth: "Nửa hàng (2 cột)", screenHeight: "Chiều cao màn hình", halfHeight: "Nửa màn hình",
  tapTo: "Nhấn để mở", none: "Không có", goBack: "Quay lại", swipeTo: "Vuốt để mở", toggle: "Nút bật/tắt", toggleHint: "Nhấn để chuyển bật / tắt", thumbCheck: "Hiện dấu chọn khi bật", behavior: "Hành vi", whenPressed: "Khi nhấn…", whatItDoes: "Thành phần này làm gì…", removeLink: "Bỏ liên kết",
  group: "Nhóm", makeGroup: "Nhóm lại", ungroup: "Bỏ nhóm", selectedParts: "mục đã chọn", groupHint: "Giữ nguyên chồng lớp và di chuyển cùng nhau như một lớp",
  iconBackground: "Nền biểu tượng", noBackground: "Không nền", normalState: "Bình thường", onState: "Khi bật", onStateHint: "Văn bản, biểu tượng và kiểu khi bật", groupEditNote: "Bỏ nhóm để chỉnh sửa các thành phần bên trong", openPanel: "Mở bảng",
  colors: "Màu sắc", templates: "Bảng màu", customColor: "Tùy chỉnh", seedColor: "Màu gốc", seedHint: "Chọn một màu để tạo toàn bộ bảng màu Material 3. Có thể tinh chỉnh từng vai trò màu riêng lẻ.", useThis: "Dùng màu này", fineTune: "Tinh chỉnh", dynamicColor: "Màu động",
  dynamicOnHint: "Các màu này chỉ dùng trong trình chỉnh sửa; trên thiết bị thật sẽ dùng màu từ hình nền.", dynamicOffHint: "Khi bật, thiết bị dùng màu hình nền và các màu ở đây làm phương án dự phòng.", closeBtn: "Đóng", screens: "Chọn màn hình",
  noLayers: "Màn hình này chưa có thành phần", showParts: "Hiện các thành phần bên trong", hideParts: "Ẩn các thành phần bên trong", lock: "Khóa", unlock: "Mở khóa", lockedGroup: "Nhóm này đang bị khóa. Hãy mở khóa trong bảng Lớp trước.",
  brief: "Mô tả ứng dụng…", appName: "Tên ứng dụng", targetPlatform: "Nền tảng đích", targetAndroid: "Xây dựng thành ứng dụng Android gốc", targetWeb: "Xây dựng thành ứng dụng web chạy trong trình duyệt", copyPrompt: "Sao chép lời nhắc", back: "Quay lại", close: "Đóng (Esc)", cancel: "Hủy", ok: "OK",
  leading: "Bên trái", trailing: "Bên phải", home: "Trang chủ", screenN: "Màn hình", copySuffix: " bản sao", mobileNote: "Đầy đủ tính năng trên trình duyệt máy tính",
  addButton: "Thêm nút", done: "Xong", theme: "Chủ đề", settings: "Chủ đề và cài đặt", shape: "Hình dạng", typography: "Kiểu chữ", motion: "Chuyển động",
  brightness: "Độ sáng", light: "Sáng", dark: "Tối", contrast: "Độ tương phản", bothModes: "Cả hai", contrastStandard: "Tiêu chuẩn", contrastMedium: "Trung bình", contrastHigh: "Cao",
  shapeScale: "Mức bo góc", shapeSquare: "Vuông", shapeRounded: "Bo tròn", shapeFull: "Tròn tối đa", shapeHint: "Đổi mức bo góc mặc định của mọi thành phần cùng lúc. Bán kính đã nhập riêng cho từng thành phần vẫn được giữ nguyên.", fontFamily: "Phông chữ", emphasized: "Kiểu nhấn mạnh", emphasizedHint: "Tiêu đề và nhãn dùng kiểu M3 Expressive đậm hơn.", motionScheme: "Kiểu chuyển động", motionStandard: "Tiêu chuẩn", motionExpressive: "Expressive", motionHint: "Expressive dùng hiệu ứng lò xo nảy nhẹ cho chuyển màn hình xem trước và lời nhắc.", tryIt: "Nhấn để thử",
  tidy: "Sắp xếp", tidyUndo: "Hoàn tác sắp xếp", tidyDone: "Đã gọn sẵn", placement: "Vị trí dọc của nội dung", placeTop: "Từ trên xuống", placeCenter: "Ở giữa", placeBottom: "Ở dưới", placeSpread: "Dàn đều",
  align: "Căn chỉnh", alignHintOne: "Căn thành phần theo vùng nội dung của màn hình, bên trong lề và tránh các thanh điều hướng.", alignHintMany: "Căn các thành phần đã chọn với nhau. Dàn đều sẽ giữ nguyên hai thành phần ngoài cùng.", alignLeft: "Căn trái", alignCenterH: "Căn giữa ngang", alignRight: "Căn phải", distributeH: "Dàn đều ngang", alignTop: "Căn trên", alignCenterV: "Căn giữa dọc", alignBottom: "Căn dưới", distributeV: "Dàn đều dọc", description: "Mô tả", screenDescription: "Mục đích của màn hình này",
  ai: "AI", promptReset: "Quay lại lời nhắc đã tạo", aiWriteShort: "Viết bằng AI", aiWrite: "Nhờ AI viết", aiSettings: "Cài đặt AI", aiProvider: "Nhà cung cấp", aiBaseUrl: "URL gốc", aiModel: "ID mô hình", aiKey: "Khóa API", aiGetKey: "Lấy khóa",
  aiKeyHint: "Khóa chỉ được lưu trong trình duyệt này và gửi trực tiếp đến nhà cung cấp.", aiRestore: "Chuyển giữa bản AI viết lại và bản gốc", aiApplied: "Đã áp dụng", aiSelectScreen: "Hãy chọn một màn hình trước", aiNoKey: "Thêm khóa trong thẻ AI để dùng tính năng này", aiError: "Yêu cầu AI thất bại", aiErrorRefusal: "Mô hình từ chối trả lời", aiErrorJson: "Không thể đọc phản hồi của mô hình", aiErrorLong: "Phản hồi quá dài và bị cắt. Hãy thử với ít màn hình hơn", aiErrorModel: "Hãy nhập ID mô hình", aiErrorInsecure: "URL gốc phải dùng https hoặc trỏ tới localhost", aiErrorNetwork: "Không thể kết nối. Hãy kiểm tra URL, mạng và cấu hình CORS của máy chủ",
} as const;

export const VI_KIND_TEXT = {
  box: { noun: "khung" }, button: { noun: "nút", label: "Nút" }, iconButton: { noun: "nút biểu tượng" }, fab: { noun: "FAB" }, extendedFab: { noun: "FAB mở rộng", label: "Tạo" }, chip: { noun: "chip", label: "Chip" }, topAppBar: { noun: "thanh ứng dụng trên", label: "Tiêu đề" }, bottomNav: { noun: "thanh điều hướng" }, navRail: { noun: "thanh điều hướng cạnh" }, searchBar: { noun: "thanh tìm kiếm", label: "Tìm kiếm" },
  card: { noun: "thẻ", label: "Tiêu đề thẻ", supporting: "Văn bản phụ hiển thị ở đây." }, listItem: { noun: "mục danh sách", label: "Mục danh sách", supporting: "Văn bản phụ" }, dialog: { noun: "hộp thoại", label: "Xác nhận", supporting: "Bạn có muốn tiếp tục?" }, snackbar: { noun: "thông báo nhanh", label: "Đã lưu", supporting: "Hoàn tác" }, textField: { noun: "ô nhập văn bản", label: "Nhãn" }, select: { noun: "danh sách thả xuống", label: "Nhãn" }, switch: { noun: "công tắc", label: "Thông báo" }, checkbox: { noun: "ô chọn", label: "Tôi đồng ý" }, slider: { noun: "thanh trượt" }, text: { noun: "văn bản", label: "Tiêu đề" }, image: { noun: "ảnh" }, camera: { noun: "camera" }, map: { noun: "bản đồ" }, divider: { noun: "đường phân cách" }, loadingIndicator: { noun: "chỉ báo tải" }, linearProgress: { noun: "thanh tiến trình tuyến tính" }, circularProgress: { noun: "tiến trình tròn" }, splitButton: { noun: "nút chia đôi", label: "Gửi" }, fabMenu: { noun: "menu FAB" }, toolbar: { noun: "thanh công cụ" }, tabs: { noun: "thẻ tab" }, radio: { noun: "nút chọn", label: "Tùy chọn" }, badge: { noun: "huy hiệu", label: "3" },
};

export const VI_TAB_LABELS = ["Dành cho bạn", "Đang theo dõi", "Xu hướng", "Mới", "Đã lưu"];
export const VI_SELECT_OPTIONS = ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3"];
export const VI_FAB_MENU_TABS = [
  { icon: "edit", label: "Ghi chú" }, { icon: "photo_camera", label: "Ảnh" }, { icon: "mic", label: "Âm thanh" },
  { icon: "attach_file", label: "Tệp" }, { icon: "event", label: "Sự kiện" },
];
export const VI_NAV_TABS = [
  { icon: "home", label: "Trang chủ" }, { icon: "search", label: "Tìm kiếm" },
  { icon: "favorite", label: "Đã lưu" }, { icon: "settings", label: "Cài đặt" },
];
export const VI_TRANSITION_TEXT = {
  slide: "trượt vào từ bên phải", slideLeft: "trượt vào từ bên trái", slideUp: "trượt lên từ phía dưới",
  slideDown: "trượt xuống từ phía trên", fade: "mờ dần", expand: "phóng lớn", none: "không có hoạt ảnh",
};
export const VI_SWIPE_TEXT = { left: "vuốt sang trái", right: "vuốt sang phải", up: "vuốt lên", down: "vuốt xuống" };
