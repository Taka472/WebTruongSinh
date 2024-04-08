CREATE DATABASE WebTruongSinh ON
(NAME = WebTruongSinh,
FILENAME = 'D:\WebTruongSinh\DatabaseScript\WebTruongSinh_data.mdf',
SIZE = 10MB,
MAXSIZE = 50MB,
FILEGROWTH = 5
) LOG ON (
NAME = WebTruongSinh_log,
FILENAME = 'D:\WebTruongSinh\DatabaseScript\WebTruongSinh_data.ndf',
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
hotline char(11),
email varchar(30),
website varchar(30),
giayPhepKinhDoanh varchar(15)
)

alter table CongTyData alter column hotline nvarchar(20)

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

insert into HeaderData ([ten], [headerType], [hinhAnh])
select 'header binh thuong', 'header', * from openrowset(bulk 'D:\WebTruongSinh\Data_(DO_NOT_DELETE)\Image\Title.png', single_blob) image

insert into HeaderData values ('header binh thuong', 'public/Title.png', 'header', 'true')

select * from HeaderData as picture
update HeaderData set selected = 'true' where id=1;
drop table HeaderData

select * from CongTyData