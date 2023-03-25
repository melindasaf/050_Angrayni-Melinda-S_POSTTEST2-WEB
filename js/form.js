// Mendapatkan data array dari session storage
let dataArray = JSON.parse(sessionStorage.getItem("formDataArray"));

// Mengecek apakah dataArray tidak kosong
if (dataArray && dataArray.length > 0) {
  // Membuat tabel untuk menampilkan data array
  let table = document.createElement("table");
  let headerRow = table.insertRow();
  let headers = ["Nama", "Birth", "Email", "Jenis Kelamin", "No. Hp", "Domisili", "Tujuan Diet", "Riwayat Penyakit", "Pantangan & Alergi"];

  // Membuat header tabel
  headers.forEach(function(header) {
    let headerCell = headerRow.insertCell();
    headerCell.innerHTML = header;
  });

  // Memasukkan data ke dalam tabel
  dataArray.forEach(function(data) {
    let row = table.insertRow();
    let nameCell = row.insertCell();
    let birthCell = row.insertCell();
    let emailCell = row.insertCell();
    let genderCell = row.insertCell();
    let phoneCell = row.insertCell();
    let cityCell = row.insertCell();
    let interestsCell = row.insertCell();
    let riwayatCell = row.insertCell();
    let alergiCell = row.insertCell();

    nameCell.innerHTML = data.name;
    birthCell.innerHTML = data.birth;
    emailCell.innerHTML = data.email;
    genderCell.innerHTML = data.gender;
    phoneCell.innerHTML = data.phone;
    cityCell.innerHTML = data.city;
    interestsCell.innerHTML = data.interests.join(", ");
    riwayatCell.innerHTML = data.riwayat.join(", ");
    alergiCell.innerHTML = data.alergi;
  });


  // Memasukkan tabel ke dalam halaman HTML
  let container = document.getElementById("dataContainer");
  container.appendChild(table);
} else {
  // Jika dataArray kosong, tampilkan pesan bahwa tidak ada data yang tersimpan
  let container = document.getElementById("dataContainer");
  container.style.fontFamily = "Nunito, sans-serif";
  container.style.fontSize = "24px";
  container.style.textAlign = "center";
  container.innerHTML = "Kamu Tidak Memiliki Permintaan Terkirim";
}