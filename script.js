//----------------------------------------MODERN JAVASCRIPT-------------------------------------------------

// 1. Arrow Funtions



// 1.Arrow Functions-----------------------------------------------------------------------------------------

    // ES5
    function selamlamaES5(){
        console.log("merhaba");
    }
    selamlamaES5();

    function toplamES5(a,b){
        return a+b;
    }
    var sonuc = toplamES5(3,7);
    console.log(sonuc);

    //ES6
    const selamlamaES6 = () => { console.log("merhaba"); }
    selamlamaES6(); 

    const toplamES6 = (a,b) => { return a + b ;}  // tek satırlık işlemler için süslü parantez ve return kullanılmayabilir.
    sonuc = toplamES6(3,7);
    console.log(sonuc);



// 2.Arrays------------------------------------------------------------------------------------------------

    const urunler =[
        {urunAdi: "iphone 11", fiyat: 12000},
        {urunAdi: "iphone 12", fiyat: 15000},
        {urunAdi: "iphone 13", fiyat: 18000},
        {urunAdi: "iphone 13 pro", fiyat: 22000}
    ];

    // ES5
    const sayilar = [1,5,7,3,2,67];
    const tekSayilarES5 = [];
    for(let sayi of sayilar){                       //for of döngüsü ES6
        if(sayi%2==1){
            tekSayilarES5.push(sayi);
        }
    }
    console.log(tekSayilarES5);

    // ES6
    const tekSayiKontrol = (sayi) => sayi % 2 == 1;
    const tekSayilarFilterES6 = sayilar.filter(tekSayiKontrol);   //tekSayiKontrol'ü fonksiyon olarak değil adres olarak gönderiyoruz. Filter true/false kontrolü ile adresleri diziye ekliyor.
    console.log(tekSayilarFilterES6);
    const tekSayilarMapES6 = sayilar.map(tekSayiKontrol);
    console.log(tekSayilarMapES6);

    const tumUrunler = urunler.map(urun => urun);
    console.log(tumUrunler);

    const urunFilter = urunler.filter(urun => urun.fiyat > 15000);
    console.log(urunFilter);

    const urunFind = urunler.find(urun => urun.fiyat >= 15000);  //Kritere uygun olan ilk ürünü getirir.
    console.log(urunFind);



// 3.Spread Operator--------------------------------------------------------------------------------------------

    const mesaj = ["Benim", "adım", "Cafer", "boyum", "1.10"];

    // ES5
    var mesajES5 = "";
    for(let x of mesaj){
        mesajES5 += x + " ";
    }
    console.log(mesajES5);

    // ES6
    console.log(...mesaj);

    const dizi1 = ["bir", "iki"];
    const dizi2 = ["üç", "dört"];
    const dizi3 = [...dizi1, ...dizi2, "beş", "altı", 7];
    console.log(dizi3);

    const diziA = [1,2,3];
    const diziB = diziA;           // referans copy
    const diziC = [...diziA];      // value copy

    //Rest Parameters
    const toplamRest = (...args) => {
        let toplam = 0;
        for(x of args){
            toplam += x;
        }
        return toplam;
    }

    console.log(toplamRest(3,5,7));
    console.log(toplamRest(3,5,7,50));


// 4.Destructuring--------------------------------------------------------------------------------------------

    // Array Destructuring
    let user = ["Doğuş", "Demir", "Esenyurt"];

        // ES5
        let firstNameES5 = user[0];
        let lastNameES5 = user[1];
        let adressES5 = user[2];
        console.log(firstNameES5, lastNameES5, adressES5);

        // ES6
        let [firstNameES6, lastNameES6, adresES6] = user;
        console.log(firstNameES6, lastNameES6, adresES6);


    // Object Destructuring
    let ceptelefonu = {
        marka: "Apple",
        model: "Iphone 14",
    }
    let {marka, model} = ceptelefonu;
    console.log(marka, model);



// 5.Maps--------------------------------------------------------------------------------------------------------
    const team = new Map();
    
    team.set(0, "Bahadır");
    team.set("Depo", "Doğuş");
    team.set(false, "Ayvaz");

    console.log(team.get(0));
    console.log(team.get("Depo"));
    console.log(team.get(false));

    let mapSonuc;
    mapSonuc = team.size;
    mapSonuc = team.has("Depo");
    console.log(mapSonuc);



// 6.Sets----------------------------------------------------------------------------------------------------------
    const sayilarSet = new Set();   //Dizilere benzer ancak aynı değerlerden en fazla bir adet tutar.

    sayilarSet.add(1);
    sayilarSet.add(2);
    sayilarSet.add(3);
    sayilarSet.add(3);
    sayilarSet.add("4");
    console.log(sayilarSet);



// 7.Class----------------------------------------------------------------------------------------------------------
    // function constructor
    function KisiES5(ad, meslek, dogumYili) {
        this.ad = ad;
        this.meslek = meslek;
        this.dogumYili = dogumYili;
    }

    KisiES5.prototype.yasHesapla = function() {
        let tarih = new Date().getFullYear();
        return tarih - this.dogumYili;
    }

    let emre = new KisiES5("emre yağcı", "öğrenci", 1990);
    let ahmet = new KisiES5("ahmet yılmaz", "öğretmen", 1985);

    console.log(emre.yasHesapla());
    console.log(ahmet.yasHesapla());
    
    // class
    class KisiES6 {
        constructor(ad, meslek, dogumYili) {
            this.ad = ad;
            this.meslek = meslek;
            this.dogumYili = dogumYili;
            console.log("nesne oluşturuldu.");
        }

        yasHesapla() {
            let tarih = new Date().getFullYear();
            return tarih - this.dogumYili;
        }
    }

    let kisi1 = new KisiES6("çınar turan","öğrenci",2017);
    let kisi2 = new KisiES6("ada bilgi","öğrenci",2012);

    console.log(kisi1.yasHesapla());
    console.log(kisi2.yasHesapla());