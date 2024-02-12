function add(numbers) {
  if (!numbers) return 0;
  if (typeof (numbers) !== "string")
    throw new Error("Invalid arg passed,please pass string only.");

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const delimiterIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterIndex);
    numbers = numbers.substring(delimiterIndex + 1);
  }

  numbers = numbers.replace(/\n/g, delimiter);
  const nums = numbers.split(delimiter).map((num) => parseInt(num));
  let sum = 0;
  let negatives = [];
  for (const num of nums) {
    if (num < 0) {
      negatives.push(num);
    }
    sum += num;
  }

  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }
  return sum;
}

module.exports = add;
