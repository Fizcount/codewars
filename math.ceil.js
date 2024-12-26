function getCentury(year) {
    if (year <= 0) {
      return "Year must be greater than 0";
    }
    // Membagi tahun dengan 100 dan membulatkan ke atas untuk menentukan abad
    return Math.ceil(year / 100);
  }
  re