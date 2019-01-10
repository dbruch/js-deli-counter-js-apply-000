function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var msg = '';
  if (line.length > 0) {
    msg = `Currently serving ${line[0]}.`;
    line = line.shift();
  } else {
    msg = 'There is nobody waiting to be served!';
  }
  return msg;
}

function currentLine(line) {
  var msg = '';
  if (line.length > 0) {
    
  }
  for (var i = 0; i < line.length; i++) {
    msg += `${i+1}. ${line[i]};
  }
}



