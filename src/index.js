module.exports = function toReadable(number) {
    let to19 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let aft20 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return "zero";
    }
    if (number <= 19) {
        return to19[number];
    }
    if (number < 100) {
        return (
            aft20[(number + "")[0]] +
            " " +
            to19[(number + "")[1]]
        ).trim();
    }
    if ((number + "")[1] === "1") {
        return (
            to19[(number + "")[0]] +
            " hundred " +
            to19[(number + "")[1] + (number + "")[2]]
        );
    }
    return (
        to19[(number + "")[0]] +
        " hundred " +
        aft20[(number + "")[1]] +
        " " +
        to19[(number + "")[2]]
    )
        .replace(/  /g, " ")
        .trim();
};
