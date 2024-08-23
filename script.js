let mhs = {
    name: "Daffa",
    age: 20,
    major: "TRPL",
    skils: ['Sysadmin', "OOP", "FIGMA"],
    mhsAktif:true,
    poor: true
}
// console.log('Mahasiswa boleh daftar : ', mhs.age > 17) // true

//if else block
// if (mhs.major == "TRMG") {
//     console.log(mhs.name + " adalah TRMG")
// } else if(mhs.major == "TRKJ"){
//     console.log(mhs.name + " adalah TRKJ")
// }else if(mhs.major == "TRPL"){
//     console.log(mhs.name + " adalah TRPL")
// }else{
//     console.log(mhs.name + " jurusan " + mhs.major)
// }

//ternary
// console.log(mhs.major == "TRPL" ? mhs.name + " jurusan TRPL" : mhs.name + " bukan TRPL");

// //switches
// switch (mhs.major) {
//     case "TRMG":
//         console.log(mhs.name + "Jurusan  TRMG")
//         break;
    
//     case "TRKJ":
//         console.log(mhs.name + "Jurusan TRKJ")
//         break;
        
//     case "TRPL":
//         console.log(mhs.name + "jurusan TRPL")
//         break;
//     default:
//         console.log("Bukan anak IDN");
//         break;
// }

// conditional function
// Kriteria: umur kurang dari 21, miskin, skill lebih dari 2
function cekKelulusan(peserta){
    let age = peserta.age;
    let poor = peserta.poor;
    let skillsLenght = peserta.skils;

    if(age < 21 && poor && skillsLenght.length > 2){
        console.log("Peserta lulus")
    }else if(age < 21 && poor){
        console.log("Peserta harus nonto yutub WPU dulu")
    }else{
        console.log("peserta tidak lulus")
    }
    
    // console.log(age, poor, skillsLenght)
} 
cekKelulusan(mhs)