for (let i = 0; i < 3; i++) {
  let str = "";
  for (let j = 0; j < 3; j++) {
    str = str + "* ";
  }
  console.log(str);
}

process.stdout.write("hello");
// this process.stdout.write() is used to console the output and cursor position on the same line
