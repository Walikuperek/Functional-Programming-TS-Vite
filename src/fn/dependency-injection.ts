type Customer = {
  name: string;
  age: number;
}

export const dict: { [key: number]: Customer } = {
  1: {
    name: 'John',
    age: 30,
  },
  2: {
    name: 'Jane',
    age: 25,
  },
};

// Works but requires dict to run
export const getCustomerFromCache = (dict: { [key: number]: Customer }, customerId: number): Customer => dict[customerId]

// DI the dict in this function
export const getCustomerFromCache2 = (customerId: number): Customer => dict[customerId]
