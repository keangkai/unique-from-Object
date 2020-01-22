
const bills = [
  { date: '2018-01-20', amount: '220', category: 'Electricity' },
  { date: '2018-01-20', amount: '20', category: 'Gas' },
  { date: '2018-01-20', amount: '20', category: 'Gas' },
  { date: '2018-01-20', amount: '20', category: 'gg' },
  { date: '2018-01-20', amount: '20', category: 'environment' },
  { date: '2018-02-20', amount: '120', category: 'Electricity' }
]

const categories = [...new Set(bills.map(bill => bill.category))]

console.log("categories :: ", categories)
