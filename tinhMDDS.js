const matdodanso = ({so_dan, dien_tich }) => {
    if(!(so_dan>=0 && so_dan <= 7000000000)) return 'INPUT KHONG HOP LE'
    if(dien_tich <=0 || dien_tich > 5999999) return  "INPUT KHONG HOP LE";
    const matdo = so_dan/dien_tich;
    if(matdo > 2000000) return "MAT DO DAN SO CUC CAO"
    else if(matdo >1000000 ) return  "MAT DO DAN SO CAO"
    else if(matdo > 1000) return "MAT DO DAN SO TRUNG BINH"
    else if(matdo > 0) return  "MAT DO DAN SO THAP"
    else return 'MAT DO DAN SO KHONG HOP LE'
}

