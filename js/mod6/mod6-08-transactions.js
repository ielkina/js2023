console.log('mod6-08-transactions');
import transactionHistory from '../data/transactionExport.js';
console.log(`transactionHistory`, transactionHistory);

//когда хотим работать со строками в названии указывать Markup
const makeTransactionTableRowMarkup = ({
  account,
  name,
  type,
  business,
  date,
  amount,
  id,
}) => {
  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
  </tr>`;
};
// console.log(`makeTransactionTableRowMarkup`, makeTransactionTableRowMarkup);
// console.log(makeTransactionTableRowMarkup(transactionHistory[0]));

const makeTransactionTableRows = transactionHistory.map(makeTransactionTableRowMarkup).join('')

console.log(makeTransactionTableRows);

const tableEl = document.querySelector('.js-transaction-table')

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows)