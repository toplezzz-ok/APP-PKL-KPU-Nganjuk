async function loadSurat() {
  try {
    const response = await fetch(API_URL + "?action=getMasuk");
    const data = await response.json();

    let html = "";

    if (data.length == 0) {
      html = `
      <tr>
      <td colspan="6">
      Belum ada data
      </td>
      </tr>`;
    } else {
      data.forEach((item, index) => {
        html += `
        <tr>

        <td>${index + 1}</td>

        <td>${item[1]}</td>

        <td>${item[2]}</td>

        <td>${item[3]}</td>

        <td>${item[4]}</td>

        <td>

        <button>👁</button>

        <button>✏️</button>

        <button>🗑️</button>

        </td>

        </tr>`;
      });
    }

    document.getElementById("tbody").innerHTML = html;
  } catch (e) {
    document.getElementById("tbody").innerHTML = `

    <tr>

    <td colspan="6">

    Tidak dapat terhubung ke Google Spreadsheet

    </td>

    </tr>`;
  }
}

loadSurat();
