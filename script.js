// hexToAscii
function hexToAscii() {
  let hex = document.getElementById("inputvalue").value.trim();
  let ascii = "";
  let hex2 = hex.replace(/\s+/g, "");
  for (let i = 0; i < hex2.length; i += 2) {
    ascii += String.fromCharCode(parseInt(hex2.substr(i, 2), 16));
  }
  document.getElementById("output").innerText = ascii || "Invalid Hex Input!";

  console.log(ascii);
}
// asciiToHex

function asciiToHex() {
  let ascii = document
    .getElementById("inputvalue")
    .value.trim()
    .replace(/\s+/g, "");
  let hex = "";
  for (let i = 0; i < ascii.length; i++) {
    hex += ascii.charCodeAt(i).toString(16);
  }
  document.getElementById("output").innerText = hex.toUpperCase();
  console.log(hex);
}

// swapValue

function swapValue() {
  let input = document
    .getElementById("inputvalue")
    .value.trim()
    .replace(/\s+/g, "");
	console.log(input);
	console.log(input.length);
	
  if (input % 2 == 0) {
    let swapped = input.replace(/(.)(.)/g, "$2$1");
    document.getElementById("output").innerText = swapped.trim();
  } else {
    input += "F";
    let swapped = input.replace(/(.)(.)/g, "$2$1");
    document.getElementById("output").innerText = swapped.trim();
  }
}
// swapValueWithSpace
function swapValueWithSpace() {
  let input = document
    .getElementById("inputvalue")
    .value.trim()
    .replace(/\s+/g, "");
  if (input % 2 == 0) {
    let swapped = input.replace(/(.)(.)/g, "$2$1 ");
    document.getElementById("output").innerText = swapped.trim();
  } else {
    input += "F";
    let swapped = input.replace(/(.)(.)/g, "$2$1 ");
    document.getElementById("output").innerText = swapped.trim();
  }
}

// removeSpaces

function removeSpaces() {
  let input = document
    .getElementById("inputvalue")
    .value.trim()
    .replace(/\s+/g, "");
  document.getElementById("output").innerText = input;
}

function addSpaces() {
  let input = document
    .getElementById("inputvalue")
    .value.trim()
    .replace(/\s+/g, "");
  let spaced = input.match(/.{1,2}/g).join(" ");
  document.getElementById("output").innerText = spaced;
}
function accculculation() {
  let input = document
    .getElementById("inputvalue")
    .value.trim()
    .replace(/\s+/g, "");
  let regex = /^809/;
  let mathpro = Math.pow(2, input.charAt(input.length - 1));
  if (Number(input.length) === 15) {
    let acccal = mathpro.toString(16).toUpperCase();
    if (Number(acccal.length) < 4) {
      document.getElementById("output").innerText = acccal.padStart(4, 0);
    } else {
      document.getElementById("output").innerText = acccal;
    }
  }
  if (Number(input.length) === 18) {
    if (regex.test(input.replace(/(.)(.)/g, "$2$1"))) {
      let acccal = input.replace(/(.)(.)/g, "$2$1").slice(3);
      let Finalacccal = Math.pow(2, acccal.charAt(acccal.length - 1))
        .toString(16)
        .toUpperCase();
      if (Number(Finalacccal.length) < 4) {
        document.getElementById("output").innerText = Finalacccal.padStart(
          4,
          0
        );
      } else {
        document.getElementById("output").innerText = Finalacccal;
      }
    }
  }
  // // if (regex.test(input)) {
  // // }
  // if (Number(input.length) === 15) {
  //   console.log(mathPro.toString(16));
  //   // .toString(16).toUpperCase())
  // }
}
