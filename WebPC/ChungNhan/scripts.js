let currentPage = 1;
const imagesPerPage = 6;

//Tự động active button của trang hiện tại
function activePagination() {
    var pageItem = $(".pagination li").not(".prev,.next");
    var prev = $(".pagination li.prev");
    var next = $(".pagination li.next");

    pageItem.click(function() {
        pageItem.removeClass("active");
        $(this).not(".prev,.next").addClass("active");
    });
        
    next.click(function() {
        var activePage = $('li.active');
        var nextPage = activePage.nextAll(":not(.next)").first();
        activePage.removeClass('active');
        nextPage.addClass('active');
    });
    
    prev.click(function() {
        var activePage = $('li.active');
        var prevPage = activePage.prevAll(":not(.prev)").first();
        activePage.removeClass('active');
        prevPage.addClass('active');
    });
}

//Tự động điều chỉnh số lượng trang theo số lượng giấy chứng nhận
let totalImages = ChungNhanData.length;
let totalPages = Math.ceil(totalImages / imagesPerPage);
function createPaginationButtons() {
    let prevButton = document.createElement('li');
    prevButton.classList.add('page-item', 'prev');
    let prevLink = document.createElement('button');
    prevLink.classList.add('page-link');
    prevLink.addEventListener('click', previousPage);
    prevLink.innerHTML = '<span aria-hidden="true">&lsaquo;</span><span class="sr-only">Previous</span>';
    prevButton.appendChild(prevLink);
    document.getElementById("paginationList").appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        let pageButton = document.createElement('li');
        pageButton.classList.add('page-item');
        let pageLink = document.createElement('button');
        pageLink.classList.add('page-link');
        pageLink.textContent = i;
        pageLink.addEventListener('click', function() {
            goToPage(i);
        });
        pageButton.appendChild(pageLink);
        document.getElementById("paginationList").appendChild(pageButton);
    }

    let nextButton = document.createElement('li');
    nextButton.classList.add('page-item', 'next');
    let nextLink = document.createElement('button');
    nextLink.classList.add('page-link');
    nextLink.addEventListener('click', nextPage);
    nextLink.innerHTML = '<span aria-hidden="true">&rsaquo;</span><span class="sr-only">Next</span>';
    nextButton.appendChild(nextLink);
    document.getElementById("paginationList").appendChild(nextButton);

    $(document).ready(function() {
        activePagination();
    });
}
createPaginationButtons();

//Tự động lấy dữ liệu cho trang hiện tại
function fillTable(page) {
    const tableBody = document.querySelector('#certiTable tbody');
    tableBody.innerHTML = '';

    const startIndex = (page - 1) * imagesPerPage;
    const endIndex = Math.min(startIndex + imagesPerPage, ChungNhanData.length);

    for (let i = startIndex; i < endIndex; i++) {
        if (i % 3 === 0) {
            var row = document.createElement('tr');
            tableBody.appendChild(row);
        }

        var cell = document.createElement('td');
        var image = document.createElement('img');
        image.src = ChungNhanData[i].hinhAnh;
        image.classList.add('certi');
        cell.appendChild(image);

        var tenParagraph = document.createElement('p');
        tenParagraph.textContent = ChungNhanData[i].ten;
        cell.appendChild(tenParagraph);

        row.appendChild(cell);
    }
    
    var pageItem = $(".pagination li").not(".prev,.next");
    var prev = $(".pagination li.prev");
    var next = $(".pagination li.next");

    if(page == 1) {
        prev.hide();
        next.show();
    } 
    else if(page == pageItem.length) {
        next.hide();
        prev.show();
    }
    else {
        $(".pagination li").show();
    }

    pageItem.eq(page - 1).addClass('active');
}

//Tự động lấy dữ liệu chứng nhận cho trang tương ứng
fillTable(currentPage);

//Điều hướng sang trang tiếp theo
function nextPage() {
    currentPage++;
    fillTable(currentPage); 
}
//Điều hướng sang trang phía trước
function previousPage() {
    currentPage--;
    fillTable(currentPage); 
}
//Điều hướng sang trang bất kỳs
function goToPage(pageNumber) {
    currentPage = pageNumber; 
    fillTable(currentPage);
}

document.getElementById("title").src = HeaderData[0].hinhAnh
document.getElementById("scrollpane").src = HeaderData[1].hinhAnh

document.getElementById("firstCer").src = ChungNhanData[0].hinhAnh
document.getElementById("secondCer").src = ChungNhanData[1].hinhAnh

document.getElementById("footerTitle").innerText = CongTyData.ten
document.getElementById("infoDisplay").innerHTML += "<li>Trụ sở: " + CongTyData.diaChi;
document.getElementById("infoDisplay").innerHTML += "<li>Chi nhánh: " + CongTyData.chiNhanh;
document.getElementById("infoDisplay").innerHTML += "<li>Tel: " + CongTyData.sdt[0] + " - " + CongTyData.sdt[1] + " Hotline: " + CongTyData.hotline;
document.getElementById("infoDisplay").innerHTML += "<li>Giấy phép kinh doanh số: " + CongTyData.giayPhepKinhDoanh;
document.getElementById("infoDisplay").innerHTML += "<li>Copyright 2018 © Bản quyền thuộc về Công ty"
