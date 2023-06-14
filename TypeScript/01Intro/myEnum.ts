enum SeatChoice {
  AISLE,
  WINDOW,
  MIDDLE,
}

enum Ticket {
  ECONOMY,
  PREMIUM_ECONOMY,
  BUSINESS,
  FIRST_CLASS,
}
const mySeat: SeatChoice = SeatChoice.AISLE;

const seatType: Ticket = Ticket.BUSINESS;

console.log(mySeat, seatType);
