class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyList {
  constructor() {
    this.nodeLenght = 0;
    this.head = null;
    this.tail = null;
  }

  addElement(value) {
    let node = new Node(value);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = node;
      this.tail = node;
      this.nodeLenght++;

      return node;
    }

    node.next = currentNode;
    this.head = node;
    this.nodeLenght++;

    return node;
  }
}

class Operations {
  constructor() {
    this.list = new SinglyList();
    this.array = [];
  }

  searchNodeAt(position) {
    let currentNode = this.list.head;
    let length = this.list.nodeLenght;
    let count = 1;

    if (length === 0 || position < 1 || position > length) {
      console.log('Error');
      return 0;
    }

    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode.data;
  }

  setElements(value) {
    this.array.push(value);
  }

  createList() {
    this.list.addElement(this.array[this.array.length - 1]);
  }

  writeList(output) {
    let aux = this.list.head;
    let newDiv = document.createElement('div');

    while (aux) {


      output.append(newDiv);
      aux = aux.next;
    }

  }

  writeElement(value, output) {
    let newDiv = document.createElement('div');

    newDiv.textContent = `Name: ${value.name} Surname: ${value.surname} Birth Day: ${value.data}
       Locality: ${value.locality} Average: ${value.average}`;

    output.append(newDiv);

  }

  searchStudentsByLocality(value, output) {
    let currentNode = this.list.head;
    output.textContent = '';

    while (currentNode) {
      if (currentNode.data.locality === value) {
        this.writeElement(currentNode.data, output);
      }
      currentNode = currentNode.next;
    }
  }

  searchStudentsByAverage(value, output) {
    let currentNode = this.list.head;
    output.textContent = '';

    while (currentNode) {
      if (currentNode.data.average === Number(value)) {
        this.writeElement(currentNode.data, output);
      }
      currentNode = currentNode.next;
    }
  }

  searchYoungestStudent(output) {
    let currentNode = this.list.head;
    output.textContent = '';
    let min = currentNode.data.data;
    let minNode = currentNode;

    while (currentNode.next) {
      if (currentNode.next.data.data < min) {
        min = currentNode.next.data.data;
        minNode = currentNode.next;
      }
      currentNode = currentNode.next;
    }
    this.writeElement(minNode.data, output);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector('#addElement');
  const nameInput = document.querySelector('#nameInput');
  const surnameInput = document.querySelector('#surnameInput');
  const localityInput = document.querySelector('#localityInput');
  const dateInput = document.querySelector('#dateInput');
  const averageInput = document.querySelector('#averageInput');
  const searchLocality = document.querySelector('#searchLocality');
  const searchByLocalityBtn = document.querySelector('#searchByLocalityBtn');
  const searchByLocalityOutput = document.querySelector('#searchByLocalityOutput');
  const searchAverage = document.querySelector('#searchAverage');
  const searchByAverageBtn = document.querySelector('#searchByAverageBtn');
  const searchByAverageOutput = document.querySelector('#searchByAverageOutput');
  const searchYoungestBtn = document.querySelector('#searchYoungestBtn');
  const searchYoungestOutput = document.querySelector('#searchYoungestOutput');
  const operation = new Operations();

  addBtn.addEventListener('click', () => {
    operation.setElements({
      name: nameInput.value,
      surname: surnameInput.value,
      data: dateInput.value,
      locality: localityInput.value,
      average: Number(averageInput.value)
    });

    operation.createList();
  });

  searchByLocalityBtn.addEventListener('click', () => {
    operation.searchStudentsByLocality(searchLocality.value, searchByLocalityOutput);
  });

  searchByAverageBtn.addEventListener('click', () => {
    operation.searchStudentsByAverage(searchAverage.value, searchByAverageOutput);
  });

  searchYoungestBtn.addEventListener('click', () => {
    operation.searchYoungestStudent(searchYoungestOutput);
  })
});

