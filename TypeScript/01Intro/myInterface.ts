//loose form of class in JS is interface in TS
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
  getCoupon: (copies: number) => string;
}
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: 'admin' | 'superadmin' | 'manager';
}
const hitesth: Admin = {
  role: 'admin',
  githubToken: '123',
  email: 'Bikraj',
  userId: 1,
  dbId: 1,
  startTrail: () => {
    return 'Trail has started';
  },
  getCoupon: () => {
    return '';
  },
};

// Interface vs Types:
// 1. Interface can be used to describe objects, functions, arrays, classes
// 2. Interface can be extended
// 3. Interface can be implemented
// 4. Interface can be merged
// 5. Interface can be used to describe the shape of the object
