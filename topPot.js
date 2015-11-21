function Stores(storeLoc, minDonuts, maxDonuts, perPerson) {
  this.storeLoc = storeLoc;
  this.minDonuts = minDonuts;
  this.maxDonuts = maxDonuts;
  this.perPerson = perPerson;
  this.average = [];
}

Stores.prototype.render = function() {
  var total = 0;
  this.donutsPerHour();
  var cell = document.createElement('tr');
  cell.id = this.storeLoc;
  var table = document.getElementById('donutTable');
  cell.innerHTML = this.storeLoc;
  table.appendChild(cell);

  for (var i = 0; i < this.average.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = this.average[i];
    cell.appendChild(td);
    total += this.average[i];
  }

  var donutsPerDay = document.createElement('td');
  donutsPerDay.innerHTML = total;
  cell.appendChild(donutsPerDay);
};

Stores.prototype.donutsPerHour = function() {
  for (var i = 0; i < 12; i++) {
    this.average.push(Math.floor((Math.random() * (this.maxDonuts - this.minDonuts + 1) +
    this.minDonuts) * this.perPerson));
  }
};

document.getElementById('btn').addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var minCust = parseInt((document.getElementById('minCust').value), 10);
  var maxCust = parseInt((document.getElementById('maxCust').value), 10);
  var perCust = parseInt((document.getElementById('perCust').value), 10);
  var addloc = [name , minCust , maxCust , perCust];
  var newStore = new Stores(addloc[0], addloc[1], addloc[2], addloc[3]);

  if (name === '' || minCust === '' || maxCust === '' || perCust === '') {
    return false;
  } else {
    newStore.render();
    document.getElementById('addStore').reset();
  }
});

var down = new Stores('Downtown', 8, 43, 4.5);
var cap = new Stores('Capitol Hill', 4, 37, 2);
var south = new Stores('South Lake Union', 9, 23, 6.33);
var wedge = new Stores('Wedgewood', 2, 28, 1.25);
var ball = new Stores('Ballard', 8, 58, 3.75);

down.render();
cap.render();
south.render();
wedge.render();
ball.render();


document.getElementById('downtown').addEventListener('mouseover', function() {
  downAdr.style.display = 'block';
});
document.getElementById('capitol').addEventListener('mouseover', function() {
  capAdr.style.display = 'block';
});
document.getElementById('southLake').addEventListener('mouseover', function() {
  southAdr.style.display = 'block';
});
document.getElementById('wedgewood').addEventListener('mouseover', function() {
  wedgeAdr.style.display = 'block';
});
document.getElementById('ballard').addEventListener('mouseover', function() {
  ballardAdr.style.display = 'block';
});

document.getElementById('downtown').addEventListener('mouseout', function() {
  downAdr.style.display = 'none';
});
 document.getElementById('capitol').addEventListener('mouseout', function() {
  capAdr.style.display = 'none';
});
document.getElementById('southLake').addEventListener('mouseout', function() {
  southAdr.style.display = 'none';
});
document.getElementById('wedgewood').addEventListener('mouseout', function() {
  wedgeAdr.style.display = 'none';
});
document.getElementById('ballard').addEventListener('mouseout', function() {
  ballardAdr.style.display = 'none';
});
