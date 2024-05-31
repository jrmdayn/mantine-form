import { Schema } from "@effect/schema";
import { Button, Chip, Fieldset, Group, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Array, Tuple } from "effect";
import { useRef } from "react";
// import { createPortal } from "react-dom";

const improvements = Schema.Literal(
  "communication",
  "motivation",
  "siteFacility",
  "techIssues",
  "siteStaff",
  "badSMO",
  "quality",
  "screeningOrEnrollment",
  "diversity",
  "budgetOrContracting"
);

const mapping: Record<typeof improvements.Type, { label: string }> = {
  communication: {
    label: "Communication",
  },
  motivation: {
    label: "Motivation",
  },
  siteFacility: {
    label: "Site facility",
  },
  techIssues: {
    label: "Tech issues",
  },
  siteStaff: {
    label: "Site staff",
  },
  badSMO: {
    label: "SMO/Outsourced provider not good",
  },
  quality: {
    label: "Quality concerns",
  },
  screeningOrEnrollment: {
    label: "Screening or enrollment",
  },
  diversity: {
    label: "Diversity",
  },
  budgetOrContracting: {
    label: "Budget & contracting",
  },
};

const getLabel = (key: typeof improvements.Type): string => mapping[key].label;

function Form() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      improvements: Array.makeBy(improvements.literals.length, () =>
        Tuple.make(false, "")
      ),
    },
  });

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const chips = form.getValues().improvements.map((_, idx) => (
    <Chip
      key={form.key(`improvements.${idx}.0`)}
      {...form.getInputProps(`improvements.${idx}.0`)}
    >
      {getLabel(improvements.literals[idx])}
    </Chip>
  ));
  const textAreas = form
    .getValues()
    .improvements.map(
      ([selected], idx) =>
        selected && (
          <Textarea
            key={form.key(`improvements.${idx}.1`)}
            {...form.getInputProps(`improvements.${idx}.1`)}
            label={getLabel(improvements.literals[idx])}
          />
        )
    );

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Fieldset
        variant="unstyled"
        styles={{ root: { display: "flex", gap: "8px", flexWrap: "wrap" } }}
        ref={ref1}
      >
        {chips}
      </Fieldset>
      <Fieldset
        variant="unstyled"
        styles={{
          root: {
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "24px",
          },
        }}
        ref={ref2}
      >
        {textAreas}
      </Fieldset>
      {/* {ref1.current && createPortal(chips, ref1.current)}
      {ref2.current && createPortal(textAreas, ref2.current)} */}
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export default Form;
