/* eslint-disable @typescript-eslint/no-explicit-any */
import { AST, Schema } from "@effect/schema";
import { Function } from "effect";
import React from "react";
import * as mantine from "@mantine/core";

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

const registry: Map<symbol, mantine.MantineComponent<any>> = new Map([
  [ChipId, mantine.Chip],
  [CheckboxId, mantine.Checkbox],
  [TextareaId, mantine.Textarea],
  [TextInputId, mantine.TextInput],
]);
const lookup = (ast: AST.AST): React.FC | null => {
  const id = ast.annotations[ComponentId];
  if (typeof id === "symbol") {
    const value = registry.get(id);
    return value ?? null;
  }
  return null;
};

const make = (ast: AST.AST) => {
  const Component = lookup(ast);
  switch (ast._tag) {
    case "TypeLiteral": {
      const res: any = { Component };
      for (const prop of ast.propertySignatures) {
        res[prop.name] = make(prop.type);
      }
      return res;
    }
    default:
      return Component;
  }
};

const schema = Schema.Struct({
  a: Chip,
  b: Checkbox,
  c: Textarea,
  d: TextInput,
});
console.log(schema.ast);
const Components = make(schema.ast);
console.log(Components);

const Foo: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
    </div>
  );
};

export default Foo;
