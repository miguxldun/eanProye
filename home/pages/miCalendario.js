// Datos de eventos para noviembre
// Datos de eventos para octubre
const eventos = [
    { fecha: "miércoles, 1 de octubre de 2025", hora: "08:00", duracion: "01:59hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "Bogotá" },
    { fecha: "miércoles, 1 de octubre de 2025", hora: "10:00", duracion: "01:59hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "Bogotá" },
    { fecha: "miércoles, 1 de octubre de 2025", hora: "14:00", duracion: "01:59hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "Bogotá" },
    { fecha: "jueves, 2 de octubre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "Bogotá" },
    { fecha: "viernes, 3 de octubre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "Bogotá" },
    { fecha: "viernes, 3 de octubre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "Bogotá" },
    { fecha: "viernes, 3 de octubre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "Bogotá" },
    { fecha: "lunes, 6 de octubre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "Bogotá" },
    { fecha: "lunes, 6 de octubre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "Bogotá" },
    { fecha: "lunes, 6 de octubre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "Bogotá" },
    { fecha: "martes, 7 de octubre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "Bogotá" },
    { fecha: "miércoles, 8 de octubre de 2025", hora: "08:00", duracion: "01:59hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "Bogotá" },
    { fecha: "miércoles, 8 de octubre de 2025", hora: "10:00", duracion: "01:59hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "Bogotá" },
    { fecha: "miércoles, 8 de octubre de 2025", hora: "14:00", duracion: "01:59hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "Bogotá" },
    { fecha: "jueves, 9 de octubre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "Bogotá" },
    { fecha: "viernes, 10 de octubre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 10 de octubre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "viernes, 10 de octubre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "martes, 14 de octubre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 15 de octubre de 2025", hora: "08:00", duracion: "01:59hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 15 de octubre de 2025", hora: "10:00", duracion: "01:59hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "miércoles, 15 de octubre de 2025", hora: "14:00", duracion: "01:59hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "jueves, 16 de octubre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 17 de octubre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 17 de octubre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "viernes, 17 de octubre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "lunes, 20 de octubre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "lunes, 20 de octubre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "lunes, 20 de octubre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "martes, 21 de octubre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 22 de octubre de 2025", hora: "08:00", duracion: "01:59hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 22 de octubre de 2025", hora: "10:00", duracion: "01:59hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "miércoles, 22 de octubre de 2025", hora: "14:00", duracion: "01:59hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "jueves, 23 de octubre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 24 de octubre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 24 de octubre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "viernes, 24 de octubre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "lunes, 27 de octubre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "lunes, 27 de octubre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "lunes, 27 de octubre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "martes, 28 de octubre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 29 de octubre de 2025", hora: "08:00", duracion: "01:59hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 29 de octubre de 2025", hora: "10:00", duracion: "01:59hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "miércoles, 29 de octubre de 2025", hora: "14:00", duracion: "01:59hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "jueves, 30 de octubre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 31 de octubre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 31 de octubre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "viernes, 31 de octubre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" }
];

// (El resto del código permanece igual)


// Generar calendario para noviembre (con el primer día en jueves)
function generarCalendario() {
    const calendario = document.getElementById('calendario');
    
    // Definir el primer día de noviembre de 2024 (jueves)
    const primerDia = 4; // 4 representa jueves, ya que los días de la semana empiezan en domingo (0 = domingo)

    // Añadir los días vacíos antes del primer día del mes
    for (let i = 0; i < primerDia; i++) {
        const diaVacio = document.createElement('div');
        calendario.appendChild(diaVacio);  // Espacios vacíos antes del 1 de noviembre
    }

    // Añadir los días del mes de noviembre (del 1 al 30)
    for (let i = 1; i <= 30; i++) {
        const dia = document.createElement('div');
        dia.textContent = i;
        calendario.appendChild(dia);
    }
}

// Generar el horario detallado
function generarHorarioDetallado() {
    const detalleHorario = document.getElementById('detalle-horario');
    
    // Agrupar eventos por fecha
    const eventosPorFecha = eventos.reduce((acumulador, evento) => {
        if (!acumulador[evento.fecha]) {
            acumulador[evento.fecha] = [];
        }
        acumulador[evento.fecha].push(evento);
        return acumulador;
    }, {});
    
    // Crear elementos HTML para cada día con sus eventos
    for (const fecha in eventosPorFecha) {
        const diaDiv = document.createElement('div');
        diaDiv.classList.add('dia');
        
        const fechaTitulo = document.createElement('h5');
        fechaTitulo.innerText = fecha;
        diaDiv.appendChild(fechaTitulo);
        
        eventosPorFecha[fecha].forEach(evento => {
            const eventoDiv = document.createElement('div');
            eventoDiv.classList.add('evento');
            eventoDiv.innerHTML = ` 
                <span><strong>Hora:</strong> ${evento.hora}</span>
                <span><strong>Duración:</strong> ${evento.duracion}</span>
                <span><strong>Materia:</strong> ${evento.materia}</span>
                <span><strong>Ubicación:</strong> ${evento.ubicacion}</span>
            `;
            diaDiv.appendChild(eventoDiv);
        });
        
        detalleHorario.appendChild(diaDiv);
    }
}

// Inicializar calendario y horario detallado
document.addEventListener('DOMContentLoaded', () => {
    generarCalendario();
    generarHorarioDetallado();
});
