import './sass/app.scss'

// Seleccionamos el formulario del HTML
const form = document.querySelector('.contact__form');

// Escuchamos cuando se hace click en "Send Message"
form.addEventListener('submit', (e) => {
  
  // Evitamos que la página se recargue
  e.preventDefault();
  
  // Seleccionamos todos los campos
  const fields = document.querySelectorAll('.contact__field');
  
  let isValid = true; // asumimos que todo está bien
  
  // Recorremos cada campo
  fields.forEach(field => {
    const input = field.querySelector('input, textarea');
    
    // Si el campo está vacío o el email es inválido
    if (!input.value.trim() || (input.type === 'email' && !input.value.includes('@'))) {
      field.classList.add('error'); // añade clase error → muestra el span rojo
      isValid = false;
    } else {
      field.classList.remove('error'); // quita el error si está bien
    }
  });
  
  // Si todo está bien, aquí iría el envío real
  if (isValid) {
    console.log('formulario correcto');
  }
});