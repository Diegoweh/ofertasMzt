document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    // Captura de valores del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validación simple
    if (!name || !email || !message) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Generación del mensaje para WhatsApp
    const phoneNumber = '526692609844'; // Número de WhatsApp sin símbolos
    const text = `Hola, soy ${name}.\nMi correo es: ${email}.\nComentario: ${message}`;

    // Codificar el mensaje para incluirlo en la URL
    const encodedText = encodeURIComponent(text);

    // URL de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Redirigir a la URL
    window.open(whatsappURL, '_blank');
  });