type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const defaultUser: User = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  return {
    ...defaultUser,
    ...initialValues,
  };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
