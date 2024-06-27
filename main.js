let myBank = new Bank("Tung's Bank");
function addSoTietKiem() {
    let idCust = document.getElementById("idCust").value;
    let typeCust = document.getElementById("typeCust").value;
    let nameCust = document.getElementById("nameCust").value;
    let cmdCust = document.getElementById("cmdCust").value;
    let dateCust = document.getElementById("dateCust").value;
    let amount = document.getElementById("amount").value;
    if (!validate(idCust, typeCust, nameCust)) {
        return;
    }
    if(!isValidDate(dateCust)){
        return;
    }
    let newSoTietKiem = new soTietKiem(idCust, typeCust, nameCust, cmdCust, dateCust, amount);
    myBank.addSoTietKiem(newSoTietKiem);
    showAll();
    resetForm();
}

function isValidDate(dateString){
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if (!pattern.test(dateString)) {
        alert("Ngày tháng không đúng định dạng DD/MM/YYYY!");
        return false;
    }

    let datePart = dateString.split("/");
    let day = parseInt(datePart[0]) ;
    let month = parseInt(datePart[1]) ;
    let year = parseInt(datePart[2]);

    if(year < 1000 || year > 9999){
        alert("Năm không hợp lê!");
        return false;
    }
    
    if(month<0 || month>12){
        alert("Tháng không hợp lệ");
        return false;
    }

    let dayInMonth = new Date(year, month, 0).getDate();
    if(day === 0 || day > dayInMonth){
        alert("Ngày không hợp lệ!");
        return false;
    }
    return true;
}

function removeSoTietKiem(index){
    let isConfirm = confirm("Bạn có chắc chắn muốn xóa không?");
    if(isConfirm){
        myBank.removeSoTietKiem(index);
    }
    showAll();
}

function showAll() {
    let list = myBank.listBank;
    let strHTML = `
        <tr>
            <th>Mã số</th>
            <th>Loại tiết kiệm</th>
            <th>Tên khách hàng</th>
            <th>Chứng minh nhân dân</th>
            <th>Ngày mở sổ</th>
            <th>Số tiền</th>
            <th>Hành động</th>
        </tr>
    `;
    
    for(let i = 0; i < list.length; i++){
        strHTML += `
        <tr>
            <td>${list[i].idCust}</td>
            <td>${list[i].typeCust}</td>
            <td>${list[i].nameCust}</td>
            <td>${list[i].cmdCust}</td>
            <td>${list[i].dateCust}</td>
            <td>${list[i].amount}</td>
            <td><button class="btn btn-remove" onclick="removeSoTietKiem(${i})">Xóa</button></td>
        </tr>
        `
    }
    document.getElementById("list").innerHTML = strHTML;
}

function validate(id, type, name) {
    if (id.length > 5) {
        alert("Mã số tối đa 5 kí tự!");
        return false;
    } else if (id === "") {
        alert("Mã số không được để trống!");
        return false;
    }

    if (type.length > 10) {
        alert("Loại toại kiệm tối đa 10 kí tự!");
        return false;
    } else if (type === "") {
        alert("Loại tiết kiệm không được để trống!");
    }

    if (name.length > 30) {
        alert("Tên khách hàng tối đa 30 kí tự!");
        return false;
    } else if (name === "") {
        alert("Tên khách hàng không được để trống");
    }
    return true;
}

function resetForm(){
    document.getElementById("idCust").value = "";
    document.getElementById("typeCust").value = "";
    document.getElementById("nameCust").value = "";
    document.getElementById("cmdCust").value = "";
    document.getElementById("dateCust").value = "";
    document.getElementById("amount").value = "";
}