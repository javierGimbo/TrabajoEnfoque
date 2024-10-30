document.addEventListener('DOMContentLoaded', function () {
    let selectedSize = null;

    // Maneja la selección de tallas
    document.querySelectorAll('.size-button').forEach(button => {
        button.addEventListener('click', function () {
            // Quita la selección anterior
            document.querySelectorAll('.size-button').forEach(btn => btn.classList.remove('active'));
            // Marca la nueva selección
            this.classList.add('active');
            // Guarda la talla seleccionada
            selectedSize = this.getAttribute('data-size');
        });
    });

    // Maneja el botón "Añadir al carrito"
    document.getElementById('addToCart').addEventListener('click', function () {
        if (selectedSize) {
            alert(`Producto agregado al carrito con la talla: ${selectedSize}`);
            // Aquí puedes añadir la lógica para agregar el producto al carrito
        } else {
            alert("Por favor, selecciona una talla antes de añadir al carrito.");
        }
    });
});
