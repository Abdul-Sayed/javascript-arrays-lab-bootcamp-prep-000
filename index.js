var kittens = ['Milo', 'Otis', 'Garfield'];

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function appendKitten(name) {
  return kittens.concat(name);
}
