const form = document.querySelector("#contact-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const botToken = "5871150169:AAH4plwn59dMwf0wvIISS_Oc5Jo-tx-rXFo";
  const chatId = "1329085028";

  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("Message sent successfully:", data);

      form.elements.name.value = "";
      form.elements.email.value = "";
      form.elements.message.value = "";
    })
    .catch(error => {
      console.error("Failed to send message:", error);
    });
});
window.addEventListener('load', function() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';
      });
