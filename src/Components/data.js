const rows = [
    { id: 1, number: 1, seat: "A1", isSelected: false, isReserved: false },
    { id: 2, number: 2, seat: "A2", isSelected: false, isReserved: false },
    { id: 3, number: 3, seat: "A3", isSelected: false, isReserved: false },
    { id: 4, number: 4, seat: "A4", isSelected: false, isReserved: false },
    { id: 5, number: 5, seat: "A5", isSelected: false, isReserved: false },
    { id: 6, number: 6, seat: "A6", isSelected: false, isReserved: false },
    { id: 7, number: 7, seat: "A7", isSelected: false, isReserved: false },
    { id: 8, number: 8, seat: "A8", isSelected: false, isReserved: false },
    {
      id: 9,
      number: 0,
      seat: "A9",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 10,
      number: 0,
      seat: "A10",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 11,
      number: 0,
      seat: "A11",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 12,
      number: 0,
      seat: "A12",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    { id: 13, number: 9, seat: "A9", isSelected: false, isReserved: true },
    { id: 14, number: 10, seat: "A10", isSelected: false, isReserved: true },
    { id: 15, number: 11, seat: "A11", isSelected: false, isReserved: true },
    { id: 16, number: 12, seat: "A12", isSelected: false, isReserved: false },
    { id: 17, number: 13, seat: "A13", isSelected: false, isReserved: false },
    { id: 18, number: 14, seat: "A14", isSelected: false, isReserved: false },
    { id: 19, number: 15, seat: "A15", isSelected: false, isReserved: false },
    { id: 20, number: 16, seat: "A16", isSelected: false, isReserved: false },
    { id: 21, number: 1, seat: "B1", isSelected: false, isReserved: false },
    { id: 22, number: 2, seat: "B2", isSelected: false, isReserved: false },
    { id: 23, number: 3, seat: "B3", isSelected: false, isReserved: false },
    { id: 24, number: 4, seat: "B4", isSelected: false, isReserved: false },
    { id: 25, number: 5, seat: "B5", isSelected: false, isReserved: false },
    { id: 26, number: 6, seat: "B6", isSelected: false, isReserved: false },
    { id: 27, number: 7, seat: "B7", isSelected: false, isReserved: false },
    { id: 28, number: 8, seat: "B8", isSelected: false, isReserved: false },
    {
      id: 29,
      number: 0,
      seat: "A9",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 30,
      number: 0,
      seat: "A10",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 31,
      number: 0,
      seat: "A11",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 32,
      number: 0,
      seat: "A12",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    { id: 33, number: 9, seat: "B9", isSelected: false, isReserved: false },
    { id: 34, number: 10, seat: "B10", isSelected: false, isReserved: false },
    { id: 35, number: 11, seat: "B11", isSelected: false, isReserved: false },
    { id: 36, number: 12, seat: "B12", isSelected: false, isReserved: false },
    { id: 37, number: 13, seat: "B13", isSelected: false, isReserved: false },
    { id: 38, number: 14, seat: "B14", isSelected: false, isReserved: true },
    { id: 39, number: 15, seat: "B15", isSelected: false, isReserved: true },
    { id: 40, number: 16, seat: "B16", isSelected: false, isReserved: true },
    { id: 41, number: 1, seat: "C1", isSelected: false, isReserved: false },
    { id: 42, number: 2, seat: "C2", isSelected: false, isReserved: false },
    { id: 43, number: 3, seat: "C3", isSelected: false, isReserved: false },
    { id: 44, number: 4, seat: "C4", isSelected: false, isReserved: false },
    { id: 45, number: 5, seat: "C5", isSelected: false, isReserved: false },
    { id: 46, number: 6, seat: "C6", isSelected: false, isReserved: true },
    { id: 47, number: 7, seat: "C7", isSelected: false, isReserved: true },
    { id: 48, number: 8, seat: "C8", isSelected: false, isReserved: false },
    {
      id: 49,
      number: 0,
      seat: "A9",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 50,
      number: 0,
      seat: "A10",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 51,
      number: 0,
      seat: "A11",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 52,
      number: 0,
      seat: "A12",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    { id: 53, number: 9, seat: "C9", isSelected: false, isReserved: false },
    { id: 54, number: 10, seat: "C10", isSelected: false, isReserved: false },
    { id: 55, number: 11, seat: "C11", isSelected: false, isReserved: false },
    { id: 56, number: 12, seat: "C12", isSelected: false, isReserved: true },
    { id: 57, number: 13, seat: "C13", isSelected: false, isReserved: true },
    { id: 58, number: 14, seat: "C14", isSelected: false, isReserved: false },
    { id: 59, number: 15, seat: "C15", isSelected: false, isReserved: false },
    { id: 60, number: 16, seat: "C16", isSelected: false, isReserved: false },
    { id: 61, number: 1, seat: "D1", isSelected: false, isReserved: false },
    { id: 62, number: 2, seat: "D2", isSelected: false, isReserved: false },
    { id: 63, number: 3, seat: "D3", isSelected: false, isReserved: false },
    { id: 64, number: 4, seat: "D4", isSelected: false, isReserved: false },
    { id: 65, number: 5, seat: "D5", isSelected: false, isReserved: true },
    { id: 66, number: 6, seat: "D6", isSelected: false, isReserved: true },
    { id: 67, number: 7, seat: "D7", isSelected: false, isReserved: true },
    { id: 68, number: 8, seat: "D8", isSelected: false, isReserved: false },
    {
      id: 69,
      number: 0,
      seat: "A9",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 70,
      number: 0,
      seat: "A10",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 71,
      number: 0,
      seat: "A11",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 72,
      number: 0,
      seat: "A12",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    { id: 73, number: 9, seat: "D9", isSelected: false, isReserved: false },
    { id: 74, number: 10, seat: "D10", isSelected: false, isReserved: false },
    { id: 75, number: 11, seat: "D11", isSelected: false, isReserved: false },
    { id: 76, number: 12, seat: "D12", isSelected: false, isReserved: false },
    { id: 77, number: 13, seat: "D13", isSelected: false, isReserved: false },
    { id: 78, number: 14, seat: "D14", isSelected: false, isReserved: false },
    { id: 79, number: 15, seat: "D15", isSelected: false, isReserved: false },
    { id: 80, number: 16, seat: "D16", isSelected: false, isReserved: false },
  ];
  
  const rows2 = [
    { id: 81, number: 1, seat: "A1", isSelected: false, isReserved: false },
    { id: 82, number: 2, seat: "A2", isSelected: false, isReserved: false },
    { id: 83, number: 3, seat: "A3", isSelected: false, isReserved: false },
    { id: 84, number: 4, seat: "A4", isSelected: false, isReserved: false },
    { id: 85, number: 5, seat: "A5", isSelected: false, isReserved: false },
    { id: 86, number: 6, seat: "A6", isSelected: false, isReserved: false },
    { id: 87, number: 7, seat: "A7", isSelected: false, isReserved: false },
    { id: 88, number: 8, seat: "A8", isSelected: false, isReserved: false },
    {
      id: 89,
      number: 0,
      seat: "A9",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 90,
      number: 0,
      seat: "A10",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 91,
      number: 0,
      seat: "A11",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 92,
      number: 0,
      seat: "A12",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    { id: 93, number: 9, seat: "A9", isSelected: false, isReserved: false },
    { id: 94, number: 10, seat: "A10", isSelected: false, isReserved: false },
    { id: 95, number: 11, seat: "A11", isSelected: false, isReserved: true },
    { id: 96, number: 12, seat: "A12", isSelected: false, isReserved: true },
    { id: 97, number: 13, seat: "A13", isSelected: false, isReserved: true },
    { id: 98, number: 14, seat: "A14", isSelected: false, isReserved: false },
    { id: 99, number: 15, seat: "A15", isSelected: false, isReserved: false },
    { id: 100, number: 16, seat: "A16", isSelected: false, isReserved: false },
    { id: 101, number: 1, seat: "B1", isSelected: false, isReserved: false },
    { id: 102, number: 2, seat: "B2", isSelected: false, isReserved: false },
    { id: 103, number: 3, seat: "B3", isSelected: false, isReserved: false },
    { id: 104, number: 4, seat: "B4", isSelected: false, isReserved: false },
    { id: 105, number: 5, seat: "B5", isSelected: false, isReserved: false },
    { id: 106, number: 6, seat: "B6", isSelected: false, isReserved: false },
    { id: 107, number: 7, seat: "B7", isSelected: false, isReserved: false },
    { id: 108, number: 8, seat: "B8", isSelected: false, isReserved: false },
    {
      id: 109,
      number: 0,
      seat: "A9",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 110,
      number: 0,
      seat: "A10",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 111,
      number: 0,
      seat: "A11",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 112,
      number: 0,
      seat: "A12",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    { id: 113, number: 9, seat: "B9", isSelected: false, isReserved: false },
    { id: 114, number: 10, seat: "B10", isSelected: false, isReserved: false },
    { id: 115, number: 11, seat: "B11", isSelected: false, isReserved: false },
    { id: 116, number: 12, seat: "B12", isSelected: false, isReserved: false },
    { id: 117, number: 13, seat: "B13", isSelected: false, isReserved: false },
    { id: 118, number: 14, seat: "B14", isSelected: false, isReserved: false },
    { id: 119, number: 15, seat: "B15", isSelected: false, isReserved: false },
    { id: 120, number: 16, seat: "B16", isSelected: false, isReserved: true },
    { id: 121, number: 1, seat: "C1", isSelected: false, isReserved: true },
    { id: 122, number: 2, seat: "C2", isSelected: false, isReserved: true },
    { id: 123, number: 3, seat: "C3", isSelected: false, isReserved: true },
    { id: 124, number: 4, seat: "C4", isSelected: false, isReserved: false },
    { id: 125, number: 5, seat: "C5", isSelected: false, isReserved: false },
    { id: 126, number: 6, seat: "C6", isSelected: false, isReserved: true },
    { id: 127, number: 7, seat: "C7", isSelected: false, isReserved: true },
    { id: 128, number: 8, seat: "C8", isSelected: false, isReserved: false },
    {
      id: 129,
      number: 0,
      seat: "A9",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 130,
      number: 0,
      seat: "A10",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 131,
      number: 0,
      seat: "A11",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 132,
      number: 0,
      seat: "A12",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    { id: 133, number: 9, seat: "C9", isSelected: false, isReserved: false },
    { id: 134, number: 10, seat: "C10", isSelected: false, isReserved: false },
    { id: 135, number: 11, seat: "C11", isSelected: false, isReserved: false },
    { id: 136, number: 12, seat: "C12", isSelected: false, isReserved: false },
    { id: 137, number: 13, seat: "C13", isSelected: false, isReserved: false },
    { id: 138, number: 14, seat: "C14", isSelected: false, isReserved: false },
    { id: 139, number: 15, seat: "C15", isSelected: false, isReserved: false },
    { id: 140, number: 16, seat: "C16", isSelected: false, isReserved: false },
    { id: 141, number: 1, seat: "D1", isSelected: false, isReserved: true },
    { id: 142, number: 2, seat: "D2", isSelected: false, isReserved: true },
    { id: 143, number: 3, seat: "D3", isSelected: false, isReserved: false },
    { id: 144, number: 4, seat: "D4", isSelected: false, isReserved: false },
    { id: 145, number: 5, seat: "D5", isSelected: false, isReserved: false },
    { id: 146, number: 6, seat: "D6", isSelected: false, isReserved: false },
    { id: 147, number: 7, seat: "D7", isSelected: false, isReserved: false },
    { id: 148, number: 8, seat: "D8", isSelected: false, isReserved: false },
    {
      id: 149,
      number: 0,
      seat: "A9",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 150,
      number: 0,
      seat: "A10",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 151,
      number: 0,
      seat: "A11",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    {
      id: 152,
      number: 0,
      seat: "A12",
      isSelected: false,
      isReserved: false,
      disable: true,
    },
    { id: 153, number: 9, seat: "D9", isSelected: false, isReserved: false },
    { id: 154, number: 10, seat: "D10", isSelected: false, isReserved: false },
    { id: 155, number: 11, seat: "D11", isSelected: false, isReserved: false },
    { id: 156, number: 12, seat: "D12", isSelected: false, isReserved: false },
    { id: 157, number: 13, seat: "D13", isSelected: false, isReserved: true },
    { id: 158, number: 14, seat: "D14", isSelected: false, isReserved: true },
    { id: 159, number: 15, seat: "D15", isSelected: false, isReserved: true },
    { id: 160, number: 16, seat: "D16", isSelected: false, isReserved: false },
  ];
  
  export { rows, rows2 };