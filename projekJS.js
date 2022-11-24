alert('halo kamu!');
var nama = prompt('nama kamu dong : ');
var coba = true;
while(coba){
    coba = confirm(nama+' yakin mau tutup?');
    if(coba == true){
        coba = false
    }
    else{
        coba = true;
    }
}