CREATE DATABASE WebTruongSinh ON
(NAME = WebTruongSinh,
FILENAME = 'D:\Database_WebTruongSinh\WebTruongSinh_data.mdf',
SIZE = 10MB,
MAXSIZE = 50MB,
FILEGROWTH = 5
) LOG ON (
NAME = WebTruongSinh_log,
FILENAME = 'D:\Database_WebTruongSinh\WebTruongSinh_data.ndf',
SIZE = 5MB,
MAXSIZE = 10MB,
FILEGROWTH = 5
)

use WebTruongSinh

Create table CongTyData (
id int primary key not null,
ten nvarchar(100),
diaChi nvarchar(200),
chiNhanh nvarchar(200),
sdt1 char(11),
sdt2 char(11),
hotline char(20),
email varchar(30),
website varchar(30),
giayPhepKinhDoanh varchar(15)
)

-- Insert cong ty data
insert into CongTyData values (1, N'CÔNG TY TNNHH SẢN XUẤT THƯƠNG MẠI XÂY DỤNG TRƯỜNG SINH', N'1/93B Nguyễn Văn Quá, Phường Đông Hưng Thuận, Quận 12, Tp.HCM'
, N'218 Quốc lộ 22, Ấp Bàu Tre 2, Xã Tân AN Hội, Huyện Củ Chi, HCM', '(028) 3715 0225', '(028) 6259 1121', '0933223988', 'sonnuchieusuong@gmail.com',
'bottretmastictruongsinh.com.vn', '0302080756')

select * from CongTyData
update CongTyData set hotline = N'0933223988' where id = 1

Create table HeaderData (
id int primary key not null identity(1, 1),
ten varchar(100),
hinhAnh varchar(100),
headerType varchar(20),
selected nvarchar(5)
)

create table ChungNhanData (
id int primary key not null identity(1, 1),
ten nvarchar(50),
hinhAnh varchar(100),
)

create table CongTrinhTieuBieu (
id int primary key not null identity(1, 1),
hinhAnh varchar(100)
)

create table SanPhamData (
id int primary key not null identity(1, 1),
ten nvarchar(30),
baoHanh nvarchar(20),
loai nvarchar(30),
hinhAnh nvarchar(100)
)

insert into HeaderData values ('header binh thuong', 'public/Title.png', 'header', 'true')
insert into HeaderData values ('scroll banner', '/Image/ScrollPanel.png', 'scroll', 'true')

select * from CongTyData

use WebTruongSinh
select * from HeaderData

update HeaderData set hinhAnh = '/Image/Title.png' where id = 1

insert into ChungNhanData values (N'CNISO9001', '/Image/CNISO9001.png')
insert into ChungNhanData values (N'CNTCVN_VN', '/Image/CNTCVN_VN.png')
insert into ChungNhanData values (N'CNTCVN_EN', '/Image/CNTCVN_EN.png')
insert into ChungNhanData values (N'CN219779', '/Image/CN219779.png')
insert into ChungNhanData values (N'CN219780', '/Image/CN219780.png')
insert into ChungNhanData values (N'CN54080', '/Image/CN54080.png')
insert into ChungNhanData values (N'ĐĂNG KÝ NHÃN HIỆU MASTER', '/Image/MASTER.png')
insert into ChungNhanData values (N'ĐĂNG KÝ NHÃN HIỆU NANOL', '/Image/NANOL.png')
insert into ChungNhanData values (N'QUYẾT ĐỊNH TIÊU CHUẨN KỸ THUẬT', '/Image/TECH.png')
insert into ChungNhanData values (N'ĐĂNG KÝ NHÃN HIỆU KEENE', '/Image/KEENE.png')

insert into CongTrinhTieuBieu values ('/Image/1.png')
insert into CongTrinhTieuBieu values ('/Image/2.png')
insert into CongTrinhTieuBieu values ('/Image/3.png')
insert into CongTrinhTieuBieu values ('/Image/4.png')
insert into CongTrinhTieuBieu values ('/Image/5.png')
insert into CongTrinhTieuBieu values ('/Image/6.png')
insert into CongTrinhTieuBieu values ('/Image/7.png')
insert into CongTrinhTieuBieu values ('/Image/8.png')
insert into CongTrinhTieuBieu values ('/Image/9.png')
insert into CongTrinhTieuBieu values ('/Image/10.png')
insert into CongTrinhTieuBieu values ('/Image/11.png')
insert into CongTrinhTieuBieu values ('/Image/12.png')
insert into CongTrinhTieuBieu values ('/Image/13.png')
insert into CongTrinhTieuBieu values ('/Image/14.png')
insert into CongTrinhTieuBieu values ('/Image/15.png')
insert into CongTrinhTieuBieu values ('/Image/16.png')
insert into CongTrinhTieuBieu values ('/Image/17.png')

insert into SanPhamData values (N'Big One', null, N'bột trét tường', N'/Image/BigOne.png')
insert into SanPhamData values (N'Kenee', null, N'bột trét tường', N'/Image/Kenee.png')
insert into SanPhamData values (N'Lucky', null, N'bột trét tường', N'/Image/Lucky.png')
insert into SanPhamData values (N'Master Lite', null, N'bột trét tường', N'/Image/MasterLite.png')
insert into SanPhamData values (N'Ruby', null, N'bột trét tường', N'/Image/Ruby.png')
insert into SanPhamData values (N'Vigen Lite', null, N'bột trét tường', N'/Image/VigenLite.png')
insert into SanPhamData values (N'Viogen', null, N'bột trét tường', N'/Image/Viogen.png')
insert into SanPhamData values (N'Viogen Nội Thất', N'6 năm', N'bột trét tường', N'/Image/ViogenNộiThất.png')
insert into SanPhamData values (N'Viogen Ngoại Thất', N'4 năm', N'bột trét tường', N'/Image/ViogenNgoạiThất.png')
insert into SanPhamData values (N'Ruby Nội Thất', null, N'bột trét tường', N'/Image/RubyNộiThất.png')

--------------------------------------------------------------------------------------------------

insert into SanPhamData values (N'Ruby Ngoại Thất', null, N'bột trét tường', N'/Image/RubyNgoạiThất.png')
insert into SanPhamData values (N'Big One Nội Thất', null, N'bột trét tường', N'/Image/BigOneNộiThất.png')
insert into SanPhamData values (N'Big One Ngoại Thất', null, N'bột trét tường', N'/Image/BigOne.png')
insert into SanPhamData values (N'Vigen Lite Nội Thất', null, N'bột trét tường', N'/Image/VigenLiteNộiThất.png')
insert into SanPhamData values (N'Vigen Lite Ngoại Thất', null, N'bột trét tường', N'/Image/VigenLiteNgoạiThất.png')
insert into SanPhamData values (N'Master Lite Nội Thất', null, N'bột trét tường', N'/Image/MasterLiteNộiThất.png')
insert into SanPhamData values (N'Master Lite Ngoại Thất', null, N'bột trét tường', N'/Image/MasterLiteNgoạiThất.png')
insert into SanPhamData values (N'Kenee Nội Thất', null, N'bột trét tường', N'/Image/KeneeNộiThất.png')
insert into SanPhamData values (N'Kenee Ngoại Thất', null, N'bột trét tường', N'/Image/KeneeNgoạiThất.png')
insert into SanPhamData values (N'Lucky Nội Thất', N'5 năm', N'bột trét tường', N'/Image/LuckyNộiThất.png')

--------------------------------------------------------------------------------------------------


insert into SanPhamData values (N'Lucky Ngoại Thất', N'3 năm', N'bột trét tường', N'/Image/LuckyNgoạiThất.png')
insert into SanPhamData values (N'Gold Nội Thất', N'4 năm', N'bột trét tường', N'/Image/GoldNộiThất.png')
insert into SanPhamData values (N'Gold Ngoại Thất', N'2 năm', N'bột trét tường', N'/Image/GoldNgoạiThất.png')
insert into SanPhamData values (N'Simon Nội Thất', N'4 năm', N'bột trét tường', N'/Image/SimonNộiThất.png')
insert into SanPhamData values (N'Simon Ngoại Thất', N'2 năm', N'bột trét tường', N'/Image/SimonNgoạiThất.png')
insert into SanPhamData values (N'Ogen Nội Thất', N'4 năm', N'bột trét tường', N'/Image/OgenNộiThất.png')
insert into SanPhamData values (N'Ogen Ngoại Thất', N'2 năm', N'bột trét tường', N'/Image/OgenNgoạiThất.png')
insert into SanPhamData values (N'Danton Nội Thất', N'4 năm', N'bột trét tường', N'/Image/DantonNộiThất.png')
insert into SanPhamData values (N'Danton Ngoại Thất', N'2 năm', N'bột trét tường', N'/Image/DantonNgoạiThất.png')
insert into SanPhamData values (N'Nanofa Nội Thất', null, N'bột trét tường', N'/Image/NanofaNộiThất.png')

--------------------------------------------------------------------------------------------------

insert into SanPhamData values (N'Nanofa Ngoại Thất', null, N'bột trét tường', N'/Image/NanofaNgoạiThất.png')
insert into SanPhamData values (N'Fostar Nội Thất', null, N'bột trét tường', N'/Image/FostarNộiThất.png')
insert into SanPhamData values (N'Fostar Ngoại Thất', null, N'bột trét tường', N'/Image/FostarNgoạiThất.png')
insert into SanPhamData values (N'Master Nội Thất', N'4 năm', N'bột trét tường', N'/Image/MasterNộiThất.png')
insert into SanPhamData values (N'Master Ngoại Thất', N'2 năm', N'bột trét tường', N'/Image/MasterNgoạiThất.png')
insert into SanPhamData values (N'Valtex Nội Thất', N'4 năm', N'bột trét tường', N'/Image/ValtexNộiThất.png')
insert into SanPhamData values (N'Valtex Ngoại Thất', N'2 năm', N'bột trét tường', N'/Image/ValtexNgoạiThất.png')
insert into SanPhamData values (N'Vigen Nội Thất', N'4 năm', N'bột trét tường', N'/Image/VigenNộiThất.png')
insert into SanPhamData values (N'Vigen Ngoại Thất', N'2 năm', N'bột trét tường', N'/Image/VigenNgoạiThất.png')
insert into SanPhamData values (N'Emperor Nội Thất', N'7 năm', N'bột trét tường', null)

--------------------------------------------------------------------------------------------------


insert into SanPhamData values (N'Emperor Ngoại Thất', N'5 năm', N'bột trét tường', null)

select * from SanPhamData

create table TinTucData (
id int primary key not null identity(1, 1),
hinhAnh nvarchar(100),
tieuDe nvarchar(100),
nhanDe nvarchar(100),
noiDungHinhAnh nvarchar(100),
noiDungText nvarchar(1000),
)

insert into TinTucData values (N'/Image/New1.png', N'KẾ TOÁN TỔNG HỢP', N'Tuyển kế toán tổng hợp làm việc tại thành phố Hồ Chí Minh.', N'/Image/New1.1.png', null)
insert into TinTucData values (N'/Image/New2.png', N'NHÂN VIÊN THỊ TRƯỜNG, MARKETING', N'Tuyển nhân viên thị trường, tiếp thị 5 người', N'/Image/New2.1.png', null)

select * from TinTucData

create table FormCuaNguoiDung (
id int primary key not null identity(1, 1),
hoTen nvarchar(40),
diaChi nvarchar(100),
sdt varchar(10),
email varchar(30),
chuDe nvarchar(30),
noiDung nvarchar(200)
)

select * from FormCuaNguoiDung
DBCC CHECKIDENT ('[FormCuaNguoiDung]', RESEED, 0);
GO
delete from FormCuaNguoiDung

insert into FormCuaNguoiDung values (N'Huy', N'Quanh day', '0123456789', 'demo@gmail.com', 'testAPI', 'data nay sinh ra de test API', GetDate())

alter table FormCuaNguoiDung add NgaySubmit Date default(GetDate())
alter table FormCuaNguoiDung add constraint df_date default GetDate() for NgaySubmit

select * from HeaderData
select * from SanPhamData

insert into FormCuaNguoiDung (hoTen, diaChi, sdt, email, chuDe, noiDung) values (N'Huy', 'Quanh day', '0123456789', 'demo@gmail.com', 'test API', 'create to test API')

delete from ChungNhanData where id >= 11

select * from SanPhamData where BaoHanh is not null

create table TaiKhoan (
id int primary key not null identity(1, 1),
username nvarchar(100),
password nvarchar(100),
)

insert TaiKhoan values ('123', '$2a$12$rIJe6ofXi9036DmMe0IQUOMr9E/f706oXueDgQj/CjHoCs.zZHv0O')

delete from HeaderData where id=4
DBCC CHECKIDENT ('[HeaderData]', RESEED, 0);
GO