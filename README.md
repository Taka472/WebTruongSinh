# Web Trường Sinh
## Setup file để code
Trong 1 trang nên có tối thiếu 1 file *.js* để có thể lấy được data từ file *Data/SanPhamData.js*  
Cấu trúc file sẽ bao gồm 1 file *.html*, với 1 file *.js* (có thể có thêm 1 file *.css*)  
**KHÔNG** được sửa file *Data* vì data sẽ dùng chung cho các trang  

## Lưu ý khi code  
Trên các trang sẽ có các thông tin liên quan đến Data  
Các thông tin đó bao gồm:  
- Sản phẩm *(trong sản phẩm đã có sẵn thông tin bảo hành)*
- Chứng nhận
- Tin tức
- Công trình tiêu biểu
- Google Map  

Khi code các trang này, phải lấy data từ file *Data/SanPhamData.js* để hiển thị lên màn hình *(sử dụng js để truy cập đến data)*  
Google Map thì có thể lên trang Google Map để lấy về đoạn code nhúng để đem vào file *.html*

## Cách để sử dụng được data từ file *Data*
Ở dòng cuối của file *.html*, khai báo thêm một thẻ **script** lấy nguồn là 1 trong các file *(ở đây anh lấy ví dụ là file SanPhamData.js)*
![](Data_(DO_NOT_DELETE)/Image/DemoCode.png)  
Khi đó khi qua bên file *.js* của trang có thể gọi được data *(data lấy từ file tên gì thì data cũng sẽ tên đó)*  
![](Data_(DO_NOT_DELETE)/Image/DemoCode2.png)

## Trước khi code
Kéo code từ Github về để cập nhật code của các trang khác  

## Khi code
Xong phần nào thì nên đẩy lên github  
**Không** nên sửa code của các trang mà mình không đảm nhận