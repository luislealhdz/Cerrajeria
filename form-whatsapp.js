const openWhatsapp = () =>{
    const username = document.getElementById("username").value

    const service = document.getElementById("service").value

    window.location.href = "https://wa.me/###############?text=Hola, mi nombre es " + username + ". Quisiera información sobre " + service
}
