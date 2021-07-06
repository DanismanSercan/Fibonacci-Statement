function fibonacci(x) {
    let fib = [1,2];
    if (x < 1){
        return "Invalid number"
    }else if (x <= 2) {
        return fib[x-1];
    }
   
    while (x > fib.length) {
        fib.push(fib[fib.length-2] + fib[fib.length-1]);
       
    }
    return fib[x-1];
}
console.log(fibonacci(prompt("Bir sayı giriniz:")));



/* let istenenFibonacciSayisi = prompt("Kaçıncı fibonacci sayısını öğrenmek istiyorsunuz?");
        let sayi1 = 0;
        let sayi2 = 1;
        let toplam;
        let fibonacciSayilari = [];
        for(let i = 0; i < istenenFibonacciSayisi; i++){
            toplam = sayi1 + sayi2;
            sayi1 = sayi2;
            sayi2 = toplam;
            fibonacciSayilari.push(toplam);
        }        
        console.log(`Fibonacci (${istenenFibonacciSayisi}) : ${toplam}`);
        console.log("Fibonacci Sayıları : " + fibonacciSayilari); */