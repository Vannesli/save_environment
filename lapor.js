function validateForm() {
    // Nama
    if (document.forms["form-lapor"]["nama-pelapor"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["form-lapor"]["nama"].focus();
        return false;
    }
    // Email
    if (document.forms["form-lapor"]["email-pelapor"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["form-lapor"]["email-pelapor"].focus();
        return false;
    }
    //nohp
    if (document.forms["form-lapor"]["nohp-pelapor"].value == "") {
        alert("Silahkan isi No HP anda");
        document.forms["form-lapor"]["nohp-pelapor"].focus();
        return false;
    }
    // lokasi kejadian
    if (document.forms["form-lapor"]["isilokasi"].value == "") {
        alert("Silahkan isi alamat lengkap lokasi kejadian");
        document.forms["form-lapor"]["isilokasi"].focus();
        return false;
    }
    // Jenis Kejadian
    if (document.forms["form-lapor"]["jenis-kejadian"].selectedIndex < 1) {
        alert("Silahkan pilih salah satu jenis kejadian");
        document.forms["form-lapor"]["jenis-kejadian"].focus();
        return false;
    }
    // Deskripsi Kejadian
    if (document.forms["form-lapor"]["isikejadian"].value == "") {
        alert("Silahkan isi deskripsi kejadian");
        document.forms["form-lapor"]["isikejadian"].focus();
        return false;
    }
    // Upload Bukti
    if (document.forms["form-lapor"]["inputbukti"].value == "") {
        alert("Berikan Bukti foto atau video terkait kejadian tersebut");
        document.forms["form-lapor"]["inputbukti"].focus();
        return false;
    }
}