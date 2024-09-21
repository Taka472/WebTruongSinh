let HeaderData, ChungNhanData, CongTyData;

const serverURL = 'http://localhost:3000';
const apiURL = 'http://localhost:3001';

// Fetch Header Data and update images
const makeAPICall = async () => {
    try {
        const response = await fetch(apiURL + '/api/getHeaderData', { mode: 'cors' });
        HeaderData = await response.json();
        
        document.getElementById('title').src = serverURL + HeaderData[0].hinhAnh;
        document.getElementById('scrollpane').src = serverURL + HeaderData[1].hinhAnh;
    } catch (err) {
        console.error('Error fetching Header Data: ' + err);
    }
};

// Fetch Company Data and update footer info
const fetchCongTyData = async () => {
    try {
        const response = await fetch(apiURL + '/api/getCongTyData', { mode: 'cors' });
        CongTyData = await response.json();
        
        document.getElementById('footerTitle').innerText = CongTyData[0].ten;
        document.getElementById('infoDisplay').innerHTML = `
            <li>Trụ sở: ${CongTyData[0].diaChi}</li>
            <li>Chi nhánh: ${CongTyData[0].chiNhanh}</li>
            <li>Tel: ${CongTyData[0].sdt1} - ${CongTyData[0].sdt2}, Hotline: ${CongTyData[0].hotline}</li>
            <li>Giấy phép kinh doanh số: ${CongTyData[0].giayPhepKinhDoanh}</li>
            <li>Copyright 2018 © Bản quyền thuộc về Công ty</li>
        `;
    } catch (err) {
        console.log('Error fetching Cong Ty Data: ' + err);
    }
};

makeAPICall();
fetchCongTyData();

// Sidebar Menu Controls
document.addEventListener('DOMContentLoaded', function () {
    var sideMenu = document.getElementById('sideMenu');
    var menu = document.getElementById('menu');
    var close = document.getElementById('closeSideMenu');

    menu.onclick = () => {
        sideMenu.style.width = '45%';
        sideMenu.style.padding = '20px';
    };

    close.onclick = () => {
        sideMenu.style.width = '0%';
    };
});

// Pagination Controls
let currentPage = 1;
const imagesPerPage = 6;
let totalPages;

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

const FetchChungNhanData = async() => {
    await fetch(apiURL + '/api/getChungNhanData', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            ChungNhanData = data;
            return ChungNhanData
        })
        .then(() => {
            totalImages = ChungNhanData.length;
            totalPages = Math.ceil(totalImages / imagesPerPage);
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
        })
}
//Tự động điều chỉnh số lượng trang theo số lượng giấy chứng nhận


//Tự động lấy dữ liệu cho trang hiện tại
async function fillTable(page) {
    const tableBody = document.querySelector('#certiTable tbody');
    tableBody.innerHTML = '';

    try {
        await fetch(apiURL + '/api/getChungNhanData', {mode: 'cors'})
        .then (response => response.json())
        .then(data => {
            ChungNhanData = data;
            return ChungNhanData;
        })
        .then (() => {
            const startIndex = (page - 1) * imagesPerPage;
            const endIndex = Math.min(startIndex + imagesPerPage, ChungNhanData.length);

            ChungNhanData.forEach((item, index) => {
                if (index >= startIndex && index < endIndex) {
                    if (index % 2 === 0) {
                        row = document.createElement('tr');
                        row.id = index;
                        tableBody.appendChild(row);
                    }

                    var cell = document.createElement('td');
                    var image = document.createElement('img');
                    image.src = item.hinhAnh;
                    image.classList.add('certi');
                    cell.appendChild(image);

                    var tenParagraph = document.createElement('p');
                    tenParagraph.textContent = item.ten;
                    cell.appendChild(tenParagraph);

                    console.log(document.getElementById(index))
                    row.appendChild(cell);
                }
            });
        })

        var pageItem = $(".pagination li").not(".prev,.next");
        var prev = $(".pagination li.prev");
        var next = $(".pagination li.next");

        if (page === 1) {
            prev.hide();
            next.show();
        } else if (page === totalPages) {
            next.hide();
            prev.show();
        } else {
            $(".pagination li").show();
        }

        pageItem.removeClass('active');
        pageItem.eq(page - 1).addClass('active');
    } catch (e) {
        console.log(e);
    }
}

FetchChungNhanData()

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
//Điều hướng sang trang bất kỳ
function goToPage(pageNumber) {
    currentPage = pageNumber; 
    fillTable(currentPage);
}
