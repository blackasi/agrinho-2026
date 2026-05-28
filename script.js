function comprar(produto){

    const numero = "5543996352471";

    const mensagem =
    `Olá! Tenho interesse no produto: ${produto}`;

    const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
}