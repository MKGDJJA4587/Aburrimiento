function enviar(opcion) {

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSftoRmngv9oKpkkYaW0DyyRxJCftlJMHo4YTN0Y3kXYS_DX3w/formResponse";

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "entry.431571875=" + encodeURIComponent(opcion)
    });

    alert("¡Anotado! Elegiste: " + opcion);

    // 🔥 IMPORTANTE: si quieres ir a página diferente según opción
    if (opcion === "Nada") {
        window.location.href = "comids/nada.html";
    }
}