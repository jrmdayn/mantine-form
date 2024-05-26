import { Schema } from "@effect/schema";
import { Button, Chip, Fieldset, Group, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Array } from "effect";

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
    mode: "controlled",
    initialValues: {
      improvements: {
        keys: Array.makeBy(improvements.literals.length, () => false),
        values: Array.makeBy(improvements.literals.length, () => ""),
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Fieldset
        variant="unstyled"
        styles={{ root: { display: "flex", gap: "8px", flexWrap: "wrap" } }}
      >
        {improvements.literals.map((key, idx) => (
          <Chip
            key={form.key(`improvements.keys.${idx}`)}
            {...form.getInputProps(`improvements.keys.${idx}`)}
          >
            {getLabel(key)}
          </Chip>
        ))}
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
      >
        {form
          .getValues()
          .improvements.keys.map(
            (selected, idx) =>
              selected && (
                <Textarea
                  key={form.key(`improvements.values.${idx}`)}
                  {...form.getInputProps(`improvements.values.${idx}`)}
                  label={getLabel(improvements.literals[idx])}
                />
              )
          )}
      </Fieldset>

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export default Form;
