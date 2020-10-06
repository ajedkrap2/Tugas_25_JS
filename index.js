var arraii = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 ]
function tugas25(arrayYangInginDiproses){
  console.log("Sebelumnya : " + arrayYangInginDiproses);
  arraySort = arrayYangInginDiproses.sort();
  console.log("Ascending : "+ arraySort);
  arrayReverse = arraySort.reverse();
  console.log("Descending : "+ arrayReverse);
  arrayFilter = arrayReverse.filter(
    angka => {return angka > 10}
  );
  console.log("Filter > 10 :" + arrayFilter);
}

tugas25(arraii);
