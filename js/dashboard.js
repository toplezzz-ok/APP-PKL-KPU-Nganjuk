async function loadDashboard() {
  const res = await fetch(API_URL + "?action=dashboard");

  const data = await res.json();

  document.getElementById("masuk").innerHTML = data.suratMasuk;

  document.getElementById("keluar").innerHTML = data.suratKeluar;

  document.getElementById("hariini").innerHTML = new Date().getDate();
}

async function loadTerbaru() {
  const res = await fetch(API_URL + "?action=terbaru");

  const data = await res.json();

  let html = "";

  if (data.length == 0) {
    html = `
<tr>

<td colspan="4">

Belum ada data

</td>

</tr>
`;
  } else {
    data.forEach((item) => {
      html += `

<tr>

<td>${item[1]}</td>

<td>${item[2]}</td>

<td>${item[3]}</td>

<td>${item[4]}</td>

</tr>

`;
    });
  }

  document.getElementById("suratTerbaru").innerHTML = html;
}

loadDashboard();

loadTerbaru();
