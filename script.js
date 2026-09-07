document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURACIÓN --
    const PIN_CORRECTO = "0609"; 
    
    const pantallaLogin = document.getElementById('pantalla-login');
    const pantallaBroma = document.getElementById('pantalla-broma');
    const pantallaPrincipal = document.getElementById('pantalla-principal');
    
    const pinInput = document.getElementById('pin-input');
    const btnVerificar = document.getElementById('btn-verificar');
    const mensajeError = document.getElementById('mensaje-error');
    
    const btnContinuar = document.getElementById('btn-continuar');
    const video = document.getElementById('bg-video');
    const audio = document.getElementById('bg-audio');

    const validarIngreso = () => {
        if (pinInput.value === PIN_CORRECTO) {
            // Si es correcto: Ocultar login, mostrar broma
            pantallaLogin.style.display = 'none';
            pantallaBroma.style.display = 'flex';
            
            // Iniciar temporizador de 4 segundos
            setTimeout(() => {
                btnContinuar.classList.add('mostrar-boton');
            }, 4000);
            
        } else {
            // Si es incorrecto: Mostrar error
            mensajeError.classList.add('mostrar-error');
            pinInput.value = "";
            pinInput.focus(); 
            
            // Ocultar el mensaje
            setTimeout(() => {
                mensajeError.classList.remove('mostrar-error');
            }, 2000);
        }
    };

    // Escuchar el clic en el botón de Verificar
    btnVerificar.addEventListener('click', validarIngreso);
    
    // Escuchar si presiona la tecla "Enter"
    pinInput.addEventListener('keypress', (evento) => {
        if (evento.key === 'Enter') {
            validarIngreso();
        }
    });
    
    // Restringir el cuadro para que solo acepte números
    pinInput.addEventListener('input', (evento) => {
        evento.target.value = evento.target.value.replace(/[^0-9]/g, '');
    });

    // FUNCION PASAR AL VIDEO
    btnContinuar.addEventListener('click', () => {
        pantallaBroma.style.display = 'none';
        pantallaPrincipal.style.display = 'block'; 
        
        video.play();
        audio.play();
    });
});