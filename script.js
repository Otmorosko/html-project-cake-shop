document.addEventListener("DOMContentLoaded", function() {
    // Pobieramy referencje do elementów HTML za pomocą ich id
    var addButton = document.getElementById("addToCartButton");
    var productAddedMessage = document.getElementById("productAdded");
    var numberOfItemsInput = document.getElementById("numb");

    // Utworzenie pustej tablicy na produkty w koszyku
    var cartItems = [];

    // Obsługa kliknięcia przycisku "Dodaj do koszyka"
    addButton.addEventListener("click", function() {
        var numberOfItems = parseInt(numberOfItemsInput.value);

        if (!isNaN(numberOfItems) && numberOfItems > 0) {
            // Pobierz nazwę produktu i cenę (możesz je dodać do HTML)
            var productName = "3 BIT";
            var productPrice = 50.00;

            // Oblicz cenę za wybraną ilość produktów
            var totalPrice = productPrice * numberOfItems;

            // Dodaj produkt do koszyka
            var cartItem = {
                name: productName,
                price: totalPrice,
                quantity: numberOfItems
            };
            cartItems.push(cartItem);

            // Aktualizuj komunikat o dodaniu produktu do koszyka
            productAddedMessage.innerHTML = "Dodano " + numberOfItems + " sztuk " + productName + " do koszyka.";

            // Wyczyść pole input
            numberOfItemsInput.value = "";
        } else {
            // Wyświetl komunikat o błędzie, jeśli ilość jest nieprawidłowa
            productAddedMessage.innerHTML = "Proszę podać prawidłową ilość produktu.";
        }
    });
});