let currentPage = 1; // Track the current page number
const imagesPerPage = 6; // Number of images per page

// Function to fill the table with images and corresponding "ten" values based on the current page
function fillTable(page) {
    const tableBody = document.querySelector('#certiTable tbody');
    tableBody.innerHTML = ''; // Clear previous table content

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
        image.classList.add('certi'); // Apply the certi class for styling
        cell.appendChild(image);

        // Create <p> element for "ten" value
        var tenParagraph = document.createElement('p');
        tenParagraph.textContent = ChungNhanData[i].ten;
        cell.appendChild(tenParagraph);

        row.appendChild(cell);
    }
}

// Function to handle the "Next" button click
function nextPage() {
    currentPage++;
    if (currentPage > 3) { // Assuming there are 3 pages in total, update the condition accordingly
        currentPage = 1; // Reset to the first page if exceeds total pages
    }
    fillTable(currentPage); // Update the table content
}

// Function to handle the "Previous" button click (optional)
function previousPage() {
    currentPage--;
    if (currentPage < 1) { // Assuming there are 3 pages in total, update the condition accordingly
        currentPage = 3; // Set to the last page if below the first page
    }
    fillTable(currentPage); // Update the table content
}

// Initially fill the table with content for the first page
fillTable(currentPage);

// Function to handle clicking on pagination links
function goToPage(pageNumber) {
    currentPage = pageNumber; // Update the currentPage variable
    fillTable(currentPage); // Update the table content for the selected page
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
