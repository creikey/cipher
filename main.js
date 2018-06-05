var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z"]

function cipher() {
    var toCipher = document.getElementById("input").value;
    var toOutput = ""
    for (var i = 0; i < toCipher.length; i++) {
        var cur = alphabet.indexOf(toCipher.charAt(i));
        if (cur != -1) {
            toOutput += alphabet[(cur + 5) % alphabet.length];
        } else {
            toOutput += toCipher.charAt(i);
        }
    }
    document.getElementById("output").innerHTML = toOutput
}