import type { Kind, Platform, Theme } from "./tokens";

export const VI_WIDE_RAIL_STYLE = "Thanh điều hướng M3 Expressive: rộng 96dp khi thu gọn, nhãn dưới biểu tượng; khi mở rộng rộng 220dp, mỗi mục cao 56dp, biểu tượng và nhãn nằm ngang cách 8dp. Dùng nền surfaceContainer ở cả hai trạng thái. Mục được chọn dùng chỉ báo dạng viên secondaryContainer, biểu tượng onSecondaryContainer và ưu tiên nhãn secondary; nếu tương phản dưới 4.5:1 thì dùng onSurface / onSecondaryContainer phù hợp. Nút menu phía trên chuyển mở rộng/thu gọn. Bản không modal nằm cạnh nội dung; bản modal phủ nội dung bằng scrim khi mở và chặn tương tác nền. Nhấn scrim hoặc Escape để đóng.";

export const VI_STYLE_NOTES: Partial<Record<Kind | "boxSheet", string>> = {
  button: "Nút: cỡ trung bình cao 56dp, bo tròn hoàn toàn dạng viên. Filled dùng primary, tonal dùng secondaryContainer, outlined dùng viền outline 1dp. Nhóm nút nối nhau có khe 3dp, các góc trong 8dp và góc ngoài vẫn tròn.",
  iconButton: "Nút biểu tượng: hình tròn 48dp, dùng đúng kiểu filled / tonal / outlined / standard đã chọn. Chuỗi nút biểu tượng nối nhau dùng Connected button group.",
  fab: "FAB: mặc định 56dp bo góc 16dp; lớn 96dp bo 28dp; nhỏ 40dp bo 12dp. Tonal dùng primaryContainer, filled dùng primary; cách mép màn hình 16dp và dùng bóng Level 3.",
  extendedFab: "FAB mở rộng: cao 56dp, bo góc 16dp, biểu tượng bên trái và nhãn bên phải.",
  chip: "Chip: cao 32dp, bo góc 8dp. Khi chọn dùng secondaryContainer và hiện dấu chọn phía trước. Nhóm chip cách nhau 8dp theo hàng ngang và cuộn ngang khi tràn.",
  topAppBar: "Thanh ứng dụng trên: cao 64dp, nền surface, kéo nền ra sau thanh trạng thái và chừa system inset ở trên. Tiêu đề dùng titleLarge, nút biểu tượng hai bên 48dp; khi cuộn có thể đổi nền sang surfaceContainer.",
  bottomNav: "Thanh điều hướng: cao 80dp, nền surfaceContainer, kéo nền qua vùng điều hướng cử chỉ và chừa system inset dưới. Mục đang chọn dùng chỉ báo viên secondaryContainer 64×32dp, biểu tượng filled và nhãn labelMedium.",
  navRail: "Thanh điều hướng cạnh: rộng 80dp trên nền surfaceContainer, chạy hết chiều cao mép trái. Mục xếp dọc; mục chọn dùng chỉ báo viên secondaryContainer 56×32dp, biểu tượng filled và nhãn labelMedium bên dưới. Nội dung nằm bên phải.",
  searchBar: "Thanh tìm kiếm: cao 56dp, bo tròn hoàn toàn, nền surfaceContainerHigh, biểu tượng tìm kiếm phía trước và biểu tượng đã chọn phía sau.",
  card: "Thẻ: bo góc 20dp. Vùng ảnh đặt theo mô tả ở trên, bên trái, bên phải hoặc phủ toàn nền; ảnh giữ tỉ lệ và crop giữa. Filled dùng surfaceContainerHighest, elevated dùng surfaceContainerLow với bóng Level 1, outlined dùng viền outlineVariant 1dp. Tiêu đề titleMedium, nội dung bodyMedium, padding 20dp, cách tiêu đề–nội dung 4dp và ảnh–chữ 12dp.",
  listItem: "Mục danh sách: cao 72dp, biểu tượng đầu 24dp (mặc định trên vòng tròn primaryContainer 40dp), chữ chính bodyLarge, chữ phụ bodyMedium/onSurfaceVariant, nền theo vai trò đã chọn. Danh sách nối dọc có khe 3dp, góc ngoài 28dp và góc trong 8dp.",
  dialog: "Hộp thoại: rộng 312dp, bo góc 28dp, nền surfaceContainerHigh. Tiêu đề headlineSmall, nội dung bodyMedium, nút văn bản căn phải phía dưới.",
  snackbar: "Thông báo nhanh: cao 48dp, bo góc 8dp, nền inverseSurface và chữ inverseOnSurface; hành động dùng nút chữ inversePrimary. Hiện cách đáy 16dp rồi tự ẩn sau vài giây.",
  textField: "Ô nhập văn bản: cao 56dp. Outlined bo 16dp và viền outline; filled dùng nền surfaceContainerHighest với gạch dưới. Khi focus, nhãn nổi lên và viền thành primary 2dp; văn bản phụ bodySmall nằm bên dưới.",
  select: "Danh sách thả xuống: giống ô nhập văn bản (cao 56dp, outlined hoặc filled), có biểu tượng arrow_drop_down ở cuối. Dùng exposed dropdown menu; nhấn để mở menu bên dưới trên nền surfaceContainer, bo 4dp, mỗi mục cao 48dp và hiển thị giá trị đã chọn trong ô.",
  switch: "Công tắc: kích thước M3 chuẩn, rãnh 52×32dp. Bật dùng primary; tắt dùng surfaceContainerHighest với viền outline. Nhãn bên trái, công tắc bên phải.",
  checkbox: "Ô chọn: vuông 18dp, bo 2dp, dùng primary khi chọn; nhãn bodyLarge ở bên phải.",
  slider: "Thanh trượt: dùng rãnh dày 16dp kiểu M3 Expressive và tay nắm dọc 4×44dp. Bên trái tay nắm là primary, bên phải là secondaryContainer; kéo để đổi giá trị.",
  text: "Văn bản: dùng đúng cỡ sp đã chỉ định. Tiêu đề dùng onSurface, mô tả dùng onSurfaceVariant, chiều cao dòng 1.3–1.5 lần cỡ chữ; không thêm ripple khi nhấn.",
  image: "Ảnh: bo góc 20dp; nếu chưa có ảnh thì dùng placeholder surfaceContainerHighest. Giữ tỉ lệ ảnh và crop giữa để lấp đầy vùng.",
  camera: "Xem trước camera: bo góc 20dp. Hiển thị camera thiết bị trong vùng này; khi chưa có quyền, hiện biểu tượng camera trên nền inverseSurface tối.",
  map: "Bản đồ: bo góc 20dp. Đặt bản đồ SDK trong vùng này; khi tải, hiện biểu tượng bản đồ trên surfaceContainerHighest.",
  divider: "Đường phân cách: dày 1dp màu outlineVariant, lề ngang 16dp.",
  box: "Khung: vùng chứa đơn giản có màu nền và bo góc đã chỉ định; dùng làm nền cho các thành phần chồng lên, không có hành vi riêng.",
  boxSheet: "Khung / bottom sheet: vùng chứa có nền và bo góc đã chỉ định. Chỉ khung được mô tả có tay nắm mới là ModalBottomSheet trượt từ dưới lên; các khung còn lại chỉ là vùng nền.",
  loadingIndicator: "Chỉ báo tải: dùng LoadingIndicator M3 Expressive biến đổi hình dạng khi quay. Bản có vùng chứa nằm trong vòng tròn secondaryContainer.",
  linearProgress: "Tiến trình tuyến tính: dùng độ dày rãnh đã chỉ định (mặc định 4dp), hai đầu tròn và kiểu gợn sóng M3 Expressive khi được chọn. Rãnh là secondaryContainer, tiến trình là primary.",
  circularProgress: "Tiến trình tròn: dùng độ dày rãnh đã chỉ định (mặc định 4dp), hai đầu tròn và kiểu gợn sóng M3 Expressive khi được chọn.",
  splitButton: "Nút chia đôi: dùng M3 Expressive SplitButton. Phần trái là hành động chính, phần mũi tên bên phải mở menu; cách nhau 2dp, góc ngoài tròn hoàn toàn, góc trong 8dp. Khi mở menu, mũi tên xoay và phần nút bo tròn hơn.",
  fabMenu: "Menu FAB: dùng M3 Expressive FloatingActionButtonMenu. Khi đóng là FAB thường; nhấn để các mục lần lượt hiện lên phía trên và biểu tượng FAB đổi thành close. Mỗi mục cao 56dp, bo tròn hoàn toàn, có biểu tượng và nhãn.",
  toolbar: "Thanh công cụ nổi: dùng M3 Expressive HorizontalFloatingToolbar, cao 64dp, bo tròn hoàn toàn, nổi cách đáy 16dp trên nội dung. Standard dùng surfaceContainer, vibrant dùng primaryContainer; nút biểu tượng bên trong 48dp.",
  tabs: "Tab: dùng tab chính M3 cao 48dp, nhãn titleSmall. Tab được chọn dùng chữ primary và chỉ báo 3dp rộng theo nhãn, phía dưới có đường outlineVariant. Nhấn tab để đổi nội dung.",
  radio: "Nút chọn: hình tròn 20dp. Khi chọn có vòng primary và chấm giữa; chưa chọn dùng vòng onSurfaceVariant. Mỗi nhóm chỉ chọn một mục; nhãn bodyLarge ở bên phải.",
  badge: "Huy hiệu: không chữ là chấm 6dp, có chữ là viên cao 16dp. Nền error, chữ onError dùng labelSmall, đặt chồng ở góc trên phải của biểu tượng hoặc mục.",
};

export const VI_FONT_NOTE = (name: string) => `Dùng ${name} làm phông chữ.`;
export const VI_THEME_NOTES = {
  shape: {
    square: "Giảm bo góc trên toàn bộ giao diện: nút và chip khoảng 8–12dp, thẻ và ảnh 8dp, hộp thoại khoảng 12dp; tránh dạng viên.",
    rounded: "Dùng mức bo góc mặc định của M3 Expressive: nút dạng viên, thẻ 20dp, hộp thoại 28dp.",
    full: "Tăng bo góc tối đa: nút, chip và ô nhập dạng viên; thẻ và ảnh 32dp; hộp thoại và sheet khoảng 40dp.",
  },
  emphasized: "Tiêu đề, nhãn nút và tab dùng kiểu chữ nhấn mạnh M3 Expressive với độ đậm cao hơn.",
  plainType: "Kiểu chữ dùng độ đậm tiêu chuẩn của M3.",
  motion: {
    standard: "Chuyển động dùng MotionScheme.standard(): chuyển màn hình và đổi trạng thái mượt, không nảy.",
    expressive: "Chuyển động dùng MotionScheme.expressive(): thêm hiệu ứng lò xo nảy nhẹ khi chuyển màn hình và đổi trạng thái.",
  },
};

export const VI_GENERAL: (string | ((pl: Platform) => string))[] = [
  "Xác định loại ứng dụng từ mục đích của các màn hình và triển khai đầy đủ những chức năng thường có của loại ứng dụng đó như tạo, danh sách, chi tiết, sửa, xóa, tìm kiếm và cài đặt nếu phù hợp, kể cả khi bản phác thảo chưa vẽ hết.",
  (pl) => `Xử lý dữ liệu như dữ liệu thật. Dữ liệu người dùng tạo phải được lưu ${pl === "web" ? "trong trình duyệt bằng IndexedDB hoặc giải pháp tương đương để còn sau khi tải lại" : "trên thiết bị bằng Room, DataStore hoặc giải pháp tương đương để còn sau khi khởi động lại"}. Không chèn dữ liệu giả; khi chưa có dữ liệu thì hiển thị trạng thái trống. Kiểm tra dữ liệu nhập và thông báo hoặc xác nhận phù hợp khi lỗi hay xóa.`,
  "Bổ sung hành vi còn thiếu dựa trên mục đích màn hình và nhãn của thành phần. Nút hoặc mục chưa được chỉ định hành vi vẫn phải thực hiện hành động hợp lý theo nhãn, không được để bấm mà không có phản hồi.",
  "Giữ đúng ý đồ bố cục về thứ tự, nhóm và vị trí tương đối; kích thước và khoảng cách có thể điều chỉnh theo nội dung. Nếu bản phác thảo gây vỡ giao diện trên thiết bị thật, ưu tiên giao diện hoạt động đúng.",
  (pl) => `Dùng các thành phần chuẩn của ${pl === "web" ? "Material Web" : "Jetpack Compose material3 bản mới nhất có Expressive API"}; không tự vẽ lại thành phần mà thư viện đã cung cấp.`,
  "Mọi màu phải tham chiếu qua các vai trò của bảng màu ở trên như primary, surfaceContainer; không hard-code màu.",
  "Dùng lề màn hình 16dp, khoảng cách giữa các thành phần 8–16dp và các kiểu chữ M3 như titleLarge, bodyMedium.",
  "Các thành phần được mô tả là nằm cùng một hàng phải nằm trong một Row duy nhất, không xếp dọc hoặc tự xuống dòng; chiều cao hàng theo thành phần cao nhất và các thành phần còn lại căn giữa dọc.",
  "Các thành phần được mô tả là chồng bên trong một vùng chứa phải được vẽ trên vùng chứa đó bằng bố cục chồng lớp. Không tách hoặc đổi thứ tự chồng lớp; mục mô tả sau nằm phía trước mục mô tả trước.",
  "Thành phần có thể nhấn cần ripple và hiệu ứng thu nhỏ nhẹ. Hành động Quay lại phải phát ngược hiệu ứng chuyển màn hình khi vào; cử chỉ hoặc nút Back của hệ thống cũng làm tương tự.",
  "Biểu tượng dùng Material Symbols Rounded.",
  (pl) => `Không cần xác minh ${pl === "web" ? "trong trình duyệt" : "trên giả lập hoặc thiết bị"}. Khi hoàn tất, ${pl === "web" ? "chạy production build và cung cấp đầu ra" : "tạo APK release đã ký"} làm sản phẩm bàn giao.`,
];

export const VI_STYLE_NOTES_WEB: Partial<Record<Kind, string>> = {
  topAppBar: "Thanh ứng dụng trên: cao 64dp, nền surface. Tiêu đề dùng titleLarge, nút biểu tượng hai bên 48dp; khi cuộn có thể đổi nền sang surfaceContainer.",
  bottomNav: "Thanh điều hướng: cao 80dp, nền surfaceContainer. Mục đang chọn dùng chỉ báo viên secondaryContainer 64×32dp, biểu tượng filled và nhãn labelMedium.",
};

export const VI_PH = {
  screen: "màn hình",
  intro: (title: string, brief: string) => `Hãy triển khai ${title} theo ngôn ngữ thiết kế Material 3 Expressive.${brief ? ` ${brief.trim().replace(/[.\s]+$/, "")}.` : ""}`,
  titleOnly: (name: string) => `màn hình ${name}`,
  titleAll: (n: number) => n > 1 ? "ứng dụng này" : "màn hình này",
  target: (vp: string, pl: Platform, dark: boolean, both: boolean) => {
    const target = vp === "phone" ? "Nhắm tới màn hình điện thoại dọc 412×892dp" : vp === "desktop" ? `Nhắm tới ${pl === "web" ? "khung nhìn trình duyệt máy tính" : "màn hình máy tính bảng ngang"} 1280×800` : vp === "mixed" ? `Hỗ trợ cả điện thoại dọc 412×892 và ${pl === "web" ? "trình duyệt máy tính" : "máy tính bảng ngang"} 1280×800; các màn hình cùng tên là cùng một màn hình ở hai độ rộng và phải đáp ứng responsive` : "Bố cục tự do";
    return `${target}, ${both ? "hỗ trợ cả chế độ sáng và tối theo cài đặt hệ thống" : `chỉ dùng chế độ ${dark ? "tối" : "sáng"}`}.`;
  },
  platform: (pl: Platform) => pl === "web" ? "Nền tảng đích là Web, chạy trong trình duyệt." : "Nền tảng đích là ứng dụng Android gốc.",
  schemeHead: (dark: boolean) => dark ? "Bảng màu tối:" : "Bảng màu sáng:",
  sketch: "Bố cục bên dưới là bản phác thảo để truyền đạt ý đồ, không phải đặc tả thành phẩm. Không sao chép như một ảnh tĩnh; hãy hoàn thiện thành ứng dụng thực sự dùng được với đầy đủ chức năng thường cần của loại sản phẩm này.",
  hColor: "## Màu sắc", hTheme: "## Hình dạng, kiểu chữ và chuyển động", hLayout: "## Bố cục",
  dynamic: (pl: Platform) => pl === "web" ? "Dùng màu động: nếu trình duyệt hoặc hệ điều hành cung cấp màu nhấn của người dùng, dùng màu đó làm seed để tạo bảng màu Material 3; nếu không có thì dùng các màu bên dưới làm dự phòng." : "Dùng màu động: trên Android 12 trở lên áp dụng bảng màu sinh từ hình nền người dùng (dynamicLightColorScheme / dynamicDarkColorScheme); thiết bị không hỗ trợ thì dùng các màu bên dưới làm dự phòng.",
  colorIntro: (label: string, fallback: boolean, th: Theme) => {
    const scheme = `bảng màu Material 3 ${th.bothModes ? "sáng và tối" : th.dark ? "tối" : "sáng"}${th.contrast === "high" ? " tương phản cao" : th.contrast === "medium" ? " tương phản trung bình" : ""}`;
    return `${fallback ? "Chủ đề dự phòng" : "Chủ đề"} thuộc nhóm ${label}. Hãy đặt các màu sau vào ${scheme} và tham chiếu mọi màu UI qua vai trò tương ứng.`;
  },
  empty: "Màn hình chưa có thành phần nào.",
  screens: (names: string[]) => `Có ${names.length} màn hình: ${names.join(", ")}.`,
  placement: (place: string) => place === "center" ? "Các thành phần nội dung được gom ở giữa theo chiều dọc của màn hình." : place === "bottom" ? "Các thành phần nội dung nằm về phía dưới màn hình, phía trên thanh điều hướng." : "Các hàng nội dung được dàn đều theo chiều cao màn hình; nếu chỉ có một hàng thì căn giữa dọc.",
  screenHead: (name: string, bg: string | undefined, has: boolean, size?: string) => `Màn hình ${name}${size || bg ? ` (${[size, bg ? `nền ${bg}` : ""].filter(Boolean).join(", ")})` : ""}${has ? ", từ trên xuống dưới; các phần chồng nhau sẽ được nêu rõ:" : " hiện đang trống."}`,
  loose: "Các thành phần nằm ngoài màn hình (phần dùng chung hoặc tham khảo):",
  freeform: "Mô tả màn hình từ trên xuống dưới:",
  hBehavior: "## Hành vi và điều hướng", hStyle: "## Kiểu của từng thành phần",
  styleIntro: "Hướng dẫn cho các thành phần đang dùng. Các con số là giá trị mặc định M3 Expressive; ưu tiên dùng hành vi sẵn có của thành phần chuẩn và điều chỉnh khi nội dung yêu cầu.",
  hGeneral: "## Nguyên tắc chung",
};
