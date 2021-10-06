import { DocSo3ChuSo } from "../CalculateForm";

test("Kiểm tra hàm đọc số 3 chữ số", () => {
  expect(DocSo3ChuSo(123)).toBe("một trăm hai mươi ba");
});

test("Kiểm tra hàm đọc số 3 chữ số", () => {
  expect(DocSo3ChuSo(456)).toBe("bốn trăm năm mươi sáu");
});

test("Kiểm tra hàm đọc số 3 chữ số", () => {
  expect(DocSo3ChuSo(12)).toBe("mười hai");
});

test("Kiểm tra hàm đọc số 3 chữ số", () => {
  expect(DocSo3ChuSo(9)).toBe("chín");
});

test("Kiểm tra hàm đọc số 3 chữ số", () => {
  expect(DocSo3ChuSo(1000)).toBe("một nghìn");
});

test("Kiểm tra hàm đọc số 3 chữ số", () => {
  expect(DocSo3ChuSo(0)).toBe("không");
});
