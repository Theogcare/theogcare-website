function openBooking(phone, dept){
  let msg = "";

  if(dept === "ortho"){
    msg =
`Hello,

I would like to book an ORTHOPAEDIC appointment.

Patient Name:
Age:
Problem / Complaint:
Preferred Date:
Preferred Time:

Thank you.`;
  } else {
    msg =
`Hello,

I would like to book a GYNAECOLOGY appointment.

Patient Name:
Age:
Pregnancy related (Yes/No):
Problem / Complaint:
Preferred Date:
Preferred Time:

Thank you.`;
  }

  document.getElementById("callLink").href = "tel: +919749701817" + phone;
  document.getElementById("whatsappLink").href =
    "https://wa.me/message/XUQDK2BJXAP3O1?src=qr" + phone + "?text=" + encodeURIComponent(msg);

  document.getElementById("bookingModal").classList.remove("hidden");
}

function closeBooking(){
  document.getElementById("bookingModal").classList.add("hidden");
}

/* Google Translate */
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage:'en', includedLanguages:'bn', autoDisplay:false },
    'google_translate_element'
  );
}

function translateToBengali(){
  const select = document.querySelector('select.goog-te-combo');
  if(select){
    select.value = 'bn';
    select.dispatchEvent(new Event('change'));
  }
}
