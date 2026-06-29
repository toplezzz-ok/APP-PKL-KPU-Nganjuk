fetch(API_URL + "?action=getKeluar")
  .then(res => res.json())
  .then(data => {

    let html = "";

    if (data.length == 0) {

      html = `
      <tr>
        <td colspan="6">Belum ada surat keluar</td>
      </tr>
      `;

    } else {

      data.forEach((item, index) => {

        html += `
        <tr>

          <td>${index + 1}</td>

          <td>${item[1]}</td>

          <td>${formatTanggal(item[2])}</td>

          <td>${item[3]}</td>

          <td>${item[4]}</td>

          <td>

            <button onclick="lihat('${item[6]}')">👁</button>

            <button onclick="edit('${item[0]}')">✏️</button>

            <button onclick="hapus('${item[0]}')">🗑️</button>

          </td>

        </tr>
        `;

      });

    }

    document.getElementById("tbody").innerHTML = html;

  });

function formatTanggal(tanggal){

  if(!tanggal) return "-";

  let d = new Date(tanggal);

  return d.toLocaleDateString("id-ID");

}

function lihat(link){

  if(link==""){

    alert("Belum ada file.");

    return;

  }

  window.open(link);

}

function edit(id){

  alert("Edit Surat Keluar ID : "+id);

}

function hapus(id){

  if(confirm("Yakin ingin menghapus surat ini?")){

    alert("Nanti kita sambungkan ke Google Sheet.");

  }

}