const message = `This is the simple code i made for you para ipaalam sayo na nagkita kami ni RENE sa panaginip, sabi nya ingat ka raw lagi. HAHAHAH joke lang\n\neto na seryoso na HAHAAH pero when you ever feel unattractive, i just want you to know that i could stare at you for hours and i still see you as the most beautiful girl i ever laid eyes on holycrapp HHAHHAH always remember na maganda ka kit, alam ko naman kasing mahiyain ka. so eto ngayon i'm boosting your confidence MWEHEHHE always choose to be happy ha, and wag magpapaka stress.\n\nAlways pray bussenggg\nand take care!  `;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
