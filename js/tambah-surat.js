async function simpanSurat() {

    const jenis = document.getElementById("jenis").value;
    const nomor = document.getElementById("nomor").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const pengirim = document.getElementById("pengirim").value.trim();
    const perihal = document.getElementById("perihal").value.trim();
    const keterangan = document.getElementById("keterangan").value.trim();

    if (nomor === "" || tanggal === "" || pengirim === "" || perihal === "") {
        alert("⚠ Lengkapi semua data!");
        return;
    }

    let action = "";

    if (jenis === "Surat Masuk") {
        action = "tambahMasuk";
    } else {
        action = "tambahKeluar";
    }

    const url =
        API_URL +
        "?action=" + action +
        "&nomor=" + encodeURIComponent(nomor) +
        "&tanggal=" + encodeURIComponent(tanggal) +
        "&pengirim=" + encodeURIComponent(pengirim) +
        "&perihal=" + encodeURIComponent(perihal) +
        "&keterangan=" + encodeURIComponent(keterangan);

    try {

        const response = await fetch(url);

        const hasil = await response.json();

        if (hasil.status) {

            alert("✅ Surat berhasil disimpan!");

            document.getElementById("nomor").value = "";
            document.getElementById("tanggal").value = "";
            document.getElementById("pengirim").value = "";
            document.getElementById("perihal").value = "";
            document.getElementById("keterangan").value = "";

            if (jenis === "Surat Masuk") {

                window.location.href = "surat-masuk.html";

            } else {

                window.location.href = "surat-keluar.html";

            }

        } else {

            alert("❌ Gagal menyimpan data.");

        }

    } catch (err) {

        console.log(err);

        alert("❌ Tidak dapat terhubung ke Google Apps Script.");

    }

}