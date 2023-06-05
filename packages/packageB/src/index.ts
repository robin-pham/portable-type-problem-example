// to be reexported dep
export interface Bar {
  b: string;
}

export function unusedBar(): Bar {
  return {
    b: "hello",
  };
}

export type Foo = {
  hello: "world";
};

export interface FooCreator {
  create: () => Foo;
}

export function getFooCreator(): FooCreator {
  return { create: () => ({ hello: "world" }) };
}
