// NO CHANGES NEED TO BE MADE TO THIS FILE
class Person {
    constructor(name) {
      this.id = `id_${Math.random().toString(36).substr(2)}`;
      this.name = name;
      this.walletBalance = 10;
      this.purchased = [];
    }
  }
  
  class Dropdown {
    constructor(elementId) {
      this.dropdown = document.getElementById(elementId);
    }
  
    // @param {string} label
    // @param {string} value
    addOption(label, id) {
      this.dropdown.innerHTML += `<option value="${id}">${label}</option>`;
    }
  
    // @param {string} value
    disableOption(id) {
      const option = this.dropdown.querySelector(`option[value="${id}"]`);
      if (option) {
        option.disabled = true;
        this.dropdown.selectedIndex = 0;
      }
    }
  
    getCurrentSelection() {
      return this.dropdown.value;
    }
  }
  
  class Table {
    constructor(elementId) {
      this.tableBody = document.querySelector(`#${elementId} tbody`);
    }
  
    // @param {Person} person
    addTableRow(person) {
      this.tableBody.innerHTML += `<tr id="${person.id}">
        <td class="name-col">${person.name}</td>
        <td class="balance-col">${person.walletBalance}</td>
        <td class="purchased-col">${person.purchased}</td>
      </tr>`;
    }
  
    // @param {Person} person
    updatePersonRow(person) {
      const balanceCol = document.querySelector(`#${person.id} .balance-col`);
      balanceCol.innerHTML = person.walletBalance;
      const purchasedCol = document.querySelector(`#${person.id} .purchased-col`);
      purchasedCol.innerHTML = person.purchased.join(', ');
    }
  }
  