window.addEventListener('load', () => {
    const counterLabel = 'Na stronie przebywa obecnie: ';
    const max = 900;
    const min = 400;

    let peoples = Math.floor( ( Math.random() ) * (max - min) ) + min;

    document.getElementById('peopleCounter').innerHTML = counterLabel + peoples;

})