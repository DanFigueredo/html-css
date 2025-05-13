const daysEL = document.getElementById("days")
const hoursEL = document.getElementById("hours")
const minsEL = document.getElementById("mins")
const secondsEL = document.getElementById("seconds")

// Data de destino (18/05/2024)
const targetDate = new Date("May 18, 2024 00:00:00").getTime();

// Função que atualiza o timer
function updateTimer() {
    // Data e hora atuais
    const now = new Date().getTime();
    
    // Diferença entre a data atual e a data de 18/05/2024
    const distance = now - targetDate;

    // Calculando os dias, horas, minutos e segundos passados
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibindo os valores no HTML
    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minsEL.innerHTML = mins;
    secondsEL.innerHTML = seconds;
}

// Atualiza o timer a cada 1 segundo
const timerInterval = setInterval(updateTimer, 1000);

// Chama a função uma vez para não esperar 1 segundo
updateTimer();







