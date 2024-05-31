/* eslint-disable @typescript-eslint/no-explicit-any */
import { AST, Schema } from "@effect/schema";
import { Function, pipe } from "effect";
import React from "react";
import * as mantine from "@mantine/core";
import { createFormContext } from "@mantine/form";

mantine.Chip;

export const ComponentId = Symbol.for("@inato/component");

const annotate = Function.dual<
  (id: symbol) => <S extends Schema.Annotable.Any>(schema: S) => S,
  <S extends Schema.Annotable.Any>(schema: S, id: symbol) => S
>(2, (schema, id) => schema.annotations({ [ComponentId]: id }));

export const ChipId = Symbol.for("@inato/component/chip");
export const Chip = annotate(Schema.Boolean, ChipId);
export const CheckboxId = Symbol.for("@inato/component/checkbox");
export const Checkbox = annotate(Schema.Boolean, CheckboxId);
export const TextareaId = Symbol.for("@inato/component/textarea");
export const Textarea = annotate(Schema.String, TextareaId);
export const TextInputId = Symbol.for("@inato/component/textinput");
export const TextInput = annotate(Schema.String, TextInputId);

const [FormProvider, useFormContext, useForm] = createFormContext();

const Register: React.FC<{
  path: string;
  Component: React.FC;
  type?: "input" | "checkbox";
}> = ({ Component, path, type, ...props }) => {
  const form = useFormContext();
  return (
    <Component
      {...props}
      key={form.key(path)}
      {...form.getInputProps(path, { type })}
    />
  );
};

const registry: Map<symbol, mantine.MantineComponent<any>> = new Map(
  //@ts-expect-error "expected"
  [
    [ChipId, mantine.Chip],
    [CheckboxId, mantine.Checkbox],
    [TextareaId, mantine.Textarea],
    [TextInputId, mantine.TextInput],
  ]
);
const lookup = (ast: AST.AST): React.FC | null => {
  const id = ast.annotations[ComponentId];
  if (typeof id === "symbol") {
    const value = registry.get(id);
    return value ?? null;
  }
  return null;
};

const register =
  (path: string[], type?: "input" | "checkbox") =>
  (Component: React.FC | null): React.FC | null => {
    if (!Component) return null;
    const path_ = path.join(".");
    return ({ ...props }) => {
      return (
        <Register {...props} path={path_} Component={Component} type={type} />
      );
    };
  };

const make = (ast: AST.AST, path: string[] = []) => {
  switch (ast._tag) {
    case "TypeLiteral": {
      const res: any = {};
      for (const prop of ast.propertySignatures) {
        res[prop.name] = make(prop.type, path.concat(prop.name as string));
      }
      return res;
    }
    default: {
      const type = ast._tag === "BooleanKeyword" ? "checkbox" : "input";
      const Component = pipe(lookup(ast), register(path, type));
      return Component;
    }
  }
};

const schema = Schema.Struct({
  a: Chip,
  b: Checkbox,
  c: Textarea,
  d: TextInput,
});

const Components = make(schema.ast);

const Foo: React.FC = () => {
  const form = useForm({ mode: "uncontrolled" });
  return (
    <FormProvider form={form}>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
        })}
      >
        <div className="flex flex-col gap-s">
          <Components.a>chip</Components.a>
          <Components.b label="checkbox" />
          <Components.c
            label="Textarea label"
            description="Textarea description"
            placeholder="Textarea placeholder"
          />
          <Components.d
            label="TextInput label"
            description="TextInput description"
            placeholder="TextInput placeholder"
          />
          <mantine.Button type="submit">Submit</mantine.Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Foo;
