# Web Trường Sinh
## Setup file để code
Trong 1 trang nên có tối thiếu 1 file *.js* để có thể lấy được data từ file *Data*  
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
Sau đó để file *script* của mình bên dưới file script chứa data  
![](Data_(DO_NOT_DELETE)/Image/DemoCode3.png)  
Khi đó khi qua bên file *.js* của trang có thể gọi được data *(data lấy từ file tên gì thì data cũng sẽ tên đó)*  
![](Data_(DO_NOT_DELETE)/Image/DemoCode2.png)

## Thông tin về các file *Data*
Trong các file Data sẽ chứa 1 mảng các Object  
Các Object sẽ chứa thông tin của một đối tượng  
Để lấy ra từng Object, có thể chạy vòng *for* hoặc dùng *forEach*  
Còn nếu muốn lấy một thông tin cụ thể trong các Object, có thể dùng cú pháp *<Tên Object>.<Tên Trường>*

## Trước khi code
Kéo code từ Github về để cập nhật code của các trang khác  

## Khi code
Xong phần nào thì nên đẩy lên github  
**Không** nên sửa code của các trang mà mình không đảm nhận

## Cách lấy đoạn code nhúng trên Google Map
Vào Goolge Map tìm kiếm đến địa chỉ muốn lấy  
![](/Data_(DO_NOT_DELETE)/Image/GoogleMap.png)  
Bấm vào **Chia sẻ -> Nhúng bản đồ -> Sao chép HTML**
![](Data_(DO_NOT_DELETE)/Image/GoogleMapCode.png)