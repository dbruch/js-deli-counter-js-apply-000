function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var msg = '';
  if (line.length > 0) {
    msg = line[0];
    line = line.shift();
  } else {
    msg = 'There is nobody waiting to be served!';
  }
  return msg;
}